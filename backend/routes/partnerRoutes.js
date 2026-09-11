const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Partner = require("../models/Partner");

const router = express.Router();



const uploadDir = "C:\\ragas_uploads\\partners";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    const extension = path.extname(file.originalname);

    cb(null, uniqueName + extension);
  },
});



const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const extension = path
      .extname(file.originalname)
      .toLowerCase();

    if (allowedTypes.includes(extension)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only PDF, DOC and DOCX files are allowed."
        )
      );
    }
  },
});



router.post(
  "/",
  upload.single("registrationCertificate"),
  async (req, res) => {
    try {
      console.log("Partner registration request received");

      console.log("Partner body:", req.body);

      const {
        companyName,
        partnerType,
        yearsInOperation,
        registrationNumber,
        contactPerson,
        email,
        specialization,
        geography,
        phone,
      } = req.body || {};

     

      if (
        !companyName ||
        !partnerType ||
        !contactPerson ||
        !email
      ) {
       
        if (req.file?.path) {
          fs.unlink(req.file.path, () => {});
        }

        return res.status(400).json({
          success: false,
          message:
            "Company name, partner type, contact person and email are required.",
        });
      }

  
      const partner = new Partner({
        companyName,
        partnerType,
        contactPerson,
        email,
        specialization,
        geography,
        phone,

        yearsInOperation,
        registrationNumber,

       
        registrationCertificate:
          req.file?.filename || null,
      });

      await partner.save();

      console.log(
        "Partner saved to MongoDB:",
        partner._id
      );

      return res.status(201).json({
        success: true,
        message:
          "Partner registered successfully!",
        data: partner,
      });
    } catch (error) {
      console.error(
        "Partner registration error:",
        error
      );

    
      if (req.file?.path) {
        fs.unlink(req.file.path, (unlinkError) => {
          if (unlinkError) {
            console.error(
              "Partner file cleanup error:",
              unlinkError
            );
          }
        });
      }

      return res.status(500).json({
        success: false,
        message:
          error.message ||
          "Server error. Please try again.",
      });
    }
  }
);



router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: partners,
    });
  } catch (error) {
    console.error(
      "Fetch partners error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch partners.",
    });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const partner =
      await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found.",
      });
    }

    res.json({
      success: true,
      data: partner,
    });
  } catch (error) {
    console.error(
      "Fetch partner error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch partner.",
    });
  }
});

module.exports = router;