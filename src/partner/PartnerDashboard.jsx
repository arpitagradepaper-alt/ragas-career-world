import {
  BriefcaseBusiness,
  FileText,
  Clock3,
  CheckCircle2,
  Users,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";
import "./PartnerDashboard.css";

const stats = [
  {
    title: "Total Jobs Posted",
    value: "0",
    icon: BriefcaseBusiness,
  },
  {
    title: "Active Jobs",
    value: "0",
    icon: CheckCircle2,
  },
  {
    title: "Closed Jobs",
    value: "0",
    icon: Clock3,
  },
  {
    title: "Total Applications",
    value: "0",
    icon: FileText,
  },
  {
    title: "Pending Review",
    value: "0",
    icon: Users,
  },
  {
    title: "Shortlisted",
    value: "0",
    icon: UserCheck,
  },
];

function PartnerDashboard() {
  return (
    <div className="partner-dashboard">

      <div className="partner-dashboard-heading">
        <div>
          <p className="partner-dashboard-eyebrow">
            PARTNER DASHBOARD
          </p>

          <h2>Overview</h2>

          <p className="partner-dashboard-description">
            Manage your jobs, applications and recruitment activity
            from one place.
          </p>
        </div>

        <button
          type="button"
          className="partner-dashboard-action"
        >
          <BriefcaseBusiness size={17} />
          Post New Job
          <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="partner-stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="partner-stat-card"
              key={stat.title}
            >
              <div className="partner-stat-icon">
                <Icon size={21} />
              </div>

              <div className="partner-stat-content">
                <span>{stat.title}</span>
                <strong>{stat.value}</strong>
              </div>
            </div>
          );
        })}
      </div>

      <div className="partner-dashboard-grid">

        <section className="partner-dashboard-card">
          <div className="partner-card-header">
            <div>
              <p>RECENT ACTIVITY</p>
              <h3>Recent Jobs</h3>
            </div>

            <button type="button">
              View All
            </button>
          </div>

          <div className="partner-empty-state">
            <BriefcaseBusiness size={28} />

            <h4>No jobs posted yet</h4>

            <p>
              Your recently posted jobs will appear here.
            </p>
          </div>
        </section>

        <section className="partner-dashboard-card">
          <div className="partner-card-header">
            <div>
              <p>APPLICATIONS</p>
              <h3>Recent Applications</h3>
            </div>

            <button type="button">
              View All
            </button>
          </div>

          <div className="partner-empty-state">
            <FileText size={28} />

            <h4>No applications yet</h4>

            <p>
              Applications received for your jobs will appear here.
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}

export default PartnerDashboard;