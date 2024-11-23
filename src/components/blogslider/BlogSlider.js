import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const BlogSlider = () => {
  const blogs = [
    {
      id: 1,
      image: "assets/img/blog/8/1.jpg",
      title: "Educational how to started learning Java Script.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "blog-details.html",
    },
    {
      id: 2,
      image: "assets/img/blog/8/2.jpg",
      title: "Machine Learning Night Fastaily Part 2 Influential",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "blog-details.html",
    },
    {
      id: 3,
      image: "assets/img/blog/8/3.jpg",
      title: "Istanbul Teachings of Buddha and the Purpose",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "blog-details.html",
    },
    {
      id: 2,
      image: "assets/img/blog/8/2.jpg",
      title: "Machine Learning Night Fastaily Part 2 Influential",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "blog-details.html",
    },
    {
      id: 3,
      image: "assets/img/blog/8/3.jpg",
      title: "Istanbul Teachings of Buddha and the Purpose",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "blog-details.html",
    },
  ];

  return (
    <section className="h8_blog-area pt-110 pb-30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="section-area-8 mb-20">
              <span className="section-subtitle">Our Blogs</span>
              <h2 className="section-title mb-0">Have a Look on Our News</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="h8_blog-navigation mb-30">
              <div className="h8_blog-prev swiper-button-prev">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 7H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h8_blog-next swiper-button-next">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-active-8 swiper pb-80 pt-30">
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
            }}>
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="h8_blog-item">
                  <div className="h8_blog-item-img w_img">
                    <a href={blog.link}>
                      <img src={blog.image} alt="" />
                    </a>
                  </div>
                  <div className="h8_blog-item-content">
                    <h4 className="h8_blog-item-content-title">
                      <a href={blog.link}>{blog.title}</a>
                    </h4>
                    <p>{blog.description}</p>
                    <a href={blog.link} className="h8_blog-item-content-btn">
                      Explore More <i className="fa-light fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
