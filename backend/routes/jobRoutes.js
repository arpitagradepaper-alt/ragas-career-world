const express = require("express");
const mongoose = require("mongoose");
const Job = require("../models/Job");

const router = express.Router();


// =====================================================
// POST - CREATE JOB
// =====================================================
// New jobs always start as Pending.
// Admin must approve them before they appear publicly.
// =====================================================

router.post("/", async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      jobType,
      category,
      experience,
      qualification,
      location,
      country,
      salary,
      skills,
      description,
      requirements,
      contactEmail,
      contactPhone,
      openings,
    } = req.body || {};

    // Required fields
    if (
      !companyName ||
      !jobTitle ||
      !jobType ||
      !location ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Company name, job title, job type, location and description are required.",
      });
    }

    const job = new Job({
      companyName,
      jobTitle,
      jobType,
      category,
      experience,
      qualification,
      location,
      country,
      salary,
      skills,
      description,
      requirements,
      contactEmail,
      contactPhone,
      openings,

      // Every new job requires admin approval
      status: "Pending",
    });

    await job.save();

    return res.status(201).json({
      success: true,
      message:
        "Job posted successfully and sent for admin approval.",
      data: job,
    });
  } catch (error) {
    console.error("Job posting error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});


// =====================================================
// GET - PUBLIC APPROVED JOBS
// =====================================================
// Current Openings uses this API.
// Only Approved jobs are visible publicly.
// =====================================================

router.get("/", async (req, res) => {
  try {
    const {
      keyword = "",
      location = "",
      industry = "",
    } = req.query;

    const filters = [
      {
        status: "Approved",
      },
    ];


    // -----------------------------------------------
    // KEYWORD SEARCH
    // -----------------------------------------------

    if (keyword.trim()) {
      const search = keyword.trim();

      filters.push({
        $or: [
          {
            jobTitle: {
              $regex: search,
              $options: "i",
            },
          },
          {
            category: {
              $regex: search,
              $options: "i",
            },
          },
          {
            skills: {
              $regex: search,
              $options: "i",
            },
          },
          {
            description: {
              $regex: search,
              $options: "i",
            },
          },
          {
            companyName: {
              $regex: search,
              $options: "i",
            },
          },
        ],
      });
    }


    // -----------------------------------------------
    // LOCATION SEARCH
    // -----------------------------------------------

    if (location.trim()) {
      const searchLocation = location.trim();

      filters.push({
        $or: [
          {
            location: {
              $regex: searchLocation,
              $options: "i",
            },
          },
          {
            country: {
              $regex: searchLocation,
              $options: "i",
            },
          },
        ],
      });
    }


    // -----------------------------------------------
    // INDUSTRY SEARCH
    // -----------------------------------------------

    if (industry.trim()) {
      filters.push({
        category: {
          $regex: industry.trim(),
          $options: "i",
        },
      });
    }


    const jobs = await Job.find({
      $and: filters,
    }).sort({
      createdAt: -1,
    });


    return res.json({
      success: true,
      count: jobs.length,
      data: jobs,
    });

  } catch (error) {
    console.error("Search jobs error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to search jobs.",
    });
  }
});


// =====================================================
// ADMIN - GET ALL JOBS
// =====================================================
// Admin sees:
// Pending
// Approved
// Rejected
// Closed
//
// IMPORTANT:
// This route MUST come before /:id
// =====================================================

router.get("/admin/all", async (req, res) => {
  try {
    const jobs = await Job.find({})
      .sort({
        createdAt: -1,
      });


    return res.json({
      success: true,
      count: jobs.length,
      data: jobs,
    });

  } catch (error) {
    console.error(
      "Admin fetch all jobs error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch all jobs.",
    });
  }
});


// =====================================================
// ADMIN - GET SINGLE JOB
// =====================================================
// Admin can see ANY status.
// =====================================================

router.get("/admin/:id", async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID.",
      });
    }


    const job = await Job.findById(id);


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found.",
      });
    }


    return res.json({
      success: true,
      data: job,
    });

  } catch (error) {
    console.error(
      "Admin fetch job error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch job.",
    });
  }
});


// =====================================================
// ADMIN - UPDATE JOB STATUS
// =====================================================
// PATCH /api/jobs/:id/status
//
// Body:
//
// {
//   "status": "Approved"
// }
//
// Allowed:
//
// Pending
// Approved
// Rejected
// Closed
// =====================================================

router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body || {};


    // -----------------------------------------------
    // VALIDATE ID
    // -----------------------------------------------

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID.",
      });
    }


    // -----------------------------------------------
    // VALIDATE STATUS
    // -----------------------------------------------

    const allowedStatuses = [
      "Pending",
      "Approved",
      "Rejected",
      "Closed",
    ];


    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid status. Allowed values are Pending, Approved, Rejected and Closed.",
      });
    }


    // -----------------------------------------------
    // FIND JOB
    // -----------------------------------------------

    const job = await Job.findById(id);


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found.",
      });
    }


    // -----------------------------------------------
    // UPDATE STATUS
    // -----------------------------------------------

    job.status = status;

    await job.save();


    return res.json({
      success: true,
      message: `Job status updated to ${status}.`,
      data: job,
    });

  } catch (error) {
    console.error(
      "Job status update error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update job status.",
    });
  }
});


// =====================================================
// GET - SINGLE PUBLIC JOB
// =====================================================
// Only Approved jobs can be viewed publicly.
// =====================================================

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID.",
      });
    }


    const job = await Job.findOne({
      _id: id,
      status: "Approved",
    });


    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found.",
      });
    }


    return res.json({
      success: true,
      data: job,
    });

  } catch (error) {
    console.error(
      "Fetch public job error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch job.",
    });
  }
});


module.exports = router;