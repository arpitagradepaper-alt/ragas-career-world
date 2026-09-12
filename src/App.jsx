
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";



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
// USER AUTH
// ==========================================

import UserLogin from "./pages/UserLogin.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";

// ==========================================
// ADMIN
// ==========================================

import AdminLayout from "./admin/AdminLayout.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminRegistration from "./admin/AdminRegistration.jsx";

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
// ADMIN AUTH CHECK
// ==========================================

function AdminRoute() {
  const isAdminLoggedIn =
    localStorage.getItem("ragasAdminLoggedIn") === "true";

  if (!isAdminLoggedIn) {
    return <AdminLogin />;
  }

  return <AdminLayout />;
}


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
          path="/home"
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

        {/* VISA & IMMIGRATION SUPPORT */}
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

        {/* FALLBACK */}
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

        {/* =====================================
            FIRST PAGE
            USER REGISTRATION
        ===================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =====================================
            USER REGISTRATION
        ===================================== */}

        <Route
          path="/register"
          element={<UserRegistration />}
        />

        {/* =====================================
            USER LOGIN
        ===================================== */}

        <Route
          path="/user-login"
          element={<UserLogin />}
        />

        {/* =====================================
            ADMIN REGISTRATION
        ===================================== */}

        <Route
          path="/admin/register"
          element={<AdminRegistration />}
        />

        {/* =====================================
            ADMIN PANEL
        ===================================== */}

        <Route
          path="/admin"
          element={<AdminRoute />}
        >

          {/* DASHBOARD */}

          <Route
            index
            element={<Dashboard />}
          />

          {/* CHATBOT LOGS */}

          <Route
            path="chatbot-logs"
            element={<ChatbotLogs />}
          />

          <Route
            path="chatbot-logs/:id"
            element={<ChatbotLogDetails />}
          />

          {/* APPLICATIONS */}

          <Route
            path="applications"
            element={<Applications />}
          />

          <Route
            path="applications/:id"
            element={<ApplicationDetails />}
          />

          {/* CANDIDATES */}

          <Route
            path="candidates"
            element={<Candidates />}
          />

          <Route
            path="candidates/add"
            element={<AddCandidate />}
          />

          <Route
            path="candidates/:id"
            element={<CandidateDetails />}
          />

          {/* EMPLOYERS */}

          <Route
            path="employers"
            element={<EmployersAdmin />}
          />

          <Route
            path="employers/:id"
            element={<EmployerDetails />}
          />

          {/* JOBS */}

          <Route
            path="jobs"
            element={<Jobs />}
          />

          <Route
            path="jobs/:id"
            element={<JobDetails />}
          />

          {/* RESUMES */}

          <Route
            path="resumes"
            element={<Resumes />}
          />

          <Route
            path="resumes/:id"
            element={<ResumeDetails />}
          />

          {/* PARTNERS */}

          <Route
            path="partners"
            element={<Partners />}
          />

          {/* CONTACT MESSAGES */}

          <Route
            path="contact-messages"
            element={<ContactMessages />}
          />

          <Route
            path="contact-messages/:id"
            element={<ContactMessageDetails />}
          />

        </Route>


        {/* =====================================
            ADMIN LOGIN
        ===================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* =====================================
            PUBLIC WEBSITE FALLBACK
        ===================================== */}

        <Route
          path="*"
          element={<PublicWebsite />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
