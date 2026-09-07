import "./Candidates.css";

const candidates = [
  {
    id: "CAN-10284",
    name: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91 98765 43210",
    industry: "IT & Software",
    experience: "5 Years",
    location: "Mumbai",
    status: "Active",
  },
  {
    id: "CAN-10283",
    name: "Fatima Khan",
    email: "fatima.khan@email.com",
    phone: "+91 98765 12345",
    industry: "Healthcare",
    experience: "4 Years",
    location: "Delhi NCR",
    status: "Active",
  },
  {
    id: "CAN-10282",
    name: "Rahul Singh",
    email: "rahul.singh@email.com",
    phone: "+91 99887 66554",
    industry: "Engineering",
    experience: "7 Years",
    location: "Bengaluru",
    status: "Shortlisted",
  },
  {
    id: "CAN-10281",
    name: "Neha Patel",
    email: "neha.patel@email.com",
    phone: "+91 98761 22334",
    industry: "Finance",
    experience: "3 Years",
    location: "Ahmedabad",
    status: "Active",
  },
  {
    id: "CAN-10280",
    name: "Sanjay Mehta",
    email: "sanjay.mehta@email.com",
    phone: "+91 91234 56789",
    industry: "Construction",
    experience: "9 Years",
    location: "Pune",
    status: "Placed",
  },
  {
    id: "CAN-10279",
    name: "Priya Verma",
    email: "priya.verma@email.com",
    phone: "+91 90123 45678",
    industry: "Hospitality",
    experience: "2 Years",
    location: "Hyderabad",
    status: "Active",
  },
];

function Candidates() {
  return (
    <div className="candidates-page">

      <div className="candidates-heading">
        <div>
          <p>CANDIDATE MANAGEMENT</p>
          <h2>Candidates</h2>
          <span>
            Manage candidate profiles, applications, resumes and recruitment
            status.
          </span>
        </div>

        <button className="add-candidate-btn">
          + Add Candidate
        </button>
      </div>

      {/* STATS */}

      <div className="candidate-stats">

        <div className="candidate-stat">
          <span>Total Candidates</span>
          <strong>8,426</strong>
          <small>All registered profiles</small>
        </div>

        <div className="candidate-stat">
          <span>New This Month</span>
          <strong>286</strong>
          <small>+14.8% from last month</small>
        </div>

        <div className="candidate-stat">
          <span>Shortlisted</span>
          <strong>742</strong>
          <small>Currently shortlisted</small>
        </div>

        <div className="candidate-stat">
          <span>Placed</span>
          <strong>1,084</strong>
          <small>Total successful placements</small>
        </div>

      </div>

      {/* MAIN CARD */}

      <section className="candidates-card">

        <div className="candidate-toolbar">

          <div className="candidate-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search candidate, email or ID..."
            />
          </div>

          <select>
            <option>All Industries</option>
            <option>IT & Software</option>
            <option>Healthcare</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Construction</option>
            <option>Hospitality</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Active</option>
            <option>Shortlisted</option>
            <option>Placed</option>
          </select>

          <button className="candidate-filter-btn">
            Filter
          </button>

        </div>

        <div className="candidates-table-wrapper">

          <table className="candidates-table">

            <thead>
              <tr>
                <th>Candidate</th>
                <th>Contact</th>
                <th>Industry</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {candidates.map((candidate) => (
                <tr key={candidate.id}>

                  <td>
                    <div className="candidate-name">
                      <div className="candidate-avatar">
                        {candidate.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <strong>{candidate.name}</strong>
                        <small>{candidate.id}</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="candidate-contact">
                      <span>{candidate.email}</span>
                      <small>{candidate.phone}</small>
                    </div>
                  </td>

                  <td>{candidate.industry}</td>

                  <td>{candidate.experience}</td>

                  <td>{candidate.location}</td>

                  <td>
                    <span
                      className={`candidate-status ${
                        candidate.status.toLowerCase()
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>

                  <td>
                    <button className="candidate-view-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}

        <div className="candidate-pagination">

          <span>
            Showing 1–6 of 8,426 candidates
          </span>

          <div>
            <button>‹</button>
            <button className="candidate-page-active">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>1,405</button>
            <button>›</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Candidates;