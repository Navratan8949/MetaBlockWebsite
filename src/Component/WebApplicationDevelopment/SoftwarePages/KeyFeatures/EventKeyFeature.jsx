import React from "react";

const EventKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.png" alt="" />

              <h4>Registration</h4>
              <p>
                Registration streamlines attendee sign-ups, managing ticketing
                options and essential details efficiently.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/venue.png" alt="" />

              <h4>Venue Management</h4>
              <p>
                Venue Management simplifies booking and coordination, ensuring
                suitable seating arrangements and room setups.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/agenda.png" alt="" />

              <h4>Agenda Planning</h4>
              <p>
                Agenda Planning empowers organizers to craft detailed schedules,
                featuring speakers and session topics.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.png" alt="" />

              <h4> Attendee Management</h4>
              <p>
                Attendee Management tracks attendee information, managing
                registrations and facilitating communications seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/bill.png" alt="" />

              <h3 style={{ textAlign: "Center" }}>Ticketing and Payments</h3>
              <p>
                Ticketing and Payments ensure secure processing, offering
                various payment options and discounts.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/certified.png" alt="" />

              <h4>Check-In and Badges</h4>
              <p>
                Check-In and Badges streamline event entry with digital tools
                and on-site badge printing.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/technical-support.png" alt="" />

              <h4>Networking Tools</h4>
              <p>
                Networking Tools facilitate connections through directories,
                matchmaking, and messaging platforms.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/exhibitor.png" alt="" />

              <h4>Exhibitor Management</h4>
              <p>
                Exhibitor Management oversees booth assignments, sponsorships,
                and communications, ensuring smooth collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventKeyFeature;
