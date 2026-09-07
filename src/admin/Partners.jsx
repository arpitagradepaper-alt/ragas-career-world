import "./Partners.css";

const partners = [
  {
    id: "PT-1024",
    company: "TalentBridge Consultants",
    type: "Recruitment Consultancy",
    contact: "Rohit Mehta",
    email: "rohit@talentbridge.com",
    specialization: "IT & Engineering",
    geography: "India",
    status: "Verified",
  },
  {
    id: "PT-1023",
    company: "GlobalHire Solutions",
    type: "Overseas Recruitment",
    contact: "Sara Khan",
    email: "sara@globalhire.com",
    specialization: "Healthcare & Gulf",
    geography: "India + GCC",
    status: "Pending",
  },
  {
    id: "PT-1022",
    company: "CareerLink Associates",
    type: "Staffing Partner",
    contact: "Ankit Sharma",
    email: "ankit@careerlink.in",
    specialization: "Manufacturing",
    geography: "Pan India",
    status: "Verified",
  },
  {
    id: "PT-1021",
    company: "Prime Recruiters",
    type: "Recruitment Consultancy",
    contact: "Neha Kapoor",
    email: "neha@primerecruiters.com",
    specialization: "Finance & Sales",
    geography: "India",
    status: "Pending",
  },
  {
    id: "PT-1020",
    company: "WorkForce Global",
    type: "Overseas Recruitment",
    contact: "Aman Verma",
    email: "aman@workforceglobal.com",
    specialization: "Construction",
    geography: "India + UAE",
    status: "Verified",
  },
];

function Partners() {
  return (
    <div className="partners-page">

      <div className="partners-heading">
        <div>
          <p className="partners-eyebrow">PARTNER MANAGEMENT</p>
          <h2>Partners</h2>
          <span>
            Manage recruitment partners, verification and collaboration details.
          </span>
        </div>

        <button className="partners-add-btn">
          + Add Partner
        </button>
      </div>

      <div className="partners-stats">

        <div className="partner-stat">
          <span>Total Partners</span>
          <strong>428</strong>
          <small>Registered partners</small>
        </div>

        <div className="partner-stat">
          <span>Verified Partners</span>
          <strong>362</strong>
          <small>84.6% verified</small>
        </div>

        <div className="partner-stat">
          <span>Pending Verification</span>
          <strong>66</strong>
          <small>Requires admin review</small>
        </div>

        <div className="partner-stat">
          <span>Active Collaborations</span>
          <strong>184</strong>
          <small>Currently active</small>
        </div>

      </div>

      <section className="partners-card">

        <div className="partners-toolbar">

          <div className="partners-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search company, contact or email..."
            />
          </div>

          <select>
            <option>All Partner Types</option>
            <option>Recruitment Consultancy</option>
            <option>Overseas Recruitment</option>
            <option>Staffing Partner</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

          <button className="partners-filter-btn">
            Filter
          </button>

        </div>

        <div className="partners-table-wrapper">

          <table className="partners-table">

            <thead>
              <tr>
                <th>Partner</th>
                <th>Type</th>
                <th>Contact</th>
                <th>Specialization</th>
                <th>Geography</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {partners.map((partner) => (
                <tr key={partner.id}>

                  <td>
                    <div className="partner-company">
                      <div className="partner-avatar">
                        {partner.company.charAt(0)}
                      </div>

                      <div>
                        <strong>{partner.company}</strong>
                        <span>{partner.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>{partner.type}</td>

                  <td>
                    <div className="partner-contact">
                      <strong>{partner.contact}</strong>
                      <span>{partner.email}</span>
                    </div>
                  </td>

                  <td>{partner.specialization}</td>

                  <td>{partner.geography}</td>

                  <td>
                    <span
                      className={`partner-status ${
                        partner.status === "Verified"
                          ? "verified"
                          : "pending"
                      }`}
                    >
                      {partner.status}
                    </span>
                  </td>

                  <td>
                    <button className="partner-view-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <div className="partners-pagination">
          <span>Showing 1–5 of 428 partners</span>

          <div>
            <button>‹</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>›</button>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Partners;