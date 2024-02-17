import React from "react";
import "./BlockchainIdentityVerifiction.css";
import { Link } from "react-router-dom";

const BlockchainIdentityVerifiction = () => {
  return (
    <div>
      <main id="smart_contract_dev_main">
        <section className="smart_contract_dev_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-12" />
              <div className="col-lg-6 col-12">
                <div className="banner_sec">
                  <h1 className="title">
                    <span className="cus_title">
                      Verification of Blockchain Identity
                    </span>{" "}
                    <br /> Development Company
                  </h1>
                  <p className="contents">
                    Regardless of the size of the company, implementing scalable
                    smart contracts on decentralized networks for multiple
                    industry verticals can automate work processes by doing away
                    with the requirement for a reliable third party.
                  </p>
                  <div className="HddrBtns banner_btn_sec">
                    <Link to="/ContectUsForm">
                      <button
                        data-toggle="modal"
                        data-target="#popup_form_modal"
                        className="btn BtnPrimry TlkBtn banner_btn"
                        target="_blank"
                      >
                        <span>
                          {/* <img
                          src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        /> */}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z"
                              fill="white"
                            ></path>
                          </svg>
                          Request A Quote
                        </span>
                        <span>
                          {/* <img
                          src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        /> */}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9483 23.8503C5.33292 23.8669 -0.00474671 18.5293 3.16764e-06 11.9008C0.00475304 5.38755 5.39111 0.00237574 11.902 8.01666e-07C18.5245 -0.00237413 23.8028 5.27236 23.8171 11.9079C23.8325 18.5399 18.5708 23.8337 11.9483 23.8503ZM14.5964 10.7122C14.5607 10.7798 14.5263 10.8463 14.4907 10.914C14.1986 10.914 13.9076 10.914 13.6155 10.914C11.4591 10.914 9.30263 10.9081 7.14619 10.9188C6.32327 10.9223 5.85303 11.4246 5.97534 12.1205C6.06797 12.6501 6.47052 12.9375 7.17469 12.9387C9.42969 12.9446 11.6847 12.941 13.9409 12.941C14.1463 12.941 14.3517 12.941 14.7329 12.941C14.1392 13.5502 13.6737 14.0228 13.2142 14.5026C12.7617 14.9752 12.7285 15.4585 13.1097 15.8586C13.5253 16.2944 14.0121 16.279 14.5026 15.7815C15.5178 14.7543 16.5248 13.7188 17.527 12.6798C18.0246 12.1644 18.027 11.6871 17.5294 11.1812C16.5011 10.1386 15.4656 9.10432 14.4254 8.07479C13.9254 7.57961 13.4493 7.55942 13.0325 7.99404C12.6382 8.4049 12.6584 8.87514 13.1298 9.343C13.606 9.81443 14.1071 10.2574 14.5964 10.7122Z"
                              fill="white"
                            ></path>
                          </svg>
                          Request A Quote
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_sec">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-12 pr-lg-0">
                <div
                  className="aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay={300}
                >
                  <h2 className="title">
                    reputable firm for developing smart contracts
                  </h2>
                  <p className="contents">
                    Smart contracts are self-executing digital agreements that
                    have the capacity to electronically support, validate, or
                    uphold the conditions of the business-to-business contract.
                    When smart contracts are connected to blockchain, data
                    becomes unchangeable and a third party is no longer
                    required, automating corporate processes and reducing
                    expenses.
                  </p>
                  <p className="contents">
                    Reputable smart contract development firm MetaBlock
                    Technologies offers top-notch smart contract solutions to
                    businesses and startups. Our experts are knowledgeable on
                    cutting edge technologies, such as recent developments in
                    blockchain technology. Our goal is to help you reduce
                    operating costs and time by offering the most accurate smart
                    contract services possible.
                  </p>
                  <div className="smart_contract_dev_about_btn_sec">
                    <a
                      href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20Osiz%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.osiztechnologies.com/smart-contract-development"
                      className="btn smart_contract_dev_about_btn desktop"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp" />
                      &nbsp;WhatsApp
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20Osiz%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.osiztechnologies.com/smart-contract-development"
                      className="btn smart_contract_dev_about_btn mobile"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp" />
                      &nbsp;WhatsApp
                    </a>
                    <a
                      href="https://telegram.me/Osiz_Tech"
                      className="btn smart_contract_dev_about_btn1"
                      target="_blank"
                    >
                      <i className="fab fa-telegram" />
                      &nbsp;Telegram
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 pl-lg-0">
                <div
                  className="img_sec aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/smart-contract-dev.webp"
                    alt="NFT Game Development Company"
                    title="NFT Game Development Company"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_services">
          <div className="container">
            <h2 className="title">Services for Developing Smart Contracts</h2>
            <p className="contents">
              Since smart contracts form the foundation of business automation,
              they are a crucial component of any blockchain-based enterprise.
              Regardless of your sector, as the top blockchain development firm,
              we specialize in providing bespoke smart contract creation
              services.
            </p>
            <div className="row scont-serv-parent justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6 col-12 scont-serv-child bor_rad_fst">
                <div
                  className="services_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="head_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/service-icons.svg"
                      alt="A self-auditing mechanism of digital value reduces error"
                      title="A self-auditing mechanism of digital value reduces error"
                      className="sprite_icons"
                      style={{ objectPosition: "0px 0px" }}
                    />
                    <div className="sub_title">
                      An error-reducing digital value self-auditing technique
                    </div>
                  </div>
                  <p className="sub_contents">
                    The most crucial requirement for the finest smart contract
                    is an excellent work-flow in the smart contract code. To
                    ensure that the creation of the smart contract is exact and
                    error-free, we have experts on staff.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 scont-serv-child">
                <div
                  className="services_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="head_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/service-icons.svg"
                      alt="Smart contract Design & Development"
                      title="Smart contract Design & Development"
                      className="sprite_icons"
                      style={{ objectPosition: "-82px 0px" }}
                    />
                    <div className="sub_title">
                      Smart contract Design &amp; Development
                    </div>
                  </div>
                  <p className="sub_contents">
                    The nature and scale of a business determine the differences
                    in smart contracts across all industries. Modern smart
                    contracts with sophisticated, adaptable features that work
                    in any business are what we design and create.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 scont-serv-child bor_rad_last">
                <div
                  className="services_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="head_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/service-icons.svg"
                      alt="Smart Contracts Audit"
                      title="Smart Contracts Audit"
                      className="sprite_icons"
                      style={{ objectPosition: "-168px 0px" }}
                    />
                    <div className="sub_title">Audit of Smart Contracts</div>
                  </div>
                  <p className="sub_contents">
                    The development of a trustworthy smart contract with perfect
                    functionality is ensured by smart contract audits. We offer
                    thorough smart contract auditing services to ensure a
                    digital contract that is legitimate and error-free by
                    thoroughly evaluating smart contracts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 scont-serv-child last-col1">
                <div
                  className="services_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="head_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/service-icons.svg"
                      alt="Smart Contracts Optimization"
                      title="Smart Contracts Optimization"
                      className="sprite_icons"
                      style={{ objectPosition: "-261px 0px" }}
                    />
                    <div className="sub_title">Optimizing Smart Contracts</div>
                  </div>
                  <p className="sub_contents">
                    A smart contract requires Ethereum gas for each and every
                    action. Reduced Ethereum gas waste is possible with an
                    efficient smart contract. Our specialty is the optimization
                    of smart contracts for a smooth workflow.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 scont-serv-child last-col">
                <div
                  className="services_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="head_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/service-icons.svg"
                      alt="Build Decentralized Applications"
                      title="Build Decentralized Applications"
                      className="sprite_icons"
                      style={{ objectPosition: "-354px 0px" }}
                    />
                    <div className="sub_title">Develop Decentralized Apps</div>
                  </div>
                  <p className="sub_contents">
                    A software's security and functionality will be doubled by
                    decentralized apps and smart contracts in business
                    processes. To guarantee total automation, we provide
                    specialized services for developing original smart contracts
                    for decentralized applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_benefits">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 scont-titl-wra">
                <div
                  style={{ width: "250px" }}
                  className="benefits_box-1-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <h2 className="title">
                    Advantages Of An Intelligent Agreement
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color1">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "5px 5px" }}
                    alt="Reduce costs and time"
                    title="Reduce costs and time"
                  />
                  <div className="sub_title">Cut expenses and time</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color2">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-121px 5px" }}
                    alt="Automated business process enhances accuracy"
                    title="Automated business process enhances accuracy"
                  />
                  <div className="sub_title sub_title_blk">
                    Productivity gains from automated business processes
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color1">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-253px 5px" }}
                    alt="Decentralized execution leads to transparent record-keeping"
                    title="Decentralized execution leads to transparent record-keeping"
                  />
                  <div className="sub_title">
                    Decentralized implementation promotes open record-keeping
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color2">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-401px 5px" }}
                    alt="Quick, reliable, and immutable"
                    title="Quick, reliable, and immutable"
                  />
                  <div className="sub_title sub_title_blk">
                    Fast, dependable, and unchangeable
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color3">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-549px 5px" }}
                    alt="Clear communication"
                    title="Clear communication"
                  />
                  <div className="sub_title">Unambiguous communication</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color4">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-706px 5px" }}
                    alt="Data secured"
                    title="Data secured"
                  />
                  <div className="sub_title">Data protection</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color3">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-862px 5px" }}
                    alt="Higher efficiency"
                    title="Higher efficiency"
                  />
                  <div className="sub_title">Increased effectiveness</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color4">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-1013px 5px" }}
                    alt="Eliminating intermediaries will enhance trust"
                    title="Eliminating intermediaries will enhance trust"
                  />
                  <div className="sub_title">
                    Removing middlemen will increase confidence
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color1">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-1157px 5px" }}
                    alt="A self-auditing mechanism of digital value reduces error"
                    title="A self-auditing mechanism of digital value reduces error"
                  />
                  <div className="sub_title">
                    Error is decreased by a digital value self-auditing system.
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 scont-bt-wra new_common_tile_color2">
                <div
                  className="benefits_box-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/benefit-icons.svg"
                    className="scont_bt_sprite "
                    style={{ objectPosition: "-1300px 5px" }}
                    alt="Storage and backup can retrieve lost data easily"
                    title="Storage and backup can retrieve lost data easily"
                  />
                  <div className="sub_title sub_title_blk">
                    Backups and storage make it simple to recover lost data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_process">
          <div className="container">
            <h2 className="title">Procedure for Developing Smart Contracts</h2>
            <p className="contents">
              In order to automate transactions in blockchain, smart contracts
              have become essential. We can help you lower the costs and hassle
              of blockchain transactions regardless of the size of your
              company—we have extensive expertise integrating smart contracts
              into both start-ups and major enterprises. The following is the
              effective procedure we employ to improve integration:
            </p>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="num_sec">01</div>
                    <div className="sub_title">Scoping Out the Need</div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-1 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-2px -4px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents">
                      Our team of specialists will first engage in a
                      brainstorming session with you to gain a thorough
                      understanding of your business requirements and to assess
                      the business concept that will be incorporated into the
                      smart contract.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents even_sub_cont">
                      As soon as we have a clear understanding of your business
                      needs, our skilled team will draft a paper outlining the
                      smart contracts, produce a thorough data flow diagram,
                      design the technical architecture, record the technical
                      requirements for GDPR compliance, and define milestones.
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-1 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-159px -3px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="num_sec even_num_sec">02</div>
                    <div className="sub_title even_sub_tit">
                      Technical layout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="num_sec">03</div>
                    <div className="sub_title">Advancement</div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-1 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-317px -3px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents">
                      Our experts create alpha and beta smart contracts after
                      fully understanding the requirements and technological
                      design. They also create precise smart contracts that are
                      tailored to your company's needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents even_sub_cont">
                      Prior to deployment, a thorough testing process will be
                      carried out by our quality assurance team to ensure that
                      the produced smart contract is 100% secure and free from
                      errors.
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-2 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-473px -3px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="num_sec even_num_sec">04</div>
                    <div className="sub_title even_sub_tit">Testing</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="num_sec">05</div>
                    <div className="sub_title">Deployment</div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-1 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-630px -3px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents">
                      We put the produced smart contract on the main blockchain
                      network and have it ready for use in your organization
                      after quality control and defect-free testing verify it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process_box">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-5 col-12 order-3 order-lg-1">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    <div className="sub_contents even_sub_cont">
                      Our team of smart contract professionals, which consists
                      of developers, QA specialists, and technical experts, will
                      continue to provide their services to deploy a new smart
                      contract with the required updates if there are any
                      backlogs in the contract or if any modifications are
                      needed.
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 order-1 order-lg-2">
                  <div
                    className="img_sec aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/process-icons.svg"
                      className="sprite_icons"
                      style={{ objectPosition: "-788px -3px" }}
                      alt="Analyzing the Requirement"
                      title="Analyzing the Requirement"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 order-2 order-lg-3">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay={500}
                  >
                    <div className="num_sec even_num_sec">06</div>
                    <div className="sub_title even_sub_tit">Upgrades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_industry">
          <div className="container">
            <h2 className="title">
              Sectors That Make Use of Smart Contract Development
            </h2>
            <p className="contents">
              In any official agreement between persons engaged in business,
              contracts are a crucial component. Many sectors already use smart
              contracts, and we are skilled at utilizing computer code to
              transform your traditional contract into a digital contract that
              operates on its own in the following areas:
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="industry_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/industry-icons.svg"
                    alt="Banking"
                    title="Banking"
                    className="sprite_icons"
                    style={{ objectPosition: "-2px -2px" }}
                  />
                  <div className="sub_title">Banking</div>
                  <p className="sub_contents">
                    Within the banking and finance sector, smart contracts have
                    the potential to simplify banking procedures, enhance data
                    quality, fortify security, expedite processing, minimize
                    paperwork, and augment the functionality of financial
                    markets.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="industry_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/industry-icons.svg"
                    alt="Insurance"
                    title="Insurance"
                    className="sprite_icons"
                    style={{ objectPosition: "-142px -2px" }}
                  />
                  <div className="sub_title">Insurance</div>
                  <p className="sub_contents">
                    The typical processing and payment timeframe for insurance
                    claims is lengthy, increasing expenses and creating
                    inefficiencies. Claiming can be made easier, faster, and
                    more successful with the use of smart contracts in
                    insurance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="industry_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/industry-icons.svg"
                    alt="Healthcare"
                    title="Healthcare"
                    className="sprite_icons"
                    style={{ objectPosition: "-282px -2px" }}
                  />
                  <div className="sub_title">Healthcare</div>
                  <p className="sub_contents">
                    Patients will be able to exchange their medical information
                    with any member of the network using smart contracts at
                    hospitals and healthcare facilities, which will enhance data
                    provider collaboration and lead to more precise diagnosis.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="industry_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/industry-icons.svg"
                    alt="Supply chain"
                    title="Supply chain"
                    className="sprite_icons"
                    style={{ objectPosition: "-432px -2px" }}
                  />
                  <div className="sub_title">Supply chain</div>
                  <p className="sub_contents">
                    Supply chain management companies employ smart contracts to
                    track ownership rights while several products are moved
                    through the supply chain. Time can be saved, efficiency can
                    rise, and customer engagement can be enhanced.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="industry_box aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/smart-contract-development/industry-icons.svg"
                    alt="Transport & Logistics"
                    title="Transport & Logistics"
                    className="sprite_icons"
                    style={{ objectPosition: "-573px -2px" }}
                  />
                  <div className="sub_title">Transport &amp; Logistics</div>
                  <p className="sub_contents">
                    By giving real-time insight across the whole supply chain,
                    smart contracts in the transportation and logistics sector
                    will simplify the process for businesses to track the
                    movement of products from the producer to the recipient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="smart_contract_dev_why">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12" />
              <div className="col-lg-6 col-12 why_choose_box">
                <h2 className="title">
                  Reasons to Select MetaBlock for Developing Smart Contracts?
                </h2>
                <p className="contents">
                  The greatest smart contract development firm in India is
                  MetaBlock Technologies, and they offer the best smart contract
                  solutions for your company. Our team of smart contract
                  specialists has extensive experience and in-depth
                  understanding in offering premium smart contract solutions to
                  any vertical of the industry. As a top blockchain development
                  company, we specialize in creating unique smart contract
                  solutions for the Ethereum blockchain. Our staff will offer
                  full automation support, from determining the project's
                  business needs to completing it.
                </p>
                <div className="HddrBtns smart_contract_btn_sec">
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn BtnPrimry TlkBtn smart_contract_btn"
                    target="_blank"
                  >
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Request A Quote
                    </span>
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Request A Quote
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlockchainIdentityVerifiction;
