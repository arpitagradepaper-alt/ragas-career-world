import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const slider = document.querySelector(".page-slider");

    if (!slider) return;

    const sections = slider.querySelectorAll(".page-slide");

    const handleScroll = () => {
      const sliderTop = slider.getBoundingClientRect().top;

      let currentSection = "home";
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const distance = Math.abs(
          section.getBoundingClientRect().top - sliderTop
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
        >
          <span className="logo-title">RAGAS</span>
          <span className="logo-subtitle">CAREER WORLD</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">

          {/* HOME */}
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>

          {/* ABOUT */}
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>

          {/* SERVICES */}
          <div className="navbar-dropdown">
            <button
              className={[
                "services-button",
                [
                  "services",
                  "international-jobs",
                  "domestic-jobs",
                  "recruitment-process",
                  "visa-immigration",
                ].includes(activeSection)
                  ? "active"
                  : "",
              ].join(" ")}
            >
              Services
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                Recruitment Services
              </a>

              <a
                href="#international-jobs"
                className={
                  activeSection === "international-jobs" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("international-jobs");
                }}
              >
                International Jobs
              </a>

              <a
                href="#domestic-jobs"
                className={
                  activeSection === "domestic-jobs" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("domestic-jobs");
                }}
              >
                Domestic Jobs
              </a>

              <a
                href="#recruitment-process"
                className={
                  activeSection === "recruitment-process"
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("recruitment-process");
                }}
              >
                Recruitment Process
              </a>

              <a
                href="#visa-immigration"
                className={
                  activeSection === "visa-immigration"
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("visa-immigration");
                }}
              >
                Visa Support
              </a>

            </div>
          </div>

          {/* JOBS */}
          <div className="navbar-dropdown">
            <button
              className={
                [
                  "international-jobs",
                  "domestic-jobs",
                  "current-openings",
                ].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              Jobs
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <a
                href="#international-jobs"
                className={
                  activeSection === "international-jobs"
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("international-jobs");
                }}
              >
                International Jobs
              </a>

              <a
                href="#domestic-jobs"
                className={
                  activeSection === "domestic-jobs" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("domestic-jobs");
                }}
              >
                Domestic Jobs
              </a>

              <a
                href="#current-openings"
                className={
                  activeSection === "current-openings"
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("current-openings");
                }}
              >
                Current Openings
              </a>

            </div>
          </div>

          {/* INDUSTRIES */}
          <a
            href="#industries"
            className={
              activeSection === "industries" ? "active" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("industries");
            }}
          >
            Industries
          </a>

          {/* CANDIDATES */}
          <div className="navbar-dropdown">
            <button
              className={
                [
                  "job-seekers",
                  "upload-resume",
                ].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              Candidates
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <a
                href="#job-seekers"
                className={
                  activeSection === "job-seekers" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("job-seekers");
                }}
              >
                For Candidates
              </a>

              <a
                href="#upload-resume"
                className={
                  activeSection === "upload-resume" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("upload-resume");
                }}
              >
                Upload Resume
              </a>

            </div>
          </div>

          {/* EMPLOYERS */}
          <div className="navbar-dropdown">
            <button
              className={
                [
                  "employers",
                  "post-a-job",
                  "partner-with-us",
                ].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              Employers
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <a
                href="#employers"
                className={
                  activeSection === "employers" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("employers");
                }}
              >
                For Employers
              </a>

              <a
                href="#post-a-job"
                className={
                  activeSection === "post-a-job" ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("post-a-job");
                }}
              >
                Post a Job
              </a>

              <a
                href="#partner-with-us"
                className={
                  activeSection === "partner-with-us"
                    ? "active"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("partner-with-us");
                }}
              >
                Partner With Us
              </a>

            </div>
          </div>

          {/* BLOG */}
          <a
            href="#blog"
            className={activeSection === "blog" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("blog");
            }}
          >
            Blog
          </a>

          {/* TESTIMONIALS */}
          <a
            href="#testimonials"
            className={
              activeSection === "testimonials" ? "active" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
            }}
          >
            Testimonials
          </a>

          {/* CAREERS */}
          <a
            href="#careers"
            className={
              activeSection === "careers" ? "active" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("careers");
            }}
          >
            Careers
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>

        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#job-seekers"
          className="navbar-cta"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("job-seekers");
          }}
        >
          Get Started
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setMobileDropdown(null);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          mobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>

        {/* SERVICES MOBILE */}
        <div className="mobile-dropdown">
          <button
            type="button"
            onClick={() => toggleMobileDropdown("services")}
          >
            Services
            <ChevronDown
              size={17}
              className={
                mobileDropdown === "services" ? "rotate-arrow" : ""
              }
            />
          </button>

          {mobileDropdown === "services" && (
            <div className="mobile-submenu">

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                Recruitment Services
              </a>

              <a
                href="#international-jobs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("international-jobs");
                }}
              >
                International Jobs
              </a>

              <a
                href="#domestic-jobs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("domestic-jobs");
                }}
              >
                Domestic Jobs
              </a>

              <a
                href="#recruitment-process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("recruitment-process");
                }}
              >
                Recruitment Process
              </a>

              <a
                href="#visa-immigration"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("visa-immigration");
                }}
              >
                Visa Support
              </a>

            </div>
          )}
        </div>

        {/* JOBS MOBILE */}
        <div className="mobile-dropdown">
          <button
            type="button"
            onClick={() => toggleMobileDropdown("jobs")}
          >
            Jobs
            <ChevronDown
              size={17}
              className={
                mobileDropdown === "jobs" ? "rotate-arrow" : ""
              }
            />
          </button>

          {mobileDropdown === "jobs" && (
            <div className="mobile-submenu">

              <a
                href="#international-jobs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("international-jobs");
                }}
              >
                International Jobs
              </a>

              <a
                href="#domestic-jobs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("domestic-jobs");
                }}
              >
                Domestic Jobs
              </a>

              <a
                href="#current-openings"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("current-openings");
                }}
              >
                Current Openings
              </a>

            </div>
          )}
        </div>

        <a
          href="#industries"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("industries");
          }}
        >
          Industries
        </a>

        {/* CANDIDATES MOBILE */}
        <div className="mobile-dropdown">
          <button
            type="button"
            onClick={() => toggleMobileDropdown("candidates")}
          >
            Candidates
            <ChevronDown
              size={17}
              className={
                mobileDropdown === "candidates"
                  ? "rotate-arrow"
                  : ""
              }
            />
          </button>

          {mobileDropdown === "candidates" && (
            <div className="mobile-submenu">

              <a
                href="#job-seekers"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("job-seekers");
                }}
              >
                For Candidates
              </a>

              <a
                href="#upload-resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("upload-resume");
                }}
              >
                Upload Resume
              </a>

            </div>
          )}
        </div>

        {/* EMPLOYERS MOBILE */}
        <div className="mobile-dropdown">
          <button
            type="button"
            onClick={() => toggleMobileDropdown("employers")}
          >
            Employers
            <ChevronDown
              size={17}
              className={
                mobileDropdown === "employers"
                  ? "rotate-arrow"
                  : ""
              }
            />
          </button>

          {mobileDropdown === "employers" && (
            <div className="mobile-submenu">

              <a
                href="#employers"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("employers");
                }}
              >
                For Employers
              </a>

              <a
                href="#post-a-job"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("post-a-job");
                }}
              >
                Post a Job
              </a>

              <a
                href="#partner-with-us"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("partner-with-us");
                }}
              >
                Partner With Us
              </a>

            </div>
          )}
        </div>

        <a
          href="#blog"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("blog");
          }}
        >
          Blog
        </a>

        <a
          href="#testimonials"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("testimonials");
          }}
        >
          Testimonials
        </a>

        <a
          href="#careers"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("careers");
          }}
        >
          Careers
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>

        {/* MOBILE CTA */}
        <button
          type="button"
          className="mobile-get-started"
          onClick={() => scrollToSection("job-seekers")}
        >
          Get Started
        </button>

      </div>
    </header>
  );
}

export default Navbar;