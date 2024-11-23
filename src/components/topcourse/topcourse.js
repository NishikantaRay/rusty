import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const TopCourse = () => {
  const blogPosts = [
    {
      title: "Four Ways to Keep Your Workout Routine Fresh",
      date: "March 24, 2023",
      category: "Blog",
      description: "Maecenas Felis Tellus, dictum sed pharetra fermentum......",
      link: "blog-details.html",
    },
    {
      title: "The Complete Guide to Build RESTful API Application",
      date: "March 24, 2023",
      category: "Blog",
      description: "Maecenas Felis Tellus, dictum sed pharetra fermentum......",
      link: "blog-details.html",
    },
    {
      title: "Only One Thing Impossible For God Find Sense in Any.",
      date: "March 24, 2023",
      category: "Blog",
      description: "Maecenas Felis Tellus, dictum sed pharetra fermentum......",
      link: "blog-details.html",
    },{
        title: "The Complete Guide to Build RESTful API Application",
        date: "March 24, 2023",
        category: "Blog",
        description: "Maecenas Felis Tellus, dictum sed pharetra fermentum......",
        link: "blog-details.html",
      },
      {
        title: "Only One Thing Impossible For God Find Sense in Any.",
        date: "March 24, 2023",
        category: "Blog",
        description: "Maecenas Felis Tellus, dictum sed pharetra fermentum......",
        link: "blog-details.html",
      },
  ];

  return (
    <section className="h5_blog-area h6_blog-area pt-110 pb-90">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-9">
            <div className="section-area-6 mb-30">
              <span className="section-subtitle">Latest News</span>
              <h2 className="section-title mb-0">Our Latest Articles</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h5_category-section-button mb-40 text-md-end">
              <a href="#" className="theme-btn theme-btn-medium theme-btn-5">
                View All Blog
              </a>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000, // Auto-slide delay in milliseconds
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
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="h5_blog-item mb-30 active">
                <div className="h5_blog-content">
                  <div className="h5_blog-content-meta">
                    <a href="#" className="h5_blog-content-meta-tag">
                      {post.category}
                    </a>
                    <span>{post.date}</span>
                  </div>
                  <h5 className="h5_blog-content-title">
                    <a href={post.link}>{post.title}</a>
                  </h5>
                  <p>{post.description}</p>
                  <a href="#" className="h5_blog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="auto"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                          fill="currentColor"
                          className=""
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopCourse;
