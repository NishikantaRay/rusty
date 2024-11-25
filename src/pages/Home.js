import React from "react";
import CounterArea from "../components/counter/CounterArea";
import EventArea from "../components/eventarea/EventArea";
import Footer from "../components/footer/footer";
import Navbar from "../components/nav/navBar";
import TestimonialArea from "../components/testimonialSlider/testimonial";

import TopCourse from "../components/topcourse/topcourse";
import BrandSlider from "../components/brandslider/BrandSlider";
import BlogSlider from "../components/blogslider/BlogSlider";
import NewsLetter from "../components/newsletter/newsLetter";
import Banner from "../components/banner/banner";
import AboutUsOne from "../components/aboutus/aboutUsOne";
import AboutUsTwo from "../components/aboutus/aboutUsTwo";
import TabsContainer from "../components/course/TabsContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUsOne />
      <AboutUsTwo />
      <TestimonialArea />
      <section className="course-area">
        <div className="container-fluid container-custom-1 p-0">
          <div className="course-wrap pt-120 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="course-section-area text-center">
                    <div className="section-area section-area-top">
                      <span className="section-subtitle">Featured Courses</span>
                      <h2 className="section-title mb-20">
                        Explore Featured Courses
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="course-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true">
                          See All
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false">
                          Trending
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false">
                          Featured
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-four-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-four"
                          type="button"
                          role="tab"
                          aria-controls="pills-four"
                          aria-selected="false">
                          Web Design
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-five-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-five"
                          type="button"
                          role="tab"
                          aria-controls="pills-five"
                          aria-selected="false">
                          Popular
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="course-inner">
                <div className="tab-content" id="pills-tabContent">
                 <TabsContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterArea />
      <EventArea />
      <TopCourse />
      <BrandSlider />
      <BlogSlider />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
