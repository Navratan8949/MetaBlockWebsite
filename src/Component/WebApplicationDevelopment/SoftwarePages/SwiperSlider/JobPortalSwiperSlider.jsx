import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function JobPortalSwiperSlider() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "arial" }} className='Key-feature-heading'>Software Preview</h1>
            </div>

            <Swiper
                loop={true} // Enable infinite loop
                autoplay={{ delay: 3000 }} // Autoplay with 3-second delay
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="./images/jobslider-1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/jobslider-2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/jobslider-3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/jobslider-4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/jobslider-5.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/jobslider-6.png" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
