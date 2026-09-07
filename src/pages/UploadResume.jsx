import "./UploadResume.css";

function UploadResume() {
  return (
    <main className="upload-resume-page">
      <section className="upload-resume-main">

        {/* LEFT CONTENT */}
        <div className="upload-resume-info">

          <p className="upload-eyebrow">
            CANDIDATE PROFILE
          </p>

          <h1>Upload Your Resume</h1>

          <p className="upload-description">
            One profile, every relevant opening. Your resume and profile
            feeds power job-match alerts sent by email or WhatsApp.
          </p>

        </div>


        {/* RIGHT FORM */}
        <div className="upload-resume-card">

          {/* FILE UPLOAD */}
          <div className="resume-dropzone">
            <span>↥</span>
            <strong>
              Drag &amp; drop your resume (PDF/DOC), or browse
            </strong>
          </div>


          {/* FORM */}
          <form className="resume-form">

            <div className="form-field">
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input type="email" />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" />
            </div>

            <div className="form-field">
              <label>Preferred Industry</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Preferred Country</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Total Experience (Years)</label>
              <input type="number" />
            </div>

            <div className="form-field">
              <label>Current Location</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Skills (comma separated)</label>
              <input type="text" />
            </div>

            <button type="submit" className="submit-resume-btn">
              Submit Profile
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default UploadResume;