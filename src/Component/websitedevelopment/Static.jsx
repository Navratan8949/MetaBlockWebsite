import React from "react";
import "./Static.css";
import SimilarFile from "../SimilarFile";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import { FcManager } from "react-icons/fc";

const Static = () => {
  return (
    <div>
      &lt;&gt;
      <header className="ondemad_head">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div class="text-left header-content col-lg-12 mt-9">

              <h1 className="mb-5 mt-40 Static-heading" style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                Static Website Development
              </h1>

            </div>
            <div className="col-lg-12 my-auto">
              <div className="header-content mx-auto E-commerce-header-paragraph">

                {/*  <h1 class="mb-5 mobile" style="text-align: left;">On-Demand App Development Company </h1> */}
                <h3 className="text-left heading-tagline">
                  Elevate your online presence with our Static Website
                  Development services. We craft visually stunning and efficient{" "}
                  <br />
                  static websites, ensuring a seamless user experience that
                  reflects the essence of your brand.
                </h3>
                <br />
                <ul className="banr-listing">
                  <li>
                    <i className="fa fa-check-circle" /> Quick Loading Speed
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Cost-Effective
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    High Security
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Easy Maintenance
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Reliability and
                    Stability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mid_section ondemad_feature">
        <div className="container">
          <div className="section-heading text-center align-center d-flex flex-column">
            <h2 className="features_title">Embraced Features</h2>
            <p className="text-center">
              We develop Static Website with lots of services like tracking
              facilities, payment facilities and so on as follows.
            </p>
            <div className="why_round"> </div>
          </div>
          <div className="row">
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box1 hgt_400">
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img
                        width={'50px'}
                        src="./images/map-setting.png"
                        alt="GPS Services"
                        title="GPS Services"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <h3>Location Services</h3>
                <p className="text-center">
                  We integrate static maps into your website, allowing users and
                  service providers to view geographic information. This aids
                  providers in understanding user locations, and users can
                  periodically check the location of goods or services.
                </p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box2 hgt_400">
                <h3>Online Payments</h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img
                        width={'50px'}
                        src="./images/digital-wallet.png"
                        alt="In - App Payments"
                        title="In - App Payments"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Our developed static website includes secure payment options,
                  enabling customers to conveniently and safely make payments
                  for products within the website.
                </p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box3 hgt_400">
                <h3>Cloud Integration </h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img
                        width={'50px'}
                        src="./SGimage/integrated-system.png"
                        alt="Cloud Integration"
                        title="Cloud Integration"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  In our static website development, we establish a dedicated
                  cloud space for data analytics and storage, enhancing the
                  efficiency and accessibility of information related to website
                  usage.
                </p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box4 hgt_400">
                <h3>User Engagement Analytics</h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img
                        width={'50px'}
                        src="./SGimage/analytics.png"
                        alt="Instant Push Notification"
                        title="Instant Push Notification"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Our static website development incorporates robust analytics
                  tools to track and analyze user engagement patterns, providing
                  valuable insights to enhance your online presence and user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mid_section why-business grey-bg">
        <div className="container">
          <div className="section-heading text-center d-flex justify-center align-center flex-column">
            <h2 className="why_title">
              Why Should You develop an Static Website for Your Business?
            </h2>
            <div className="why_round"> </div>
          </div>
          <div className="row mar-top-30">
            <div className="col-md-12 col-sm-12">
              <p className="why_para text-center">
                In today's digital landscape, static websites play a pivotal
                role in enhancing online presence. As users seek effortless
                access to information, a well-crafted static website serves as
                the cornerstone for businesses looking to establish or expand
                their digital footprint, ensuring a solid foundation for
                sustained growth.
              </p>
              <div className="row mar-top-30">
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>
                      {/* <img
                        src="./SGimage/advertising.png"
                        alt="Global Reach"
                        title="Global Reach"
                        style={{ objectPosition: "-7px -18px" }}
                      /> */}
                      <AiOutlineGlobal />
                    </abbr>
                    <h3>Online Presence</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <RiCustomerServiceFill />
                    </abbr>
                    <h3>User Convenience</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <SiSpringsecurity />
                    </abbr>
                    <h3>Reliability & Simplicity</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <FcManager />
                    </abbr>
                    <h3>Strategic Advancements</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mid_section grey-bg">
        <div className="container" style={{ background: "#696767" }}>
          <div className="section-heading text-center">
            <h2 className="our_title" style={{ padding: "20px" }}>
              Our On-Demand BlockChain Project Development Phase Cycle
            </h2>
            <div className="why_round"> </div>
          </div>
          <div className="row mar-top-30">
            <div className="col-sm-12 ">
              <img
                src="./SGimage/BLOCKCHAIN PROJECT DEVELOPMENT LIFE CYCLE.webp"
                className="img-fluid"
                style={{ width: "100%", filter: "hue-rotate(253deg)" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-heading mid_section-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ color: "#D166AF ", fontSize: "31px" }} className="text-center Technology-Stack">Technology Stack We Use</h2>
            </div>
          </div>
          <div className="row tech p-5 pt-0 mt-5 mb-5">
            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/physics.png" className="w-100 h-40" alt="" />
              <h5>React</h5>
            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/python.png" alt="" className="w-100 h-40" />
              <h5>Python</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3" >
              <img src="./images/mysql.png" alt="" className="w-100 h-40" />
              <h5>MySQL</h5>
            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/java-script.png" alt="" className="w-100 h-40" />
              <h5>Java Srcipt</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/SQL-Lite.png" alt="" className="w-100 h-40" />
              <h5>SQL Lite</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/html.png" alt="" className="w-100 h-40" />
              <h5>HTML</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/android.png" alt="" className="w-100 h-40" />
              <h5>Android</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/mongo-db-icon.png" alt="" className="w-100 h-40" />
              <h5>Mongo DB</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/app-store.png" alt="" className="w-100 h-40" />
              <h5>App Store</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/atom.png" alt="" className="w-100 h-40" />
              <h5>Atom</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/laravel.png" alt="" className="w-100 h-40" />
              <h5>Laravel</h5>

            </div>

            <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
              <img src="./images/python.png" alt="" className="w-100 h-40" />
              <h5>Python</h5>

            </div>
          </div>
        </div>
      </section>
      <section className="why-osiz-hyp">
        <div className="container">
          <div className="text-center why_hyp_content">
            <h2 className="hyp_common_title">
              Why MetaBlock for Static Website Development?
            </h2>
          </div>
          <div className="row mar-top-30">
            <div className="col-md-6 col-sm-6">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      alt=""
                    />
                    Customizable Static Website Solutions.
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Professionals backed by 3+ years of industry experience.
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Direct collaboration with the technical team.{" "}
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Precise quality assurance process.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 ">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Websites built on leading-edge software packages.
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Integration of genuine API tools.
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    Dedicated team for projects.{" "}
                  </li>
                  <li>
                    <img
                      src="./SGimage/arrow_static.png"
                      className="hyp-tic-sprite"
                      
                      alt=""
                    />
                    On-time delivery at an affordable cost.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <SimilarFile />
      </div>
    </div>
  );
};

export default Static;
