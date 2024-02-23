import React from "react";
import "./DynamicWebsite.css";
import SimilarFile from "../SimilarFile";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";


const DynamicWebsite = () => {
  return (
    <div>
      &lt;&gt;
      <header className="ondemad_head">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <h1 className="mb-5 mt-40  Dynamic-heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Dynamic Website Company </h1>
            <div className="col-lg-12 my-auto">
              <div className="header-content mx-auto E-commerce-header-paragraph">



                <h3 className="text-left heading-tagline ">Digitize your product to expand the business online and reach millions of users worldwide. We help you craft your on-demand application to perfection with our vast library of customization tools &amp; designs. Collaborate with our
                  team and choose your desirable module to utilize our finest on-demand app development services. </h3>
                <ul className="banr-listing">
                  <li><i className="fa fa-check-circle" /> Meticulous quality analysis cycle.</li>
                  <li><i className="fa fa-check-circle" /> Apps built on leading-edge software packages.</li>
                  <li><i className="fa fa-check-circle" /> Incorporation of authentic API tools.</li>
                  <li><i className="fa fa-check-circle" /> Exclusive Offshore project development team.</li>
                  <li><i className="fa fa-check-circle" /> On-time delivery at an affordable cost.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>


      <section className="mid_section ondemad_feature">
        <div className="container">
          <div className="section-heading text-center d-flex justify-center align-center flex-column">
            <h2 className="features_title">Features We Inherit</h2>
            <p className="text-center">We develop on-demand apps with lots of services like tracking facilities, payment facilities and so on as follows.</p>
            <div className="why_round"> </div>
          </div>
          <div className="row">
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box1 hgt_400">
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box"><img width={'50px'} src="./images/map-setting.png" alt="GPS Services" title="GPS Services" className="img-fluid" /></div>
                  </div>
                </div>
                <h3>GPS Services</h3>
                <p className="text-center">We develop your on-demand app with an in-built map that can be viewed by both customer and product/service provider. This helps the provider to track your customer and customer to monitor the location of the goods periodically.</p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box2 hgt_400">
                <h3>In - App Payments</h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img width={'50px'} src="./images/digital-wallet.png" alt="In - App Payments" title="In - App Payments" className="img-fluid" /></div>
                  </div>
                </div>
                <p className="text-center">On-Demand app developed by us involves the payment ability. This allows customers to pay for your products within the app in a safer and secured environment. </p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box3 hgt_400">
                <h3>Cloud Integration </h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img width={'50px'} src="/SGimage/integrated-system.png" alt="Cloud Integration" title="Cloud Integration" className="img-fluid" /></div>
                  </div>
                </div>
                <p className="text-center">Our on-demand app development process includes the process of creating a separated cloud space for data analytics and storages related to the usage of apps. </p>
              </div>
            </div>
            <div className="col-sm-3 mt-7">
              <div className="whybottom_box whybottom_box4 hgt_400">
                <h3>Instant Push Notification</h3>
                <div className="inr_img">
                  <div className="ver_mid">
                    <div className="img_box">
                      <img width={'50px'} src="./SGimage/analytics.png" alt="Instant Push Notification" title="Instant Push Notification" className="img-fluid" /></div>
                  </div>
                </div>
                <p className="text-center">We provide a way by which you can acknowledge your new products or discounts or available products to your customers instantly through notifications. This may help you in reaching your customers faster. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mid_section why-business grey-bg">
        <div className="container">
          <div className="section-heading text-center d-flex justify-center align-center flex-column">
            <h2 className="why_title">Why Should You develop an On-Demand Delivery App for Your Business?</h2>
            <div className="why_round"> </div>
          </div>
          <div className="row mar-top-30">
            <div className="col-md-12 col-sm-12">
              <p className="why_para text-center">In the current digital era, on-demand apps are prevalent among consumers as it eases their efforts and improves their comfort. Hence, they have proved to be sure-shot winners in the tech industry. For an entrepreneur who aims to upscale
                his business online or to build one right from scratch, utilizing the right on-demand app development services to launch their on-demand app is the right origin point to reap quick and exponential growth. </p>
              <div className="row mar-top-30">
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <AiOutlineGlobal />
                    </abbr>
                    <h3>Global Reach</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <RiCustomerServiceFill />
                    </abbr>
                    <h3>Customer Comfort</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <SiSpringsecurity />
                    </abbr>

                    <h3>Security &amp; Scalability</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="whybottom_box whybottom_box1 hgt_400">
                    <abbr>

                      <FcManager />
                    </abbr>
                    <h3>Advanced Opportunities </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mid_section grey-bg" style={{ background: '#696767' }}>
        <div className="container">
          <div className="section-heading text-center d-flex justify-center align-center flex-column">
            <h2 className="our_title">Our On-Demand BlockChain Project Development Phase Cycle</h2>
            <div className="why_round"> </div>
          </div>
          <div className="row mar-top-30">
            <div className="col-sm-12 ">
              <img src="./SGimage/BLOCKCHAIN PROJECT DEVELOPMENT LIFE CYCLE.webp" alt="" className="img-fluid" style={{ width: '100%', filter: 'hue-rotate(253deg)' }} />
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
            <h2 className="hyp_common_title">Why Develop On-Demand Delivery Apps Using MetaBlock?</h2>
          </div>
          <div className="row mar-top-30">
            <div className="col-md-6 col-sm-6">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Customizable On-Demand App Solutions.</li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Professionals backed by 10+ years of industry experience.</li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Direct collaboration with the technical team. </li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Meticulous quality analysis cycle.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 yosiz-hyp-border">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Apps built on leading-edge software packages.</li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Incorporation of authentic API tools.</li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />Exclusive Offshore project development team.</li>
                  <li>
                    <img src="" alt="" className="hyp-tic-sprite" style={{ objectPosition: '-3357px -39px' }} />On-time delivery at an affordable cost.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" eth-dapp-hire">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 eth-dap-hire-box">
              <div className>
                <h2 className="ethdapp_common_title white-text">Hire Our On-demand App Developers</h2>
              </div>
              <p className="hire-para white-text ">Hiring the tech-savvy personnel at MetaBlock, the on-demand mobile app development business, will get you access to exclusive project development services. To guarantee that their complete concentration is directed into the job, developers assigned to the appropriate product are given designated workspaces. Prompt, frequent communication with clients and changes based on their input are key benefits. The end-product's justifiable quality would be obvious.</p>
              <div className="mob-text-center">
                <Link to="/ContectUsForm">  <span target="_blank" className="new_common_btn">Hire Our Professional</span></Link>
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

export default DynamicWebsite;
