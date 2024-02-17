import React from "react";

const ClinicKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/clock.png" alt="" />

              <h4>Appointment Management</h4>
              <p>
                Efficiently organize patient appointments, minimizing wait times
                and optimizing clinic schedules for smoother operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.png" alt="" />

              <h4>Patient Registration</h4>
              <p>
                Streamlined registration processes capture essential details,
                reducing administrative burden and ensuring accurate patient
                data.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/payment.png" alt="" />

              <h4>Billing Management</h4>
              <p>
                Simplified billing procedures streamline financial transactions,
                ensuring accuracy and efficiency in invoicing and payments.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/crisis-management.png" alt="" />

              <h4> Prescription Handling</h4>
              <p>
                Digital prescription management enhances medication safety and
                adherence, facilitating accurate tracking and timely refills.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/inventory-management.png" alt="" />

              <h3 style={{ textAlign: "Center" }}>Inventory Control</h3>
              <p>
                Effective inventory tracking minimizes shortages and wastage,
                ensuring optimal availability of medications and supplies.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/report.png" alt="" />

              <h4>Reporting & Analytics</h4>
              <p>
                Analytical tools provide insights into clinic performance,
                aiding in decision-making and process enhancement.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/consultant.png" alt="" />

              <h4>Staff Management</h4>
              <p>
                Efficient scheduling and management optimize workforce
                allocation, ensuring smooth clinic operations.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/collaboration.png" alt="" />

              <h4>Diagnostic Integration</h4>
              <p>
                Seamless integration with diagnostic labs enhances testing
                processes, enabling faster results and better patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicKeyFeature;
