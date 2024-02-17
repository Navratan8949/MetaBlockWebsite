import React from "react";

const LibraryKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/concept.png" alt="" />

              <h4>Catalog Management</h4>
              <p>
                Catalog Management involves organizing library collections,
                including books, journals, multimedia, and digital materials.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/team.png" alt="" />

              <h4>User Management</h4>
              <p>
                User Management maintains profiles, registrations, and borrowing
                privileges for library members.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/settings.png" alt="" />

              <h4>Search Functionality</h4>
              <p>
                Search and Discovery enables users to find resources by title,
                author, subject, or keywords.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/booking.png" alt="" />

              <h4>Reservations and Holds</h4>
              <p>
                Reservations and Holds allow users to reserve items currently
                checked out, optimizing resource management.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/solar-panel.png" alt="" />

              <h3 style={{ textAlign: "Center" }}>Automated Renewals</h3>
              <p>
                Automated Renewals streamline renewing borrowed items
                automatically, extending the borrowing period.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/banking.png" alt="" />

              <h4>Fines Management</h4>
              <p>
                Fines and Fees Management calculates and manages fines for
                overdue items and other fees.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/analytics.png" alt="" />

              <h4>Reporting and Analytics</h4>
              <p>
                Reporting and Analytics generate reports on library usage,
                circulation statistics, and popular items.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/rfid.png" alt="" />

              <h4>RFID Integration</h4>
              <p>
                Integration with RFID Technology tracks library materials and
                manages inventory efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryKeyFeature;
