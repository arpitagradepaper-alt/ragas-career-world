import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import InternationalJobs from "./pages/InternationalJobs";
import DomesticJobs from "./pages/DomesticJobs";
import Industries from "./pages/Industries";
import CurrentOpenings from "./pages/CurrentOpenings";
import Employers from "./pages/Employers";
import JobSeekers from "./pages/JobSeekers";
import UploadResume from "./pages/UploadResume";
import PostAJob from "./pages/PostAJob";
import PartnerWithUs from "./pages/PartnerWithUs";
import RecruitmentProcess from "./pages/RecruitmentProcess";
import VisaSupport from "./pages/VisaSupport";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

import EmployerRegistration from "./pages/EmployerRegistration";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ChatbotLogs from "./admin/ChatbotLogs";
import Candidates from "./admin/Candidates";
import AdminEmployers from "./admin/Employers";
import Jobs from "./admin/Jobs";
import Resumes from "./admin/Resumes";
import Partners from "./admin/Partners";
import AdminLogin from "./admin/AdminLogin";

import JobApplication from "./pages/JobApplication";

import "./slider.css";


/* =========================================
   PUBLIC WEBSITE
========================================= */

function PublicWebsite() {
  const location = useLocation();

  /* -----------------------------------------
     RESTORE SECTION AFTER RETURNING
  ----------------------------------------- */

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    // Small delay because the sections need to render first
    const timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);


  /* -----------------------------------------
     PUBLIC WEBSITE
  ----------------------------------------- */

  return (
    <>
      <Navbar />

      <Chatbot />

      <main className="page-slider">

        {/* HOME */}
        <section
          className="page-slide"
          id="home"
        >
          <Home />
        </section>


        {/* ABOUT */}
        <section
          className="page-slide"
          id="about"
        >
          <About />
        </section>


        {/* SERVICES */}
        <section
          className="page-slide"
          id="services"
        >
          <Services />
        </section>


        {/* INTERNATIONAL JOBS */}
        <section
          className="page-slide"
          id="international-jobs"
        >
          <InternationalJobs />
        </section>


        {/* DOMESTIC JOBS */}
        <section
          className="page-slide"
          id="domestic-jobs"
        >
          <DomesticJobs />
        </section>


        {/* INDUSTRIES */}
        <section
          className="page-slide"
          id="industries"
        >
          <Industries />
        </section>


        {/* CURRENT OPENINGS */}
        <section
          className="page-slide"
          id="current-openings"
        >
          <CurrentOpenings />
        </section>


        {/* EMPLOYERS */}
        <section
          className="page-slide"
          id="employers"
        >
          <Employers />
        </section>


        {/* JOB SEEKERS */}
        <section
          className="page-slide"
          id="job-seekers"
        >
          <JobSeekers />
        </section>


        {/* UPLOAD RESUME */}
        <section
          className="page-slide"
          id="upload-resume"
        >
          <UploadResume />
        </section>


        {/* POST A JOB */}
        <section
          className="page-slide"
          id="post-a-job"
        >
          <PostAJob />
        </section>


        {/* PARTNER WITH US */}
        <section
          className="page-slide"
          id="partner-with-us"
        >
          <PartnerWithUs />
        </section>


        {/* RECRUITMENT PROCESS */}
        <section
          className="page-slide"
          id="recruitment-process"
        >
          <RecruitmentProcess />
        </section>


        {/* VISA & IMMIGRATION */}
        <section
          className="page-slide"
          id="visa-immigration"
        >
          <VisaSupport />
        </section>


        {/* BLOG */}
        <section
          className="page-slide"
          id="blog"
        >
          <Blog />
        </section>


        {/* TESTIMONIALS */}
        <section
          className="page-slide"
          id="testimonials"
        >
          <Testimonials />
        </section>


        {/* CONTACT */}
        <section
          className="page-slide"
          id="contact"
        >
          <Contact />
        </section>


        {/* CAREERS */}
        <section
          className="page-slide"
          id="careers"
        >
          <Careers />
        </section>


        {/* FOOTER */}
        <div className="footer-slide">
          <Footer />
        </div>

      </main>
    </>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================
            EMPLOYER REGISTRATION
        ===================================== */}

        <Route
          path="/employer-registration"
          element={<EmployerRegistration />}
        />


        {/* =====================================
            ADMIN LOGIN
        ===================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* =====================================
            ADMIN PANEL
        ===================================== */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="chatbot-logs"
            element={<ChatbotLogs />}
          />

          <Route
            path="candidates"
            element={<Candidates />}
          />

          <Route
            path="employers"
            element={<AdminEmployers />}
          />

          <Route
            path="jobs"
            element={<Jobs />}
          />

          <Route
            path="resumes"
            element={<Resumes />}
          />

          <Route
            path="partners"
            element={<Partners />}
          />

        </Route>


        {/* =====================================
            JOB APPLICATION
        ===================================== */}

        <Route
          path="/apply/:jobId"
          element={<JobApplication />}
        />


        {/* =====================================
            FOOTER TEST ROUTE
        ===================================== */}

        <Route
          path="/footer"
          element={
            <div
              style={{
                width: "100%",
                minHeight: "100vh",
                background: "#ffffff",
              }}
            >
              <Footer />
            </div>
          }
        />


        {/* =====================================
            PUBLIC WEBSITE
            MUST BE LAST
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