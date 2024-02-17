import React from "react";

const TradingKeyFeature = () => {
  return (
    <div style={{ marginBottom: "50px " }}>
      <div className="dashboard-main-box">
        <h4 className="Key-feature-heading">Key Feature</h4>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/interface.png" alt="" />

              <h4> Interface</h4>
              <p>
                {" "}
                Intuitive design for effortless navigation and quick trade
                execution.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/market-analysis.png" alt="" />

              <h4>Market Data</h4>
              <p>
                Live updates on prices, orders, and volumes for informed
                decisions.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/choices.png" alt="" />

              <h4>Order Options</h4>
              <p>
                Various types catering to different trading strategies and risk
                levels.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/chart.png" alt="" />

              <h4> Chart Tools</h4>
              <p>
                Advanced technical analysis features for thorough market study.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/newspaper.png" alt="" />

              <h3 style={{ textAlign: "Center" }}>News Integration</h3>
              <p>
                Real-time feeds and analysis to stay abreast of market
                developments.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/risks.png" alt="" />

              <h4>Risk Management</h4>
              <p>
                Tools for setting stop-loss, managing positions, and controlling
                risk.
              </p>
            </div>
          </div>
          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/diversify.png" alt="" />

              <h4>Asset Variety</h4>
              <p>
                Diverse range of tradable assets for portfolio diversification.
              </p>
            </div>
          </div>

          <div className="dashboard-container-box dashboard-boxes">
            <div className="key-feature-heading">
              <img src="./images/mobile.png" alt="" />

              <h4> Mobile Access</h4>
              <p>
                Trading flexibility with mobile app or responsive web interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingKeyFeature;
