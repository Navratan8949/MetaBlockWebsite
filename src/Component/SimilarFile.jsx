import Card from './MainPage/Card'
import RelatedPortfolioSlider from './MainPage/RelatedPortfolioSlider'
import AutoPlay from './MainPage/ReactSlick'
import GenerativeAl from './MainPage/GenerativeAl'
import React from "react";
import WhyChooseUs from './MainPage/WhyChooseUs';
import TrandingProduct from './MainPage/TrandingProduct';
import { Link } from 'react-router-dom';
import PlayTOEarnPortfoliio from './MainPage/PlayToEarnPorfolio';
import MetaversePortfolio from './MainPage/MetaversePorfolio';
import BlockchainPorfolio from './MainPage/BlockchainPorfolio';
import ExchangePorfolio from './MainPage/ExchangePorfolio';
import NFTPorfolio from './MainPage/NFTPorfolio';
import DefiPorfolio from './MainPage/DefiPorfolio';
import DAppPorfolio from './MainPage/DAppPorfolio';


const SimilarFile = () => {
  return (
    <>
      <div className="responsive-in-black-bg">


        <div className="MtaverseSec DapsMainBg OurPrjctBg" style={{ background: 'black' }}>

          <div>
            <WhyChooseUs />
          </div>


          <div className="MtaverseSec DapsMainBg OurPrjctBg">
            <div className="container container-1170">
              <div className="row">
                <div className="col-xl-10">
                  <div className="OurSrvcHdd mb-3">
                    <div className="title our-service-heading" style={{ color: 'purple', margin: "0px 0px 0px -10px", width: "100%" }}>Our Projects</div>
                  </div>
                  <div className="BnrCnt OurservHdd mb-4 OurPrjctHddSec" style={{ textAlign: "left" }}>
                    <h2 style={{ width: "80vw" }}>
                      Browse our impactful  <br />
                      <span className="Txt8282 px-2">portfolio showcase.</span>

                    </h2>
                    <p className="text-left">
                      Our services encompass web development, app development, game development, software development, and blockchain development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="Portfolio-buttons col-lg-2">
                  <div
                    className="nav flex-column nav-pills VrtclTbb PrjctTb"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      data-toggle="pill"
                      data-target="#PrjctTbb6"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb6"
                      aria-selected="true"
                    >
                      Game
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb7"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb7"
                      aria-selected="false"
                    >
                      Play To Earn
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb1"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb1"
                      aria-selected="false"
                    >
                      Metaverse
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb3"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb3"
                      aria-selected="false"
                    >
                      Blockchain
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb4"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb4"
                      aria-selected="false"
                    >
                      Exchange
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb5"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb5"
                      aria-selected="false"
                    >
                      NFT
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb9"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb9"
                      aria-selected="false"
                    >
                      DeFi
                    </button>
                    <button
                      className="nav-link"
                      data-toggle="pill"
                      data-target="#PrjctTbb10"
                      type="button"
                      role="tab"
                      aria-controls="PrjctTbb10"
                      aria-selected="false"
                    >
                      Dapp
                    </button>
                  </div>
                </div>
                <div className="col-xl-10">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="PrjctTbb6"
                      role="tabpanel"
                    >
                      <div>
                        <div className="PrjctDtlsItm game-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Game</div>
                                <p>
                                Are you prepared to step up your gaming experience to the next level?  
                                Modern software and skilled developers have made it possible for us to produced
                                a number of the most engrossing games available for purchase. We have everything
                                you could possibly want, from action-packed shooters to strategic games that will 
                                keep you on the edge of your seat. Additionally, you may connect with gamers from 
                                all over the world for an even more thrilling multiplayer experience thanks to our 
                                smooth multiplayer features. Choose MetaBlock Technologies for the finest gaming 
                                experience instead of settling for subpar games!
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/gamerimg.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="PrjctsBtnSec game_PrjctBtn">
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                NFT Game Development
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Metaverse Game Development
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Blockchain Game Development
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec game_PrjctBtn">
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Crypto Casino Game Development
                              </div>
                            </div>
                            <div className="mr-4 mb-4">
                              <div className="PrjctBtn_new Btn211-42">
                                Web3 Game Development
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio1.webp"
                                alt="Game Portfolio1"
                                title="Game Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio2.webp"
                                alt="Game Portfolio2"
                                title="Game Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio3.webp"
                                alt="Game Portfolio3"
                                title="Game Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio4.webp"
                                alt="Game Portfolio4"
                                title="Game Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio5.webp"
                                alt="Game Portfolio5"
                                title="Game Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio6.webp"
                                alt="Game Portfolio6"
                                title="Game Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <RelatedPortfolioSlider />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb1" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm meta-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Metaverse</div>
                                <p>
                                Are you interested in exploring the Metaverse? Search no more, 
                                as Metaverse represents the next wave of the internet, fusing the 
                                digital and physical realms. Offering cutting-edge solutions for both 
                                individuals and enterprises, MetaBlock is at the forefront of this ground-breaking
                                technology. Our team of professionals crafts immersive experiences that let
                                people socialize with each other, engage with virtual worlds, and even 
                                transact business in a decentralized marketplace.

                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/metaverse.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Game"
                              >
                                Metaverse Game
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Casino_Game"
                              >
                                Metaverse Casino Game
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_NFT_Marketplace"
                              >
                                Metaverse NFT Marketplace
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Wallet"
                              >
                                Metaverse Wallet
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Token"
                              >
                                Metaverse Token
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Metaverse_Industries"
                              >
                                Metaverse For Industries
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse1.webp"
                                alt="metaverse Portfolio1"
                                title="metaverse Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse2.webp"
                                alt="metaverse Portfolio2"
                                title="metaverse Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse3.webp"
                                alt="metaverse Portfolio3"
                                title="metaverse Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse4.webp"
                                alt="metaverse Portfolio4"
                                title="metaverse Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse5.webp"
                                alt="metaverse Portfolio5"
                                title="metaverse Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse6.webp"
                                alt="metaverse Portfolio6"
                                title="metaverse Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse7.webp"
                                alt="metaverse Portfolio7"
                                title="metaverse Portfolio7"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse8.webp"
                                alt="metaverse Portfolio8"
                                title="metaverse Portfolio8"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse9.webp"
                                alt="metaverse Portfolio9"
                                title="metaverse Portfolio9"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <PlayTOEarnPortfoliio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb3" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm blkchain-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Blockchain</div>
                                <p>
                                  Looking to leap towards the blockchain platform.
                                  From integrating blockchain into your existing
                                  systems to building a new decentralized
                                  application from scratch, we've got you covered.
                                  Leverage the power of blockchain with end-to-end
                                  development services with experts from Osiz. With
                                  cutting-edge technology, we empower businesses to
                                  manage their data securely and efficiently,
                                  transactions, and operations. Revolutionize your
                                  business with the transformative potential of
                                  blockchain technology with our assistance.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/blockchainimg.webp"
                                  alt="Blockchain"
                                  title="Blockchain"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Smart_Contract_Development"
                              >
                                Smart Contract Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Private/Public Blockchain"
                              >
                                Private/Public Blockchain
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Blockchain Industries"
                              >
                                Blockchain For Industries
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="POC Development"
                              >
                                POC Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Enterprise Blockchain Solutions"
                              >
                                Enterprise Blockchain Solutions
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain1.webp"
                                alt="Blockchain Portfolio1"
                                title="Blockchain Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain2.webp"
                                alt="Blockchain Portfolio2"
                                title="Blockchain Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain3.webp"
                                alt="Blockchain Portfolio3"
                                title="Blockchain Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain4.webp"
                                alt="Blockchain Portfolio4"
                                title="Blockchain Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain5.webp"
                                alt="Blockchain Portfolio5"
                                title="Blockchain Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          < MetaversePortfolio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb4" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Exchange</div>
                                <p>
                                  Looking for a secure and reliable cryptocurrency
                                  exchange platform? Avail of the services from Osiz
                                  as we are equipped with white-label cryptocurrency
                                  exchange software that is multi-tested and
                                  feature-drenched. Leverage our exchange software
                                  which is built with advanced security features to
                                  ensure the safety of your transactions. With an
                                  intuitive user interface, buying and selling
                                  cryptocurrencies has been made easier than before.
                                  Reach us to unlock the potential of future finance
                                  to enter the platform of digitalization.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg">
                                <img
                                  src="./SGimage/crypto.webp "
                                  alt="Exchange"
                                  title="Exchange"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto Exchange"
                              >
                                Crypto Exchange Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto MLM"
                              >
                                Crypto MLM Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Crypto HYIP"
                              >
                                Crypto HYIP Development
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Cryptocurrency"
                              >
                                Cryptocurrency Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Stablecoin/Altcoin Development"
                              >
                                Stablecoin/Altcoin Development
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange1.webp"
                                alt="Exchange Portfolio1"
                                title="Exchange Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange2.webp"
                                alt="Exchange Portfolio2"
                                title="Exchange Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange3.webp"
                                alt="Exchange Portfolio3"
                                title="Exchange Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange4.webp"
                                alt="Exchange Portfolio4"
                                title="Exchange Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange5.webp"
                                alt="Exchange Portfolio1"
                                title="Exchange Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <BlockchainPorfolio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb5" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm nft-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">NFT</div>
                                <p>
                                  Looking to own a piece of digital art that's
                                  unique and verified? Discover the future of
                                  digital ownership with prominent services from
                                  Osiz. Our secure and efficient blockchain-based
                                  NFT platform allows creators to tokenize their
                                  unique digital assets, from art to music and
                                  beyond. With NFTs, you can ensure your creations
                                  are authentic, scarce, and valuable. Join the NFT
                                  revolution today and monetize your digital
                                  creations get started with Osiz to create, sell,
                                  and trade your NFTs with ease and security.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/neft.webp"
                                  alt="Metaverse"
                                  title="Metaverse"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Marketplace"
                              >
                                NFT Marketplace Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Game"
                              >
                                NFT Game Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="NFT Token"
                              >
                                NFT Token Development
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="White Label NFT Solutions"
                              >
                                White Label NFT Solutions
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Launchpad Solutions"
                              >
                                Launchpad Solutions
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Fractional NFT Marketplace"
                              >
                                Fractional NFT Marketplace
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft1.webp"
                                alt="NFT Portfolio1"
                                title="NFT Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft2.webp"
                                alt="NFT Portfolio2"
                                title="NFT Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft3.webp"
                                alt="NFT Portfolio3"
                                title="NFT Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft4.webp"
                                alt="NFT Portfolio4"
                                title="NFT Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft5.webp"
                                alt="NFT Portfolio5"
                                title="NFT Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft6.webp"
                                alt="NFT Portfolio6"
                                title="NFT Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <ExchangePorfolio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb7" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm play-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Play To Earn</div>
                                <p>
                                Take control of the blockchain gaming industry with 
                                our state-of-the-art solutions from a well-known Play
                                 To Earn Development firm like MetaBlock. Take use of 
                                 our end-to-end development services, which include designing games, 
                                 creating smart contracts, integrating wallets, and more. Our knowledgeable
                                 blockchain game developers assist you in building a safe and easy-to-use 
                                platform for your users, providing them with the opportunity to earn incentives 
                                while playing.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/playto.webp "
                                  alt="Play To Earn"
                                  title="Play To Earn"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Axie Infinity"
                              >
                                Axie Infinity Clone
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Decentraland Clone"
                              >
                                Decentraland Clone
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Gods Unchained Clone"
                              >
                                Gods Unchained Clone
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Zed Run Clone"
                              >
                                Zed Run Clone
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Splinterlands Clone"
                              >
                                Splinterlands Clone
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Sandbox Clone"
                              >
                                Sandbox Clone
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn1.webp"
                                alt="Play To Earn Portfolio1"
                                title="Play To Earn Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn2.webp"
                                alt="Play To Earn Portfolio2"
                                title="Play To Earn Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn3.webp"
                                alt="Play To Earn Portfolio3"
                                title="Play To Earn Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn4.webp"
                                alt="Play To Earn Portfolio4"
                                title="Play To Earn Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn5.webp"
                                alt="Play To Earn Portfolio5"
                                title="Play To Earn Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn6.webp"
                                alt="Play To Earn Portfolio6"
                                title="Play To Earn Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <NFTPorfolio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb9" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm defi-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">DeFi</div>
                                <p>
                                  Launch a secure, robust, scalable, and
                                  interoperable DeFi platform with services from a
                                  leading DeFi Development Company like Osiz. Employ
                                  our blockchain expert and fetch our end-to-end
                                  defi service that ranges from wallet integration
                                  to DEX and token, dApps, etc. Unlock the potential
                                  of DeFi as it provides a decentralized network
                                  with enhanced transparency, security, and trust.
                                  Change the way around where your money works for
                                  you.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/defi.webp "
                                  alt="DeFi"
                                  title="DeFi"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Development"
                              >
                                DeFi Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Wallet"
                              >
                                DeFi Wallet Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Exchange"
                              >
                                DeFi Exchange Development
                              </button>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Token"
                              >
                                DeFi Token Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="DeFi Smartcontract"
                              >
                                DeFi Smartcontract
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Pancakeswap Clone"
                              >
                                Pancakeswap Clone
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi1.webp"
                                alt="DeFi Portfolio1"
                                title="DeFi Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi2.webp"
                                alt="DeFi Portfolio2"
                                title="DeFi Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi3.webp"
                                alt="DeFi Portfolio3"
                                title="DeFi Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi4.webp"
                                alt="DeFi Portfolio4"
                                title="DeFi Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi5.webp"
                                alt="DeFi Portfolio5"
                                title="DeFi Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <DefiPorfolio />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="PrjctTbb10" role="tabpanel">
                      <div>
                        <div className="PrjctDtlsItm dapp-1">
                          <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="PrjctDtlCnt">
                                <div className="port_sub_title">Dapp</div>
                                <p>
                                  Devise and deploy a secure and scalable
                                  decentralized application with assistance from a
                                  leading DApp Development Company. Reach Osiz as
                                  our professional developers help you provide an
                                  intuitive user experience by integrating
                                  cutting-edge technologies and tools. We serve
                                  various domains like Metaverse, DeFi, NFT, Gaming,
                                  Exchanges, and more with our expertise. Join the
                                  decentralized revolution with our cutting-edge
                                  Dapp solutions.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="PrjctImg text-center">
                                <img
                                  src="./SGimage/dapp.webp "
                                  alt="Dapp"
                                  title="Dapp"
                                  loading="eager"
                                  className="img-fluid lazyload"
                                  width="60%"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="PrjctsBtnSec">
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Dapp Development"
                              >
                                Dapp Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Tron Dapp"
                              >
                                Tron Dapp Development
                              </button>
                            </div>
                            <div className="mr-4 mb-4">
                              <button
                                type="button"
                                className="btn PrjctBtn Btn211-42"
                                aria-label="Ethereum Dapp"
                              >
                                Ethereum Dapp Development
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="RltdPrtflo">
                          <div className="RltdPrjHddSec">
                            <div className="RltdPrjHdd">
                              <div className="h5_title">Related Portfolio</div>
                            </div>
                          </div>
                          {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp1.webp"
                                alt="Dapp Portfolio1"
                                title="Dapp Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp2.webp"
                                alt="Dapp Portfolio2"
                                title="Dapp Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp3.webp"
                                alt="Dapp Portfolio3"
                                title="Dapp Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp4.webp"
                                alt="Dapp Portfolio4"
                                title="Dapp Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp3.webp"
                                alt="Dapp Portfolio3"
                                title="Dapp Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                          <DAppPorfolio />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='AutoPlay-section' style={{ background: 'black' }}>
            <AutoPlay />
          </div>

          {/* <div className="MtaverseSec DapsMainBg OurBlgBg" style={{ background: 'black' }}>
            <div className="container container-1170">
              <div className="row align-items-center">
                <div className="col-xl-9">
                  <div className="OurSrvcHdd mb-3">
                    <div className="blog_title">Our Blog</div>
                  </div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="mb-4">
                      Outspoken thoughts related to
                      <span className="Txt8282 px-2">blockchain</span>
                    </h2>
                    <p className="col-lg-6 pl-0">
                      Get frequent updates on the latest tech trends with our
                      substantial work guide.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 text-right">
                  <div className=" ">
                    <Link to="/Blog">
                    <span className="VwAllLnkHov">
                        View All
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </span>
                   </Link>
                  </div>
                </div>
              </div>
            </div>
            <Card />
          </div> */}
          {/* <section>
          <Card />
        </section> */}
          <main className="faq_main">
            <div className="faq_section_new">
              <div className="container">
                <div style={{ gap: "100px" }} className="row ">

                  <div className="col-xl-7 col-12">
                    <div className="mid_section">
                      <div className="section-heading">
                        <p className="faq_title">
                          Frequently Asked <br /> Questions (FAQs)
                        </p>
                        <p className="faq_contents" />
                      </div>
                    </div>
                    <div className="job-cnt">
                      <div className="panel-group" id="accordion">
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne1"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne1"
                                aria-expanded="false"
                                aria-controls="collapseOne1"
                              >
                                <p className="qus_title">
                                  1. What is blockchain development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne1"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne1"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Blockchain development refers to the process of creating and implementing blockchain-based
                                solutions and applications. Blockchain technology is a decentralized and distributed ledger
                                system that securely records transactions across a network of computers. Each transaction is
                                recorded in a block, which is then linked to previous blocks, forming a chain of blocks.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne2"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne2"
                                aria-expanded="false"
                                aria-controls="collapseOne2"
                              >
                                <p className="qus_title">
                                  2. What is launchpad development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne2"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne2"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Launchpad development typically refers to the creation and
                                management of a platform or infrastructure that facilitates
                                the launching of new projects, products, or initiatives. This
                                term is commonly used in the context of technology startups,
                                where a launchpad serves as a centralized platform for managing
                                the entire lifecycle of a project,
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne3"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne3"
                                aria-expanded="false"
                                aria-controls="collapseOne3"
                              >
                                <p className="qus_title">
                                  3. How can I get started with blockchain development for my project or business?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne3"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne3"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Getting started with blockchain development for your project or
                                business involves several steps to understand the technology, select
                                the appropriate platform, and begin building decentralized applications
                                (DApps) or blockchain-based solutions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne4"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne4"
                                aria-expanded="false"
                                aria-controls="collapseOne4"
                              >
                                <p className="qus_title">
                                  4. Which blockchain platform should I choose for my project?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne4"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne4"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                The choice of blockchain platform depends on your project requirements, use cases,
                                scalability needs, and development preferences. Popular blockchain platforms include
                                Ethereum, Hyperledger Fabric, Binance Smart Chain, and others, each offering different
                                features and capabilities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne5"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne5"
                                aria-expanded="false"
                                aria-controls="collapseOne5"
                              >
                                <p className="qus_title">
                                  5. How do I deploy a smart contract on the blockchain?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne5"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne5"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Smart contracts are deployed on the blockchain using specialized tools and
                                platforms provided by the blockchain network. Developers typically use command-line tools,
                                Integrated Development Environments (IDEs), or blockchain-specific platforms to compile, deploy,
                                and interact with smart contracts.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default" role="tablist">
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne6"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne6"
                                aria-expanded="false"
                                aria-controls="collapseOne6"
                              >
                                <p className="qus_title">
                                  6. What are the security considerations in blockchain development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne6"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne6"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Security is paramount in blockchain development. Developers must consider vulnerabilities
                                such as reentrancy attacks, front-running, and smart contract bugs. Best practices include
                                code auditing, secure coding practices, and rigorous testing to ensure the security of smart
                                contracts and DApps.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne7"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne7"
                                aria-expanded="false"
                                aria-controls="collapseOne7"
                              >
                                <p className="qus_title">
                                  7. How do I test my blockchain application?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne7"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne7"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Blockchain applications are tested using a combination of techniques such as
                                unit testing, integration testing, and end-to-end testing. Tools like Truffle,
                                Ganache, and Remix provide frameworks for testing smart contracts and DApps in
                                simulated or real blockchain environments.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne8"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne8"
                                aria-expanded="false"
                                aria-controls="collapseOne8"
                              >
                                <p className="qus_title">
                                  8. What are the scalability challenges in blockchain development?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne8"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne8"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                Scalability is a significant challenge in blockchain development,
                                especially for public blockchains. Issues such as transaction throughput,
                                network congestion, and gas fees need to be addressed. Solutions include
                                layer 2 scaling solutions, sharding, and off-chain scaling techniques.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="panel panel-default"
                          role="tablist"
                          style={{ display: "none" }}
                        >
                          <div
                            className="panel-heading"
                            role="tab"
                            aria-selected="true"
                            id="headingOne9"
                          >
                            <div className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne9"
                                aria-expanded="false"
                                aria-controls="collapseOne9"
                              >
                                <p className="qus_title">
                                  9. How can businesses get started with metaverse
                                  development for their specific needs?
                                </p>
                              </a>
                            </div>
                          </div>
                          <div
                            id="collapseOne9"
                            className="panel-collapse collapse"
                            aria-labelledby="headingOne9"
                            data-parent="#accordion"
                          >
                            <div className="panel-body job-cnt-hd">
                              <p>
                                <strong> </strong>
                              </p>
                              <p>
                                Define clear objectives and goals for metaverse
                                development.
                              </p>
                              <p>
                                Research and choose a development team or partner
                                with expertise in metaverse technologies.
                              </p>
                              <p>
                                Create a detailed project plan that aligns with your
                                business needs.
                              </p>
                              <p>
                                Consider pilot projects or smaller initiatives to
                                test the waters.
                              </p>
                              <p>
                                Continuously gather feedback from users and iterate
                                on the development to improve the user experience
                                and meet business goals.
                              </p>
                              <p> </p>
                              <p>
                                Our Metaverse expert will guide you throughout the
                                ideation and project development cycle.
                              </p>
                            </div>
                          </div>
                        </div>
                        <br />
                        {/* <div className="faq_load_btn_sec">
                          <a
                            href="#"
                            id="loadMore"
                            className="nav-link btn btn_skype faq_load_btn"
                            style={{ display: "block" }}
                          >
                            Load More
                          </a>
                          <a
                            href="#"
                            id="loadless"
                            className="nav-link btn btn_skype faq_load_btn"
                            style={{ display: "none" }}
                          >
                            Load Less{" "}
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </main>
        </div>

      </div>


    </>
  );
};

export default SimilarFile;
