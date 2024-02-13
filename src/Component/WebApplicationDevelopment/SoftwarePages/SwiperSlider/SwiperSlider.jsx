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

export default function SwiperSlider() {
    return (
        <>
            <div>
                <h2>Software Preview</h2>
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
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-6.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-7.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-8.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-9.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rrdevs.net/demos/html/morat/assets/img/images/project-img-2.png" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
