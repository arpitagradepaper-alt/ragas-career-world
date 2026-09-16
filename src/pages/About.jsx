import "./About.css";

import founderCeo from "../assets/founder-ceo.png";
import headRecruitment from "../assets/head-of-recruitment.png";
import headCompliance from "../assets/head-of-compliance.png";

const stats = [
  ["2010", "Founded"],
  ["40+", "Industries Served"],
  ["18", "Countries"],
  ["1000+", "Placements"],
];

const leaders = [
  {
    role: "Founder & CEO",
    text: "Overall strategy, business growth and global partnerships",
    image: founderCeo,
  },
  {
    role: "Head of Recruitment",
    text: "International and domestic recruitment delivery",
    image: headRecruitment,
  },
  {
    role: "Head of Compliance",
    text: "Documentation, compliance and partner verification",
    image: headCompliance,
  },
];

const industries = [
  "IT & Software",
  "Banking & Financial Services",
  "Aviation & Airports",
  "Hospitality & Hotels",
  "Healthcare & Hospitals",
  "Manufacturing",
  "Education & Training",
  "Automotive",
  "Food & Beverage",
  "Retail & E-commerce",
  "Logistics & Transportation",
  "Engineering Services",
];

function About() {
  return (
    <main className="about-page">

      {/* HERO / INTRO */}

      <section className="about-main">

        <div className="about-intro">

          <p className="about-eyebrow">
            ABOUT RAGAS CAREER WORLD
          </p>

          <h1>
            Connecting Talent With Opportunity
          </h1>

          <p className="about-description">
            RAGAS CAREER WORLD is a professional recruitment and
            talent solutions organisation specialising in
            international and domestic recruitment. We connect
            qualified professionals with employers and genuine
            career opportunities across diverse industries and
            markets.
          </p>

          <p className="about-description">
            Our approach combines structured recruitment,
            professional candidate support, employer coordination
            and reliable hiring processes to create meaningful
            connections between talent and organisations.
          </p>

        </div>


        {/* STATS */}

        <div className="about-stats">

          {stats.map(([number, label], index) => (
            <div
              className="about-stat"
              key={index}
            >
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}

        </div>


        {/* WHO WE ARE */}

        <section className="about-content-section">

          <p className="about-eyebrow">
            WHO WE ARE
          </p>

          <h2>
            A Recruitment Partner Built Around People
          </h2>

          <p>
            At RAGAS CAREER WORLD, we believe successful
            recruitment is about more than filling vacancies.
            It is about understanding people, organisations,
            skills and long-term career goals.
          </p>

          <p>
            We work with job seekers looking for meaningful
            opportunities and employers seeking qualified talent.
            Our recruitment services are designed to provide
            structured support throughout the hiring journey,
            from identifying suitable candidates to coordinating
            recruitment requirements.
          </p>

          <p>
            Through our international and domestic recruitment
            capabilities, we support organisations across multiple
            sectors while helping candidates explore opportunities
            in India and international markets.
          </p>

        </section>


        {/* OUR APPROACH */}

        <section className="about-content-section">

          <p className="about-eyebrow">
            OUR APPROACH
          </p>

          <h2>
            Professional Recruitment. Clear Processes. Real Opportunities.
          </h2>

          <p>
            Our recruitment approach focuses on understanding
            requirements clearly, identifying suitable talent and
            maintaining professional communication throughout the
            recruitment process.
          </p>

          <div className="about-approach-grid">

            <div className="about-info-card">
              <span className="about-card-number">01</span>
              <h3>Understand</h3>
              <p>
                We understand employer requirements, candidate
                profiles, skills and career objectives.
              </p>
            </div>

            <div className="about-info-card">
              <span className="about-card-number">02</span>
              <h3>Identify</h3>
              <p>
                We identify suitable candidates and relevant
                opportunities based on defined requirements.
              </p>
            </div>

            <div className="about-info-card">
              <span className="about-card-number">03</span>
              <h3>Connect</h3>
              <p>
                We connect employers and candidates through a
                structured recruitment process.
              </p>
            </div>

            <div className="about-info-card">
              <span className="about-card-number">04</span>
              <h3>Support</h3>
              <p>
                We provide recruitment coordination and candidate
                support throughout the hiring journey.
              </p>
            </div>

          </div>

        </section>


        {/* MISSION & VISION */}

        <section className="mission-vision">

          <div className="about-info-card mission-card">

            <p className="about-eyebrow">
              OUR MISSION
            </p>

            <h2>
              Connecting Employers With Qualified Talent
            </h2>

            <p>
              Our mission is to connect employers with qualified
              talent and job seekers with genuine career
              opportunities through professional, transparent and
              structured recruitment services.
            </p>

          </div>


          <div className="about-info-card vision-card">

            <p className="about-eyebrow">
              OUR VISION
            </p>

            <h2>
              Building Trusted Recruitment Connections
            </h2>

            <p>
              Our vision is to become a trusted recruitment partner
              across international and domestic markets by
              creating reliable connections between organisations
              and talented professionals.
            </p>

          </div>

        </section>


        {/* OUR REACH */}

        <section className="about-content-section">

          <p className="about-eyebrow">
            OUR REACH
          </p>

          <h2>
            Recruitment Across Industries & Markets
          </h2>

          <p>
            RAGAS CAREER WORLD supports recruitment requirements
            across a broad range of industries. Our network and
            recruitment capabilities allow us to support both
            domestic hiring requirements and international
            opportunities.
          </p>

          <p>
            With recruitment coverage across 40+ industries and
            opportunities connected to multiple international
            markets, we work to create career and workforce
            connections that meet the needs of both candidates and
            employers.
          </p>

          <div className="about-industries-grid">

            {industries.map((industry, index) => (
              <div
                className="about-industry-item"
                key={index}
              >
                <span>✓</span>
                <p>{industry}</p>
              </div>
            ))}

          </div>

        </section>


        {/* WHY RAGAS */}

        <section className="about-content-section">

          <p className="about-eyebrow">
            WHY RAGAS CAREER WORLD
          </p>

          <h2>
            Recruitment Designed Around Trust & Professionalism
          </h2>

          <div className="about-benefits-grid">

            <div className="about-info-card">
              <h3>Professional Recruitment</h3>
              <p>
                Structured recruitment support for employers and
                candidates across domestic and international markets.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Verified Opportunities</h3>
              <p>
                A recruitment approach focused on genuine
                opportunities and professional employer connections.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Industry Coverage</h3>
              <p>
                Recruitment support across a wide range of
                industries and professional sectors.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Candidate Support</h3>
              <p>
                Guidance and communication throughout the
                recruitment journey.
              </p>
            </div>

            <div className="about-info-card">
              <h3>International Recruitment</h3>
              <p>
                Support for candidates and employers involved in
                overseas recruitment opportunities.
              </p>
            </div>

            <div className="about-info-card">
              <h3>Employer Partnerships</h3>
              <p>
                Building professional relationships with employers,
                recruitment partners and organisations.
              </p>
            </div>

          </div>

        </section>


        {/* COMMITMENT */}

        <section className="about-content-section about-commitment">

          <p className="about-eyebrow">
            OUR COMMITMENT
          </p>

          <h2>
            Creating Better Recruitment Experiences
          </h2>

          <p>
            We are committed to maintaining professionalism,
            transparency and clear communication throughout our
            recruitment services.
          </p>

          <p>
            For job seekers, this means helping them discover
            relevant opportunities and supporting them through the
            recruitment journey. For employers, it means helping
            identify suitable talent and supporting structured
            hiring requirements.
          </p>

          <p>
            Our goal is to build long-term professional
            relationships rather than simply complete individual
            recruitment transactions.
          </p>

        </section>


        {/* LEADERSHIP */}

        <section className="leadership-section">

          <p className="about-eyebrow">
            LEADERSHIP
          </p>

          <h2>
            Experienced Leadership
          </h2>

          <p className="leadership-intro">
            Our leadership team brings together strategic direction,
            recruitment expertise and compliance-focused support to
            deliver professional recruitment services.
          </p>

          <div className="leadership-grid">

            {leaders.map((leader, index) => (
              <div
                className="leader-card"
                key={index}
              >

                <div className="leader-avatar">

                  <img
                    src={leader.image}
                    alt={leader.role}
                  />

                </div>

                <div className="leader-content">

                  <h3>
                    {leader.role}
                  </h3>

                  <p>
                    {leader.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* OUR JOURNEY */}

        <section className="about-content-section">

          <p className="about-eyebrow">
            OUR JOURNEY
          </p>

          <h2>
            Growing With Employers & Job Seekers
          </h2>

          <p>
            Since our foundation, RAGAS CAREER WORLD has focused
            on developing recruitment capabilities that serve both
            employers and job seekers.
          </p>

          <div className="about-journey">

            <div className="journey-item">

              <strong>2010</strong>

              <div>
                <h3>Foundation</h3>

                <p>
                  RAGAS CAREER WORLD begins its journey with a
                  focus on professional recruitment services.
                </p>
              </div>

            </div>


            <div className="journey-item">

              <strong>Growth</strong>

              <div>
                <h3>Expanding Recruitment</h3>

                <p>
                  Recruitment capabilities expand across
                  multiple industries and hiring requirements.
                </p>
              </div>

            </div>


            <div className="journey-item">

              <strong>Global</strong>

              <div>
                <h3>International Opportunities</h3>

                <p>
                  The recruitment network develops to support
                  international career and workforce opportunities.
                </p>
              </div>

            </div>


            <div className="journey-item">

              <strong>Today</strong>

              <div>
                <h3>40+ Industries</h3>

                <p>
                  Continuing to connect employers and talent
                  across domestic and international markets.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* FINAL CTA */}

        <section className="about-cta">

          <p className="about-eyebrow">
            LET'S CONNECT
          </p>

          <h2>
            Ready to Build the Right Connection?
          </h2>

          <p>
            Whether you are an employer looking for qualified
            talent or a professional exploring your next career
            opportunity, RAGAS CAREER WORLD is here to support
            your recruitment journey.
          </p>

          <div className="about-cta-actions">

            <a
              href="/current-openings"
              className="about-cta-primary"
            >
              Explore Opportunities
            </a>

            <a
              href="/contact"
              className="about-cta-secondary"
            >
              Contact Us
            </a>

          </div>

        </section>

      </section>

    </main>
  );
}

export default About;