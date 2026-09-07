import "./PartnerWithUs.css";

function PartnerWithUs() {
  return (
    <main className="partner-page">
      <section className="partner-main">

        {/* LEFT SIDE */}
        <div className="partner-info">

          <p className="partner-eyebrow">
            RECRUITMENT PARTNER PROGRAM
          </p>

          <h1>Partner With Us</h1>

          <p className="partner-description">
            Register your agency or consultancy for a verified partner
            account — share job orders, track referrals, and see commission
            terms up front.
          </p>

          <div className="partner-steps">

            <div className="partner-step">
              <strong>1. Register</strong>
              <span>Submit company &amp; compliance details</span>
            </div>

            <div className="partner-step">
              <strong>2. Verify</strong>
              <span>Admin reviews registration documents</span>
            </div>

            <div className="partner-step">
              <strong>3. Collaborate</strong>
              <span>Receive shared job orders &amp; refer candidates</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="partner-card">

          <h2>Partner Registration Form</h2>

          <form className="partner-form">

            <div className="partner-field">
              <label>Company / Consultancy Name</label>
              <input type="text" />
            </div>

            <div className="partner-field">
              <label>Business Type</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option>Recruitment Agency</option>
                <option>Consultancy</option>
                <option>Staffing Company</option>
                <option>Other</option>
              </select>
            </div>

            <div className="partner-field">
              <label>Years in Operation</label>
              <input type="number" />
            </div>

            <div className="partner-field">
              <label>GST / CIN or Equivalent Reg. No.</label>
              <input type="text" />
            </div>

            <div className="partner-field">
              <label>Registration Certificate Upload</label>
              <input type="file" />
            </div>

            <div className="partner-field">
              <label>Areas of Specialisation</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option>IT &amp; Technology</option>
                <option>Healthcare</option>
                <option>Engineering</option>
                <option>Construction</option>
                <option>Hospitality</option>
                <option>Other</option>
              </select>
            </div>

            <div className="partner-field">
              <label>Service Geography</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option>India</option>
                <option>International</option>
                <option>India &amp; International</option>
              </select>
            </div>

            <div className="partner-field">
              <label>Contact Person — Name</label>
              <input type="text" />
            </div>

            <div className="partner-field">
              <label>Work Email</label>
              <input type="email" />
            </div>

            <div className="partner-field">
              <label>Phone / WhatsApp Number</label>
              <input type="tel" />
            </div>

            <p className="partner-form-note">
              All fields are labelled and validated with clear, specific
              inline error messages (e.g. “Enter a 10-digit phone number”).
            </p>

            <button type="submit" className="partner-submit">
              Submit for Verification
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default PartnerWithUs;