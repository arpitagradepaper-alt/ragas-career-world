
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

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We clarify the brief, profile and career objective.",
    icon: Target,
  },
  {
    number: "02",
    title: "Identify",
    text: "We match people and opportunities to defined requirements.",
    icon: Users,
  },
  {
    number: "03",
    title: "Connect",
    text: "We connect both sides through a clear process.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Support",
    text: "We coordinate communication and support through joining.",
    icon: ShieldCheck,
  },
];

const benefits = [
  {
    title: "Professional Recruitment",
    text: "Structured support across domestic and international markets.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Verified Opportunities",
    text: "A focused approach to genuine opportunities and trusted connections.",
    icon: ShieldCheck,
  },
  {
    title: "Industry Coverage",
    text: "Coverage across varied industries and professional sectors.",
    icon: TrendingUp,
  },
  {
    title: "Candidate Support",
    text: "Guidance and communication from search to joining.",
    icon: Users,
  },
  {
    title: "International Recruitment",
    text: "Support for overseas candidates and employers.",
    icon: Globe2,
  },
  {
    title: "Employer Partnerships",
    text: "Professional relationships with employers and recruitment partners.",
    icon: BriefcaseBusiness,
  },
];

function About() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>

        <div className="about-hero-content">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">ABOUT RAGAS CAREER WORLD</p>
          </div>

          <h1>
            Connecting Talent
            <span> With Opportunity.</span>
          </h1>

          <p className="about-hero-description">
            RAGAS CAREER WORLD is a professional recruitment and talent
            solutions organisation specialising in international and domestic
            recruitment. We connect qualified professionals with employers
            and genuine career opportunities across diverse industries and
            markets.
          </p>

          <div className="about-hero-actions">
            <a href="/current-openings" className="about-primary-btn">
              Explore Opportunities
              <ArrowRight size={16} />
            </a>

            <a href="/contact" className="about-secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="about-hero-side">
          <div className="about-side-card">
            <span className="side-card-number">01</span>
            <div>
              <strong>Global Recruitment</strong>
              <p>
                Connecting qualified professionals with opportunities across
                domestic and international markets.
              </p>
            </div>
          </div>

          <div className="about-side-card">
            <span className="side-card-number">02</span>
            <div>
              <strong>People First</strong>
              <p>
                Recruitment built around candidates, employers and long-term
                professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stats">
        {stats.map(([number, label], index) => (
          <div className="about-stat" key={index}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="about-section about-who-section">
        <div className="about-section-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">WHO WE ARE</p>
          </div>

          <h2>
            A Recruitment Partner
            <span> Built Around People.</span>
          </h2>
        </div>

        <div className="about-two-column">
          <div className="about-large-copy">
            <p>
              Successful recruitment starts with understanding people,
              organisations, skills and career goals.
            </p>

            <p>
              We support job seekers and employers with clear matching,
              coordination and communication throughout the hiring journey.
            </p>
          </div>

          <div className="about-highlight-box">
            <span className="highlight-icon">
              <Users size={21} />
            </span>

            <strong>People. Opportunities. Connections.</strong>

            <p>
              We help organisations hire across sectors and candidates explore
              opportunities in India and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="about-section">
        <div className="about-section-heading centered-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">OUR APPROACH</p>
          </div>

          <h2>
            Professional Recruitment.
            <span> Clear Processes.</span>
          </h2>

          <p>
            Our recruitment approach focuses on understanding requirements
            clearly, identifying suitable talent and maintaining professional
            communication throughout the recruitment process.
          </p>
        </div>

        <div className="about-approach-grid">
          {approach.map((item) => {
            const Icon = item.icon;

            return (
              <div className="about-approach-card" key={item.number}>
                <div className="approach-top">
                  <span>{item.number}</span>

                  <div className="approach-icon">
                    <Icon size={19} />
                  </div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="about-mission-section">
        <div className="mission-card">
          <span className="mission-label">OUR MISSION</span>

          <h2>Connecting Employers With Qualified Talent</h2>

          <p>
            Our mission is to connect employers with qualified talent and job
            seekers with genuine career opportunities through professional,
            transparent and structured recruitment services.
          </p>

          <div className="mission-number">01</div>
        </div>

        <div className="vision-card">
          <span className="mission-label">OUR VISION</span>

          <h2>Building Trusted Recruitment Connections</h2>

          <p>
            Our vision is to become a trusted recruitment partner across
            international and domestic markets by creating reliable
            connections between organisations and talented professionals.
          </p>

          <div className="mission-number">02</div>
        </div>
      </section>

      {/* ================= REACH ================= */}
      <section className="about-section">
        <div className="about-section-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">OUR REACH</p>
          </div>

          <h2>
            Recruitment Across
            <span> Industries & Markets.</span>
          </h2>

          <p>
            RAGAS CAREER WORLD supports recruitment requirements across a broad
            range of industries. Our network and recruitment capabilities
            allow us to support both domestic hiring requirements and
            international opportunities.
          </p>
        </div>

        <div className="about-reach-layout">
          <div className="reach-intro-card">
            <div className="reach-big-number">40+</div>
            <strong>Industries Covered</strong>

            <p>
              We work across diverse sectors to create career and workforce
              connections that meet the needs of both candidates and employers.
            </p>
          </div>

          <div className="about-industries-grid">
            {industries.map((industry, index) => (
              <div className="about-industry-item" key={index}>
                <span>
                  <Check size={13} />
                </span>
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY RAGAS ================= */}
      <section className="about-section about-benefits-section">
        <div className="about-section-heading centered-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">WHY RAGAS CAREER WORLD</p>
          </div>

          <h2>
            Recruitment Designed Around
            <span> Trust & Professionalism.</span>
          </h2>
        </div>

        <div className="about-benefits-grid">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="about-benefit-card" key={index}>
                <div className="benefit-icon">
                  <Icon size={18} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="about-commitment">
        <div className="commitment-number">03</div>

        <div className="about-eyebrow-wrap">
          <span className="about-eyebrow-line"></span>
          <p className="about-eyebrow">OUR COMMITMENT</p>
        </div>

        <h2>Creating Better Recruitment Experiences</h2>

        <div className="commitment-content">
          <p>
            We are committed to maintaining professionalism, transparency and
            clear communication throughout our recruitment services.
          </p>

          <p>
            For job seekers, this means helping them discover relevant
            opportunities and supporting them through the recruitment journey.
            For employers, it means helping identify suitable talent and
            supporting structured hiring requirements.
          </p>

          <p>
            Our goal is to build long-term professional relationships rather
            than simply complete individual recruitment transactions.
          </p>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="about-section leadership-section">
        <div className="about-section-heading centered-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">LEADERSHIP</p>
          </div>

          <h2>
            Experienced
            <span> Leadership.</span>
          </h2>

          <p>
            Our leadership team brings together strategic direction,
            recruitment expertise and compliance-focused support to deliver
            professional recruitment services.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-image">
                <img src={leader.image} alt={leader.role} />
              </div>

              <div className="leader-content">
                <span>0{index + 1}</span>
                <h3>{leader.role}</h3>
                <p>{leader.text}</p>
              </div>

              <ArrowRight className="leader-arrow" size={17} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="about-section">
        <div className="about-section-heading">
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <p className="about-eyebrow">OUR JOURNEY</p>
          </div>

          <h2>
            Growing With Employers
            <span> & Job Seekers.</span>
          </h2>

          <p>
            Since our foundation, RAGAS CAREER WORLD has focused on developing
            recruitment capabilities that serve both employers and job seekers.
          </p>
        </div>

        <div className="journey-grid">
          <div className="journey-card">
            <span>2010</span>
            <h3>Foundation</h3>
            <p>
              RAGAS CAREER WORLD begins its journey with a focus on professional
              recruitment services.
            </p>
          </div>

          <div className="journey-card">
            <span>GROWTH</span>
            <h3>Expanding Recruitment</h3>
            <p>
              Recruitment capabilities expand across multiple industries and
              hiring requirements.
            </p>
          </div>

          <div className="journey-card">
            <span>GLOBAL</span>
            <h3>International Opportunities</h3>
            <p>
              The recruitment network develops to support international career
              and workforce opportunities.
            </p>
          </div>

          <div className="journey-card journey-current">
            <span>TODAY</span>
            <h3>40+ Industries</h3>
            <p>
              Continuing to connect employers and talent across domestic and
              international markets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="cta-glow"></div>

        <div className="about-eyebrow-wrap">
          <span className="about-eyebrow-line"></span>
          <p className="about-eyebrow">LET'S CONNECT</p>
        </div>

        <h2>
          Ready to Build the
          <span> Right Connection?</span>
        </h2>

        <p>
          Whether you are an employer looking for qualified talent or a
          professional exploring your next career opportunity, RAGAS CAREER
          WORLD is here to support your recruitment journey.
        </p>

        <div className="about-cta-actions">
          <a href="/current-openings" className="about-cta-primary">
            Explore Opportunities
            <ArrowRight size={16} />
          </a>

          <a href="/contact" className="about-cta-secondary">
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}

export default About;

