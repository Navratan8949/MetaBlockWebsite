import React from "react";

const InventryKeyFeature = () => {
    return (
        <div style={{ marginBottom: "50px " }}>
            <div className="dashboard-main-box">
                <h4 className="Key-feature-heading">Key Feature</h4>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/info.png" alt="" />

                            <h4>Invoicing</h4>
                            <p>
                                Invoicing enables businesses to create and customize invoices
                                for products or services provided to clients.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/attendance.png" alt="" />

                            <h4>Expense Tracking</h4>
                            <p>
                                Expense Tracking helps monitor and categorize various business
                                expenses, ensuring accurate financial records.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/stress-management.png" alt="" />

                            <h4>Financial Reporting</h4>
                            <p>
                                Financial Reporting generates comprehensive reports like balance
                                sheets and income statements to analyze business performance.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/quality-control.png" alt="" />

                            <h4>Accounts Payable Management</h4>
                            <p>
                                Accounts Payable Management streamlines bill processing, payment
                                scheduling, and vendor reconciliation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/recruiter.png" alt="" />

                            <h3 style={{ textAlign: "Center" }}>Bank Reconciliation</h3>
                            <p>
                                Bank Reconciliation matches and reconciles bank transactions
                                with accounting records for accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/analysis.png" alt="" />

                            <h4>Tax Compliance</h4>
                            <p>
                                Tax Compliance calculates taxes owed, generates tax reports, and
                                facilitates tax filings.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/self-service.png" alt="" />

                            <h4>Self-Service Portal</h4>
                            <p>
                                Employee Self-Service Portal empowers employees to update
                                information, submit leave requests, and access pay stubs
                                conveniently.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes">
                        <div className="key-feature-heading">
                            <img src="./images/business-plan.png" alt="" />
                            <h4>Payment Gateways Integration</h4>
                            <p>
                                Payment Gateways Integration allows for seamless online payments
                                and credit card processing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventryKeyFeature;