const express = require("express");
const mongoose = require("mongoose");
const Candidate = require("../models/Candidate");

const router = express.Router();

// =====================================================
// CREATE / UPDATE CANDIDATE PROFILE
// =====================================================
// This route is useful when an existing logged-in user
// wants to complete or update their candidate profile.
// =====================================================

router.post("/", async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      phone,
      location,
      qualification,
      experience,
      skills,
    } = req.body || {};

    if (!userId || !name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "User ID, name, email and phone are required.",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Prevent duplicate candidate profiles
    const existingCandidate = await Candidate.findOne({
      userId,
    });

    if (existingCandidate) {
      return res.status(200).json({
        success: true,
        message: "Candidate profile already exists.",
        data: existingCandidate,
      });
    }

    const candidate = await Candidate.create({
      userId,
      name: name.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      location: location || "",
      qualification: qualification || "",
      experience: experience || "",
      skills: skills || "",
    });

    return res.status(201).json({
      success: true,
      message: "Candidate profile created successfully.",
      data: candidate,
    });
  } catch (error) {
    console.error("Candidate creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});

// =====================================================
// GET ALL CANDIDATES
// =====================================================

router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find({})
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: candidates.length,
      data: candidates,
    });
  } catch (error) {
    console.error("Fetch candidates error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch candidates.",
    });
  }
});

// =====================================================
// GET SINGLE CANDIDATE
// =====================================================

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid candidate ID.",
      });
    }

    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    console.error("Fetch candidate details error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch candidate details.",
    });
  }
});

// =====================================================
// UPDATE CANDIDATE PROFILE
// =====================================================

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid candidate ID.",
      });
    }

    const allowedFields = [
      "name",
      "email",
      "phone",
      "location",
      "qualification",
      "experience",
      "skills",
      "resume",
      "status",
    ];

    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    if (updateData.email) {
      updateData.email = updateData.email.toLowerCase().trim();
    }

    const candidate = await Candidate.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate updated successfully.",
      data: candidate,
    });
  } catch (error) {
    console.error("Update candidate error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update candidate.",
    });
  }
});

module.exports = router;