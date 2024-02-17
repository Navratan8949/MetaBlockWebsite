import React from "react";

const HospitalKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/website.png" alt="" />

              <h4>Patient Registration</h4>
              <p>
                {" "}
                Hospitals streamline patient registration processes, capturing
                essential demographic details for accurate record-keeping.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/appointment.png" alt="" />

              <h4>Appointment Scheduling</h4>
              <p>
                Efficient systems manage appointments, optimizing hospital
                resources and patient flow.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-prescription.png" alt="" />

              <h4>Electronic Health Records</h4>
              <p>
                Hospitals maintain digital health records, ensuring secure and
                accessible patient information.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/payment.png" alt="" />
              <h4>Billing Management</h4>
              <p>
                {" "}
                Integrated systems streamline billing processes and manage
                financial transactions for efficient revenue management.
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
                Hospitals track and manage inventory to ensure timely
                availability of medical supplies and prevent shortages.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/management.png" alt="" />

              <h4>Staff Management</h4>
              <p>
                Systems maintain records and schedules for doctors, nurses, and
                staff, ensuring adequate staffing levels.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/online-pharmacy.png" alt="" />
              <h4>Pharmacy Management</h4>
              <p>
                {" "}
                Hospitals efficiently manage pharmacy operations, including
                prescription dispensing and inventory tracking.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/medical-prescription (1).png" alt="" />

              <h4>Electronic Prescriptions</h4>
              <p>
                Systems enable the electronic transmission of prescriptions,
                improving medication management and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalKeyFeature;
