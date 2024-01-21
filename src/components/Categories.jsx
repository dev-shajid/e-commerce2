'use client'

import React, { Fragment } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import BlurImage from './BlurImage';

export default function Categories() {
    return (
        <section>
            <div className="title">Categories</div>
            <Swiper
                slidesPerView={'auto'}
                // spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Navigation]}
                className="category_slider"
            >
                {
                    categories.map((slide, i) => (
                        <Fragment key={i}>
                            <SwiperSlide className='rounded-md overflow-hidden'>
                                <div className='flex flex-col p-2 items-center justify-around border border-light-1 text-black'>
                                    <div className='w-[90px] aspect-square'>
                                        <BlurImage className='hidden' src={slide.image} alt={slide.name} />
                                    </div>
                                    <p className='text-sm mt-1 font-medium'>{slide.name}</p>
                                </div>
                            </SwiperSlide>
                        </Fragment>
                    ))
                }
            </Swiper>
        </section>
    )
}


const categories = [
    {
        image: '/category/Jersy.webp',
        name: "Jersy",
    },
    {
        image: '/category/Tshirt.webp',
        name: "Tshirt",
    },
    {
        image: '/category/Panjabi.webp',
        name: "Panjabi",
    },
    {
        image: '/category/Winter.webp',
        name: "Winter",
    },
    {
        image: '/category/Borka.webp',
        name: "Borka",
    },
    {
        image: '/category/Attar.webp',
        name: "Attar",
    },
    {
        image: '/category/Offer.webp',
        name: "Offer",
    },
    {
        image: '/category/Canvas.webp',
        name: "Canvas",
    },
]