import "./Jobs.css";

const jobs = [
  {
    id: "JOB-5084",
    title: "Senior Software Engineer",
    company: "TechNova Pvt Ltd",
    location: "Dubai, UAE",
    industry: "IT & Software",
    applicants: 48,
    status: "Published",
  },
  {
    id: "JOB-5083",
    title: "Registered Nurse",
    company: "MedCare International",
    location: "Doha, Qatar",
    industry: "Healthcare",
    applicants: 32,
    status: "Pending",
  },
  {
    id: "JOB-5082",
    title: "Civil Project Manager",
    company: "Global Infra Solutions",
    location: "Riyadh, Saudi Arabia",
    industry: "Engineering",
    applicants: 27,
    status: "Published",
  },
  {
    id: "JOB-5081",
    title: "Hotel Operations Manager",
    company: "Royal Hospitality Group",
    location: "Abu Dhabi, UAE",
    industry: "Hospitality",
    applicants: 19,
    status: "Pending",
  },
  {
    id: "JOB-5080",
    title: "Financial Analyst",
    company: "FinEdge Services",
    location: "Mumbai, India",
    industry: "Finance",
    applicants: 41,
    status: "Published",
  },
  {
    id: "JOB-5079",
    title: "Construction Supervisor",
    company: "BuildRight Constructions",
    location: "Pune, India",
    industry: "Construction",
    applicants: 16,
    status: "Rejected",
  },
];

function Jobs() {
  return (
    <div className="jobs-admin-page">

      <div className="jobs-admin-heading">
        <div>
          <p>JOB MANAGEMENT</p>
          <h2>Job Posts</h2>
          <span>
            Review, approve and manage job vacancies submitted by employers.
          </span>
        </div>

        <button className="add-job-btn">
          + Add Job
        </button>
      </div>

      <div className="job-admin-stats">

        <div>
          <span>Total Jobs</span>
          <strong>3,842</strong>
          <small>All job postings</small>
        </div>

        <div>
          <span>Published</span>
          <strong>214</strong>
          <small>Currently live</small>
        </div>

        <div>
          <span>Pending Approval</span>
          <strong>27</strong>
          <small>Requires review</small>
        </div>

        <div>
          <span>Total Applicants</span>
          <strong>18,426</strong>
          <small>Across active jobs</small>
        </div>

      </div>

      <section className="jobs-admin-card">

        <div className="jobs-admin-toolbar">

          <div className="jobs-admin-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search job title, company or job ID..."
            />
          </div>

          <select>
            <option>All Industries</option>
            <option>IT & Software</option>
            <option>Healthcare</option>
            <option>Engineering</option>
            <option>Hospitality</option>
            <option>Finance</option>
            <option>Construction</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Published</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

          <button className="jobs-filter-btn">
            Filter
          </button>

        </div>

        <div className="jobs-table-wrapper">

          <table className="jobs-admin-table">

            <thead>
              <tr>
                <th>Job</th>
                <th>Employer</th>
                <th>Location</th>
                <th>Industry</th>
                <th>Applicants</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {jobs.map((job) => (
                <tr key={job.id}>

                  <td>
                    <div className="job-title-cell">
                      <strong>{job.title}</strong>
                      <small>{job.id}</small>
                    </div>
                  </td>

                  <td>{job.company}</td>

                  <td>{job.location}</td>

                  <td>{job.industry}</td>

                  <td>
                    <strong className="applicant-count">
                      {job.applicants}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={`job-admin-status ${job.status.toLowerCase()}`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td>
                    <button className="job-view-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="jobs-pagination">

          <span>
            Showing 1–6 of 3,842 jobs
          </span>

          <div>
            <button>‹</button>
            <button className="jobs-page-active">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>641</button>
            <button>›</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Jobs;