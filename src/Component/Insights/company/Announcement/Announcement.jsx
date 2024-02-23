import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";
import Resizable from "./ReactSlick";

const Announcement = () => {
  const Card = [
    {
      image: "/images/advantages.png",
      title: "MetaBlock offers Black Friday Deals, Save Up to 50%",
    },

    {
      image: "/images/advantages.png",
      title: "MetaBlock offers Black Friday Deals, Save Up to 50%",
    },
  ];

  return (
    <>
      <main id="announcement_page_main">
        <section className="announcement_main_sec">
          <div className="container-fluid">
            <div className="row p-0">
              <div className="col-lg-2 col-12" id="announcement_sidebar">
                <ul className="nav flex-column nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      href="#trending_tab"
                      data-id="trending_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Trending
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#metaverse_tab"
                      data-id="metaverse_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Metaverse
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#web3_tab"
                      data-id="web3_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Web3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#company_tab"
                      data-id="company_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#crypto_tab"
                      data-id="crypto_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Crypto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#black-friday-deals_tab"
                      data-id="black-friday-deals_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Black Friday Deals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#events_tab"
                      data-id="events_tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10 col-12" id="sidebar_content_sec">
                <section className="announcement_banner">
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-7 col-12">
                        <div className="press_lable">Press Release</div>
                        <h1 className="title d-flex align-center">
                          MetaBlock{" "}
                          <span className="cus_brn_title">Announcements</span>
                        </h1>
                        <div className="bnr_contents">
                          Stay in the know with our latest announcements that
                          will keep you informed, inspired, and ahead of the
                          curve in the dynamic realm of Web3 technology.
                        </div>
                        <div className="search_sec">

                        </div>
                      </div>
                      <div className="col-lg-5 col-12" />
                    </div>
                  </div>
                </section>
                <section
                  className="announcement_tab_contents_main"
                  id="announcement_section"
                >
                  <div className="container">
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane in active"
                        id="trending_tab"
                      >
                        <h2 className="title" style={{ margin: "-50px 0px" }}>
                          <span className="cus_title">Trending</span>{" "}
                          Announcement
                        </h2>


                        <Resizable />
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane"
                        id="metaverse_tab"
                      >
                        <div className="title">No Announcement</div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="web3_tab">
                        <div className="title">No Announcement</div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane"
                        id="company_tab"
                      >
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9 col-12">
                            <a
                              href=""
                              style={{ textDecoration: "none" }}
                              target="_blank"
                            >
                              <div className="announce_card_big">
                                <img
                                  src=""
                                  alt="Experience the Next-Gen Digital Landscape: MetaBlock Technologies Unveils a Revamped Website Packed with Exciting New Services."
                                  title="Experience the Next-Gen Digital Landscape: MetaBlock Technologies Unveils a Revamped Website Packed with Exciting New Services."
                                  className="img-fluid card_img"
                                />
                                <div className="sub_title">
                                  Experience the Next-Gen Digital Landscape:
                                  MetaBlock Technologies Unveils a Revamped Website
                                  Packed with Exciting New Services.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9">
                            <div className="row align-items-center justify-content-center"></div>
                          </div>
                        </div>
                        <div className="HddrBtns knowmore_btn_sec">
                          <a
                            href=""
                            className="btn BtnPrimry TlkBtn knowmore_btn"
                            target="_blank"
                          >
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="crypto_tab">
                        <div className="title">No Announcement</div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane"
                        id="black-friday-deals_tab"
                      >
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9 col-12">
                            <a
                              href=""
                              style={{ textDecoration: "none" }}
                              target="_blank"
                            >
                              <div className="announce_card_big">
                                <img
                                  src=""
                                  alt="MetaBlock offers Black Friday Deals, Save Up to 50%"
                                  title="MetaBlock offers Black Friday Deals, Save Up to 50%"
                                  className="img-fluid card_img"
                                />
                                <div className="sub_title">
                                  MetaBlock offers Black Friday Deals, Save Up to 50%
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9">
                            <div className="row align-items-center justify-content-center"></div>
                          </div>
                        </div>
                        <div className="HddrBtns knowmore_btn_sec">
                          <a
                            href=""
                            className="btn BtnPrimry TlkBtn knowmore_btn"
                            target="_blank"
                          >
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="events_tab">
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9 col-12">
                            <a
                              href=""
                              style={{ textDecoration: "none" }}
                              target="_blank"
                            >
                              <div className="announce_card_big">
                                <img
                                  src=""
                                  alt="Merry Christmas and New Year 2024: Enjoy 10% OFF!"
                                  title="Merry Christmas and New Year 2024: Enjoy 10% OFF!"
                                  className="img-fluid card_img"
                                />
                                <div className="sub_title">
                                  Merry Christmas and New Year 2024: Enjoy 10%
                                  OFF!
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-9">
                            <div className="row align-items-center justify-content-center"></div>
                          </div>
                        </div>
                        <div className="HddrBtns knowmore_btn_sec">
                          <a
                            href=""
                            className="btn BtnPrimry TlkBtn knowmore_btn"
                            target="_blank"
                          >
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                            <span>
                              Know More{" "}
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Announcement;
