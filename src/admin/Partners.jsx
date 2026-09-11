import { useEffect, useMemo, useState } from "react";
import "./Partners.css";

const API_URL = "http://localhost:5000/api/partners";

function Partners() {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] =
    useState("All Partner Types");
  const [statusFilter, setStatusFilter] =
    useState("All Status");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================
     SELECTED PARTNER
  ========================================= */

  const [selectedPartner, setSelectedPartner] =
    useState(null);

  /* =========================================
     FETCH PARTNERS
  ========================================= */

  const fetchPartners = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.success) {
        setPartners(data.data || []);
      } else {
        setError(
          data.message || "Unable to fetch partners."
        );
      }
    } catch (err) {
      console.error("Partners fetch error:", err);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  /* =========================================
     STATS
  ========================================= */

  const totalPartners = partners.length;

  const verifiedPartners = partners.filter(
    (partner) => partner.status === "Verified"
  ).length;

  const pendingPartners = partners.filter(
    (partner) => partner.status === "Pending"
  ).length;

  const activeCollaborations = verifiedPartners;

  const verifiedPercentage =
    totalPartners > 0
      ? (
          (verifiedPartners / totalPartners) *
          100
        ).toFixed(1)
      : "0.0";

  /* =========================================
     FILTER
  ========================================= */

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        partner.companyName
          ?.toLowerCase()
          .includes(searchText) ||
        partner.contactPerson
          ?.toLowerCase()
          .includes(searchText) ||
        partner.email
          ?.toLowerCase()
          .includes(searchText);

      const matchesType =
        typeFilter === "All Partner Types" ||
        partner.partnerType === typeFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        partner.status === statusFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus
      );
    });
  }, [
    partners,
    search,
    typeFilter,
    statusFilter,
  ]);

  /* =========================================
     VIEW PARTNER
  ========================================= */

  const handleView = (partner) => {
    setSelectedPartner(partner);
  };

  /* =========================================
     BACK
  ========================================= */

  const handleBack = () => {
    setSelectedPartner(null);
  };

  /* =========================================
     ADD PARTNER
  ========================================= */

  const handleAddPartner = () => {
    alert(
      "Add Partner form can be connected here next."
    );
  };

  /* =========================================
     PARTNER DETAIL PAGE
  ========================================= */

  if (selectedPartner) {
    const company =
      selectedPartner.companyName ||
      "Unknown Company";

    const initials = company
      .charAt(0)
      .toUpperCase();

    return (
      <div className="partners-page">

        {/* BACK */}

        <button
          type="button"
          className="partner-detail-back"
          onClick={handleBack}
        >
          ← Back to Partners
        </button>

        {/* HEADER */}

        <div className="partner-detail-header">

          <div className="partner-detail-identity">

            <div className="partner-detail-avatar">
              {initials}
            </div>

            <div>
              <p className="partners-eyebrow">
                PARTNER DETAILS
              </p>

              <h2>{company}</h2>

              <span>
                Partner ID: PT-
                {selectedPartner._id
                  ?.slice(-6)
                  .toUpperCase()}
              </span>
            </div>

          </div>

          <span
            className={`partner-status ${
              selectedPartner.status ===
              "Verified"
                ? "verified"
                : selectedPartner.status ===
                  "Pending"
                ? "pending"
                : "rejected"
            }`}
          >
            {selectedPartner.status ||
              "Pending"}
          </span>

        </div>

        {/* MAIN DETAIL CARD */}

        <div className="partner-detail-card">

          {/* COMPANY INFORMATION */}

          <section className="partner-detail-section">

            <div className="partner-detail-section-title">
              <span>01</span>

              <div>
                <h3>
                  Company Information
                </h3>

                <p>
                  Basic information about the
                  recruitment partner.
                </p>
              </div>
            </div>

            <div className="partner-detail-grid">

              <div>
                <span>Company Name</span>
                <strong>
                  {selectedPartner.companyName ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Partner Type</span>
                <strong>
                  {selectedPartner.partnerType ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Specialization</span>
                <strong>
                  {selectedPartner.specialization ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Geography</span>
                <strong>
                  {selectedPartner.geography ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Website</span>
                <strong>
                  {selectedPartner.website ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Registration Date</span>
                <strong>
                  {selectedPartner.createdAt
                    ? new Date(
                        selectedPartner.createdAt
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "N/A"}
                </strong>
              </div>

            </div>

          </section>

          {/* CONTACT INFORMATION */}

          <section className="partner-detail-section">

            <div className="partner-detail-section-title">
              <span>02</span>

              <div>
                <h3>
                  Contact Information
                </h3>

                <p>
                  Primary contact details for
                  this partner.
                </p>
              </div>
            </div>

            <div className="partner-detail-grid">

              <div>
                <span>Contact Person</span>
                <strong>
                  {selectedPartner.contactPerson ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {selectedPartner.email ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {selectedPartner.phone ||
                    selectedPartner.contactNumber ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Alternate Phone</span>
                <strong>
                  {selectedPartner.alternatePhone ||
                    "N/A"}
                </strong>
              </div>

            </div>

          </section>

          {/* ADDRESS */}

          <section className="partner-detail-section">

            <div className="partner-detail-section-title">
              <span>03</span>

              <div>
                <h3>
                  Address & Location
                </h3>

                <p>
                  Registered office and location
                  information.
                </p>
              </div>
            </div>

            <div className="partner-detail-grid">

              <div className="full-detail">
                <span>Address</span>
                <strong>
                  {selectedPartner.address ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>City</span>
                <strong>
                  {selectedPartner.city ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>State</span>
                <strong>
                  {selectedPartner.state ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Country</span>
                <strong>
                  {selectedPartner.country ||
                    "N/A"}
                </strong>
              </div>

              <div>
                <span>Postal Code</span>
                <strong>
                  {selectedPartner.postalCode ||
                    selectedPartner.pincode ||
                    "N/A"}
                </strong>
              </div>

            </div>

          </section>

          {/* MESSAGE / ABOUT */}

          <section className="partner-detail-section">

            <div className="partner-detail-section-title">
              <span>04</span>

              <div>
                <h3>
                  Partnership Information
                </h3>

                <p>
                  Additional information submitted
                  by the partner.
                </p>
              </div>
            </div>

            <div className="partner-message-box">
              {selectedPartner.message ||
                selectedPartner.about ||
                selectedPartner.description ||
                "No additional information provided."}
            </div>

          </section>

          {/* STATUS */}

          <section className="partner-detail-section">

            <div className="partner-detail-section-title">
              <span>05</span>

              <div>
                <h3>
                  Partnership Status
                </h3>

                <p>
                  Current verification status.
                </p>
              </div>
            </div>

            <div className="partner-status-detail">

              <span
                className={`partner-status ${
                  selectedPartner.status ===
                  "Verified"
                    ? "verified"
                    : selectedPartner.status ===
                      "Pending"
                    ? "pending"
                    : "rejected"
                }`}
              >
                {selectedPartner.status ||
                  "Pending"}
              </span>

            </div>

          </section>

        </div>

      </div>
    );
  }

  /* =========================================
     MAIN PARTNERS PAGE
  ========================================= */

  return (
    <div className="partners-page">

      {/* HEADING */}

      <div className="partners-heading">

        <div>

          <p className="partners-eyebrow">
            PARTNER MANAGEMENT
          </p>

          <h2>Partners</h2>

          <span>
            Manage recruitment partners,
            verification and collaboration
            details.
          </span>

        </div>

        <button
          className="partners-add-btn"
          onClick={handleAddPartner}
        >
          + Add Partner
        </button>

      </div>

      {/* STATS */}

      <div className="partners-stats">

        <div className="partner-stat">
          <span>Total Partners</span>
          <strong>{totalPartners}</strong>
          <small>
            Registered partners
          </small>
        </div>

        <div className="partner-stat">
          <span>Verified Partners</span>
          <strong>{verifiedPartners}</strong>
          <small>
            {verifiedPercentage}% verified
          </small>
        </div>

        <div className="partner-stat">
          <span>Pending Verification</span>
          <strong>{pendingPartners}</strong>
          <small>
            Requires admin review
          </small>
        </div>

        <div className="partner-stat">
          <span>
            Active Collaborations
          </span>
          <strong>
            {activeCollaborations}
          </strong>
          <small>
            Currently active
          </small>
        </div>

      </div>

      {/* CARD */}

      <section className="partners-card">

        {/* TOOLBAR */}

        <div className="partners-toolbar">

          <div className="partners-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search company, contact or email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value)
            }
          >
            <option>
              All Partner Types
            </option>

            <option>
              Recruitment Consultancy
            </option>

            <option>
              Overseas Recruitment
            </option>

            <option>
              Staffing Partner
            </option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option>
              All Status
            </option>

            <option>
              Verified
            </option>

            <option>
              Pending
            </option>

            <option>
              Rejected
            </option>
          </select>

          <button
            className="partners-filter-btn"
            onClick={fetchPartners}
          >
            Filter
          </button>

        </div>

        {/* TABLE */}

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

              {loading ? (

                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Loading partners...
                  </td>
                </tr>

              ) : error ? (

                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      color: "#c0392b",
                    }}
                  >
                    {error}
                  </td>
                </tr>

              ) : filteredPartners.length ===
                0 ? (

                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    No partners found.
                  </td>
                </tr>

              ) : (

                filteredPartners.map(
                  (partner) => {

                    const company =
                      partner.companyName ||
                      "Unknown Company";

                    return (
                      <tr
                        key={partner._id}
                      >

                        <td>

                          <div className="partner-company">

                            <div className="partner-avatar">
                              {company
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>

                              <strong>
                                {company}
                              </strong>

                              <span>
                                PT-
                                {partner._id
                                  ?.slice(-4)
                                  .toUpperCase()}
                              </span>

                            </div>

                          </div>

                        </td>

                        <td>
                          {partner.partnerType ||
                            "N/A"}
                        </td>

                        <td>

                          <div className="partner-contact">

                            <strong>
                              {partner.contactPerson ||
                                "N/A"}
                            </strong>

                            <span>
                              {partner.email ||
                                "N/A"}
                            </span>

                          </div>

                        </td>

                        <td>
                          {partner.specialization ||
                            "N/A"}
                        </td>

                        <td>
                          {partner.geography ||
                            "N/A"}
                        </td>

                        <td>

                          <span
                            className={`partner-status ${
                              partner.status ===
                              "Verified"
                                ? "verified"
                                : partner.status ===
                                  "Pending"
                                ? "pending"
                                : "rejected"
                            }`}
                          >
                            {partner.status}
                          </span>

                        </td>

                        <td>

                          <button
                            className="partner-view-btn"
                            type="button"
                            onClick={() =>
                              handleView(
                                partner
                              )
                            }
                          >
                            View
                          </button>

                        </td>

                      </tr>
                    );
                  }
                )
              )}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}

        <div className="partners-pagination">

          <span>
            Showing{" "}
            {filteredPartners.length > 0
              ? `1–${filteredPartners.length}`
              : "0"}{" "}
            of {filteredPartners.length}{" "}
            partners
          </span>

          <div>

            <button>‹</button>

            <button className="active">
              1
            </button>

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