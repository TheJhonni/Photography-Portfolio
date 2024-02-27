"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './portfolioSwiper.css'
import { useEffect } from "react";

async function PortfolioSwiper({ images }) {

  useEffect(() => {
    console.log(images);
  }, [images])
  
    return (
      <>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
          {images &&
            images.map((entity, index) => {
              return entity.map((url, innerIndex) => {
                const slideKey = `main_${index}_${innerIndex}`;
                return (
                  <SwiperSlide key={slideKey}>
                    <Image
                      width={500}
                      height={500}
                      src={`https:${url}`}
                      alt={`Image ${slideKey}`}
                    />
                  </SwiperSlide>
                );
              });
            })}
        </Swiper>
      </>
    );
  }

export default PortfolioSwiper;