import React from "react";
import "./BlockchainSupply.css";
import { Link } from "react-router-dom";

const BlockchainSupply = () => {
  return (
    <div>
      <main className="private_public_blockchain_development">
        <section className="blockchain_development_bnr_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 className="title-1">
                  {" "}
                  <span className="cus_title-1">Supply </span>
                  <br />{" "}
                  <span className="grad_text">
                    {" "}
                    Development Company
                  </span>{" "} <br />
                  for Blockchain Technology
                </h1>
                <h3 className="contents">
                MetaBlock offers the only assistance needed to create a public blockchain for a distributed network that is open and &amp; transparent, as well as the complete solution needed to create a private blockchain for a network that is acceptable and secures business data.
                </h3>
                <div className="blk_dev_bnr_btn_sec">
                <Link to="/ContectUsForm">
                  <span
                    
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="blk_dev_bnr_btn"
                  >
                    Request For Quote
                  </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12" />
            </div>
          </div>
        </section>
        <section className="blockchain_software">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7">
                <div className="bs_d_c_bg">
                  <h2 className="blockchain_dev_aboutus_title-1">
                  Blockchain Development Company in the  <b>Public and Private</b> Sector
                  </h2>
                  <div>
                    <p className="section_heading">
                    Today, blockchain is a crucial component of all enterprises. Blockchain technology is being considered by a wide range of industries, including banking, healthcare, supply chain, transportation, etc., as a means of reducing risk, increasing transparency, and propelling company operations to new heights. Certain organizations will want that their information be shared with specific users only, while others would want it shared with every user on the network. Despite being a same technology, public and private blockchains were developed to meet business privacy needs.
                    </p>
                    <p className="section_heading">
                    Being an open network, public blockchain allows anybody to read, write, and join. Since there is no central authority, the data on the network is unchangeable.
                    </p>
                    <p className="section_heading">
                    Private blockchains are networks that are controlled by a single company or group and restrict blockchain access to specific users. Data on a private blockchain can be shared with particular people without being made public.
                    </p>
                    <p className="section_heading">
                    Metablock Technologies has extensive expertise developing blockchain applications for several sectors worldwide. With blockchain experience, we are experts at creating public or private blockchains based on your company's needs in order to efficiently simplify your business processes.
                    </p>
                    <div className="blk_dev_bnr_btn_sec">
                    <Link to="/ContectUsForm">
                      <span
                        className="blk_dev_bnr_btn"
                        data-toggle="modal"
                        data-target="#popup_form_modal"
                      >
                        View Live Demo
                      </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="video-wrapper">
                  <div className="video-container" id="video-container-next">
                    <div className="videoCoverImage">
                      <div onclick="thevid=document.getElementById('thevideo_b'); thevid.style.display='block'; this.style.display='none'">
                        <img
                          className="thumb img-fluid lazyload"
                          loading="eager"
                          style={{ cursor: "pointer" }}
                          src="https://www.osiztechnologies.com/asset/inner-pages-new/blockchain_new/youtube_image.webp"
                        />
                      </div>
                      <div
                        id="thevideo_b"
                        style={{ display: "none" }}
                        className="youtube"
                        data-embed="YDrAqczPmLs"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mid_section">
          <div className="container">
            <div className="section-heading text-center">
              <h3>
              Comparing <b>Public and Private Blockchain</b>Facts
              </h3>
              <p className="section_heading">
              While they differ in some features, public and private blockchains are comparable in many other aspects. Recognize the distinctions between blockchain types before choosing the one that works best for your company:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div className="inr_img">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/blockchain_new/why_icon.png"
                      className="spr_img"
                      alt="Decentralization"
                      title="Decentralization"
                      style={{ objectPosition: "0px 0px" }}
                    />
                  </div>
                  <h3 className="media-heading">Decentralization</h3>
                  <p className="normal_text">
                  In a private blockchain, a single institution or organization will control the blockchain network, as opposed to a public blockchain, which is decentralized and not governed by a single entity.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div className="inr_img">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/blockchain_new/why_icon.png"
                      className="spr_img"
                      alt="Privacy"
                      title="Privacy"
                      style={{ objectPosition: "-177px 0px" }}
                    />
                  </div>
                  <h3 className="media-heading">Privacy</h3>
                  <p className="normal_text">
                  Since the public blockchain is accessible to all members of the network, it lacks privacy and can be used for widespread advertising. However, because private blockchain data is exchanged with specified individuals, it offers greater anonymity.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div className="inr_img">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/blockchain_new/why_icon.png"
                      className="spr_img"
                      alt="Restriction to members"
                      title="Restriction to members"
                      style={{ objectPosition: "-354px 0px" }}
                    />
                  </div>
                  <h3 className="media-heading">Restriction to members</h3>
                  <p className="normal_text">
                  A public blockchain network permits anybody to join and become a member, whereas a private blockchain network limits access to network membership to certain persons.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="work_with_box">
                  <div className="inr_img">
                    <img
                      src="https://www.osiztechnologies.com/asset/inner-pages-new/blockchain_new/why_icon.png"
                      className="spr_img"
                      alt="Sharing of information"
                      title="Sharing of information"
                      style={{ objectPosition: "-522px 0px" }}
                    />
                  </div>
                  <h3 className="media-heading">Sharing of information</h3>
                  <p className="normal_text">
                  The data in a public blockchain will be accessible to all members of the network. On the other hand, with a private blockchain, you have control over who can access network data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="title-1">
              Effects Of Public <b>Blockchain Development</b>
              </h3>
              <p className="para_title-1">
              A private blockchain is a kind of blockchain where only specific users can access it. Private blockchain can benefit your company if you wish to share your information with a large number of individuals within the corporation rather than just one. The following are some advantages of implementing private blockchain in your company:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                <li>Dependable and safe data</li>
                    <li>Archiving of current and historical data</li>
                    <li>Clear and Unchangeable</li>
                    <li>Reduce the amount of paperwork</li>
                    <li>Cut down on dishonesty</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="ul_list right">
                <li>Boost the clientele</li>
                    <li>Cut down on human labor</li>
                    <li>Save money and effort.</li>
                    <li>Remove the requirement for outside parties</li>
                    <li>Cut back on the expense of advertising</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="alg_mac">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="title-1">
                Impact Of Private <b>Blockchain Development</b>
              </h3>
              <p className="para_title-1">
                Private blockchain is a type of blockchain in which the access
                is limited to certain users. If you want to share your
                information with many people in the organization, and not with
                everyone, then private blockchain will help your business. The
                benefits of using private blockchain in your business is as
                follows:
              </p>
              <div className="why_round"> </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul className="ul_list">
                <li>Information not exchanged via a public network</li>
                  <li>Improve privacy</li>
                  <li>Unchangeable record</li>
                  <li>Regulate and oversee the users</li>
                  <li>Cut down on the possibility of loss</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="ul_list right">
                <li>No extra expenses, and processing time is saved</li>
                  <li>Boost security by double</li>
                  <li>Increased effectiveness and tamper-proof</li>
                  <li>Quicker than open blockchain</li>
                  <li>Establish mutual trust between the investors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1">
                Choose Our Committed Blockchain Developer
                </h2>
                <p className="contents">
                For the greatest blockchain solutions for your company, work with our incredibly skilled blockchain developers. Depending on your company's demands, our team of professionals in blockchain development has built public or private blockchains and has implemented blockchain for a variety of industries. Even when the blockchain is deployed on your primary network, our skilled blockchain developers offer end-to-end support for your blockchain development project.
                </p>
                <div className="blk_dev_bnr_btn_sec">
                <Link to="/ContectUsForm">
                  <span
                    target="_blank"
                    className="blk_dev_bnr_btn"
                  >
                    View Live Demo
                  </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-12 pl-lg-0">
                <img
                  src="https://www.osiztechnologies.com/asset/images/inner-pages/private_public_blockchain_development/why-choose-osiz-for-public-private-blockchain-development.png"
                  alt="Hire Our Dedicated Blockchain Developer
  "
                  title="Hire Our Dedicated Blockchain Developer
  "
                  className="img-fluid hire-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_why">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 pl-lg-0">
                <img
                  src="https://www.osiztechnologies.com/asset/images/inner-pages/private_public_blockchain_development/hire-our-dedicated-blockchain-developer.png"
                  alt="Why Choose Osiz For Public / Private Blockchain Development?
  "
                  title="Why Choose Osiz For Public / Private Blockchain Development?
  "
                  className="img-fluid hire-img"
                />
              </div>
              <div className="col-lg-7 col-12 pr-lg-0">
                <h2 className="title-1">
                For The Development Of Public Or Private Blockchains, Why Choose MetaBlock?
                </h2>
                <p className="contents">
                One of the leading blockchain development companies in India is MetaBlock Technologies. We have extensive expertise creating blockchain technology for a wide range of global industries. Because of our experience, we can finish any kind of blockchain project in the allotted time. Our highly skilled blockchain professionals work tirelessly to provide you the most out of public and private blockchain technology and help you grow your company.
                </p>
                <div className="blk_dev_bnr_btn_sec">
                <Link to="/ContectUsForm">
                  <span
                    target="_blank"
                     className="blk_dev_bnr_btn"
                  >
                    View Live Demo
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <section className="MtaverseSec DapsMainBg OurBlgBg">
        <div className="container container-1170 ">
          <div className="row align-items-center ">
            <div className="col-xl-9 ">
              <div className="BnrCnt OurservHdd mb-4 ">
                <p className="mb-4 main_title">
                  Futuristic Tales: Unveiling Technology's Next Big Steps
                </p>
              </div>
            </div>
            <div className="col-xl-3 text-right ">
              <div className=" ">
                <a
                  href="https://www.osiztechnologies.com/blog"
                  className="ViwallLnk "
                  target="_blank"
                >
                  <span className="VwAllLnkHov VwAllLnkHov1 ">
                    View All{" "}
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/view-all-arrw.svg "
                      className="ml-2 "
                      alt="Arrow"
                      title="Arrow"
                    />
                  </span>
                  <span className="VwAllLnkHov VwAllLnkHov2 ">
                    View All{" "}
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/view-all-arrw.svg "
                      className="ml-2 "
                      alt="Arrow"
                      title="Arrow"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our Blog'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a
                    href="https://www.osiztechnologies.com/blog/metaverse-virtual-office-development"
                    aria-label="Read more about Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                    target="_blank"
                  >
                    <img
                      src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse Virtual Office Development Company.webp"
                      className="img img-responsive img-middle home_blog"
                      alt="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                      title="Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                    />
                  </a>
                </div>
                <div className="inr_cont">
                  <span class="month-time">Dec 12,2023</span>
        <span class="time-time">11:27:50 AM</span>
                  <a
                    href="https://www.osiztechnologies.com/blog/metaverse-virtual-office-development"
                    aria-label="Read more about Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                    target="_blank"
                  >
                    <p className="mt-1rem sub_title">
                      Virutalizing the workspace: Building the Virutal Offices
                      of tomorrow
                    </p>
                  </a>
                  <p class="normal_text text-justify mb-2">
          The nature of work is changing quickly in the digital age. The idea of a metaverse office is becoming more and more popular as technology progresses. Businesses can operate remotely with a virtual office, doing away with the requirement for a traditional physical workspace. This blog examines the advantages and difficulties of virtual offices and offers suggestions for creating the virtual workplaces of the future.
  
        </p>
                  <p className="normal_text text-justify mb-2">
                    The nature of work is changing quickly in the digital age.
                    The idea of a metaverse office is becomin...
                  </p>
                  <a
                    href="https://www.osiztechnologies.com/blog/metaverse-virtual-office-development"
                    aria-label="Read more about Virutalizing the workspace: Building the Virutal Offices of tomorrow"
                    className="readmore"
                    target="_blank"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our New'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a
                    href="https://www.osiztechnologies.com/news/decathlon-launches-new-nft-game"
                    target="_blank"
                  >
                    <img
                      src="https://osiztechnologies.s3.us-east-2.amazonaws.com/images/Decathlon launches a new NFT game.webp"
                      className="img img-responsive img-middle home_blog"
                      alt="Decathlon has launched an exciting new NFT game"
                      title="Decathlon has launched an exciting new NFT game"
                    />
                  </a>
                </div>
                <div className="inr_cont">
                  <span class="month-time">Dec 12,2023</span>
        <span class="time-time">11:27:50 AM</span>
                  <a
                    href="https://www.osiztechnologies.com/news/decathlon-launches-new-nft-game"
                    target="_blank"
                  >
                    <p className="mt-1rem sub_title">
                      Decathlon has launched an exciting new NFT game
                    </p>
                  </a>
                  <p class="normal_text text-justify mb-2">
                      </p>
                  <p className="normal_text text-justify mb-2">
                    Decathlon, the French sports retailer, is venturing into the
                    NFT (non-fungible token) space again wi...
                  </p>
                  <a
                    href="https://www.osiztechnologies.com/news/decathlon-launches-new-nft-game"
                    className="readmore"
                    target="_blank"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our Announcement'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a
                    href="https://www.osiztechnologies.com/announcement/merry-christmas-newyear-2024-offers "
                    target="_blank"
                  >
                    <img
                      src="https://osiztechnologies.s3.us-east-2.amazonaws.com/images/Merry-Christmas- Newyear-2024.webp"
                      className="img img-responsive img-middle home_blog"
                      alt="Merry Christmas and New Year 2024: Enjoy 10% OFF!"
                      title="Merry Christmas and New Year 2024: Enjoy 10% OFF!"
                    />
                  </a>
                </div>
                <div className="inr_cont">
                  <span class="month-time">Dec 12,2023</span>
        <span class="time-time">11:27:50 AM</span>
                  <a
                    href="https://www.osiztechnologies.com/announcement/merry-christmas-newyear-2024-offers "
                    target="_blank"
                  >
                    <p className="mt-1rem sub_title">
                      Merry Christmas and New Year 2024: Enjoy 10% OFF!
                    </p>
                  </a>
                  <p class="normal_text text-justify mb-2">
                      </p>
                  <p className="normal_text text-justify mb-2">
                    Celebrate the festive season with Osiz Technologies'
                    exclusive Christmas and New Year 2024 offer! As...
                  </p>
                  <a
                    href="https://www.osiztechnologies.com/announcement/merry-christmas-newyear-2024-offers "
                    className="readmore"
                    target="_blank"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="fixed_social_icons">
        <ul>
          <li class="desktop d-flex"  title="Whatsapp">
        <a href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20Osiz%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.osiztechnologies.com/private-public-blockchain-development"  class="desktop nav-link whatsapp__icons whatsapp"><img src="https://www.osiztechnologies.com/asset/img/whatsapp.svg" alt="whatsapp"></a>
              <a href="https://api.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20Osiz%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.osiztechnologies.com/private-public-blockchain-development"  class="mobile nav-link whatsapp__icons whatsapp"><img src="https://www.osiztechnologies.com/asset/img/whatsapp.svg" alt="whatsapp"></a>
  
  
      
    </li>
    <li class="desktop telegram_new" title="Telegram"><a href="https://telegram.me/Osiz_Tech" target="_blank" class=" nav-link telegram_new"><img src="https://www.osiztechnologies.com/asset/img/telegram.svg" src="{{url('asset/img/telegram.svg')}}" alt="telegram"></a></li>
  
    <li class="desktop " title="Skype"><a href="https://join.skype.com/invite/lAF0IYo03Kfu" class="nav-link skype_new"><img src="https://www.osiztechnologies.com/asset/img/skype.svg" alt="skype-icon"></a></li>
          <li className="desktop top_button_sec" title="TopButton">
            Back to Top
            <a id="back_to_top_button">
              <i className="fa fa-angle-up" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default BlockchainSupply;
