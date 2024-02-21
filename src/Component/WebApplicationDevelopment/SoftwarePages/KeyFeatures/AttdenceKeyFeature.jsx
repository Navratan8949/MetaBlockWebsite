import React from "react";

const AttdenceKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/fingerprint-scanner.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Biometric Integration
              </h4>
              <p>
                Biometric Integration ensures secure employee identification
                through fingerprint, facial recognition, or iris scanning.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/time-tracking.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Time Tracking
              </h4>
              <p>
                Time Tracking records employee clock-in/out times, breaks, and
                overtime hours accurately. .
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/business.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Remote Attendance Tracking
              </h4>
              <p>
                Remote Attendance Tracking enables logging attendance from
                remote locations using web or mobile applications.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/computer.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Real-Time Monitoring
              </h4>
              <p>
                Real-Time Monitoring provides managers with up-to-date
                visibility into employee attendance data.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/notification.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Notifications and Alerts
              </h4>
              <p>
                Notifications and Alerts send timely notifications for late
                arrivals, absences, or attendance issues.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/report.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Compliance Reporting
              </h4>
              <p>
                Compliance Reporting generates reports to ensure adherence to
                labor regulations and company policies.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/policy.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Customizable Policies
              </h4>
              <p>
                Customizable Policies allow tailoring attendance rules to
                organizational needs and values.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/absent.png" alt="" />
              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Absence Tracking
              </h4>
              <p>
                Absence Tracking monitors and records employee absences,
                including reasons for absence and duration, to track patterns
                and identify potential issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttdenceKeyFeature;
