import React from "react";
import "../WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";
import SimilarFile from "../../SimilarFile";
import AdminControlFeature from "./AdminControlFeature/AdminControlFeature";
import { useNavigate } from "react-router-dom";
import HospitalKeyFeature from "./KeyFeatures/HospitalKeyFeature";
import HospitalIndustries from "./SoftwareUsesTechnology/HospitalIndustries";
import HospitalSwiperSlider from "./SwiperSlider/HospitalSwiperSlider";
// import '../../main.css'

const HospitalManagmentSystemSoftware = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-div-Application">
        <header className="enterprise-mobile-app-development arkit header-shadow">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">
                    Hospital Managment System Software Development Company
                  </h1>
                  <h3 className="heading-tagline">
                    Hospital Management Systems streamline healthcare operations
                    by integrating patient records, appointment scheduling, and
                    inventory management. With real-time data access and secure
                    communication channels, they optimize workflow, improve
                    patient care, and enhance administrative efficiency within
                    medical facilities.
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </header>


        <section className="Enterprise-container">
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h1 className="Key-feature-heading">We Are Specialist</h1>
              <p style={{ fontSize: "20px" }}>
                We specialize in hospital management system software, offering
                tailored solutions to streamline operations in healthcare
                facilities. Our software simplifies tasks such as patient
                registration, appointment scheduling, and medical records
                management, improving efficiency and patient care. Whether it's
                a small clinic or a large medical center, our customizable
                software ensures smooth operations and enhanced productivity{" "}
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

              <img src="./images/hoshpitaldevnn.jpg" alt="" />
            </div>
          </div>
        </section>

        <HospitalSwiperSlider />
        <HospitalKeyFeature />
        {/*============= Technology Stack We Use========= */}

        <section className="section-heading mid_section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2
                  style={{ color: "#D166AF ", fontSize: "31px" }}
                  className="text-center Technology-Stack "
                >
                  Technology Stack We Use
                </h2>
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

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/mysql.png" alt="" className="w-100 h-40" />
                <h5>MySQL</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="./images/java-script.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>Java Srcipt</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/SQL-Lite.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>SQL Lite</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/html.png" alt="" className="w-100 h-40" />
                <h5>HTML</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/android.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>Android</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/mongo-db-icon.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>Mongo DB</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/app-store.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>App Store</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/atom.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>Atom</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img
                  src="/images/laravel.png"
                  alt=""
                  className="w-100 h-40"
                />
                <h5>Laravel</h5>
              </div>

              <div className="col-md-2 mt-5 d-flex justify-center align-center flex-column gap-3">
                <img src="./images/python.png" alt="" className="w-100 h-40" />
                <h5>Python</h5>
              </div>
            </div>
          </div>
        </section>
        <HospitalIndustries />
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
                <img src="/images/process-flow-new.svg" alt="" className="img-fluid" />
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


        <section>
          <SimilarFile />
        </section>
      </div>
    </>
  );
};

export default HospitalManagmentSystemSoftware;
