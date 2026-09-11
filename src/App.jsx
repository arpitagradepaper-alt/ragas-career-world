import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==========================================
// PUBLIC COMPONENTS
// ==========================================

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";

// ==========================================
// PUBLIC PAGES
// ==========================================

import { Home } from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import InternationalJobs from "./pages/InternationalJobs.jsx";
import DomesticJobs from "./pages/DomesticJobs.jsx";
import Industries from "./pages/Industries.jsx";
import CurrentOpenings from "./pages/CurrentOpenings.jsx";
import Employers from "./pages/Employers.jsx";
import JobSeekers from "./pages/JobSeekers.jsx";
import UploadResume from "./pages/UploadResume.jsx";
import PostAJob from "./pages/PostAJob.jsx";
import PartnerWithUs from "./pages/PartnerWithUs.jsx";
import RecruitmentProcess from "./pages/RecruitmentProcess.jsx";
import VisaSupport from "./pages/VisaSupport.jsx";
import Blog from "./pages/Blog.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import JobApplication from "./pages/JobApplication.jsx";
import EmployerRegistration from "./pages/EmployerRegistration.jsx";

// ==========================================
// ADMIN
// ==========================================

import AdminLayout from "./admin/AdminLayout.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";

import Dashboard from "./admin/Dashboard.jsx";

import ChatbotLogs from "./admin/ChatbotLogs.jsx";
import ChatbotLogDetails from "./admin/ChatbotLogDetails.jsx";

import Candidates from "./admin/Candidates.jsx";
import CandidateDetails from "./admin/CandidateDetails.jsx";
import AddCandidate from "./admin/AddCandidate.jsx";

import EmployersAdmin from "./admin/Employers.jsx";
import EmployerDetails from "./admin/EmployerDetails.jsx";

import Jobs from "./admin/Jobs.jsx";
import JobDetails from "./admin/JobDetails.jsx";

import Resumes from "./admin/Resumes.jsx";
import ResumeDetails from "./admin/ResumeDetails.jsx";

import Partners from "./admin/Partners.jsx";

import Applications from "./admin/Applications.jsx";
import ApplicationDetails from "./admin/ApplicationDetails.jsx";

import ContactMessages from "./admin/ContactMessages.jsx";
import ContactMessageDetails from "./admin/ContactMessageDetails.jsx";

// ==========================================
// PUBLIC WEBSITE
// ==========================================

function PublicWebsite() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* INTERNATIONAL JOBS */}
        <Route
          path="/international-jobs"
          element={<InternationalJobs />}
        />

        {/* DOMESTIC JOBS */}
        <Route
          path="/domestic-jobs"
          element={<DomesticJobs />}
        />

        {/* INDUSTRIES */}
        <Route
          path="/industries"
          element={<Industries />}
        />

        {/* CURRENT OPENINGS */}
        <Route
          path="/current-openings"
          element={<CurrentOpenings />}
        />

        {/* EMPLOYERS */}
        <Route
          path="/employers"
          element={<Employers />}
        />

        {/* JOB SEEKERS */}
        <Route
          path="/job-seekers"
          element={<JobSeekers />}
        />

        {/* UPLOAD RESUME */}
        <Route
          path="/upload-resume"
          element={<UploadResume />}
        />

        {/* POST A JOB */}
        <Route
          path="/post-a-job"
          element={<PostAJob />}
        />

        {/* PARTNER WITH US */}
        <Route
          path="/partner-with-us"
          element={<PartnerWithUs />}
        />

        {/* RECRUITMENT PROCESS */}
        <Route
          path="/recruitment-process"
          element={<RecruitmentProcess />}
        />

        {/* VISA SUPPORT */}
        <Route
          path="/visa-immigration-support"
          element={<VisaSupport />}
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* TESTIMONIALS */}
        <Route
          path="/testimonials"
          element={<Testimonials />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={<Careers />}
        />

        {/* JOB APPLICATION */}
        <Route
          path="/apply/:jobId"
          element={<JobApplication />}
        />

        {/* EMPLOYER REGISTRATION */}
        <Route
          path="/employer-registration"
          element={<EmployerRegistration />}
        />

        {/* FOOTER */}
        <Route
          path="/footer"
          element={
            <div style={{ minHeight: "100vh" }}>
              <Footer />
            </div>
          }
        />

        {/* PUBLIC FALLBACK */}
        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

      <Chatbot />

      <Footer />
    </>
  );
}

// ==========================================
// MAIN APP
// ==========================================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ======================================
            ADMIN LOGIN
        ====================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ======================================
            ADMIN PANEL
        ====================================== */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >

          {/* ADMIN DASHBOARD */}
          <Route
            index
            element={<Dashboard />}
          />


          {/* ====================================
              CHATBOT
          ==================================== */}

          <Route
            path="chatbot-logs"
            element={<ChatbotLogs />}
          />

          <Route
            path="chatbot-logs/:id"
            element={<ChatbotLogDetails />}
          />


          {/* ====================================
              APPLICATIONS
          ==================================== */}

          <Route
            path="applications"
            element={<Applications />}
          />

          <Route
            path="applications/:id"
            element={<ApplicationDetails />}
          />


          {/* ====================================
              CANDIDATES
          ==================================== */}

          <Route
            path="candidates"
            element={<Candidates />}
          />

          {/* ADD CANDIDATE
              IMPORTANT ROUTE
          */}
          <Route
            path="candidates/add"
            element={<AddCandidate />}
          />

          {/* CANDIDATE DETAILS */}
          <Route
            path="candidates/:id"
            element={<CandidateDetails />}
          />


          {/* ====================================
              EMPLOYERS
          ==================================== */}

          <Route
            path="employers"
            element={<EmployersAdmin />}
          />

          <Route
            path="employers/:id"
            element={<EmployerDetails />}
          />


          {/* ====================================
              JOB POSTS
          ==================================== */}

          <Route
            path="jobs"
            element={<Jobs />}
          />

          <Route
            path="jobs/:id"
            element={<JobDetails />}
          />


          {/* ====================================
              RESUME DATABASE
          ==================================== */}

          <Route
            path="resumes"
            element={<Resumes />}
          />

          <Route
            path="resumes/:id"
            element={<ResumeDetails />}
          />


          {/* ====================================
              PARTNERS
          ==================================== */}

          <Route
            path="partners"
            element={<Partners />}
          />


          {/* ====================================
              CONTACT MESSAGES
          ==================================== */}

          <Route
            path="contact-messages"
            element={<ContactMessages />}
          />

          <Route
            path="contact-messages/:id"
            element={<ContactMessageDetails />}
          />

        </Route>


        {/* ======================================
            PUBLIC WEBSITE
        ====================================== */}

        <Route
          path="*"
          element={<PublicWebsite />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;