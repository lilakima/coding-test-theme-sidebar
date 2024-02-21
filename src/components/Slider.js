import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderButton from './SliderButton';

const Slider = ({ sliderButtons, mode }) => {
  return (
    <div className="mb-5 slider text-white bg-black p-2">
      <Swiper
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          320: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
      >
        {sliderButtons.map(button => (
          <SwiperSlide key={button.id}>
            <SliderButton mode={mode} label={button.label} special={button.special} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev" style={{ color: '#fff', top: "13%" }}></div>
      <div className="swiper-button-next" style={{ color: '#fff', top: "13%" }}></div>
    </div>
  );
};

export default Slider;
