import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import testimonials from "../../data/testimonial.json";

const TestimonialArea = () => {
  return (
    <section className="testimonial-area pt-140 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-area mb-55 section-area-top text-center">
              <span className="section-subtitle">Student Reviews</span>
              <h2 className="section-title mb-20">What Our Students Are Saying</h2>
              <p className="section-text">
                Through a combination of lectures, readings, discussions, students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-wrap">
        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1000}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
            1800: { slidesPerView: 5 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="testimonial-top">
                  <div className="testimonial-admin">
                    <div className="testimonial-admin-img">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-admin-info">
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    <ul>
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.review}</p>
                </div>
              </div>
              <br /><br />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="testimonial-scrollbar-wrap">
          <div className="swiper-scrollbar testimonial-scrollbar"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
