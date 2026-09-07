import "./Resumes.css";

const resumes = [
  {
    id: "RES-7842",
    candidate: "Amit Sharma",
    email: "amit.sharma@email.com",
    skills: "React, Node.js, AWS",
    experience: "5 Years",
    location: "Mumbai",
    updated: "Today",
    status: "Active",
  },
  {
    id: "RES-7841",
    candidate: "Fatima Khan",
    email: "fatima.khan@email.com",
    skills: "Nursing, ICU, BLS",
    experience: "4 Years",
    location: "Delhi NCR",
    updated: "Today",
    status: "Active",
  },
  {
    id: "RES-7840",
    candidate: "Rahul Singh",
    email: "rahul.singh@email.com",
    skills: "Civil, AutoCAD, Project Management",
    experience: "7 Years",
    location: "Bengaluru",
    updated: "Yesterday",
    status: "Shortlisted",
  },
  {
    id: "RES-7839",
    candidate: "Neha Patel",
    email: "neha.patel@email.com",
    skills: "Accounting, SAP, Excel",
    experience: "3 Years",
    location: "Ahmedabad",
    updated: "2 days ago",
    status: "Active",
  },
  {
    id: "RES-7838",
    candidate: "Sanjay Mehta",
    email: "sanjay.mehta@email.com",
    skills: "Construction, Safety, Planning",
    experience: "9 Years",
    location: "Pune",
    updated: "3 days ago",
    status: "Placed",
  },
];

function Resumes() {
  return (
    <div className="resumes-page">

      <div className="resumes-heading">
        <div>
          <p>RESUME MANAGEMENT</p>
          <h2>Resume Database</h2>
          <span>
            Search, review and manage candidate resumes submitted through the
            RAGAS platform.
          </span>
        </div>

        <button className="resume-export-btn">
          ↓ Export Database
        </button>
      </div>

      <div className="resume-stats">

        <div className="resume-stat">
          <span>Total Resumes</span>
          <strong>8,426</strong>
          <small>All uploaded resumes</small>
        </div>

        <div className="resume-stat">
          <span>Uploaded This Month</span>
          <strong>486</strong>
          <small>+18.2% from last month</small>
        </div>

        <div className="resume-stat">
          <span>Recently Updated</span>
          <strong>1,284</strong>
          <small>Updated in last 30 days</small>
        </div>

        <div className="resume-stat">
          <span>Shortlisted</span>
          <strong>742</strong>
          <small>Available for matching</small>
        </div>

      </div>

      <section className="resumes-card">

        <div className="resume-toolbar">

          <div className="resume-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search candidate, skill, email or resume ID..."
            />
          </div>

          <select>
            <option>All Industries</option>
            <option>IT & Software</option>
            <option>Healthcare</option>
            <option>Engineering</option>
            <option>Finance</option>
              <option>Construction</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Active</option>
            <option>Shortlisted</option>
            <option>Placed</option>
          </select>

          <button className="resume-filter-btn">
            Filter
          </button>

        </div>

        <div className="resumes-table-wrapper">

          <table className="resumes-table">

            <thead>
              <tr>
                <th>Candidate</th>
                <th>Skills</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Updated</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {resumes.map((resume) => (
                <tr key={resume.id}>

                  <td>
                    <div className="resume-candidate">

                      <div className="resume-avatar">
                        {resume.candidate
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <strong>{resume.candidate}</strong>
                        <small>{resume.id}</small>
                        <em>{resume.email}</em>
                      </div>

                    </div>
                  </td>

                  <td>
                    <div className="resume-skills">
                      {resume.skills}
                    </div>
                  </td>

                  <td>{resume.experience}</td>

                  <td>{resume.location}</td>

                  <td>{resume.updated}</td>

                  <td>
                    <span
                      className={`resume-status ${
                        resume.status.toLowerCase()
                      }`}
                    >
                      {resume.status}
                    </span>
                  </td>

                  <td>
                    <div className="resume-actions">
                      <button>View</button>
                      <button>↓</button>
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="resume-pagination">

          <span>
            Showing 1–5 of 8,426 resumes
          </span>

          <div>
            <button>‹</button>
            <button className="resume-page-active">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>1,686</button>
            <button>›</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Resumes;