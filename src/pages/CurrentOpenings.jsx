import {
  Search,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./CurrentOpenings.css";

const jobs = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    category: "IT & Software",
    location: "Bengaluru, India",
    salary: "₹18–28 LPA",
    type: "Full-time",
  },
  {
    id: "registered-nurse-gulf",
    title: "Registered Nurse",
    category: "Healthcare",
    location: "Dubai, UAE",
    salary: "AED 6,000–8,500",
    type: "Overseas",
  },
  {
    id: "airport-ground-staff-doha",
    title: "Airport Ground Staff",
    category: "Aviation",
    location: "Doha, Qatar",
    salary: "QAR 3,500–5,000",
    type: "Overseas",
  },
  {
    id: "financial-analyst-mumbai",
    title: "Financial Analyst",
    category: "Banking & Finance",
    location: "Mumbai, India",
    salary: "₹9–14 LPA",
    type: "Full-time",
  },
  {
    id: "hotel-operations-manager-riyadh",
    title: "Hotel Operations Manager",
    category: "Hospitality",
    location: "Riyadh, KSA",
    salary: "SAR 9,000–12,000",
    type: "Overseas",
  },
  {
    id: "production-supervisor-pune",
    title: "Production Supervisor",
    category: "Manufacturing",
    location: "Pune, India",
    salary: "₹6–9 LPA",
    type: "Full-time",
  },
];

function CurrentOpenings() {
  const navigate = useNavigate();

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <main className="openings-page">

      <section className="openings-main">

        <aside className="openings-filters">

          <p className="filter-eyebrow">
            FILTER RESULTS
          </p>

          <h2>
            Advanced Search
          </h2>

          <label>
            Keyword
          </label>

          <input
            type="text"
            placeholder="Select keyword"
          />

          <label>
            Location / Country
          </label>

          <input
            type="text"
            placeholder="Select location / country"
          />

          <label>
            Industry
          </label>

          <input
            type="text"
            placeholder="Select industry"
          />

          <label>
            Experience Level
          </label>

          <input
            type="text"
            placeholder="Select experience level"
          />

          <label>
            Salary Range
          </label>

          <input
            type="text"
            placeholder="Select salary range"
          />

          <button className="apply-filters">
            <Search size={14} />
            Apply Filters
          </button>

        </aside>

        <section className="openings-results">

          <div className="results-heading">

            <h1>
              Current Openings — 214 roles
            </h1>

            <span className="sort-text">
              Sort: Newest first ↓
            </span>

          </div>

          <div className="opening-job-list">

            {jobs.map((job) => (

              <div
                className="opening-job-card"
                key={job.id}
              >

                <div className="opening-job-info">

                  <div className="opening-job-icon">
                    <Briefcase size={16} />
                  </div>

                  <div>

                    <h3>
                      {job.title}
                    </h3>

                    <p>
                      {job.category}

                      <span>•</span>

                      <MapPin size={11} />

                      {job.location}
                    </p>

                  </div>

                </div>

                <div className="opening-job-right">

                  <strong>
                    {job.salary}
                  </strong>

                  <span className="opening-type">
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

        </section>

      </section>

    </main>
  );
}

export default CurrentOpenings;