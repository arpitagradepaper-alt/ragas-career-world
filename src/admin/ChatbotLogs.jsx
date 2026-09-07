import "./ChatbotLogs.css";

const conversations = [
  {
    id: "#RC-10284",
    user: "Amit R.",
    type: "Candidate",
    topic: "Dubai Jobs",
    status: "Live Agent",
    time: "2 min ago",
  },
  {
    id: "#RC-10283",
    user: "Fatima K.",
    type: "Candidate",
    topic: "Visa Support",
    status: "AI Resolved",
    time: "8 min ago",
  },
  {
    id: "#RC-10282",
    user: "Rahul S.",
    type: "Candidate",
    topic: "IT Jobs",
    status: "AI Resolved",
    time: "14 min ago",
  },
  {
    id: "#RC-10281",
    user: "Neha P.",
    type: "Candidate",
    topic: "Resume Upload",
    status: "Live Agent",
    time: "21 min ago",
  },
  {
    id: "#RC-10280",
    user: "TechNova Pvt Ltd",
    type: "Employer",
    topic: "Hiring Support",
    status: "AI Resolved",
    time: "32 min ago",
  },
  {
    id: "#RC-10279",
    user: "Sanjay M.",
    type: "Candidate",
    topic: "Canada Jobs",
    status: "AI Resolved",
    time: "45 min ago",
  },
];

function ChatbotLogs() {
  return (
    <div className="chatbot-logs-page">

      <div className="logs-heading">
        <div>
          <p>AI CHATBOT</p>
          <h2>Chatbot Conversation Log</h2>
          <span>
            Review conversations, monitor AI responses and manage live-agent
            handoffs.
          </span>
        </div>

        <button className="export-btn">
          ↓ Export
        </button>
      </div>

      <div className="logs-stats">

        <div className="logs-stat">
          <span>Total Conversations</span>
          <strong>1,284</strong>
          <small>This month</small>
        </div>

        <div className="logs-stat">
          <span>AI Resolved</span>
          <strong>972</strong>
          <small>75.7% resolution rate</small>
        </div>

        <div className="logs-stat">
          <span>Live Agent</span>
          <strong>312</strong>
          <small>Requires human support</small>
        </div>

        <div className="logs-stat">
          <span>Profile Linked</span>
          <strong>96%</strong>
          <small>Candidate / employer</small>
        </div>

      </div>

      <section className="logs-card">

        <div className="logs-toolbar">

          <div className="logs-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search conversation, user or topic..."
            />
          </div>

          <select>
            <option>All Status</option>
            <option>AI Resolved</option>
            <option>Live Agent</option>
          </select>

          <select>
            <option>All Users</option>
            <option>Candidate</option>
            <option>Employer</option>
          </select>

          <button className="filter-btn">
            Filter
          </button>

        </div>

        <div className="logs-table-wrapper">

          <table className="logs-table">

            <thead>
              <tr>
                <th>Conversation</th>
                <th>User</th>
                <th>Type</th>
                <th>Topic</th>
                <th>Status</th>
                <th>Last Activity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {conversations.map((item) => (
                <tr key={item.id}>

                  <td>
                    <strong>{item.id}</strong>
                  </td>

                  <td>{item.user}</td>

                  <td>
                    <span className="user-type">
                      {item.type}
                    </span>
                  </td>

                  <td>{item.topic}</td>

                  <td>
                    <span
                      className={
                        item.status === "Live Agent"
                          ? "log-status live"
                          : "log-status resolved"
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>{item.time}</td>

                  <td>
                    <button className="view-log-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <div className="logs-pagination">
          <span>Showing 1–6 of 1,284 conversations</span>

          <div>
            <button>‹</button>
            <button className="active-page">1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>214</button>
            <button>›</button>
          </div>
        </div>

      </section>

    </div>
  );
}

export default ChatbotLogs;