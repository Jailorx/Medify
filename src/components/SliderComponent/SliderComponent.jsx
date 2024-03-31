import React, { useState, useEffect } from "react";
import styles from "./SliderComponent.module.css"; // Assuming you have a CSS module file
import slider1Img from "../../assets/slider1.png";
import slider2Img from "../../assets/slider2.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SliderComponent = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const generatedSlides = [];
    for (let i = 0; i < 2; i++) {
      generatedSlides.push(
        <SwiperSlide key={i}>
          <img src={slider1Img} alt="demo_slider_img" />
        </SwiperSlide>
      );
      generatedSlides.push(
        <SwiperSlide key={i + 78}>
          <img src={slider2Img} alt="demo_slider_img" />
        </SwiperSlide>
      );
    }
    setSlides(generatedSlides);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {" "}
      {/* Wrap the Swiper in a container */}
      <div className={styles.sliderWrapper}>
        {" "}
        {/* Apply margins to this wrapper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
