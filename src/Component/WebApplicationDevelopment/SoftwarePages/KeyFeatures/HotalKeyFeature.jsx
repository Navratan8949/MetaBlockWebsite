import React from "react";

const HotalKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/time-management.png" alt="" />

              <h4>Reservation Management</h4>
              <p>
                Allows hotel staff to efficiently manage room reservations,
                including booking, modification, and cancellation processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/help-desk.png" alt="" />

              <h4>Front Desk Operationsn</h4>
              <p>
                Streamlines front desk tasks such as check-in, check-out, room
                assignment, and guest inquiries, ensuring smooth operations and
                guest satisfaction.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/material-management.png" alt="" />

              <h4>Room Inventory Management</h4>
              <p>
                Provides real-time tracking of room availability, allowing staff
                to optimize occupancy rates and prevent overbooking..
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/invoice.png" alt="" />

              <h4>Billing and Invoicing</h4>
              <p>
                Generates invoices, processes payments, and tracks guest
                expenses, integrating with payment gateways for secure
                transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.png" alt="" />

              <h3 style={{ textAlign: "Center" }}>Housekeeping Managemente</h3>
              <p>
                Coordinates housekeeping schedules, tracks room cleaning status,
                and manages maintenance requests to maintain cleanliness and
                guest comfort.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/guests.png" alt="" />

              <h4>Guest Profiles</h4>
              <p>
                Stores guest information, preferences, and booking history for
                personalized service and targeted marketing campaigns.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/point-of-sale.png" alt="" />

              <h4>Point of Sale </h4>
              <p>
                Integrates with POS systems for seamless management of
                restaurant, bar, and other on-site amenities, facilitating guest
                billing and inventory tracking.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/cyber-security.png" alt="" />

              <h4>Security</h4>
              <p>
                Implements security features such as user authentication,
                role-based access control, and data encryption to safeguard
                guest information and sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotalKeyFeature;
