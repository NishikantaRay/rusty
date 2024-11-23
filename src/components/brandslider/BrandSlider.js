import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const BrandSlider = () => {
  const brands = [
    { id: 1, hoverImg: "h_1.png", mainImg: "1.png" },
    { id: 2, hoverImg: "h_2.png", mainImg: "2.png" },
    { id: 3, hoverImg: "h_3.png", mainImg: "3.png" },
    { id: 4, hoverImg: "h_4.png", mainImg: "4.png" },
    { id: 5, hoverImg: "h_5.png", mainImg: "5.png" },
    { id: 6, hoverImg: "h_1.png", mainImg: "1.png" },
    { id: 7, hoverImg: "h_2.png", mainImg: "2.png" },
    { id: 8, hoverImg: "h_3.png", mainImg: "3.png" },
    { id: 9, hoverImg: "h_4.png", mainImg: "4.png" },
    { id: 10, hoverImg: "h_5.png", mainImg: "5.png" },
  ];

  return (
    <div className="brand-area h6_brand-area pt-120">
      <div className="container mb-5 pb-5">
        <div className="brand-wrap">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000, // Auto-slide delay in milliseconds
              disableOnInteraction: false, // Prevent autoplay from stopping after interaction
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="brand-active-2 swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-item">
                  <a href="#">
                    <img
                      src={`assets/img/brand/8/${brand.hoverImg}`}
                      alt=""
                      className="brand-hover-img"
                    />
                    <img
                      src={`assets/img/brand/8/${brand.mainImg}`}
                      alt=""
                      className="brand-main-img"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
