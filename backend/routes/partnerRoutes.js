const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const Partner = require("../models/Partner");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");
const { sendPartnerApprovalEmail } = require("../services/mailer");

const router = express.Router();

/* =========================================================
   UPLOAD DIRECTORY
========================================================= */

const uploadDir = path.join("/tmp", "ragas_uploads", "partners");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/* =========================================================
   MULTER
========================================================= */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
});

/* =========================================================
   GENERATE TEMPORARY PASSWORD
========================================================= */

function generateTemporaryPassword() {
  return crypto.randomBytes(6).toString("base64url") + "@R";
}

/* =========================================================
   PARTNER REGISTRATION
   PUBLIC
========================================================= */

router.post("/", upload.single("registrationCertificate"), async (req, res) => {
  try {
    const {
      companyName,
      partnerType,
      contactPerson,
      email,
      specialization,
      geography,
      phone,
      message,
      yearsInOperation,
      registrationNumber,
    } = req.body;

    if (!companyName || !partnerType || !contactPerson || !email) {
      return res.status(400).json({
        success: false,
        message: "Company name, partner type, contact person and email are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingPartner = await Partner.findOne({
      email: normalizedEmail,
    });

    if (existingPartner) {
      return res.status(409).json({
        success: false,
        message: "A partner registration with this email already exists.",
      });
    }

    const registrationCertificate = req.file
      ? req.file.path
      : null;

    const partner = await Partner.create({
      companyName: companyName.trim(),
      partnerType: partnerType.trim(),
      contactPerson: contactPerson.trim(),
      email: normalizedEmail,
      specialization: specialization?.trim() || "",
      geography: geography?.trim() || "",
      phone: phone?.trim() || "",
      message: message?.trim() || "",
      yearsInOperation: yearsInOperation?.trim() || "",
      registrationNumber: registrationNumber?.trim() || "",
      registrationCertificate,
      status: "Pending",
      accountCreated: false,
    });

    return res.status(201).json({
      success: true,
      message:
        "Partner registration submitted successfully. Please wait for admin approval.",
      partner,
    });
  } catch (error) {
    console.error("Partner registration error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit partner registration.",
    });
  }
});

/* =========================================================
   GET ALL PARTNERS
   ADMIN ONLY
========================================================= */

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const partners = await Partner.find().sort({
        createdAt: -1,
      });

      return res.status(200).json({
        success: true,
        partners,
      });
    } catch (error) {
      console.error("Get partners error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch partners.",
      });
    }
  }
);

/* =========================================================
   GET SINGLE PARTNER
   ADMIN ONLY
========================================================= */

router.get(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);

      if (!partner) {
        return res.status(404).json({
          success: false,
          message: "Partner not found.",
        });
      }

      return res.status(200).json({
        success: true,
        partner,
      });
    } catch (error) {
      console.error("Get partner error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch partner.",
      });
    }
  }
);

/* =========================================================
   APPROVE PARTNER
   ADMIN ONLY

   FLOW:
   Pending
      ↓
   Admin Approves
      ↓
   Generate Password
      ↓
   Hash Password
      ↓
   Save Account
      ↓
   Send Login Email
      ↓
   Verified
========================================================= */

router.patch(
  "/:id/approve",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);

      if (!partner) {
        return res.status(404).json({
          success: false,
          message: "Partner not found.",
        });
      }

      if (partner.status === "Rejected") {
        return res.status(400).json({
          success: false,
          message: "A rejected partner cannot be approved directly.",
        });
      }

      /* -----------------------------------------
         ALREADY APPROVED
      ----------------------------------------- */

      if (
        partner.status === "Verified" &&
        partner.accountCreated === true
      ) {
        return res.status(400).json({
          success: false,
          message: "This partner is already approved.",
        });
      }

      /* -----------------------------------------
         GENERATE TEMP PASSWORD
      ----------------------------------------- */

      const temporaryPassword = generateTemporaryPassword();

      /* -----------------------------------------
         HASH PASSWORD
      ----------------------------------------- */

      const passwordHash = await bcrypt.hash(
        temporaryPassword,
        12
      );

      /* -----------------------------------------
         UPDATE PARTNER
      ----------------------------------------- */

      partner.status = "Verified";
      partner.passwordHash = passwordHash;
      partner.accountCreated = true;
      partner.accountCreatedAt = new Date();

      await partner.save();

      /* -----------------------------------------
         SEND EMAIL
      ----------------------------------------- */

      try {
        await sendPartnerApprovalEmail({
          email: partner.email,
          companyName: partner.companyName,
          contactPerson: partner.contactPerson,
          temporaryPassword,
        });
      } catch (emailError) {
        console.error(
          "Partner approval email error:",
          emailError
        );

        return res.status(500).json({
          success: false,
          message:
            "Partner was approved, but the login email could not be sent.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Partner approved successfully and login credentials have been sent to the registered email.",
        partner: {
          id: partner._id,
          companyName: partner.companyName,
          email: partner.email,
          status: partner.status,
          accountCreated: partner.accountCreated,
        },
      });
    } catch (error) {
      console.error("Approve partner error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to approve partner.",
      });
    }
  }
);

/* =========================================================
   REJECT PARTNER
   ADMIN ONLY
========================================================= */

router.patch(
  "/:id/reject",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);

      if (!partner) {
        return res.status(404).json({
          success: false,
          message: "Partner not found.",
        });
      }

      partner.status = "Rejected";

      await partner.save();

      return res.status(200).json({
        success: true,
        message: "Partner rejected successfully.",
        partner,
      });
    } catch (error) {
      console.error("Reject partner error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to reject partner.",
      });
    }
  }
);

module.exports = router;