import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import brands from "../../data/brands.json";
const BrandSlider = () => {
  return (
    <div className="brand-area h6_brand-area pt-120">
      <div className="container mb-5 pb-5">
        <div className="brand-wrap">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            className="brand-active-2 swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-item">
                  <Link to={`/brand/${brand.id}`}>
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
                  </Link>
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
