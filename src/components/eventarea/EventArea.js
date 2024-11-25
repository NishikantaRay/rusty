import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import events from "../../data/events.json";

const EventArea = () => {
  return (
    <section className="event-area h7_event-area">
      <img src="assets/img/event/7/bg.jpg" alt="" className="event-bg-img" />
      <div className="event-wrap pt-120 pb-40">
        <div className="container">
          <div className="row align-items-center mb-30">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="event-section-area mb-20">
                <div className="section-area">
                  <span className="section-subtitle">
                    Conference on Education
                  </span>
                  <h2 className="section-title mb-0">Upcoming Events</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="event-navigation mb-30">
                <div className="event-prev swiper-button-prev"></div>
                <div className="event-next swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div className="event-active swiper pb-80">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}>
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="event-item">
                    <div className="event-img">
                      <Link to={event.link}>
                        <img src={event.imgSrc} alt="" />
                      </Link>
                    </div>
                    <div className="event-content">
                      <div className="event-content-meta">
                        <span>
                          <i className="fa-thin fa-location-dot"></i>
                          {event.location}
                        </span>
                        <span>
                          <i className="fa-thin fa-clock"></i>
                          {event.time}
                        </span>
                      </div>
                      <h5 className="event-content-title">
                        <Link to={event.link}>{event.title}</Link>
                      </h5>
                      <Link
                        to={event.link}
                        className="t-theme-btn theme-btn event-btn">
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventArea;
