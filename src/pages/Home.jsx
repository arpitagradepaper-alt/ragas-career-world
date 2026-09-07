import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Laptop,
  Landmark,
  Plane,
  House,
  Heart,
  Factory,
  Check,
  Building2,
  GraduationCap,
  Car,
  Utensils,
  ShoppingBag,
  Truck,
  BriefcaseBusiness,
  Wrench,
  Radio,
  ShieldCheck,
  Construction,
  Stethoscope,
  Pill,
  Hotel,
  Ship,
  Zap,
  Wheat,
  Package,
  Smartphone,
  Scale,
  Megaphone,
  Users,
  Globe,
  HardHat,
  Settings,
  FlaskConical,
  Database,
  Palette,
  Film,
  Store,
  Coins,
  Cpu,
} from "lucide-react";

import homeRecruitment from "../assets/home-recruitment.png";

import "./Home.css";


/* =========================================
   INDUSTRIES
========================================= */

const industries = [
  { icon: Laptop, title: "Information Technology" },
  { icon: Landmark, title: "Banking & Financial Services" },
  { icon: Plane, title: "Aviation & Airports" },
  { icon: House, title: "Hospitality & Hotels" },
  { icon: Heart, title: "Healthcare & Hospitals" },
  { icon: Factory, title: "Manufacturing" },
  { icon: GraduationCap, title: "Education & Training" },
  { icon: Car, title: "Automotive" },
  { icon: Utensils, title: "Food & Beverage" },
  { icon: ShoppingBag, title: "Retail & E-commerce" },
  { icon: Truck, title: "Logistics & Transportation" },
  { icon: BriefcaseBusiness, title: "Business Services" },
  { icon: Wrench, title: "Engineering Services" },
  { icon: Radio, title: "Telecommunications" },
  { icon: ShieldCheck, title: "Security Services" },
  { icon: Construction, title: "Construction" },
  { icon: Stethoscope, title: "Medical Services" },
  { icon: Pill, title: "Pharmaceuticals" },
  { icon: Hotel, title: "Travel & Tourism" },
  { icon: Ship, title: "Shipping & Maritime" },
  { icon: Zap, title: "Energy & Utilities" },
  { icon: Wheat, title: "Agriculture & Agribusiness" },
  { icon: Package, title: "Warehousing" },
  { icon: Smartphone, title: "Digital & Technology" },
  { icon: Scale, title: "Legal Services" },
  { icon: Megaphone, title: "Media & Advertising" },
  { icon: Users, title: "Human Resources" },
  { icon: Globe, title: "International Trade" },
  { icon: HardHat, title: "Oil & Gas" },
  { icon: Settings, title: "Industrial Services" },
  { icon: FlaskConical, title: "Research & Development" },
  { icon: Database, title: "Data & Analytics" },
  { icon: Palette, title: "Design & Creative" },
  { icon: Film, title: "Entertainment" },
  { icon: Store, title: "Consumer Goods" },
  { icon: Coins, title: "Insurance" },
  { icon: Building2, title: "Real Estate" },
  { icon: Cpu, title: "Electronics & Semiconductors" },
  { icon: Factory, title: "Textiles & Apparel" },
  { icon: Building2, title: "Government & Public Sector" },
];


/* =========================================
   CURRENT JOBS
========================================= */

const jobs = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    category: "IT & Software",
    location: "Bengaluru, India",
    type: "Full-time",
  },
  {
    id: "registered-nurse-gulf",
    title: "Registered Nurse — Gulf",
    category: "Healthcare",
    location: "Dubai, UAE",
    type: "Overseas",
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    category: "Banking & Finance",
    location: "Mumbai, India",
    type: "Full-time",
  },
];


