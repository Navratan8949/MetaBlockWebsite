import React from "react";
import "../WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";
import CardSlider from "../CardSlider";
import DeliveringNative from "../Delivering Native/DeliveringNative";
import Phonecardslider from "../Phonecardslider/Phonecardslider";
import SimilarFile from "../../SimilarFile";
import SwiperSlider from "./SwiperSlider/SwiperSlider";
import AdminControlFeature from "./AdminControlFeature/AdminControlFeature";
import KeyFeature from "./KeyFeatures/KeyFeature";
import SoftwareUsesTechnology from "./SoftwareUsesTechnology/SoftwareUsesTechnology";
import { useNavigate } from "react-router-dom";
// import '../../main.css'

const RealstateSoftware = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="main-div-Application">
        <header className="enterprise-mobile-app-development arkit header-shadow">

          <div className="container h-100">
            <div className="row h-100">

              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">
                    Real State Software Development Company
                  </h1>
                  <h3 className="heading-tagline">
                    From start-ups to enterprises, we deliver forward-thinking
                    ERP software with robust functionalities and cutting-edge
                    technologies. Harness our comprehensive ERP services to
                    revolutionize your business processes and strategies in the
                    ERP world.
                  </h3>
                  {/* <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                  {/* <div className="text-center">
                    <a
                      href="https://www.osiztechnologies.com/request-for-quotation"
                      className="expert-btn"
                    >
                      Request For Quote
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="container-fluid breadcrumb-sec">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="https://www.osiztechnologies.com/"><i style={{ fontSize: 16 }} className="fa fa-home" /> Home</a></li>
            <li className="breadcrumb-item active" aria-current="page"> Mobile App Development Company </li>
          </ol>
        </nav>
      </div>
    </div> */}
        {/* <section className="about" id="aboutus">
<div className="container">
  <div className="row">
    <div className="col-lg-6 col-sm-6 my-auto">
      <div className="section-heading text-left">
        <h2> Enterprise Mobility Solutions Provider</h2>
        <p>Mobile app development, a precise option to enhance your business potential. We Osiz Technologies - An industry-leading mobile app development company that provides enterprise-grade mobile app development services &amp; solutions for
          your business. We design and develop custom mobile applications for Android &amp; iOS platforms. We have 50+ mobile app developers who have in-depth knowledge of building customer-centric mobile applications as per the client requirements
          and deliver the product on time. </p>
        <p>Our experience of leading Enterprise Mobile Application Development Company Increases our comprehends that what a business requires in its work progress to become a brand. With this specialization, we have crossed over many of
          happy clients with the successful project completion. Our skilled developer team undergo for deep researching and planning as we knew every project is different and requires special attention, which helps them a lot to bring
          out a bug-free app. </p>
        <p>We are the right support elite to turn your ideas into realities beyond your expectation. We plan to deliver strategically configured and creatively crafted mobile application development services to hold a unique place in the
          app market that makes an exceptional footprint of your business among your respective customers.</p>
        <div className="talk_to_experts_btn_div mt-4 ">
          <a href="#" data-toggle="modal" data-target="#popup_form_modal" className="talk_to_experts_btn_a">Talk to Our Experts</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>  */}
        <section className="Enterprise-container">
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h2>Software Development Solutions Provider</h2>
              <p style={{ fontSize: "20px" }}>
                Metablock Technologies is your strategic partner in software
                development, unlocking the full potential of your business. As a
                leading software development provider, we specialize in
                delivering cutting-edge solutions tailored to meet your specific
                needs. Our team of skilled developers, known for their
                proficiency and dedication, ensures the creation of robust and
                customized software applications.
              </p>



              <button
                type="button"
                data-toggle="modal"
                data-target="#popup_form_modal"
                class="btn BtnPrimry TlkBtn"
                onClick={() => navigate("/ContectUsForm")}
              >
                <span>Talk to our Experts</span>
                <span>Talk to our Experts</span>
              </button>
            </div>
            <div className="Enterprise-right-div">
              <img src="/images/ERPSoftwarebanner.jpg" alt="" />
            </div>
          </div>
        </section>

        <SwiperSlider />
        <KeyFeature />
        {/*============= Technology Stack We Use========= */}

        <section className="section-heading mid_section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ color: "#D166AF " }} className="text-center Technology-Stack ">Technology Stack We Use</h2>
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
                <img src="https://www.metakops.com/assets/img/tech/SQL-Lite.png" alt="" className="w-100 h-40" />
                <h5>SQL Lite</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/html.png" alt="" className="w-100 h-40" />
                <h5>HTML</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="https://www.metakops.com/assets/img/tech/android.png" alt="" className="w-100 h-40" />
                <h5>Android</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="https://www.metakops.com/assets/img/tech/mongo-db-icon.png" alt="" className="w-100 h-40" />
                <h5>Mongo DB</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="https://www.metakops.com/assets/img/tech/app-store.png" alt="" className="w-100 h-40" />
                <h5>App Store</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="https://www.metakops.com/assets/img/tech/atom.png" alt="" className="w-100 h-40" />
                <h5>Atom</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="https://www.metakops.com/assets/img/tech/laravel.png" alt="" className="w-100 h-40" />
                <h5>Laravel</h5>

              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/python.png" alt="" className="w-100 h-40" />
                <h5>Python</h5>

              </div>
            </div>
          </div>
        </section>
        <SoftwareUsesTechnology />
        <AdminControlFeature />
        <section className="process_we_follow section-heading">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="cms text-center Process">
                  <h3>Our Step-By-Step Software Development Process</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="/images/process-flow-new.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="OnDemandApp_section">
          <OnDemandAppSlider />
          {/* <CardSlider/> */}
        </section>

        {/* <section >
      <CardSlider/>
    </section> */}
        {/* <RelatedPortfolioSlider/> */}
        {/* <OnDemandAppSlider/> */}




        {/* <section className='Phone-card-slider'>
      <Phonecardslider />
    </section> */}


        {/* <section className="why_osiz section-heading ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="cms text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h4>Why Choose Metablock For Software Development?</h4>
            </div>
            <div className="why_round" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-7px -541px" }}
              ></div>
              <div className="why-img-title">
                Instant Sharing of Information
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-96px -541px" }}
              />
              <div className="why-img-title">
                Simplify the process and reduce complexity
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-191px -541px" }}
              />
              <div className="why-img-title">
                Instant respond to opportunities
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-291px -541px" }}
              />
              <div className="why-img-title">Increase productivity</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-10px -627px" }}
              />
              <div className="why-img-title">
                Enhance service quality and responsibility
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-98px -627px" }}
              />
              <div className="why-img-title">Less operational cost</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-181px -627px" }}
              />
              <div className="why-img-title">
                Implementing Unique strategies
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="why-cntnt">
              <div
                className="spr_img_mob_dev"
                style={{ backgroundPosition: "-274px -627px" }}
              />
              <div className="why-img-title">
                Agile App Development Process
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        <section>
          <SimilarFile />
        </section>
      </div>
    </>)
}

export default RealstateSoftware
