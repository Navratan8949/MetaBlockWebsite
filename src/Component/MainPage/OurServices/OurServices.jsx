import React from 'react'
import './Home.css'
import { Button } from '@mui/material'

const OurServices = () => {
    return (
        <section className="position-relative  ourservises ">
            <img className="bg-img" src="./assets/img/backgroundimage.jpg" alt />
            <div className="bg-filter " />
            <div className="w-100 d-flex align-items-center justify-content-center flex-column">
                <h1 className="display-6 pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
                    Our services
                </h1>
                <p className="text-center text-white">MetaBlock provides a comprehensive range of IT solutions for a variety of industries and segments.Our core focus is on  <br /> Blockchain technology,   along with online, metaverse, gaming, and software development.  Whatever your  <br /> IT demands are, MetaBlock can provide you with cutting-edge IT solutions.
                </p>
            </div>
            {/* <div class="w-100 d-flex align-items-center justify-content-center">
      <h1 class="display-6 pb-4 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title">Our services</h1>
  </div> */}
            <div className=" d-flex justify-content-center flex-wrap py-5">

                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image18.jpg)' }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }} className='font-famely-in'>Blockchain / Web3</p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3">Blockchain / Web3</p>
                        </div>
                        <ul className>
                            <li>Bockchain Development
                            </li>
                            <li>Token Development
                            </li>
                            <li>DEX  Development
                            </li>
                            <li>DeFi Development
                            </li>
                            <li>NFT Development
                            </li>
                            <li> Wallet Development
                            </li>

                            <li>DAO Blockchain Developmnent
                            </li>



                        </ul>
                        {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
                    </div>
                </a>
                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image19.jpg)' }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }}>Web Development</p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3">Web Development</p>
                        </div>
                        <ul className>
                            <li>Static Website</li>
                            <li>Dynamic Website</li>
                            <li>E-commerce website ( Single & Multi Vendor )</li>


                        </ul>
                        {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
                    </div>
                </a>


                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{
                        backgroundImage: 'linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image20.jpg)',
                    }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }}>Software Development</p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3">Software Development</p>
                        </div>
                        <ul className>
                            <li>ERP Software
                            </li>
                            <li>SAAS Software
                            </li>
                            <li>LMS With Live Class

                            </li>
                            <li>Travel Booking Software
                            </li>
                            <li>Restaurant Managment System
                            </li>
                            <li>MLM Software
                            </li>
                        </ul>
                        {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
                    </div>
                </a>

            </div>
            <div className=" d-flex justify-content-center flex-wrap py-5">
                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image21.jpg)' }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }}>Application Development</p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3" >Application Development</p>
                        </div>
                        <ul className>
                            <li>Cab Booking
                            </li>
                            <li>Social Media Apps

                            </li>
                            <li>Learning Managment

                            </li>
                            <li>Chatting APP

                            </li>
                            <li>Dating Apps

                            </li>
                            <li>Astrology App
                            </li>
                            <li>Rental App

                            </li>


                        </ul>
                        {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
                    </div>
                </a>
                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image22.jpg)' }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }}>Gaming Development</p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3">Gaming Development</p>
                        </div>
                        <ul className>
                            <li>daman game
                            </li>
                            <li>Rummy Game

                            </li>
                            <li>Dragon & Toger Game

                            </li>
                            <li>Avaitor Game

                            </li>
                            <li>Fantasy Cricket Game

                            </li>
                            <li>Pokar Game
                            </li>
                            <li>Tournment Development

                            </li>

                        </ul>
                        {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
                    </div>
                </a>
                <a className="ser-card bg-transparent" href="#!">
                    <div className="front" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image23.jpg)' }}>
                        <p style={{ textShadow: '2px 2px 4px lightblue' }}>Metaverse </p>
                    </div>
                    <div className="back d-flex align-items-start flex-column justify-content-start py-4">
                        <div className="head1">
                            <p className="text-white fw-bold fs-3">Metaverse </p>
                        </div>
                        <ul className>
                            <li>Metaverse Development
                            </li>
                            <li>Metaverse Game Development
                            </li>
                            <li>Metaverse Avatar Development
                            </li>
                            <li>Metaverse Virtual Land Development
                            </li>

                            <li>Metaverse Event Platform Development
                            </li>


                        </ul>

                    </div>
                </a>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button className='Our-service-button'> Visit Now</Button>
            </div>
        </section>
    )
}

export default OurServices
