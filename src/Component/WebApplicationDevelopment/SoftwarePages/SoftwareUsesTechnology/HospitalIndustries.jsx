import React from "react";

const HospitalIndustries = () => {
  return (
    <div className="m-0">
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Software Uses Industries</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/registration.png" alt="" />

              <h4>Patient Registration</h4>
              <p>
                Seamlessly register patients with accurate demographic details,
                ensuring efficient record-keeping and streamlined processes.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/clock.png" alt="" />

              <h4>Appointment Management</h4>
              <p>
                {" "}
                Efficiently manage appointments, reducing wait times and
                optimizing resource allocation for enhanced patient
                satisfaction.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-record.png" alt="" />

              <h4>Electronic Health Records</h4>
              <p>
                Digitally store and manage patient health records, ensuring
                accessibility, accuracy, and confidentiality in healthcare
                delivery.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-history.png" alt="" />

              <h4>Billing and Invoicing</h4>
              <p>
                Streamline billing processes, generate accurate invoices, and
                manage financial transactions effectively for improved revenue
                cycle management.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/prescription.png" alt="" />

              <h4>Prescription Management</h4>
              <p>
                Digitize prescription processes, enabling accurate medication
                management, refill tracking, and enhanced patient safety.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/inventory-management (1).png" alt="" />

              <h4>Inventory Control</h4>
              <p>
                Monitor and manage inventory levels, ensuring adequate stock of
                medications and supplies, minimizing wastage, and avoiding
                stockouts.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/monitor.png" alt="" />

              <h4>Reporting and Analytics</h4>
              <p>
                Generate comprehensive reports and analyze data to gain insights
                into clinic performance, patient trends, and operational
                efficiency.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/diagnostic.png" alt="" />

              <h4>Diagnostic Integration</h4>
              <p>
                Seamlessly integrate with diagnostic facilities for streamlined
                test ordering, results management, and treatment planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalIndustries;
