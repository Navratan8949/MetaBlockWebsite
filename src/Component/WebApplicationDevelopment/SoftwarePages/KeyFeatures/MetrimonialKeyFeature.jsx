import React from "react";

const MetrimonialKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/profile.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Profile Creation
              </h4>
              <p>
                Profile Creation feature allows users to build detailed profiles
                with personal information, preferences, and partner criteria,
                facilitating accurate matchmaking.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/search.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Search and Matchmaking
              </h4>
              <p>
                Search and Matchmaking functionality enables users to search for
                potential partners based on criteria like age, location,
                education, and interests, enhancing the matchmaking process.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/computer.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Compatibility Matching
              </h4>
              <p>
                Compatibility Matching employs algorithms to suggest matches
                based on compatibility scores and user preferences, increasing
                the likelihood of finding suitable partners
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/switch.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                {" "}
                Privacy and Security
              </h4>
              <p>
                Privacy and Security measures ensure user data protection
                through secure login, profile verification, and privacy
                settings, fostering a safe environment for matchmaking.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/comutinontols.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Communication Tools
              </h4>
              <p>
                Communication Tools such as messaging, chat, and video calling
                facilitate interaction between potential matches, enabling users
                to get to know each other better.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/technology.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Advanced Filters
              </h4>
              <p>
                Advanced Filters offer users the ability to refine their search
                criteria, including preferences for religion, ethnicity,
                lifestyle, and more, improving match accuracy.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/booking.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Mobile Compatibility
              </h4>
              <p>
                Mobile Compatibility ensures seamless access to the platform via
                mobile devices, enhancing user convenience and accessibility.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/communitonverify.png" alt="" />

              <h4 className="software-feature-headings d-flex flex-column justify-center align-center">
                Profile Verification
              </h4>
              <p>
                Profile Verification options allow users to verify their
                profiles through email, phone, or ID verification, enhancing
                trust and authenticity on the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetrimonialKeyFeature;
