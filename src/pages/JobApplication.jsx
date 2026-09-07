import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Upload, ArrowLeft, CheckCircle2 } from "lucide-react";
import "./JobApplication.css";

const JOBS = {
  "1": {
    title: "Senior Software Engineer",
    location: "Bengaluru, India",
    industry: "Information Technology",
  },
  "2": {
    title: "HR Manager",
    location: "Mumbai, India",
    industry: "Human Resources",
  },
  "3": {
    title: "Digital Marketing Executive",
    location: "Delhi NCR, India",
    industry: "Digital Marketing",
  },
  "4": {
    title: "Sales Manager",
    location: "Dubai, UAE",
    industry: "Sales & Business Development",
  },
};

function JobApplication() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const job = JOBS[jobId] || {
    title: "Job Position",
    location: "Multiple Locations",
    industry: "General",
  };

  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="application-page">

      {/* HEADER */}
      <div className="application-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={17} />
          Back to Jobs
        </button>

        <div className="application-title">
          <span>CAREER OPPORTUNITY</span>
          <h1>Apply for this Position</h1>
          <p>
            Complete the form below and our recruitment team will review
            your application.
          </p>
        </div>
      </div>

      {/* JOB SUMMARY */}
      <div className="job-summary">
        <div>
          <span>APPLYING FOR</span>
          <h2>{job.title}</h2>
        </div>

        <div className="job-summary-details">
          <div>
            <small>Location</small>
            <strong>{job.location}</strong>
          </div>

          <div>
            <small>Industry</small>
            <strong>{job.industry}</strong>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form
        className="application-form"
        onSubmit={handleSubmit}
      >

        {/* PERSONAL INFORMATION */}
        <section className="form-section">
          <div className="section-heading">
            <span>01</span>
            <div>
              <h3>Personal Information</h3>
              <p>Tell us a little about yourself.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>

            <div className="form-group full-width">
              <label>Current Location *</label>
              <input
                type="text"
                placeholder="City, State, Country"
                required
              />
            </div>

          </div>
        </section>

        {/* PROFESSIONAL INFORMATION */}
        <section className="form-section">
          <div className="section-heading">
            <span>02</span>
            <div>
              <h3>Professional Information</h3>
              <p>Share your professional background.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Current Job Title</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
              />
            </div>

            <div className="form-group">
              <label>Total Experience *</label>
              <select required>
                <option value="">Select experience</option>
                <option>Fresher</option>
                <option>0–2 Years</option>
                <option>2–5 Years</option>
                <option>5–8 Years</option>
                <option>8–12 Years</option>
                <option>12+ Years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Highest Qualification *</label>
              <select required>
                <option value="">Select qualification</option>
                <option>High School</option>
                <option>Diploma</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>Doctorate</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Current / Previous Company</label>
              <input
                type="text"
                placeholder="Company name"
              />
            </div>

            <div className="form-group full-width">
              <label>Key Skills *</label>
              <input
                type="text"
                placeholder="e.g. React, JavaScript, Communication"
                required
              />
            </div>

          </div>
        </section>

        {/* JOB PREFERENCES */}
        <section className="form-section">
          <div className="section-heading">
            <span>03</span>
            <div>
              <h3>Job Preferences</h3>
              <p>Tell us about your preferred opportunity.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Preferred Location</label>
              <input
                type="text"
                placeholder="Preferred city / location"
              />
            </div>

            <div className="form-group">
              <label>Preferred Country</label>
              <select>
                <option value="">Select country</option>
                <option>India</option>
                <option>UAE</option>
                <option>Qatar</option>
                <option>Saudi Arabia</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Expected Salary</label>
              <input
                type="text"
                placeholder="e.g. ₹8,00,000 per annum"
              />
            </div>

            <div className="form-group">
              <label>Notice Period</label>
              <select>
                <option value="">Select notice period</option>
                <option>Immediate</option>
                <option>15 Days</option>
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
                <option>More than 90 Days</option>
              </select>
            </div>

          </div>
        </section>

        {/* RESUME */}
        <section className="form-section">
          <div className="section-heading">
            <span>04</span>
            <div>
              <h3>Resume & Cover Letter</h3>
              <p>Upload your latest resume and introduce yourself.</p>
            </div>
          </div>

          <div className="resume-upload">

            <Upload size={25} />

            <h4>
              {resume
                ? resume.name
                : "Upload your resume"}
            </h4>

            <p>
              PDF, DOC or DOCX • Maximum file size 5 MB
            </p>

            <label className="upload-button">
              Choose File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
              />
            </label>

          </div>

          <div className="form-group cover-letter">
            <label>Cover Letter</label>
            <textarea
              rows="6"
              placeholder="Tell us why you are a good fit for this position..."
            />
          </div>
        </section>

        {/* CONSENT */}
        <section className="form-section consent-section">

          <label className="checkbox-row">
            <input type="checkbox" required />

            <span>
              I agree that RAGAS CAREER WORLD may use the
              information provided above to process my job
              application and contact me regarding suitable
              career opportunities.
            </span>
          </label>

          <button
            type="submit"
            className="submit-application"
          >
            Submit Application
          </button>

        </section>

      </form>

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="success-message">
          <CheckCircle2 size={22} />

          <div>
            <strong>Application Submitted Successfully</strong>
            <p>
              Thank you for applying. Our recruitment team
              will review your profile and contact you if your
              application matches the opportunity.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default JobApplication;