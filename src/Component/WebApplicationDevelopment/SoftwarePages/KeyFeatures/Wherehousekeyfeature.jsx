import React from 'react'
import './KeyFeatures.css'
const Wherehousekeyfeature = () => {
    return (
        <div style={{ marginBottom: '50px ' }} >

            <div className="dashboard-main-box">
                <h4 className='Key-feature-heading'>Key Feature</h4>
                <div className="dashboard-container">

                    <div className="dashboard-container-box dashboard-boxes"  >

                        <div className="key-feature-heading">
                            <img src="./images/warehouse.png" alt="" />

                            <h4>Inventory Management</h4>
                            <p>Efficient inventory management is crucial for businesses to track stock movements and optimize warehouse operations.</p>
                        </div>
                    </div>


                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/barcode-scan.png" alt="" />

                            <h4>Barcode & RFID Integration</h4>
                            <p>Barcode scanning and RFID integration ensure accurate inventory tracking, reducing errors and enhancing efficiency.</p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/steps.png" alt="" />

                            <h4>Order Processing</h4>
                            <p>Streamlined order fulfillment processes, including picking, packing, and shipping, improve customer satisfaction and reduce lead times.</p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/optimization.png" alt="" />

                            <h4>Warehouse Layout Optimization</h4>
                            <p>Warehouse layout optimization maximizes storage space and facilitates efficient movement of goods within the facility.</p>
                        </div>
                    </div>

                </div>
                <div className="dashboard-container">

                    <div className="dashboard-container-box dashboard-boxes"  >
                        <div className="key-feature-heading">
                            <img src="./images/productivity.png" alt="" />


                            <h3 style={{ textAlign: "Center" }}>Labor Management</h3>
                            <p>Effective labor management, including scheduling and task assignment, optimizes workforce productivity and reduces operational costs.</p>
                        </div>
                    </div>


                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/stopwatch.png" alt="" />

                            <h4>Real-Time Visibility
                            </h4>
                            <p>Real-time visibility into inventory levels and order statuses enables proactive decision-making and enhances operational efficiency.</p>
                        </div>
                    </div>
                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/automation.png" alt="" />

                            <h4>Automation Technologies</h4>
                            <p>Automation technologies such as robotics and AS/RS optimize warehouse operations, reducing labor dependency and enhancing efficiency.</p>
                        </div>
                    </div>

                    <div className="dashboard-container-box dashboard-boxes" >
                        <div className="key-feature-heading">
                            <img src="./images/global-network.png" alt="" />

                            <h4>Multi-Channel Support</h4>
                            <p>Multi-channel support enables businesses to manage orders from various sales channels seamlessly.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Wherehousekeyfeature