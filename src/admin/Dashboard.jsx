import "./Dashboard.css";

const conversations = [
  {
    id: "#RC-10284",
    user: "Amit R.",
    topic: "Dubai Jobs",
    status: "Live Agent",
    time: "2 min ago",
  },
  {
    id: "#RC-10283",
    user: "Fatima K.",
    topic: "Visa Support",
    status: "AI Resolved",
    time: "8 min ago",
  },
  {
    id: "#RC-10282",
    user: "Rahul S.",
    topic: "IT Jobs",
    status: "AI Resolved",
    time: "14 min ago",
  },
  {
    id: "#RC-10281",
    user: "Neha P.",
    topic: "Resume Upload",
    status: "Live Agent",
    time: "21 min ago",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* PAGE HEADING */}

      <div className="dashboard-heading">
        <div>
          <p className="dashboard-eyebrow">
            ADMIN OVERVIEW
          </p>

          <h2>Dashboard</h2>

          <span>
            Monitor recruitment activity, chatbot conversations
            and platform performance.
          </span>
        </div>

        <button className="dashboard-date">
          September 2026 ▾
        </button>
      </div>


      {/* STAT CARDS */}

      <div className="dashboard-stats">

        <div className="dashboard-stat">
          <div className="stat-top">
            <span>Total Conversations</span>
            <b>◫</b>
          </div>

          <strong>1,284</strong>

          <small>
            +12.4% from last month
          </small>
        </div>


        <div className="dashboard-stat">
          <div className="stat-top">
            <span>Live Agent Handoffs</span>
            <b>↗</b>
          </div>

          <strong>312</strong>

          <small>
            24.3% of conversations
          </small>
        </div>


        <div className="dashboard-stat">
          <div className="stat-top">
            <span>Profile Linked</span>
            <b>♙</b>
          </div>

          <strong>96%</strong>

          <small>
            Candidate / employer profiles
          </small>
        </div>


        <div className="dashboard-stat">
          <div className="stat-top">
            <span>Active Jobs</span>
            <b>▣</b>
          </div>

          <strong>214</strong>

          <small>
            Current published openings
          </small>
        </div>

      </div>


      {/* MAIN GRID */}

      <div className="dashboard-grid">

        {/* CHATBOT CARD */}

        <section className="dashboard-card chatbot-overview">

          <div className="card-heading">
            <div>
              <p>AI CHATBOT</p>
              <h3>Conversation Activity</h3>
            </div>

            <span className="online-label">
              <i></i>
              Live
            </span>
          </div>


          <div className="chatbot-chart">

            <div className="chart-value">
              <strong>1,284</strong>
              <span>conversations</span>
            </div>

            <div className="fake-chart">

              <div className="chart-line">
                <span style={{ height: "38%" }}></span>
                <span style={{ height: "52%" }}></span>
                <span style={{ height: "44%" }}></span>
                <span style={{ height: "68%" }}></span>
                <span style={{ height: "57%" }}></span>
                <span style={{ height: "78%" }}></span>
                <span style={{ height: "72%" }}></span>
                <span style={{ height: "91%" }}></span>
              </div>

            </div>

            <div className="chart-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

          </div>

        </section>


        {/* QUICK SUMMARY */}

        <section className="dashboard-card summary-card">

          <div className="card-heading">
            <div>
              <p>PLATFORM</p>
              <h3>Quick Summary</h3>
            </div>
          </div>

          <div className="summary-row">
            <span>New Candidates</span>
            <strong>86</strong>
          </div>

          <div className="summary-row">
            <span>New Employers</span>
            <strong>18</strong>
          </div>

          <div className="summary-row">
            <span>Jobs Pending Approval</span>
            <strong>27</strong>
          </div>

          <div className="summary-row">
            <span>Partner Registrations</span>
            <strong>12</strong>
          </div>

          <div className="summary-row">
            <span>Resumes Uploaded</span>
            <strong>143</strong>
          </div>

        </section>

      </div>


      {/* RECENT CONVERSATIONS */}

      <section className="dashboard-card recent-card">

        <div className="card-heading">

          <div>
            <p>RECENT ACTIVITY</p>
            <h3>Recent Chatbot Conversations</h3>
          </div>

          <a href="/admin/chatbot-logs">
            View All →
          </a>

        </div>


        <div className="dashboard-table-wrapper">

          <table className="dashboard-table">

            <thead>
              <tr>
                <th>Conversation</th>
                <th>User</th>
                <th>Topic</th>
                <th>Status</th>
                <th>Last Activity</th>
              </tr>
            </thead>

            <tbody>

              {conversations.map((item) => (
                <tr key={item.id}>

                  <td>
                    <strong>{item.id}</strong>
                  </td>

                  <td>
                    {item.user}
                  </td>

                  <td>
                    {item.topic}
                  </td>

                  <td>
                    <span
                      className={
                        item.status === "Live Agent"
                          ? "status-badge live"
                          : "status-badge resolved"
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    {item.time}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>


     

    </div>
  );
}

export default Dashboard;