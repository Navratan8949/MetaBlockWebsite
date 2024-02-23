import React from "react";
import "../../WebApplicationDevelopment/WebApplicationMainPage.css";
import OnDemandAppSlider from "../OnDemandAppSlider";

import SimilarFile from "../../SimilarFile";

import { useNavigate } from "react-router-dom";
import SwiperSlider from "../SoftwarePages/SwiperSlider/SwiperSlider";
import KeyFeature from "../SoftwarePages/KeyFeatures/KeyFeature";
import SoftwareUsesTechnology from "../SoftwarePages/SoftwareUsesTechnology/SoftwareUsesTechnology";
import AdminControlFeature from "../SoftwarePages/AdminControlFeature/AdminControlFeature";
import ChattingKeyFeature from "./KeyFeature/ChattingKeyFeature";
import ChattingIndustries from "./ApplicationUsesIndustries/ChattingIndustries";
import ChattingSwiperSlider from "./ApplicationSwiperSlider/ChattingSwiperSlider";

const ChattingApps = () => {
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
                    Chatting Apps
                  </h1>
                  <h3 className="heading-tagline">
                    Chatting apps facilitate instant communication worldwide, connecting users through text, voice, and video calls. With features like emojis, group chats, and multimedia sharing, they enhance social interactions.
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="Enterprise-container">
          <div className="Enterprise-box">
            <div className="Enterprise-left-div">
              <h1 className='Key-feature-heading'>We Are Specialist</h1>
              <p style={{ fontSize: "20px" }}>

                Step into a world of seamless communication with our innovative chatting app. Engineered for efficiency and versatility, our platform offers features designed to elevate your chatting experience. With real-time messaging, multimedia sharing, and customizable options, staying connected has never been easier. Our focus on user-centric design ensures intuitive navigation, making every conversation a delight. Whether you're a casual chatter or a professional communicator, our app adapts to your needs, empowering you to express yourself effortlessly. Join the conversation and discover the endless possibilities of our specialized chatting app today.





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
              <img src="https://soften.themeht.com/wp-content/uploads/2023/12/05-1.png" alt="" />
            </div>
          </div>
        </section>

        <ChattingSwiperSlider />
        < ChattingKeyFeature />
        {/*============= Technology Stack We Use========= */}

        <section className="section-heading mid_section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ color: "#D166AF ", fontSize: "31px" }} className="text-center Technology-Stack ">Technology Stack We Use</h2>
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
        <ChattingIndustries />
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

        <section>
          <SimilarFile />
        </section>
      </div>
    </>
  );
}

export default ChattingApps
