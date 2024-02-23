import React from "react";
import "../../gaming/gernralgames/GeneralGamesDevelopment.css";
import AutoPlay from "../../MainPage/ReactSlick";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



import AutoPlaygame from "../gernralgames/Gameslider";
import GameDemandSlider from "../gernralgames/GameDemandSlider";
const PokerGameDevelopment = () => {


    const navigate = useNavigate()

    return (
        <div>
            {" "}
            <main id="game_dev_comp_main">


                <section className="cta mt-5 position-relative overflow-hidden ">

                    <div className="row">
                        <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
                            <div className="container px-5 ms-3 row gx-5 py-5 align-items-center">
                                <h1 className="display-5 txt-center-m glow-text lh-1 mb-3 text-white fw-bold g-text">Poker Game<span style={{ fontWeight: 'lighter' }}> Development <span>
                                </span></span></h1>
                                <h3 className=" mb-4 mt-4 txt-center-m">
                                    Top Rated Poker Game Developer
                                </h3>
                                <p style={{ color: "white" }} className=" fw-normal mb-4 txt-center-m">
                                    MetaBlock is a leading Poker Game development company. Our team of expert Rummy game developers excels in creating visually appealing, user-friendly, and immersive Rummy games. We incorporate a plethora of advanced features to enhance the gaming experience and ensure that players enjoy the best possible gameplay. Our aim is to deliver top-quality Rummy games that meet the expectations of players.

                                </p>
                                <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit">

                                    <Link to="/ContectUsForm" className="color-btn btn-hover gap-2">Get Quote <ion-icon name="rocket-outline" className="fs-5 rocket" /></Link>
                                </div>
                                <div className="d-flex btn-box flex-column flex-lg-row align-items-center fade-in one w-fit">
                                    <Link to="/Aboutus" style={{ marginLeft: 15 }} className="color-btn btn-hover gap-2">See Our Work <ion-icon name="rocket-outline" className="fs-5 rocket" /></Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 ps-0">
                            <img className="cta-content-img" src="./images/poker-game-development-in-india.png" alt />
                        </div>
                    </div>
                </section>

                <section className=".section bg-main position-relative">

                    <div className="row">
                        <div className="col-lg-6 ps-0">
                            <img className="cta-content-img" src="./images/poker-game-development-in-india-2.png" alt />
                        </div>
                        <div className="cta-content ps-5 col-lg-6 d-flex align-items-center overflow-hidden">
                            <div className="container px-5 ms-3 row gx-5 py-5 align-items-center">
                                <h1 className="display-5 glow-text lh-1 mb-3 text-white fw-bold g-text">Poker Game Development Services
                                </h1>

                                <h3 className="text-white mb-4 mt-4">
                                    Developed 100+ Poker Game
                                </h3>
                                <p className=" fw-normal text-white mb-4 ">
                                    MetaBlock Technologies is a leading Poker Game app development company. Our efficient game developers have years of experience in developing Rummy games and with their expertise, they can develop games that will definitely make you remember your childhood. Rummy is a game in which we hold a successful track record in the market. We have again and again proved with our effective solutions that we are the #1 Rummy Game Development company.

                                </p>

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
                                    Poker GameGame Development on Prime Platforms
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
                            <h4 >Online Poker GameGame Features</h4>
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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.
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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.
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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.
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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.
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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.

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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.

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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.

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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.

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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.


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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.


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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.


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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.


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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.



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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.



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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.



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
                                        Play Poker Gameusing your skills and win to earn real cash. Use your Poker Gameexpertise to earn real money instead of just using it to pass time.

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
                <GameDemandSlider />

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

export default PokerGameDevelopment;





