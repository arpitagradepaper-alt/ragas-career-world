import "./About.css";

import {
  ArrowRight,
  Check,
  Globe2,
  Target,
  Users,
  ShieldCheck,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

import founderCeo from "../assets/founder-ceo.png";
import headRecruitment from "../assets/head-of-recruitment.png";
import headCompliance from "../assets/head-of-compliance.png";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: "2010",
    label: "Founded",
  },
  {
    value: "40+",
    label: "Industries",
  },
  {
    value: "18",
    label: "Countries",
  },
  {
    value: "1000+",
    label: "Placements",
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

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We understand the requirement, profile and career objective before beginning the recruitment process.",
    icon: Target,
  },
  {
    number: "02",
    title: "Identify",
    text: "We identify suitable professionals and opportunities based on defined requirements.",
    icon: Users,
  },
  {
    number: "03",
    title: "Connect",
    text: "We create a clear connection between qualified talent and employers.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Support",
    text: "We maintain communication and coordination throughout the recruitment journey.",
    icon: ShieldCheck,
  },
];

const leaders = [
  {
    role: "Founder & CEO",
    text: "Providing strategic direction and building long-term relationships with employers and professionals.",
    image: founderCeo,
  },
  {
    role: "Head of Recruitment",
    text: "Leading recruitment operations and supporting effective talent identification and matching.",
    image: headRecruitment,
  },
  {
    role: "Head of Compliance",
    text: "Supporting structured processes, professional standards and recruitment compliance.",
    image: headCompliance,
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-inner">

          <div className="about-hero-content">

            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line"></span>
              <p className="about-eyebrow">
                ABOUT RAGAS CAREER WORLD
              </p>
            </div>

            <h1>
              Connecting Talent
              <span> With Opportunity.</span>
            </h1>

            <p className="about-hero-description">
              RAGAS CAREER WORLD is a professional recruitment and talent
              solutions organisation connecting qualified professionals with
              employers and genuine career opportunities across domestic and
              international markets.
            </p>

            <div className="about-hero-actions">

              <a
                href="/current-openings"
                className="about-primary-btn"
              >
                Explore Opportunities
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                className="about-secondary-btn"
              >
                Contact Us
              </a>

            </div>

          </div>


          <div className="about-hero-visual">

            <div className="hero-visual-main">

              <span className="hero-visual-label">
                GLOBAL RECRUITMENT
              </span>

              <div className="hero-visual-number">
                18<span>+</span>
              </div>

              <p>
                Countries connected through our recruitment network.
              </p>

              <div className="hero-visual-line"></div>

              <div className="hero-visual-footer">
                <span>INDIA</span>
                <span>GLOBAL</span>
              </div>

            </div>

            <div className="hero-floating-card">
              <Globe2 size={18} />
              <div>
                <strong>People First</strong>
                <span>Built around meaningful connections.</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="about-stats-inner">

          {stats.map((stat, index) => (
            <div
              className="about-stat"
              key={index}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-section about-who-section">

        <div className="about-who-layout">

          <div className="about-section-heading">

            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line"></span>
              <p className="about-eyebrow">
                WHO WE ARE
              </p>
            </div>

            <h2>
              Recruitment Built
              <span> Around People.</span>
            </h2>

          </div>


          <div className="about-who-copy">

            <p className="about-lead">
              Successful recruitment starts with understanding people,
              organisations, skills and career goals.
            </p>

            <p>
              We support job seekers and employers with professional
              recruitment services, clear communication and structured
              coordination throughout the hiring journey.
            </p>

            <p>
              Our focus is not simply on filling positions. We aim to create
              meaningful connections between qualified talent and organisations
              looking for the right people.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="about-purpose">

        <div className="about-purpose-intro">

          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">
              OUR PURPOSE
            </p>
          </div>

          <h2>
            Creating connections
            <span> that matter.</span>
          </h2>

        </div>


        <div className="about-purpose-content">

          <div className="purpose-block">

            <span className="purpose-number">
              01
            </span>

            <div>
              <p className="purpose-label">
                OUR MISSION
              </p>

              <h3>
                Connecting Employers With Qualified Talent
              </h3>

              <p>
                Our mission is to connect employers with qualified talent and
                job seekers with genuine career opportunities through
                professional, transparent and structured recruitment services.
              </p>
            </div>

          </div>


          <div className="purpose-divider"></div>


          <div className="purpose-block">

            <span className="purpose-number">
              02
            </span>

            <div>
              <p className="purpose-label">
                OUR VISION
              </p>

              <h3>
                Building Trusted Recruitment Connections
              </h3>

              <p>
                Our vision is to become a trusted recruitment partner across
                international and domestic markets by creating reliable
                connections between organisations and talented professionals.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="about-section about-approach-section">

        <div className="about-section-heading">

          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">
              OUR APPROACH
            </p>
          </div>

          <h2>
            Simple process.
            <span> Professional results.</span>
          </h2>

          <p>
            Our recruitment approach is designed to keep the journey clear,
            structured and focused from the initial requirement through
            successful joining.
          </p>

        </div>


        <div className="about-approach-list">

          {approach.map((item) => {

            const Icon = item.icon;

            return (
              <div
                className="approach-row"
                key={item.number}
              >

                <span className="approach-number">
                  {item.number}
                </span>

                <div className="approach-icon">
                  <Icon size={18} />
                </div>

                <div className="approach-title">
                  <h3>{item.title}</h3>
                </div>

                <p>
                  {item.text}
                </p>

                <ArrowRight
                  className="approach-arrow"
                  size={17}
                />

              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          GLOBAL REACH
      ===================================================== */}

      <section className="about-reach-section">

        <div className="about-reach-inner">

          <div className="reach-heading">

            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line"></span>
              <p className="about-eyebrow">
                OUR REACH
              </p>
            </div>

            <h2>
              Across industries.
              <span> Across markets.</span>
            </h2>

            <p>
              RAGAS CAREER WORLD supports recruitment requirements across
              diverse industries, helping employers and professionals connect
              across domestic and international markets.
            </p>

            <div className="reach-stat">
              <strong>40+</strong>
              <span>Industries Covered</span>
            </div>

          </div>


          <div className="industries-content">

            <div className="industries-top">
              <span>INDUSTRIES WE SERVE</span>
              <span>01 — 12</span>
            </div>

            <div className="industries-list">

              {industries.map((industry, index) => (
                <div
                  className="industry-line"
                  key={index}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{industry}</p>

                  <Check size={14} />

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="about-section leadership-section">

        <div className="leadership-heading">

          <div className="about-section-heading">

            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line"></span>
              <p className="about-eyebrow">
                LEADERSHIP
              </p>
            </div>

            <h2>
              Experienced
              <span> leadership.</span>
            </h2>

          </div>

          <p>
            Strategic direction, recruitment expertise and professional
            standards come together to support our recruitment services.
          </p>

        </div>


        <div className="leadership-list">

          {leaders.map((leader, index) => (
            <div
              className="leader-row"
              key={index}
            >

              <div className="leader-image">
                <img
                  src={leader.image}
                  alt={leader.role}
                />
              </div>

              <span className="leader-number">
                0{index + 1}
              </span>

              <div className="leader-info">

                <h3>
                  {leader.role}
                </h3>

                <p>
                  {leader.text}
                </p>

              </div>

              <ArrowRight
                className="leader-arrow"
                size={18}
              />

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="about-section about-journey-section">

        <div className="journey-heading">

          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">
              OUR JOURNEY
            </p>
          </div>

          <h2>
            Growing with employers
            <span> & job seekers.</span>
          </h2>

        </div>


        <div className="journey-timeline">

          <div className="journey-item">
            <span>2010</span>
            <div>
              <h3>Foundation</h3>
              <p>
                RAGAS CAREER WORLD begins its journey with a focus on
                professional recruitment services.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <span>GROWTH</span>
            <div>
              <h3>Expanding Recruitment</h3>
              <p>
                Recruitment capabilities grow across multiple industries and
                professional hiring requirements.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <span>GLOBAL</span>
            <div>
              <h3>International Opportunities</h3>
              <p>
                The recruitment network develops to support international
                career and workforce opportunities.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <span>TODAY</span>
            <div>
              <h3>40+ Industries</h3>
              <p>
                Continuing to connect employers and talent across domestic and
                international markets.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-inner">

          <div>

            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line"></span>
              <p className="about-eyebrow">
                LET'S CONNECT
              </p>
            </div>

            <h2>
              Ready to build the
              <span> right connection?</span>
            </h2>

            <p>
              Whether you are an employer looking for qualified talent or a
              professional exploring your next opportunity, we are here to
              support your recruitment journey.
            </p>

          </div>


          <div className="about-cta-actions">

            <a
              href="/current-openings"
              className="about-cta-primary"
            >
              Explore Opportunities
              <ArrowRight size={16} />
            </a>

            <a
              href="/contact"
              className="about-cta-secondary"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;