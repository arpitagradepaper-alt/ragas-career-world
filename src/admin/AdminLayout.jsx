import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {

    const handleLogout = () => {
    localStorage.removeItem("ragasAdminLoggedIn");
    window.location.href = "/admin/login";
    };
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-brand">
          <strong>RAGAS</strong>
          <span>CAREER WORLD</span>
        </div>

        <div className="admin-user">
          <div className="admin-avatar">SA</div>

          <div>
            <strong>Super Admin</strong>
            <span>Administrator</span>
          </div>
        </div>

        <nav className="admin-nav">

          <NavLink to="/admin" end>
            <span>▦</span>
            Dashboard
          </NavLink>

          <NavLink to="/admin/chatbot-logs">
            <span>◫</span>
            Chatbot Logs
          </NavLink>

          <NavLink to="/admin/candidates">
            <span>♙</span>
            Candidates
          </NavLink>

          <NavLink to="/admin/employers">
            <span>▤</span>
            Employers
          </NavLink>

          <NavLink to="/admin/jobs">
            <span>▣</span>
            Job Posts
          </NavLink>

          <NavLink to="/admin/resumes">
            <span>↥</span>
            Resume Database
          </NavLink>

          <NavLink to="/admin/partners">
            <span>◎</span>
            Partners
          </NavLink>

        </nav>

        <div className="admin-sidebar-bottom">

          <a href="/" className="admin-website-link">
            ↗ View Website
          </a>

          <button className="admin-logout"
                  onClick={handleLogout}>
            ← Logout
          </button>

        </div>

      </aside>

      {/* RIGHT SIDE */}
      <main className="admin-main">

        <header className="admin-topbar">

          <div>
            <p>RAGAS CAREER WORLD</p>
            <h1>Admin Panel</h1>
          </div>

          <div className="admin-system-status">
            <i></i>
            System Online
          </div>

        </header>

        <div className="admin-page-content">
          <Outlet />
        </div>

      </main>

    </div>
  );
}

export default AdminLayout;