function Home() {
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const navigate = useNavigate();


  /* =========================================
     VISIBLE INDUSTRIES
  ========================================= */

  const visibleIndustries = showAllIndustries
    ? industries
    : industries.slice(0, 6);


  /* =========================================
     APPLY
  ========================================= */

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };


  return (
    <main className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="home-hero">

        {/* Decorative background circle */}
        <div className="hero-decoration"></div>


        {/* =====================================
            HERO IMAGE
        ===================================== */}

        <div className="hero-image-frame">

          <div className="hero-image-inner">
            <img
              src={homeRecruitment}
              alt="Global recruitment and talent management"
            />
          </div>


          {/* Floating placement badge */}
          <div className="hero-image-badge">
            <strong>1000+</strong>
            <span>Successful Placements</span>
          </div>

        </div>


        {/* =====================================
            HERO CONTENT
        ===================================== */}

        <div className="home-hero-content">

          <p className="hero-eyebrow">
            GLOBAL & PAN-INDIA RECRUITMENT
          </p>


          <h1>
            Connecting employers with qualified
            <br />
            talent, worldwide.
          </h1>


          <p className="hero-text">
            International and domestic recruitment across 40+ industries —
            for job seekers building careers and employers hiring verified
            talent.
          </p>


          {/* =====================================
              JOB SEARCH
          ===================================== */}

          <div className="job-search">

            <div className="search-field">
              <input
                type="text"
                placeholder="Job title or keyword"
              />
            </div>


            <div className="search-field">
              <input
                type="text"
                placeholder="Country / Location"
              />
            </div>


            <div className="search-field">
              <input
                type="text"
                placeholder="Industry"
              />
            </div>


            <button
              type="button"
              className="search-button"
              onClick={() => navigate("/")}
            >
              <Search size={17} />
              Search Jobs
            </button>

          </div>


          {/* =====================================
              HERO STATS
          ===================================== */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>40+</strong>
              <span>Industries</span>
            </div>


            <div className="hero-stat">
              <strong>18</strong>
              <span>Countries Served</span>
            </div>


            <div className="hero-stat">
              <strong>1000+</strong>
              <span>Placements</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          INDUSTRIES
      ========================================= */}

      <section className="industries-section">

        <div className="section-top">

          <div>

            <p className="section-eyebrow">
              FEATURED VERTICALS
            </p>

            <h2>
              Industries We Serve
            </h2>

          </div>


          <button
            type="button"
            className="outline-button"
            onClick={() =>
              setShowAllIndustries(!showAllIndustries)
            }
          >
            {showAllIndustries
              ? "Show less"
              : "View all 40 industries"}
          </button>

        </div>


        <div
          className={`industry-grid ${
            showAllIndustries
              ? "industry-grid-expanded"
              : ""
          }`}
        >

          {visibleIndustries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <div
                className="industry-card"
                key={index}
              >

                <div className="industry-icon">
                  <Icon size={19} />
                </div>


                <h3>
                  {industry.title}
                </h3>


                <a href="#current-openings">
                  View Openings →
                </a>

              </div>
            );

          })}

        </div>

      </section>


      {/* =========================================
          CURRENT VACANCIES
      ========================================= */}

      <section className="openings-section">

        <div className="openings-left">

          <p className="section-eyebrow">
            LATEST OPENINGS
          </p>


          <h2>
            Current Vacancies
          </h2>


          <div className="jobs-list">

            {jobs.map((job) => (

              <div
                className="job-card"
                key={job.id}
              >

                <div className="job-info">

                  <h3>
                    {job.title}
                  </h3>

                  <p>
                    {job.category}
                    <span>•</span>
                    {job.location}
                  </p>

                </div>


                <div className="job-action">

                  <span className="job-type">
                    {job.type}
                  </span>


                  <button
                    type="button"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================
            WHY CHOOSE US
        ===================================== */}

        <aside className="why-card">

          <p className="section-eyebrow">
            WHY CHOOSE US
          </p>


          <h2>
            Trusted, verified, global.
          </h2>


          <ul>

            <li>
              <Check size={13} />

              <span>
                Verified employers & partner network
              </span>
            </li>


            <li>
              <Check size={13} />

              <span>
                Visa & immigration guidance included
              </span>
            </li>


            <li>
              <Check size={13} />

              <span>
                24/7 AI chatbot + live human support
              </span>
            </li>


            <li>
              <Check size={13} />

              <span>
                Track your application in real time
              </span>
            </li>

          </ul>


          <button
            type="button"
            className="resume-button"
            onClick={() => {
              const element =
                document.getElementById("upload-resume");

              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Upload Your Resume
          </button>

        </aside>

      </section>

    </main>
  );
}

export default Home;