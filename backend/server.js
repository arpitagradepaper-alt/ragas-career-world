
const dns = require("dns");

dns.setServers(["8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const contactRoutes = require("./routes/contactRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const employerRoutes = require("./routes/employerRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const chatbotLogRoutes = require("./routes/chatbotLogRoutes");


const userAuthRoutes = require("./routes/userAuthRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const partnerAuthRoutes = require("./routes/partnerAuthRoutes");

const app = express();


app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/contact", contactRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/employers", employerRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/chatbot-logs", chatbotLogRoutes);


app.use("/api/auth/user", userAuthRoutes);


app.use("/api/auth/admin", adminAuthRoutes);
app.use("/api/auth/partner", partnerAuthRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RAGAS CAREER WORLD Backend is running!",
  });
});

// ==============================
// HEALTH CHECK
// ==============================
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy.",
  });
});

// ==============================
// GLOBAL ERROR HANDLER
// ==============================
app.use((error, req, res, next) => {
  console.error("GLOBAL ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message || "Server error.",
  });
});

// ==============================
// MONGODB CONNECTION
// ==============================
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file.");
  process.exit(1);
}

console.log("Connecting to MongoDB...");

mongoose
  .connect(MONGO_URI, {
    family: 4,
    tls: true,
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
    socketTimeoutMS: 20000,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("");
    console.error("========== MONGODB CONNECTION ERROR ==========");
    console.error("Name:", error.name);
    console.error("Message:", error.message);

    if (error.reason) {
      console.error("Reason:", error.reason);
    }

    if (error.code) {
      console.error("Code:", error.code);
    }

    console.error("==============================================");
    console.error("");

    process.exit(1);
  });
