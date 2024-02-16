import React from "react";
import "./main.css";
import "./Component/MetaversDevelopment/MetaverseDevelopment.css";

// import AboutWhoWeAre from "./AboutWhoWeAre";
// import ReactSlick from "./ReactSlick";
// import Autoplay from "./pages/ReactSlick/ReactS/lick";

// import RelatedPortfolioSlider from "./RelatedPortfolioSlider/RelatedPortfolioSlider";
import SimilarFile from "./Component/SimilarFile";
import AboutForm from "./Component/MainPage/AboutForm";
import AboutUsWhoWeAre from "./Component/MainPage/AboutUsWhoWeAre";
import { Button } from "@mui/material";
import OurServices from "./Component/MainPage/OurServices/OurServices";
import TrandingProduct from "./Component/MainPage/TrandingProduct";
import { Link } from "react-router-dom";
// import SimilarFile from "./SimilarFile";
const Main = () => {
  return (
    <div style={{ background: "black" }}>
      <div className="Main-div MnuPaddTop">
        <section className="BnnrSecMain" id="homebanner">
          <div className="container-fluid pl-0 pr-0">
            <div className="VideoWrper VidoFltr">
              <video autoPlay muted loop playsInline preload="metadata">
                <source
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/video-bnr-new.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="VidoCnt">
                <div>
                  <div className="BnrCnt bnrVideoTop">
                    <h2 className="mb-lg-2 text">Web & BlockChain</h2>
                    <span className="typed-cursor">|</span>
                    <h2>
                      <span className="TxtGrdnt" data-shine="Development">
                        Development
                      </span>{" "}
                      <span className="Fw-600 ">Company</span>
                    </h2>
                    <p>
                      Boost your business effectiveness with our tailored end-to-end solutions,
                      <br /> carefully crafted to meet your unique requirements.
                    </p>
                  </div>

                  {/* <div className="HddrBtns banner_btn_sec">
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn BtnPrimry TlkBtn"
                  >
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Talk to our Experts
                    </span>
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Talk to our Experts
                    </span>
                  </button>
                </div> */}
                  <div className="row justify-content-center">
                    <div className=" col-lg-12">
                      <div>
                        <p
                          className="upper-heading"
                          style={{ fontSize: 18, textTransform: "uppercase" }}
                        >
                          We are the leaders in web & blockchain development.
                        </p>
                      </div>
                      <div className="four-box row w-75 ">
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">54+</p>
                            <p className="vdoCntLstTlt">Developers

                            </p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">768+</p>
                            <p className="vdoCntLstTlt">Projects Delivered</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">7+</p>
                            <p className="vdoCntLstTlt">Years of Expertise</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">4+</p>
                            <p className="vdoCntLstTlt">Countries Served</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <AboutForm />
                </div>
              </div>
              <div className="GrdentBg" />
            </div>
          </div>
        </section>
        <div>
          <AboutUsWhoWeAre />
          {/* <AboutWhoWeAre/> */}
        </div>

        <div>
          <OurServices />
        </div>


        <div className="MtaverseSec DapsMainBg TechStk">
          <div className="container container-1170">
            {/* <div class="OurSrvcHdd mb-lg-3">
					<h6>Technology Stack</h6>
				</div> */}
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" ">
                Ignite
                <span className="Txt8282 px-2">
                  Innovation With the power of Our
                </span>
                Tech Stack
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 order-lg-2">
                <div
                  className="nav flex-column nav-pills VrtclTbb"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-toggle="pill"
                    data-target="#TechStkTbb1"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb1"
                    aria-selected="true"
                  >
                    Web
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb2"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb2"
                    aria-selected="false"
                  >
                    Mobile
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb3"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb3"
                    aria-selected="false"
                  >
                    Desktop Apps
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb4"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb4"
                    aria-selected="false"
                  >
                    Blockchain
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb5"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Blockchain Tools
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb6"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Game
                  </button>

                </div>
              </div>
              <div className="col-lg-10 order-lg-1">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="TechStkTbb1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/nuxtimg.webp"
                                    alt="Nuxt Js"
                                    title="Nuxt Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Nuxt Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/nextjsicon.webp"
                                    alt="Next Js"
                                    title="Next Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Next Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/express-js.png"
                                    alt="Express Js"
                                    title="Express Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Express Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/nodejs.jpg"
                                    alt="Node Js"
                                    title="Node Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={800}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/angularicon.webp"
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={400}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/mongodbicon.webp"
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={500}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/jqueryicon.webp"
                                    alt="JQuery"
                                    title="JQuery"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>JQuery</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={600}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/mysqlicon.webp"
                                    alt="My Sql"
                                    title="My Sql"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>My Sql</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={700}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/phpicon.webp"
                                    alt="PHP"
                                    title="PHP"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>PHP</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/laravelicon.webp"
                                    alt="Laravel"
                                    title="Laravel"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Laravel</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={900}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/codeignitoricon.webp "
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/bootstrapicon.webp"
                                    alt="Bootstrap"
                                    title="Bootstrap"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Bootstrap</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1000}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/htmlcssicon.webp"
                                    alt="HTML 5"
                                    title="HTML 5"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HTML 5</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/cssicon.webp"
                                    alt="CSS 3"
                                    title="CSS 3"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>CSS 3</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Web</h3>
                          <p>
                            Web development is one of the oldest services and over time it has evolved a lot. At MetaBlock we are always ahead of the market by using only the latest and the best web technologies for our client projects. Some of the web technologies we use are HTML, CSS, Javascript, Bootstrap, Tailwind, and React JS.
                          </p>
                        </div>
                      <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>

                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb2"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/Fluttericon.webp"
                                    alt="Flutter"
                                    title="Flutter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Flutter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/kotlinicon.webp"
                                    alt="Kotlin"
                                    title="Kotlin"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Kotlin</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/swifticon.webp"
                                    alt="Swift"
                                    title="Swift"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Swift</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/androidstudio.webp"
                                    alt="Android Studio"
                                    title="Android Studio"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android Studio</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/iosicon.webp"
                                    alt="iOS"
                                    title="iOS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>iOS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/androidicon.webp"
                                    alt="Android"
                                    title="Android"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/javaicon.webp"
                                    alt="Java"
                                    title="Java"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Java</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/jetpackicon.webp"
                                    alt="Jetpack"
                                    title="Jetpack"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Jetpack</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/iconicicon.webp"
                                    alt="Ionic"
                                    title="Ionic"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ionic</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/reactjsicon.webp"
                                    alt="ReactJS"
                                    title="ReactJS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>ReactJS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/codeignitoricon.webp"
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Mobile Icon/mongodbicon.webp"
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Mobile</h3>
                          <p>
                            A mobile tech stack is a mix of software and programming languages that developers use to create mobile apps. It includes tools for building the visible parts of the app (front-end) and the behind-the-scenes functionality (back-end), along with additional resources like libraries and frameworks. It's like a toolbox that developers use to build and enhance mobile applications.
                          </p>
                        </div>
                        <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb3"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/reactjsicon.webp"
                                    alt="React JS"
                                    title="React JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/reactjsicon.webp"
                                    alt="NW.JS"
                                    title="NW.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NW.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/reactjsicon.webp"
                                    alt="App.JS"
                                    title="App.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>App.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/meteoricon.webp"
                                    alt="Meteor"
                                    title="Meteor"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Meteor</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/protonicon.webp"
                                    alt="Proton Native"
                                    title="Proton Native"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Proton Native</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/sevleticon.webp"
                                    alt="Sevelet"
                                    title="Sevelet"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Sevelet</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/angularicon.webp"
                                    alt="Angular 8"
                                    title="Angular 8"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular 8</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/nodejsicon.webp"
                                    alt="Node JS"
                                    title="Node JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/vuejsicon.webp"
                                    alt="Vue.JS"
                                    title="Vue.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Vue.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/electronjsicon.webp"
                                    alt="Electron.JS"
                                    title="Electron.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Electron.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/DeskstopIcon/angularicon.webp"
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Desktop Apps</h3>
                          <p>
                            After web development, we expanded to the desktop application focusing on providing solutions for the industries. Our desktop apps are fast and reliable and they don’t require huge system requirements to work at their peak. Some of the technologies for desktop applications are Node JS, React JS, Express JS, Mongo DM, PHP, and Laravel. These allow us to make the software extremely lightweight for any PC to run and allow it to preform complicated tasks.
                          </p>
                        </div>
                        <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb4"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/blockchainicon/solidityicon.webp"
                                    alt="Solidity"
                                    title="Solidity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Solidity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/blockchainicon/hyperledgericon.webp"
                                    alt="HyperLedger"
                                    title="HyperLedger"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HyperLedger</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/blockchainicon/golangicon.webp "
                                    alt="Golang"
                                    title="Golang"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Golang</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/blockchainicon/smartcontracticon.webp"
                                    alt="SmartContract"
                                    title="SmartContract"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>SmartContract</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/blockchainicon/ipfsicon.webp"
                                    alt="IPFS"
                                    title="IPFS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>IPFS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain</h3>
                          <p>
                            Blockchain technology stacks are like building blocks that come together to form a secure and decentralized system. At the core is the blockchain protocol, ensuring the system's integrity. On top of that, various methods and programming languages are used to enable transactions and execute code. It's a structured system where each layer plays a crucial role in making blockchain technology work securely and efficiently.



                            {/* Blockchain-based tech stacks help in providing a seamless experience for users interacting with the blockchain. */}
                          </p>
                        </div>
                        <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb5"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Blockchain Tools Icon/Metamask Icon.webp"
                                    alt="Metamask"
                                    title="Metamask"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Metamask</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Blockchain Tools Icon/ganacheicon.webp"
                                    alt="Ganache"
                                    title="Ganache"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ganache</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Blockchain Tools Icon/truffleicon.webp"
                                    alt="Truffle"
                                    title="Truffle"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Truffle</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Blockchain Tools Icon/remixicon.webp"
                                    alt="Remix"
                                    title="Remix"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Remix</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain Tools</h3>
                          <p>
                            Blockchain tools are used because they are essential for ensuring secure and transparent data management. These tools primarily create a decentralized database that cannot be tampered with, is unchangeable, and resistant to hacking. The main purpose is to maintain the integrity and security of data in a way that is trustworthy and resistant to unauthorized changes.






                            {/* This technology can be utilized for various purposes such as supply chain management, identity verification, and smart contract execution.  */}
                          </p>
                        </div>
                        <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb6"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/unityicon.webp"
                                    alt="Unity"
                                    title="Unity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/unrealicon.webp"
                                    alt="Unreal Engine"
                                    title="Unreal Engine"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unreal Engine</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/reactjs.webp"
                                    alt="React"
                                    title="React"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/nodejsicon.webp"
                                    alt="NodeJs"
                                    title="NodeJs"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NodeJs</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/mongodbicon.webp"
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/publicblokchainicon.webp"
                                    alt="Public Blockchains"
                                    title="Public Blockchains"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Public Blockchains</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="./SGimage/Game Icon/marmaladeicon.webp"
                                    alt="Marmalade SDK"
                                    title="Marmalade SDK"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Marmalade SDK</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Game</h3>
                          <p>
                            Game tech stacks serve the purpose of building a strong foundation for various aspects of game development, including database management, server-side scripting, frontend, and backend development. These tech stacks are designed to ensure smooth performance, scalability, and stability, making them an ideal choice for creating a robust gaming platform. In simpler terms, they are like a toolkit that developers use to construct and maintain a gaming environment that runs smoothly and can handle the demands of players.

                          </p>
                        </div>
                        <Link to="/ContectUsForm">  <Button className="button-who">Visit Now</Button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why_osiz_blockchain_sec">
          <div className="container">
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" why-Metablock-heading ">
                Why MetaBlock<span className="Txt8282 px-2">is Your</span> Trusted
                {" "}
                <span className="Txt8282 px-2">Development Partner?</span>
              </h2>
            </div>
            <div className="why_osiz_blockchain_card">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12 trusted-img" >
                  <img src="./SGimage/contact_img.jpg"/>
                </div>
                <div className="col-lg-6 col-12">
                  <p className="contents">
                    MetaBlock Technologies, drawing upon extensive experience and proficiency in blockchain development, stands as a reliable industry partner. Harnessing the capabilities of cutting-edge technologies such as Ethereum, Hyperledger, and Stellar, we specialize in crafting secure and scalable blockchain applications tailored to diverse business needs. Our commitment to a customer-centric approach ensures open communication and collaboration throughout the project lifecycle, promoting transparency and timely project delivery. Choosing MetaBlock Technologies as your blockchain development partner guarantees high-quality solutions that seamlessly propel your business operations into the decentralized future.

                  </p>
                  <div className="HddrBtns mt-4">
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn BtnPrimry TlkBtn"
                      target="_blank"
                    >
                      <span>
                        <img
                          src="https://png.pngtree.com/png-vector/20210407/ourmid/pngtree-flat-design-of-business-partnership-png-image_3195753.jpg"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        />
                        Talk to our Experts
                      </span>
                      <span>
                        {/* <img
                          src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z" fill="white"></path></svg>
                       Talk to our Experts
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
            <TrandingProduct />
          </div>
          
        <div>
          <SimilarFile />
        </div>
      </div>
    </div>
  );
};

export default Main;
