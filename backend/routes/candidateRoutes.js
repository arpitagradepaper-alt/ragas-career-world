const express = require("express");
const mongoose = require("mongoose");
const Candidate = require("../models/Candidate");

const router = express.Router();


// =========================================
// REGISTER CANDIDATE
// =========================================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      qualification,
      experience,
      skills,
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required.",
      });
    }

    const candidate = new Candidate({
      name,
      email,
      phone,
      location,
      qualification,
      experience,
      skills,
    });

    await candidate.save();

    res.status(201).json({
      success: true,
      message: "Candidate registered successfully!",
      data: candidate,
    });

  } catch (error) {
    console.error(
      "Candidate registration error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});


// =========================================
// GET ALL CANDIDATES
// =========================================

router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate
      .find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: candidates,
    });

  } catch (error) {
    console.error(
      "Fetch candidates error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to fetch candidates.",
    });
  }
});


// =========================================
// GET SINGLE CANDIDATE
// =========================================

router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    // Check MongoDB ObjectId
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

    res.json({
      success: true,
      data: candidate,
    });

  } catch (error) {
    console.error(
      "Fetch candidate details error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to fetch candidate details.",
    });
  }
});


module.exports = router;