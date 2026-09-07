import "./PostAJob.css";

function PostAJob() {
  return (
    <main className="post-job-page">
      <section className="post-job-main">

        {/* LEFT SIDE */}
        <div className="post-job-info">
          <p className="post-job-eyebrow">EMPLOYER TOOLS</p>

          <h1>Post a Job</h1>

          <p className="post-job-description">
            Submitted roles enter an admin approval queue before going live ,
            the same verification standard applied to every employer.
          </p>

          <div className="verification-note">
            Company verification required before your first posting is approved.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="post-job-card">

          <form className="post-job-form">

            <div className="post-field">
              <label>Job Title</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Industry</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Location / Country</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Employment Type</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Experience Required</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Salary Range</label>
              <input type="text" />
            </div>

            <div className="post-field">
              <label>Number of Openings</label>
              <input type="number" />
            </div>

            <div className="post-field">
              <label>Job Description</label>
              <textarea />
            </div>

            <button type="submit" className="post-job-submit">
              Submit for Approval
            </button>

          </form>

        </div>

      </section>

      
    </main>
  );
}

export default PostAJob;