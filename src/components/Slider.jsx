'use client'

import React, { Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';
import BlurImage from './BlurImage';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="banner_slider"
      >
        {
            slides.map((slide, i)=>(
                <Fragment key={i}>
                    <SwiperSlide className='rounded-md overflow-hidden'>
                        <BlurImage src={slide} alt="Slide Image" />
                    </SwiperSlide>
                </Fragment>
            ))
        }
      </Swiper>
    </>
  );
}

const slides=[
    '/slides/slide1.webp',
    '/slides/2.jpg',
    '/slides/3.jpg',
]