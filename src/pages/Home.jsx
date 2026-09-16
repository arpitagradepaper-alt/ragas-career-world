import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

import HomeAbout from "./HomeAbout";
import Services from "./Services";
import InternationalJobs from "./InternationalJobs";
import DomesticJobs from "./DomesticJobs";
import CurrentOpenings from "./CurrentOpenings";
import Employers from "./Employers";
import JobSeekers from "./JobSeekers";
import UploadResume from "./UploadResume";
import PostAJob from "./PostAJob";
import PartnerWithUs from "./PartnerWithUs";
import RecruitmentProcess from "./RecruitmentProcess";
import VisaSupport from "./VisaSupport";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Careers from "./Careers";

import homeRecruitment from "../assets/home-recruitment.png";

import "./Home.css";

export function Home() {
  const navigate = useNavigate();

  const isUserLoggedIn =
    localStorage.getItem("ragasUserLoggedIn") === "true" ||
    sessionStorage.getItem("ragasUserLoggedIn") === "true";

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return undefined;

    const timer = window.setTimeout(() => {
      const section = document.getElementById(sectionId);
      const navbar = document.querySelector(".navbar");

      if (!section) return;

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 0;

      window.scrollTo({
        top: Math.max(
          0,
          section.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight
        ),
        behavior: "smooth",
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".home-page > .page-slide"
    );

    if (!sections.length) return;

    const handleScroll = () => {
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const distance = Math.abs(rect.top - 80);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        window.dispatchEvent(
          new CustomEvent("homeSectionChange", {
            detail: closestSection.id,
          })
        );
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleSearch = () => {
    navigate("/current-openings");
  };

  return (
    <main className="home-page">

      {/* HOME */}

      <section
        id="home"
        className="page-slide home-home-slide"
      >
        <div className="home-hero">

          <div className="hero-decoration"></div>

          <div className="hero-image-frame">
            <div className="hero-image-inner">
              <img
                src={homeRecruitment}
                alt="Global and Pan-India Recruitment"
              />
            </div>

            <div className="hero-image-badge">
              <strong>1000+</strong>
              <span>Successful Placements</span>
            </div>
          </div>

          <div className="home-hero-content">

            <p className="hero-eyebrow">
              GLOBAL & PAN-INDIA RECRUITMENT
            </p>

            <h1>
              Connecting employers with qualified talent,
              worldwide.
            </h1>

            <p className="hero-text">
              International and domestic recruitment
              across 40+ industries — for job seekers
              building careers and employers hiring
              verified talent.
            </p>

            <div className="job-search">

              <div className="search-field">
                <BriefcaseBusiness size={16} />

                <input
                  type="text"
                  placeholder="Job title or keyword"
                />
              </div>

              <div className="search-field">
                <MapPin size={16} />

                <input
                  type="text"
                  placeholder="Country or Location"
                />
              </div>

              <div className="search-field">
                <Building2 size={16} />

                <input
                  type="text"
                  placeholder="Industry"
                />
              </div>

              <button
                type="button"
                className="search-button"
                onClick={handleSearch}
              >
                <Search size={15} />
                Search Jobs
              </button>

            </div>

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
        </div>
      </section>

      {/* CURRENT OPENINGS */}

      {isUserLoggedIn && (
        <section
          id="current-openings"
          className="page-slide home-existing-section"
        >
          <CurrentOpenings />
        </section>
      )}

      {/* ABOUT */}

      <section
        id="about"
        className="page-slide home-existing-section"
      >
        <HomeAbout />
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="page-slide home-existing-section"
      >
        <Services />
      </section>

      {/* INTERNATIONAL JOBS */}

      <section
        id="international-jobs"
        className="page-slide home-existing-section"
      >
        <InternationalJobs />
      </section>

      {/* DOMESTIC JOBS */}

      <section
        id="domestic-jobs"
        className="page-slide home-existing-section"
      >
        <DomesticJobs />
      </section>

      {/* EMPLOYERS */}

      <section
        id="employers"
        className="page-slide home-existing-section"
      >
        <Employers />
      </section>

      {/* JOB SEEKERS */}

      <section
        id="job-seekers"
        className="page-slide home-existing-section"
      >
        <JobSeekers />
      </section>

      {/* POST A JOB */}

      {isUserLoggedIn && (
        <section
          id="post-a-job"
          className="page-slide home-existing-section"
        >
          <PostAJob />
        </section>
      )}

      {/* PARTNER WITH US */}

      <section
        id="partner-with-us"
        className="page-slide home-existing-section"
      >
        <PartnerWithUs />
      </section>

      {/* RECRUITMENT PROCESS */}

      <section
        id="recruitment-process"
        className="page-slide home-existing-section"
      >
        <RecruitmentProcess />
      </section>

      {/* VISA & IMMIGRATION */}

      <section
        id="visa-immigration"
        className="page-slide home-existing-section"
      >
        <VisaSupport />
      </section>

      {/* BLOG */}

      <section
        id="blog"
        className="page-slide home-existing-section"
      >
        <Blog />
      </section>

      {/* TESTIMONIALS */}

      <section
        id="testimonials"
        className="page-slide home-existing-section"
      >
        <Testimonials />
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="page-slide home-existing-section"
      >
        <Contact />
      </section>

      {/* CAREERS */}

      <section
        id="careers"
        className="page-slide home-existing-section"
      >
        <Careers />
      </section>

    </main>
  );
}

export default Home;
