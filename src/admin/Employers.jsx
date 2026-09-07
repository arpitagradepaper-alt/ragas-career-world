import "./Employers.css";

const employers = [
  {
    id: "EMP-2041",
    company: "TechNova Pvt Ltd",
    industry: "IT & Software",
    contact: "Rahul Mehta",
    email: "hr@technova.com",
    jobs: 18,
    status: "Verified",
  },
  {
    id: "EMP-2040",
    company: "Global Infra Solutions",
    industry: "Engineering",
    contact: "Priya Shah",
    email: "careers@globalinfra.com",
    jobs: 12,
    status: "Verified",
  },
  {
    id: "EMP-2039",
    company: "MedCare International",
    industry: "Healthcare",
    contact: "Anita Verma",
    email: "hr@medcare.com",
    jobs: 9,
    status: "Pending",
  },
  {
    id: "EMP-2038",
    company: "Royal Hospitality Group",
    industry: "Hospitality",
    contact: "Mohammed Ali",
    email: "jobs@royalgroup.com",
    jobs: 24,
    status: "Verified",
  },
  {
    id: "EMP-2037",
    company: "BuildRight Constructions",
    industry: "Construction",
    contact: "Sanjay Kapoor",
    email: "hr@buildright.com",
    jobs: 7,
    status: "Pending",
  },
  {
    id: "EMP-2036",
    company: "FinEdge Services",
    industry: "Finance",
    contact: "Neha Jain",
    email: "careers@finedge.com",
    jobs: 14,
    status: "Verified",
  },
];

function Employers() {
  return (
    <div className="employers-page">

      <div className="employers-heading">
        <div>
          <p>EMPLOYER MANAGEMENT</p>
          <h2>Employers</h2>
          <span>
            Verify companies, manage employer profiles and monitor their
            recruitment activity.
          </span>
        </div>

        <button className="add-employer-btn">
          + Add Employer
        </button>
      </div>

      {/* STATS */}

      <div className="employer-stats">

        <div className="employer-stat">
          <span>Total Employers</span>
          <strong>1,842</strong>
          <small>Registered companies</small>
        </div>

        <div className="employer-stat">
          <span>Verified</span>
          <strong>1,624</strong>
          <small>88.2% verified</small>
        </div>

        <div className="employer-stat">
          <span>Pending Verification</span>
          <strong>218</strong>
          <small>Requires admin review</small>
        </div>

        <div className="employer-stat">
          <span>Active Job Posts</span>
          <strong>214</strong>
          <small>Across all employers</small>
        </div>

      </div>

      {/* TABLE CARD */}

      <section className="employers-card">

        <div className="employer-toolbar">

          <div className="employer-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search company, contact or employer ID..."
            />
          </div>

          <select>
            <option>All Industries</option>
            <option>IT & Software</option>
            <option>Engineering</option>
            <option>Healthcare</option>
            <option>Hospitality</option>
            <option>Construction</option>
            <option>Finance</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

          <button className="employer-filter-btn">
            Filter
          </button>

        </div>

        <div className="employers-table-wrapper">

          <table className="employers-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Industry</th>
                <th>Contact Person</th>
                <th>Email</th>
                <th>Jobs</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {employers.map((employer) => (
                <tr key={employer.id}>

                  <td>
                    <div className="employer-company">

                      <div className="company-avatar">
                        {employer.company
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <strong>{employer.company}</strong>
                        <small>{employer.id}</small>
                      </div>

                    </div>
                  </td>

                  <td>{employer.industry}</td>

                  <td>{employer.contact}</td>

                  <td>
                    <span className="employer-email">
                      {employer.email}
                    </span>
                  </td>

                  <td>
                    <strong className="job-count">
                      {employer.jobs}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={`employer-status ${
                        employer.status.toLowerCase()
                      }`}
                    >
                      {employer.status}
                    </span>
                  </td>

                  <td>
                    <button className="employer-view-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}

        <div className="employer-pagination">

          <span>
            Showing 1–6 of 1,842 employers
          </span>

          <div>
            <button>‹</button>
            <button className="employer-page-active">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>307</button>
            <button>›</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Employers;