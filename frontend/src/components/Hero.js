import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assets/hero_1.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://reactjs.org/logo-og.png" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://reactjs.org/logo-og.png" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://reactjs.org/logo-og.png" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
