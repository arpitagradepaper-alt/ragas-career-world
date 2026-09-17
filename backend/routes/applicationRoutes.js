const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const Application = require("../models/Application");
const Job = require("../models/Job");

const router = express.Router();



const uploadDir =
  "/tmp/ragas_uploads/applications";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});



const fileFilter = (req, file, cb) => {
  const allowedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
  ];

  const extension =
    path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    return cb(
      new Error(
        "Only PDF, DOC and DOCX files are allowed."
      )
    );
  }

  cb(null, true);
};


const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/",
  upload.single("resume"),
  async (req, res) => {
    try {
      const {
        jobId,
        jobTitle,
        fullName,
        email,
        phone,
        dateOfBirth,
        currentLocation,
        currentJobTitle,
        totalExperience,
        highestQualification,
        currentCompany,
        keySkills,
        preferredLocation,
        preferredCountry,
        expectedSalary,
        noticePeriod,
        coverLetter,
      } = req.body;

      let partnerId = null;
      let actualJobTitle = jobTitle;

      if (jobId && mongoose.Types.ObjectId.isValid(jobId)) {
        const job = await Job.findById(jobId);

        if (job) {
          partnerId = job.partnerId || null;
          actualJobTitle = job.jobTitle || actualJobTitle;
        }
      }

    
      if (
        !jobId ||
        !jobTitle ||
        !fullName ||
        !email ||
        !phone
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Job, name, email and phone are required.",
        });
      }

    
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Please upload your resume.",
        });
      }

     

      const application =
        new Application({
          partnerId,
          jobId,
          jobTitle: actualJobTitle,
          fullName,
          email,
          phone,
          dateOfBirth,
          currentLocation,
          currentJobTitle,
          totalExperience,
          highestQualification,
          currentCompany,
          keySkills,
          preferredLocation,
          preferredCountry,
          expectedSalary,
          noticePeriod,
          coverLetter,

          resumeFile:
            req.file.filename,

          status: "Applied",
        });

      await application.save();

      return res.status(201).json({
        success: true,
        message:
          "Application submitted successfully.",
        data: application,
      });
    } catch (error) {
      console.error(
        "CREATE APPLICATION ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          error.message ||
          "Unable to submit application.",
      });
    }
  }
);


router.get("/", async (req, res) => {
  try {
    const applications =
      await Application.find()
        .sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error(
      "GET APPLICATIONS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load applications.",
    });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const application =
      await Application.findById(
        req.params.id
      );

    if (!application) {
      return res.status(404).json({
        success: false,
        message:
          "Application not found.",
      });
    }

    return res.json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error(
      "GET SINGLE APPLICATION ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load application.",
    });
  }
});



router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Applied",
      "Under Review",
      "Shortlisted",
      "Interview",
      "Selected",
      "Rejected",
    ];

   
    if (!status) {
      return res.status(400).json({
        success: false,
        message:
          "Application status is required.",
      });
    }

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid application status.",
      });
    }

   

    const application =
      await Application.findByIdAndUpdate(
        req.params.id,
        {
          status,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!application) {
      return res.status(404).json({
        success: false,
        message:
          "Application not found.",
      });
    }

    console.log(
      `Application ${application._id} status updated to ${status}`
    );

    return res.json({
      success: true,
      message:
        "Application status updated successfully.",
      data: application,
    });
  } catch (error) {
    console.error(
      "UPDATE APPLICATION STATUS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update application status.",
    });
  }
});



router.get(
  "/resume/:filename",
  (req, res) => {
    try {
      const filename =
        path.basename(req.params.filename);

      const filePath =
        path.join(
          uploadDir,
          filename
        );

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({
          success: false,
          message:
            "Resume file not found.",
        });
      }

      res.sendFile(filePath);
    } catch (error) {
      console.error(
        "RESUME ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to open resume.",
      });
    }
  }
);


router.use(
  (error, req, res, next) => {
    console.error(
      "APPLICATION ROUTE ERROR:",
      error
    );

    if (
      error instanceof multer.MulterError
    ) {
      if (
        error.code ===
        "LIMIT_FILE_SIZE"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Resume must be 5 MB or smaller.",
        });
      }

      return res.status(400).json({
        success: false,
        message:
          error.message ||
          "Resume upload failed.",
      });
    }

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Application request failed.",
    });
  }
);

module.exports = router;