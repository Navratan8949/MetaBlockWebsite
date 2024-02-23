import React, { Component } from "react";
import Slider from "react-slick";
import './RelatedPortfolioSlider.css'

export default class RelatedPortfolioSlider extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
            //    cssEase: "linear"
        }


        return (
            <div className="RelatedPortfolioSlider-main-div">
                <div className="RelatedPortfolioSlider-div">
                    <Slider {...settings}>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img
                                    data-toggle="modal"
                                    data-target="#portfolio_modal"
                                    src="./images/gamesliderportfolio-1.jpg"
                                    alt="Game Portfolio1"
                                    title="Game Portfolio1"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" data-src="./SGimage/metaversereleated.webp" alt="Game Portfolio2" title="Game Portfolio2" loading="eager" className="img-fluid lazyload"
                                    src="./images/gamesliderportfolio-2.jpg"

                                />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" data-src="./SGimage/metaversereleated.webp" alt="Game Portfolio3" title="Game Portfolio3" loading="eager" className="img-fluid lazyload"
                                    src="./images/gamesliderportfolio-6.jpg"

                                />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal"
                                    src="./images/gamesliderportfolio-4.jpg"

                                    alt="Game Portfolio4" title="Game Portfolio4" loading="eager" className="img-fluid lazyload" />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal"
                                    src="./images/gamesliderportfolio-5.jpg"
                                    alt="Game Portfolio5" title="Game Portfolio5" loading="eager" className="img-fluid lazyloaded" />

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

        );
    }
}
