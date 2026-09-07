import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-main">

        {/* LEFT */}
        <div className="contact-left">

          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <form className="contact-form">

            <div className="contact-field">
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className="contact-field">
              <label>Email Address</label>
              <input type="email" />
            </div>

            <div className="contact-field">
              <label>Phone Number</label>
              <input type="tel" />
            </div>

            <div className="contact-field">
              <label>Message</label>
              <textarea />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>

        </div>

        {/* RIGHT */}
        <div className="contact-right">

          {/* GOOGLE MAP */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=India&output=embed"
              title="RAGAS CAREER WORLD Office Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="head-office">
            <strong>Head Office</strong>

            <span>
              RAGAS CAREER WORLD, Business District, India
            </span>
          </div>

          <div className="contact-actions">

            <button type="button" className="phone-email-btn">
              Phone / Email
            </button>

            <button type="button" className="whatsapp-btn">
              WhatsApp Chat
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;