import React, { Component } from "react";
import Slider from "react-slick";
import "./ReactSlick.css";

export default class WhyChooseSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      //    cssEase: "linear"
    };
    return (
      <div className="">
        <Slider {...settings}>
          <div className="col-lg-12">
            <div className="row gap-5 c-contant-1 d-flex justify-content-center">
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">YEARS of Work Exp.</h1>
                  <h1 className="text-warning">10+</h1>
                  <p>
                    substantial experience in delivering IT solutions &amp;
                    services.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">Team Member</h1>
                  <h1 className="text-warning">100+</h1>
                  <p>
                    We have the best team of developers and designers with
                    diverse skills that help us work into multiple services.
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">Happy Clients</h1>
                  <h1 className="text-warning">1000+</h1>
                  <p>
                    From customer service to customer satisfaction and loyalty
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">Cost Effective</h1>
                  <h1 className="text-warning">100%</h1>
                  <p>
                    {" "}
                    We offer 100% cost-effective service in 100% satisfaction
                    way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row gap-5 c-contant-1 d-flex justify-content-center">
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">Security Measures</h1>
                  <h1 className="text-warning">100%</h1>
                  <p>
                    {" "}
                    We offer 100% robust security measures you implement to
                    protect their websites from cyber threats
                  </p>
                </div>
              </div>
              <div className="award-1 col-lg-4 p-0 px-1 pt-1">
                <div className="text-start text-white p-award-1 rounded-10 p-3">
                  <h1 className="fs-4 year">Support and Maintenance</h1>
                  <h1 className="text-warning">24*7</h1>
                  <p>
                    {" "}
                    We provide 24*7 support and maintenance services to ensure
                    clients' websites remain secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
