"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useEffect, useState } from "react";

async function PortfolioSwiper({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
        <Swiper
            style={{
                '--swiper-navigation-color': '#C67E28',
                '--swiper-pagination-color': '#C67E28',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            >
                {images && images.map((entity) => {
                    return entity.map((url) => {
                    return (
                    <>
                        <SwiperSlide key={url}> 
                            <Image
                            width={500}
                            height={500}
                            src={`https:${url}`}
                            alt='ctyuvibho'
                            />
                        </SwiperSlide>
                    </>
                    )
                    })
                })}                 
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
        >
            {images && images.map((entity) => {
                    return entity.map((url) => {
                    return (
                    <>
                    <SwiperSlide key={url}> 
                        <Image
                        width={500}
                        height={500}
                        src={`https:${url}`}
                        alt='ctyuvibho'
                        />
                    </SwiperSlide>
                    </>
                    )
                })
                })}
      </Swiper>
    </>
    )
};
export default PortfolioSwiper;