import React, { Component } from "react";
import Slider from "react-slick";
import "./ReactSlick.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
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
      <div className="slider-main-div">
        <h2 class="title1">Testimonials from Delighted Clients</h2>
        <div className="slider-div-1">
          <Slider {...settings}>
            <div>
              <div className="item">
                <img
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <div className="head_sec">
                      <p className="sub_title">Naveen Singh</p>
                      <p className="sub_title1"></p>
                    </div>
                    <a
                      href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                      target="_blank"
                    >
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                        className="img-fluid"
                        alt="Review-Star"
                        title="Review"
                      />
                    </a>
                  </div>
                  <p className="sub_contents">
                    "I needed my website urgently, and MetaBlock did not
                    disappoint. They delivered the project on time. Their timely
                    delivery saved my small business. MetaBlock revamped our old
                    website, and now it’s 10x faster. The website is also
                    user-friendly and works on all devices. I couldn't ask for
                    anything else."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <img
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <div className="head_sec">
                      <p className="sub_title">Akash Sharma</p>
                      <p className="sub_title1">
                        {/* Business Developer at SF Capital */}
                      </p>
                    </div>
                    <a
                      href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                      target="_blank"
                    >
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                        className="img-fluid"
                        alt="Review-Star"
                        title="Review"
                      />
                    </a>
                  </div>
                  <p className="sub_contents">
                    "I contacted MetaBlock when I wanted my website in a very
                    short duration. Everyone else said that no one can deliver
                    my website that fast, but MetaBlock delivered the website on
                    time. They literally saved my small business. I can’t thank
                    them enough."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <img
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <div className="head_sec">
                      <p className="sub_title">Nicky G Khun</p>
                      <p className="sub_title1">
                        Business Developer at SF Capital
                      </p>
                    </div>
                    <a
                      href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                      target="_blank"
                    >
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                        className="img-fluid"
                        alt="Review-Star"
                        title="Review"
                      />
                    </a>
                  </div>
                  <p className="sub_contents">
                    "I have been working with Osiz Technologies with three
                    months until now. I have been very satisfied with the
                    outcome of the work produced by them. I have dealt with
                    crypto exchange and trading website, an excellent
                    professional and with the best customer service."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <img
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <div className="head_sec">
                      <p className="sub_title">Nicky G Khun</p>
                      <p className="sub_title1">
                        Business Developer at SF Capital
                      </p>
                    </div>
                    <a
                      href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                      target="_blank"
                    >
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                        className="img-fluid"
                        alt="Review-Star"
                        title="Review"
                      />
                    </a>
                  </div>
                  <p className="sub_contents">
                    "I have been working with Osiz Technologies with three
                    months until now. I have been very satisfied with the
                    outcome of the work produced by them. I have dealt with
                    crypto exchange and trading website, an excellent
                    professional and with the best customer service."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <img
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                  className="img-fluid user_img"
                  alt="Testimonials"
                  title="Testimonials"
                />
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <div className="head_sec">
                      <p className="sub_title">Nicky G Khun</p>
                      <p className="sub_title1">
                        Business Developer at SF Capital
                      </p>
                    </div>
                    <a
                      href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                      target="_blank"
                    >
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                        className="img-fluid"
                        alt="Review-Star"
                        title="Review"
                      />
                    </a>
                  </div>
                  <p className="sub_contents">
                    "I have been working with Osiz Technologies with three
                    months until now. I have been very satisfied with the
                    outcome of the work produced by them. I have dealt with
                    crypto exchange and trading website, an excellent
                    professional and with the best customer service."
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}


