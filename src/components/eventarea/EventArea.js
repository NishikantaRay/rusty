import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const events = [
  {
    imgSrc: "assets/img/event/1/1.jpg",
    location: "London, US",
    time: "8.00 am - 6.00 pm",
    title: "These are Designed to Provide Hands Training and Skill-Building.",
    link: "event.html",
  },
  {
    imgSrc: "assets/img/event/1/2.jpg",
    location: "London, US",
    time: "8.00 am - 6.00 pm",
    title: "Personalized Learning & Meeting The Needs of Every Student.",
    link: "event.html",
  },
  {
    imgSrc: "assets/img/event/1/3.jpg",
    location: "London, US",
    time: "8.00 am - 6.00 pm",
    title: "The Whole Child Fostering Social and Emotional Development.",
    link: "event.html",
  },
  {
    imgSrc: "assets/img/event/1/2.jpg",
    location: "London, US",
    time: "8.00 am - 6.00 pm",
    title: "Personalized Learning & Meeting The Needs of Every Student.",
    link: "event.html",
  },
  {
    imgSrc: "assets/img/event/1/3.jpg",
    location: "London, US",
    time: "8.00 am - 6.00 pm",
    title: "The Whole Child Fostering Social and Emotional Development.",
    link: "event.html",
  },
];

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
                  <span className="section-subtitle">Conference on Education</span>
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
                 delay: 3000, // Auto-slide delay in milliseconds
                 disableOnInteraction: false, // Prevent autoplay from stopping after interaction
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
              }}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="event-item">
                    <div className="event-img">
                      <a href={event.link}>
                        <img src={event.imgSrc} alt="" />
                      </a>
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
                        <a href={event.link}>{event.title}</a>
                      </h5>
                      <a href="#" className="t-theme-btn theme-btn event-btn">
                        Get Ticket
                      </a>
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
