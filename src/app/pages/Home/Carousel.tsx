import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop
      style={{ width: "100%", height: "100%",}}
    >
      <SwiperSlide>
        <img
          src="https://www.shoppingcatolico.com.br/media/wysiwyg/slider/1180x400-FULL_BANNER_NATAL_2023_DIA_10.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.shoppingcatolico.com.br/media/wysiwyg/slider/1180x400_SHC_Dia_GOTAS.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.example.com/your-third-image.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
