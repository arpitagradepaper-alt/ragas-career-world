import "./About.css";

import {
  ArrowRight,
  Check,
  Globe2,
  Target,
  Users,
  ShieldCheck,
} from "lucide-react";

import founderCeo from "../assets/founder-ceo.png";
import headRecruitment from "../assets/head-of-recruitment.png";
import headCompliance from "../assets/head-of-compliance.png";

/* =========================================================
   DATA (100% UNTOUCHED CONTENT)
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
          HERO (EXECUTIVE CANVAS)
      ===================================================== */}
      <section className="about-hero">
        <div className="about-hero-architectural-grid"></div>
        <div className="about-hero-ambient-glow"></div>

        <div className="about-hero-inner">
          <div className="about-hero-content">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow">ABOUT RAGAS CAREER WORLD</p>
            </div>

            <h1 className="about-hero-headline">
              Connecting Talent
              <span className="about-hero-gold-text"> With Opportunity.</span>
            </h1>

            <p className="about-hero-description">
              RAGAS CAREER WORLD is a professional recruitment and talent
              solutions organisation connecting qualified professionals with
              employers and genuine career opportunities across domestic and
              international markets.
            </p>

            <div className="about-hero-actions">
              <a href="/current-openings" className="about-primary-btn">
                <span>Explore Opportunities</span>
                <div className="btn-icon-wrapper">
                  <ArrowRight size={15} />
                </div>
              </a>

              <a href="/contact" className="about-secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="about-hero-sculpture">
            <div className="hero-sculpture-halo"></div>
            
            <div className="hero-sculpture-card">
              <div className="hero-card-pattern-grid"></div>
              
              <div className="hero-sculpture-top">
                <div className="hero-sculpture-badge">
                  <span className="badge-pulse"></span>
                  GLOBAL RECRUITMENT
                </div>
                <span className="hero-sculpture-code">RCW / 2026</span>
              </div>

              <div className="hero-sculpture-middle">
                <div className="hero-sculpture-metric">
                  18<span className="hero-metric-plus">+</span>
                </div>
                <p className="hero-sculpture-caption">
                  Countries connected through our recruitment network.
                </p>
              </div>

              <div className="hero-sculpture-bottom">
                <div className="sculpture-tag-pill">INDIA</div>
                <div className="sculpture-line-connect"></div>
                <div className="sculpture-tag-pill">GLOBAL</div>
              </div>
            </div>

            <div className="hero-floating-glass-tile">
              <div className="floating-tile-icon-box">
                <Globe2 size={20} />
              </div>
              <div className="floating-tile-text">
                <strong>People First</strong>
                <span>Built around meaningful connections.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS (CONNECTED MONOLITHIC RIBBON)
      ===================================================== */}
      <section className="about-stats-ribbon">
        <div className="about-stats-ribbon-inner">
          {stats.map((stat, index) => (
            <div className="stat-monolith-card" key={index}>
              <div className="stat-card-meta">
                <span className="stat-monolith-index">// 0{index + 1}</span>
                <span className="stat-monolith-label">{stat.label}</span>
              </div>
              <strong className="stat-monolith-val">{stat.value}</strong>
              <div className="stat-hover-floorline"></div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE (ASYMMETRIC BENTO SHOWCASE)
      ===================================================== */}
      <section className="about-section about-who-section">
        <div className="about-who-bento-grid">
          
          <div className="about-who-left-frame">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow">WHO WE ARE</p>
            </div>

            <h2 className="about-who-title">
              Recruitment Built
              <span> Around People.</span>
            </h2>
            
            <div className="about-who-accent-card">
              <p className="about-lead">
                Successful recruitment starts with understanding people,
                organisations, skills and career goals.
              </p>
            </div>
          </div>

          <div className="about-who-right-frame">
            <div className="who-editorial-box">
              <div className="who-box-corner-accent"></div>
              <p>
                We support job seekers and employers with professional
                recruitment services, clear communication and structured
                coordination throughout the hiring journey.
              </p>

              <div className="who-editorial-divider"></div>

              <p>
                Our focus is not simply on filling positions. We aim to create
                meaningful connections between qualified talent and organisations
                looking for the right people.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          PURPOSE (HIGH-PRECISION SPLIT PILLARS)
      ===================================================== */}
      <section className="about-purpose-pillar-section">
        <div className="about-purpose-container">

          <div className="purpose-header-block">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow">OUR PURPOSE</p>
            </div>

            <h2>
              Creating connections
              <span> that matter.</span>
            </h2>
          </div>

          <div className="purpose-pillars-grid">
            
            <div className="purpose-pillar-card">
              <div className="pillar-watermark-num">01</div>
              <div className="pillar-header-group">
                <span className="pillar-pill-label">OUR MISSION</span>
                <span className="pillar-step-code">PHASE / 01</span>
              </div>
              <div className="pillar-content">
                <h3>Connecting Employers With Qualified Talent</h3>
                <p>
                  Our mission is to connect employers with qualified talent and
                  job seekers with genuine career opportunities through
                  professional, transparent and structured recruitment services.
                </p>
              </div>
              <div className="pillar-bottom-edge"></div>
            </div>

            <div className="purpose-pillar-card">
              <div className="pillar-watermark-num">02</div>
              <div className="pillar-header-group">
                <span className="pillar-pill-label">OUR VISION</span>
                <span className="pillar-step-code">PHASE / 02</span>
              </div>
              <div className="pillar-content">
                <h3>Building Trusted Recruitment Connections</h3>
                <p>
                  Our vision is to become a trusted recruitment partner across
                  international and domestic markets by creating reliable
                  connections between organisations and talented professionals.
                </p>
              </div>
              <div className="pillar-bottom-edge"></div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          APPROACH (INTERACTIVE WORKFLOW PIPELINE)
      ===================================================== */}
      <section className="about-section about-approach-section">
        <div className="approach-section-top">
          <div className="about-eyebrow-badge">
            <span className="about-eyebrow-accent-dot"></span>
            <p className="about-eyebrow">OUR APPROACH</p>
          </div>

          <h2>
            Simple process.
            <span> Professional results.</span>
          </h2>

          <p className="approach-header-desc">
            Our recruitment approach is designed to keep the journey clear,
            structured and focused from the initial requirement through
            successful joining.
          </p>
        </div>

        <div className="approach-pipeline-grid">
          {approach.map((item) => {
            const Icon = item.icon;

            return (
              <div className="approach-pipeline-step" key={item.number}>
                <div className="step-watermark-bg">{item.number}</div>
                
                <div className="pipeline-step-head">
                  <span className="pipeline-step-badge">STEP {item.number}</span>
                  <div className="pipeline-icon-pod">
                    <Icon size={19} />
                  </div>
                </div>

                <div className="pipeline-step-body">
                  <h3 className="pipeline-step-title">{item.title}</h3>
                  <p className="pipeline-step-desc">{item.text}</p>
                </div>

                <div className="pipeline-step-footer">
                  <span className="step-footer-indicator">EXECUTION</span>
                  <div className="step-footer-arrow">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          GLOBAL REACH (EXECUTIVE GLOBAL TERMINAL)
      ===================================================== */}
      <section className="about-reach-terminal-section">
        <div className="about-reach-terminal-inner">

          <div className="reach-terminal-left">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow terminal-eyebrow">OUR REACH</p>
            </div>

            <h2>
              Across industries.
              <span> Across markets.</span>
            </h2>

            <p className="reach-terminal-desc">
              RAGAS CAREER WORLD supports recruitment requirements across
              diverse industries, helping employers and professionals connect
              across domestic and international markets.
            </p>

            <div className="reach-terminal-metric-card">
              <div className="metric-accent-stripe"></div>
              <div className="metric-content">
                <strong>40+</strong>
                <span>Industries Covered</span>
              </div>
            </div>
          </div>

          <div className="reach-terminal-right">
            <div className="terminal-industries-box">
              <div className="terminal-box-header">
                <span className="header-title">SECTORS & DOMAINS</span>
                <span className="header-counter">INDEX: 01 — 12</span>
              </div>

              <div className="terminal-industries-grid">
                {industries.map((industry, index) => (
                  <div className="terminal-industry-pill" key={index}>
                    <span className="terminal-pill-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="terminal-pill-name">{industry}</p>

                    <div className="terminal-pill-check">
                      <Check size={12} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          LEADERSHIP (BOARDROOM GALLERY)
      ===================================================== */}
      <section className="about-section leadership-gallery-section">
        <div className="leadership-gallery-header">
          <div className="leadership-gallery-title-col">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow">LEADERSHIP</p>
            </div>

            <h2>
              Experienced
              <span> leadership.</span>
            </h2>
          </div>

          <p className="leadership-gallery-desc">
            Strategic direction, recruitment expertise and professional
            standards come together to support our recruitment services.
          </p>
        </div>

        <div className="leadership-gallery-grid">
          {leaders.map((leader, index) => (
            <div className="leader-executive-card" key={index}>
              <div className="leader-executive-media">
                <div className="leader-media-frame">
                  <img src={leader.image} alt={leader.role} />
                </div>
                <div className="leader-badge-num">0{index + 1}</div>
              </div>

              <div className="leader-executive-info">
                <span className="leader-executive-label">EXECUTIVE MANAGEMENT</span>
                <h3>{leader.role}</h3>
                <p>{leader.text}</p>
              </div>

              <div className="leader-executive-bottom">
                <span className="executive-view-label">LEADERSHIP PROFILE</span>
                <div className="executive-arrow-link">
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          JOURNEY (CHRONO-TRACK STEPPER)
      ===================================================== */}
      <section className="about-section about-journey-section">
        <div className="journey-heading-wrap">
          <div className="about-eyebrow-badge">
            <span className="about-eyebrow-accent-dot"></span>
            <p className="about-eyebrow">OUR JOURNEY</p>
          </div>

          <h2>
            Growing with employers
            <span> & job seekers.</span>
          </h2>
        </div>

        <div className="journey-chrono-track">
          <div className="journey-track-stem"></div>

          <div className="chrono-card-row">
            <div className="chrono-badge-anchor">
              <div className="chrono-pulse-ring">
                <span className="chrono-pulse-core"></span>
              </div>
              <span className="chrono-badge-text">2010</span>
            </div>
            <div className="chrono-info-tile">
              <div className="chrono-tile-header">
                <h3>Foundation</h3>
                <span className="chrono-sub-tag">RCW / EST</span>
              </div>
              <p>
                RAGAS CAREER WORLD begins its journey with a focus on
                professional recruitment services.
              </p>
            </div>
          </div>

          <div className="chrono-card-row">
            <div className="chrono-badge-anchor">
              <div className="chrono-pulse-ring">
                <span className="chrono-pulse-core"></span>
              </div>
              <span className="chrono-badge-text">GROWTH</span>
            </div>
            <div className="chrono-info-tile">
              <div className="chrono-tile-header">
                <h3>Expanding Recruitment</h3>
                <span className="chrono-sub-tag">CAPABILITY</span>
              </div>
              <p>
                Recruitment capabilities grow across multiple industries and
                professional hiring requirements.
              </p>
            </div>
          </div>

          <div className="chrono-card-row">
            <div className="chrono-badge-anchor">
              <div className="chrono-pulse-ring">
                <span className="chrono-pulse-core"></span>
              </div>
              <span className="chrono-badge-text">GLOBAL</span>
            </div>
            <div className="chrono-info-tile">
              <div className="chrono-tile-header">
                <h3>International Opportunities</h3>
                <span className="chrono-sub-tag">CROSS-BORDER</span>
              </div>
              <p>
                The recruitment network develops to support international
                career and workforce opportunities.
              </p>
            </div>
          </div>

          <div className="chrono-card-row">
            <div className="chrono-badge-anchor">
              <div className="chrono-pulse-ring">
                <span className="chrono-pulse-core"></span>
              </div>
              <span className="chrono-badge-text">TODAY</span>
            </div>
            <div className="chrono-info-tile">
              <div className="chrono-tile-header">
                <h3>40+ Industries</h3>
                <span className="chrono-sub-tag">NETWORK</span>
              </div>
              <p>
                Continuing to connect employers and talent across domestic and
                international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA (CORPORATE HORIZON)
      ===================================================== */}
      <section className="about-cta-horizon">
        <div className="about-cta-ambient-grid"></div>
        <div className="about-cta-horizon-inner">
          <div className="about-cta-horizon-content">
            <div className="about-eyebrow-badge">
              <span className="about-eyebrow-accent-dot"></span>
              <p className="about-eyebrow cta-horizon-eyebrow">LET'S CONNECT</p>
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

          <div className="about-cta-horizon-actions">
            <a href="/current-openings" className="about-cta-primary-btn">
              <span>Explore Opportunities</span>
              <ArrowRight size={15} />
            </a>

            <a href="/contact" className="about-cta-secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;