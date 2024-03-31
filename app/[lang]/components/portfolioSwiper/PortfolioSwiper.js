"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './portfolioSwiper.css';
import { useEffect } from 'react';
import { animatePageIn } from '../../animations';
import ImageWithSkeleton from "../imageWithSkeleton";


function PortfolioSwiper({ images }) {

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {images &&
          images.map((entity, index) =>
            entity.map((url, innerIndex) => {
              const slideKey = `main_${index}_${innerIndex}`;
              return (
                <SwiperSlide key={slideKey}>
                  <ImageWithSkeleton
                    width={500}
                    height={500}
                    src={`https:${url}`}
                    alt={`Image ${slideKey}`}
                  />
                </SwiperSlide>
              );
            })
          )}
      </Swiper>
    </>
  );
}

export default PortfolioSwiper;
