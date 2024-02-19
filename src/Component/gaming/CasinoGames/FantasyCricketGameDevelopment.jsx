import React from "react";
import "../../gaming/gernralgames/GeneralGamesDevelopment.css";
import AutoPlay from "../../MainPage/ReactSlick";
import { Link, useNavigate } from "react-router-dom";
import AutoPlaygame from "../gernralgames/Gameslider";

const FantasyCricketGameDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <main id="game_dev_comp_main">
        <section className="cta mt-5 position-relative overflow-hidden ">
          {/* <img class="bg-img" src="./assets/img/—Pngtree—casino slot with chips and_5986400.png" alt=""> */}
          {/* <div class="bg-filter-dark"></div> */}
          {/* <img class="bg-img" src="./assets/img/h2-img-3.png" alt=""> */}
          <div className="row">
            <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
              <div className="container px-5 ms-3 row gx-5 py-5 align-items-center">
                <h1 className="display-5 txt-center-m glow-text lh-1 mb-3 text-white fw-bold g-text">
                  Fantasy App
                  <span style={{ fontWeight: "lighter" }}>
                    {" "}
                    Development <span></span>
                  </span>
                </h1>
                {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
                <h3 className=" mb-4 mt-4 txt-center-m">
                  Top Rated Fantasy App Developer
                </h3>
                <p
                  style={{ color: "white" }}
                  className=" fw-normal mb-4 txt-center-m"
                >
                  MetaBlock is a leading Fantasy App development company. Our
                  team of expert Rummy game developers excels in creating
                  visually appealing, user-friendly, and immersive Rummy games.
                  We incorporate a plethora of advanced features to enhance the
                  gaming experience and ensure that players enjoy the best
                  possible gameplay. Our aim is to deliver top-quality Rummy
                  games that meet the expectations of players.
                </p>
                <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit">
                  <Link
                    to="/ContectUsForm"
                    className="color-btn btn-hover gap-2"
                  >
                    Get Quote{" "}
                    <ion-icon name="rocket-outline" className="fs-5 rocket" />
                  </Link>
                </div>
                <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit">
                  <Link
                    to="/Aboutus"
                    style={{ marginLeft: 15 }}
                    className="color-btn btn-hover gap-2"
                  >
                    See Our Work{" "}
                    <ion-icon name="rocket-outline" className="fs-5 rocket" />
                  </Link>
                </div>
                {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
              </div>
            </div>
            <div className="col-lg-6 ps-0">
              <img
                className="cta-content-img"
                src="./images/fantasygame1.png"
                alt
              />
            </div>
          </div>
        </section>

        <section className=".section bg-main position-relative">
          {/* <img class="bg-img" src="./assets/img/—Pngtree—casino slot with chips and_5986400.png" alt="">
  <div class="bg-filter-dark"></div> */}
          <div className="row">
            <div className="col-lg-6 ps-0">
              <img
                className="cta-content-img"
                src="./images/fantasygame2.png"
                alt
              />
            </div>
            <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
              <div className="container px-5 ms-3 row gx-5 py-5 align-items-center">
                <h1 className="display-5 glow-text lh-1 mb-3 text-white fw-bold g-text">
                  Fantasy App Development Services
                </h1>
                {/* <h2 class="text-white display-1 lh-1 mb-4 ">
              WE MAKE DREAMS <br> COME TO LIFE
          </h2> */}
                <h3 className="text-white mb-4 mt-4">
                  Developed 100+ Fantasy App
                </h3>
                <p className=" fw-normal text-white mb-4 ">
                  MetaBlock Technologies is a leading Fantasy App development
                  company. Our efficient game developers have years of
                  experience in developing Rummy games and with their expertise,
                  they can develop games that will definitely make you remember
                  your childhood. Rummy is a game in which we hold a successful
                  track record in the market. We have again and again proved
                  with our effective solutions that we are the #1 Rummy Game
                  Development company.
                </p>
                {/* <div class="d-flex flex-column flex-lg-row align-items-center fade-in one w-fit">
                  <a href="#!" class="color-btn btn-hover gap-2">Explore games <ion-icon name="rocket-outline" class="fs-5 rocket"></ion-icon></a>
              </div> */}
                {/* <a href="#!" class="btn btn-outline-primary text-primary1 bg-transparent">Explore games</a> */}
              </div>
            </div>
          </div>
          {/* Swiper */}
        </section>

        {/* <section className="game_dev_comp_banner">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-12">
                                <div className="banner_sec">
                                    <h1 className="title">
                                        <span className="bnr_clr_title">Fantasy App </span>{" "}
                                        <br /> Development
                                    </h1>
                                    <p className="contents">
                                        MetaBlock is a leading Fantasy App development company. Our experienced team of Fantasy App developers specialized in creating visually captivating and user-friendly Fantasy Apps. We incorporate advanced features that enhance the overall gaming experience, catering to Ludo enthusiasts worldwide. Our goal is to deliver an unparalleled Ludo gaming experience that captures the interest and enjoyment of players globally.
                                    </p>
                                    <div className="HddrBtns banner_btn_sec"
                                        onClick={() => navigate('/ContectUsForm')}
                                    >
                                        <button
                                            data-toggle="modal"
                                            data-target="#popup_form_modal"
                                            className="btn banner_btn"
                                        >
                                            <span>Tap for a Quotation</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        <section className="game_dev_comp_services">
          <div className="container">
            <h2 className="title">Our Game Development Services Range</h2>
            <div className="nft-marketplace-usecase slider">
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/blog/web3-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service1.webp" className="img-fluid lazyload" alt="Web3_Game_Development" title="Web3 Game Development" />
                    </div>
                    <h3 className="sub_title">Web3 Game Development</h3>
                    <p className="sub_contents">Utilizing blockchain technologies, our group of video game developers constructs secure and decentralized Web3 games. Our specialization includes decentralized governance, player ownership, and the provision of fair gameplay
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/nft-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service2.webp" className="img-fluid lazyload" alt="nft_Game_Development" title="NFT Game Development" />
                    </div>
                    <h3 className="sub_title">NFT Game Development</h3>
                    <p className="sub_contents">Specializing in NFT-infused games, we elevate in-game assets with real-world significance. By utilizing top-tier blockchains, we empower players to craft, trade, and vend NFTs directly within the gaming ecosystem.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/metaverse-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service3.webp" className="img-fluid lazyload" alt="Metaverse_Game_Development" title="Metaverse Game Development" />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">As a premier video game development company, we strongly prioritize the creation of immersive metaverse games that evolve in sync with their communities. We encompass all the top metaverse features, including interactivity,
                      user-generated content, and social connectivity.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/blockchain-game-development-company" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service4.webp" className="img-fluid lazyload" alt="Blockchain_Game_Development" title="Blockchain Game Development" />
                    </div>
                    <h3 className="sub_title">Blockchain Game Development</h3>
                    <p className="sub_contents">Covering a spectrum of blockchain game development solutions, our team offers services that span from incorporating smart contracts to conducting security audits. Our blockchain gaming projects encompass the integration
                      of player-centric economies and the implementation of secure in-game transactions.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service5.webp" className="img-fluid lazyload" alt="Mobile_Game_Development" title="Mobile Game Development" />
                    </div>
                    <h3 className="sub_title">Mobile Game Development</h3>
                    <p className="sub_contents">We specialize in offering complete mobile gaming solutions for iOS and Android platforms. As a premier game development agency, we guarantee the creation of highly polished, high-performance games with captivating player
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service6.webp" className="img-fluid lazyload" alt="AR_VR_Game_Development" title="AR and VR Game Development" />
                    </div>
                    <h3 className="sub_title">AR and VR Game Development</h3>
                    <p className="sub_contents">We develop AR and VR games that offer players engaging real-time experiences. Our games feature interactive gameplay, high-quality graphics, and leverage advanced AR/VR and devices, platforms, and frameworks.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service7.webp" className="img-fluid lazyload" alt="Unity_3D_Game_Development" title="Unity 3D Game Development" />
                    </div>
                    <h3 className="sub_title">Unity 3D Game Development</h3>
                    <p className="sub_contents">Our team of Unity game developers utilizes the latest attributes of the foremost game engine to produce visually captivating and interactive 2D and 3D games. Furthermore, we ensure the seamless performance of these games
                      on numerous platforms.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service8.webp" className="img-fluid lazyload" alt="Desktop_Game_Development" title="Desktop Game Development" />
                    </div>
                    <h3 className="sub_title">Desktop Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service9.webp" className="img-fluid lazyload" alt="Unreal_Game_Development" title="Unreal Game Development" />
                    </div>
                    <h3 className="sub_title">Unreal Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service10.webp" className="img-fluid lazyload" alt="HTML5_Game_Development" title="HTML5 Game Development" />
                    </div>
                    <h3 className="sub_title">HTML5 Game Development</h3>
                    <p className="sub_contents">Focusing on HTML5 game development, we design cross-platform games that align with client needs. Our games are engaging, easily accessible, and deliver flawless performance on web browsers across a range of platforms.</p>
                  </div>
                </a>
              </div> */}
              <AutoPlaygame />
            </div>
          </div>
        </section>
        <section className="game_dev_comp_platform">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 p-lg-0">
                <img style={{ width: "200%", paddingLeft: "100px" }}
                  src="images/gaming-web-image.jpg"
                  className="img-fluid lazyload"
                  alt="Game_Development_on_Prime_Platforms"
                  title="Our Game Development on Prime Platforms"
                />
              </div>
              <div className="col-lg-7 cus_col">
                <h2 className="title">
                  Fantasy App Development on Prime Platforms
                </h2>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="./images/vr-glasses.png"
                          className="sprite_icons lazyload"
                          alt="AR_VR_Icon"
                          title="AR and VR"
                        // style={{ objectPosition: "0px 0px" }}
                        />
                        <h3 className="sub_title">AR and VR</h3>
                      </div>
                      <p className="sub_contents">
                        We make use of latest AR and VR technologies to produce
                        thrilling games.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="./images/game-console.png"
                          className="sprite_icons lazyload"
                          alt="Console_Icon"
                          title="Console"
                        // style={{ objectPosition: "-94px 0px" }}
                        />
                        <h3 className="sub_title">Console</h3>
                      </div>
                      <p className="sub_contents">
                        We create games for prominent console platforms such as
                        PlayStation 4, Nintendo, Xbox, and other similar
                        platforms.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="./images/gaming.png"
                          className="sprite_icons lazyload"
                          alt="Mobile_Icon"
                          title="Mobile"
                        // style={{ objectPosition: "-186px 0px" }}
                        />
                        <h3 className="sub_title">Mobile</h3>
                      </div>
                      <p className="sub_contents">
                        We develop games for both Android and iOS platforms or
                        engaging in cross-platform development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="./images/computer-game.png"
                          className="sprite_icons lazyload"
                          alt="PC_Icon"
                          title="PC"
                        // style={{ objectPosition: "-280px 0px" }}
                        />
                        <h3 className="sub_title">PC</h3>
                      </div>
                      <p className="sub_contents">
                        We offer comprehensive game development for personal
                        computers, with the capability to port to both Windows
                        and macOS platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="game_dev_btn_sec"
                  onClick={() => navigate('/ContectUsForm')}

                >
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn game_dev_btn"
                  >
                    <span>Get A Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_techstack">
          <div className="container">
            <h2 className="title">Technologies we are skilled in</h2>
            <div className="Admin-control-main-container">
              <h4 >Online Fantasy App Features</h4>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-your-friends.png" alt="" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Play with your friends</h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.
                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-Online-with-real-money.png" alt="" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Play Online with real money</h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-Computer.png" alt="" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Play with Computer</h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.
                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Play-with-timer.png" alt="" />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Play with timer</h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.
                  </p>
                </div>
              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Daily-Bonus.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Daily Bonus</h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.

                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Live-Chat.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text"> Live Chat
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.

                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Refer-&-Earn.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Refer & Earn
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.

                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Quick-Deposit-&-Withdraw-money.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text"> Quick Deposit & Withdraw money
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.

                  </p>
                </div>

              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Game-history.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Game History
                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.


                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Auto-move.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">  Auto move

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.


                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/Deposit-&-withdraw-history.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Deposit & withdraw history

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.


                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Live-Support-feature.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Live Support features

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.


                  </p>
                </div>

              </div>
              <div className="Admin-control-inner-container">
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Mobile-and-email-login.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Mobile and email login

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.



                  </p>
                </div>
                <div className="a-card card-discover card1 col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Multiple-Payment-Option.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">Multiple Payment Option


                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.



                  </p>
                </div>



                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper">
                        <img src="./images/2-and-4-player-system.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text">2&4 player system

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.



                  </p>
                </div>

                <div className="a-card card-discover col-md-3">
                  <div className="card-icon-title-wrapper">
                    <div className="card__icon pb-1">
                      <div className="icon__wrapper ">
                        <img src="./images/Tournament-system.png" alt />
                      </div>
                    </div>
                    <h1 className="card__title fs-4 g-text"> Tournament system

                    </h1>
                  </div>
                  <p className="card__description">
                    Play Ludo using your skills and win to earn real cash. Use your ludo expertise to earn real money instead of just using it to pass time.

                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_quant">
          <div className="container">
            <h2 className="title">Quantifying Our Journey</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/rating.png"
                    className="sprite_icons lazyload"
                    alt="250+_Innovators_Crafting_Games"
                    title="250+ Innovators Crafting Games"
                  // style={{ objectPosition: "0px 0px" }}
                  />
                  <div className="sub_title">
                    250+ Innovators Crafting Games
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/handshake.png"
                    className="sprite_icons lazyload"
                    alt="400+_Projects_Set_in_Motion"
                    title="400+ Projects Set in Motion"
                  // style={{ objectPosition: "-318px 0px" }}
                  />
                  <div className="sub_title">400+ Projects Set in Motion</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/coordinator.png"
                    className="sprite_icons lazyload"
                    alt="15+_Years_of_Gaming_Mastery"
                    title="15+ Years of Gaming Mastery"
                  // style={{ objectPosition: "-647px 0px" }}
                  />
                  <div className="sub_title">15+ Years of Gaming Mastery</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="./images/enjoy.png"
                    className="sprite_icons lazyload"
                    alt="75+_Countries_Immersed_in_Fun"
                    title="75+ Countries Immersed in Fun"
                  // style={{ objectPosition: "-989px 0px" }}
                  />
                  <div className="sub_title">75+ Countries Immersed in Fun</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_services">
          <div className="container">
            <h2 className="title">Our Game Development Services Range</h2>
            <div className="nft-marketplace-usecase slider">

              <AutoPlaygame />
            </div>
          </div>
        </section>
        <section className="game_dev_comp_production">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 order-2 order-lg-1">
                <div className="img_sec">
                  <img style={{ borderRadius: "10px", width: "200%" }}
                    src="./images/gameimageinner.jpg"
                    className="img-fluid lazyload"
                    alt="Osiz_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-12 order-1 order-lg-2">
                <h2 className="title">
                  Our Game Production From Start to Finish
                </h2>
                <div className="why_scrollsec">
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}

                        src="./images/blueprint.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Information Collation</h3>
                    </div>
                    <p className="sub_contents">
                      As a committed game design firm, we thoroughly delve into
                      project requisites. Our team establishes consistent
                      communication to gather comprehensive inputs. By means of
                      documentation and ongoing dialogue, we ensure seamless
                      alignment between both parties from the very outset.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}

                        src="./images/artist.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Blueprinting</h3>
                    </div>
                    <p className="sub_contents">
                      Conducting concept analysis and research rooted in client
                      inputs, we formulate game design documents, flow
                      structures, and execution strategies. Collaborative
                      dialogues with stakeholders precede subsequent
                      pre-production and production stages, ensuring a
                      comprehensive understanding before commencing development
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}

                        src="./images/contact.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Imagination Depiction and Asset Creation
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Guided by the game's theme and vision, our team produces
                      concept art and sketches. Our asset production unit,
                      consisting of modelers, animation experts, rigging
                      artists, and more, then meticulously crafts an array of 2D
                      and 3D assets, ranging from props to characters and
                      environments. These assets harmoniously align with the
                      finalized 3D art and sketches.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}
                        src="./images/game-development.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Game Design and Intensive Quality Testing
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Similar to reputable video game firms, our development
                      squad possesses practical familiarity with crafting games
                      using leading game engines and advanced technologies.
                      Additionally, our team features adept testers who
                      meticulously subject each game to rigorous quality
                      assurance and thorough device compatibility assessments.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}

                        src="./images/gaming.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Help &amp; Upkeep</h3>
                    </div>
                    <p className="sub_contents">
                      MetaBlock delivers post-publishing technical support and game
                      maintenance. We ensure games remain current across devices
                      and operating systems. Our services span standard support
                      packages to tailor-made service-level agreements, aligning
                      with gaming industry benchmarks.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        style={{ width: "40px" }}

                        src="./images/computer-game.png"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        {" "}
                        Game Longevity and Revenue Strategies
                      </h3>
                    </div>
                    <p className="sub_contents">
                      In mobile game development, player retention and
                      engagement rely on unique in-game events, promotional
                      deals, cosmetic upgrades, and adjustments to the game
                      economy. As a devoted provider of game design and
                      development services, we also integrate approaches to
                      monetize through ads and in-app purchases (IAPs).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_why">
          <div className="container">
            <div className="why_img_sec">
              <img
                style={{ width: "30px" }}
                src="./images/contact.png"
                className="img-fluid lazyload"
                alt="Osiz_Your_go_to_game_development_company"
                title="MetaBlock Your go-to game development company.Find out why"
              />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3 col-12">
                <h2 className="title">
                  <span style={{ color: "#FFA024" }}>MetaBlock</span> Your go-to game
                  development company. Find out why
                </h2>
                <p className="contents">
                  We pursue our passions and sources of inspiration, which is
                  why every project we undertake elevates the brand's reputation
                  and sparks lively conversations among players. Join us to
                  experience the transformative impact firsthand!
                </p>
                <div className="game_dev_btn_sec"

                  onClick={() => navigate('/ContectUsForm')}
                >
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn game_dev_btn"
                  >
                    <span>Tap for a Quotation</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="img_sec">
                  <img
                    // style={{ paddingLeft: "150px" }}
                    src="./images/3dimage-in.png"
                    className="img-fluid lazyload go-to-gamedevelopment"
                    alt="Osiz_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="why_scrollsec">
                  <div className="why_box">
                    <h3 className="sub_title">Flex Method</h3>
                    <p className="sub_contents">
                      Our team employs an iterative and product-centric agile
                      development approach. We segment development into multiple
                      sprints, crafting functional features during each phase to
                      ensure the highest quality delivery.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Passionate Game Creators</h3>
                    <p className="sub_contents">
                      Harnessing a 350+ member team, we craft remarkable games
                      featuring innovation, captivating art, and solid design.
                      Our mastery spans both creative and business aspects of
                      video games, propelled by vigilant tracking of industry
                      trends and technology.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Eclectic Portfolio</h3>
                    <p className="sub_contents">
                      Our rich selection features over 400 impressive games
                      across Windows, Web, iOS, AR/VR, Android, and platforms.
                      Genres range from casual and hyper-casual to sports, RPG,
                      arcade, MMORPG, and action.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Different Engagement Formats</h3>
                    <p className="sub_contents">
                      We provide diverse game development options: Time and
                      Material, Resource-based, and Fixed Cost models, etc.
                      Tailor your choice to your project's scope and preferences
                      for the ideal engagement model.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Agile Connection</h3>
                    <p className="sub_contents">
                      We customize the communication process according to your
                      distinct needs. Reach out through emails, instant
                      messaging, or calls, aligning with your schedule and
                      preferences.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Ease of Access</h3>
                    <p className="sub_contents">
                      Having established ourselves as a thriving video game
                      brand, we've forged partnerships with multiple Small and
                      Medium-sized Businesses (SMBs), entrepreneurs, and
                      government entities from various sectors around the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FantasyCricketGameDevelopment;
