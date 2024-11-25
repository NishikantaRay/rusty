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

const Home = () => {
    return (
    <>
    <Navbar />
      <section className="h10_banner-area">
        <div
          className="h10_single-banner bg-default"
          data-background="assets/img/banner/10/bg.jpg">
          <img
            src="assets/img/banner/10/shape-1.png"
            alt="Not Found"
            className="h10_banner-shape-1 d-none d-xxl-block"
          />
          <img
            src="assets/img/banner/10/shape-2.png"
            alt="Not Found"
            className="h10_banner-shape-2 d-none d-xl-block"
          />
          <img
            src="assets/img/banner/10/shape-3.png"
            alt="Not Found"
            className="h10_banner-shape-3 d-none d-xl-block"
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="h10_banner-content mb-60 mb-lg-0">
                  <h1 className="h10_banner-content-title">
                    Tailored Rust: Your Needs,
                    <span>
                      Our Expertise{" "}
                      <img src="assets/img/banner/1/line.png" alt="" />
                    </span>
                  </h1>
                  <p className="h10_banner-content-text">
                    Pick and Learn Rust concepts that you want for less than a
                    burger meal.
                  </p>
                  <div className="h10_banner-content-btn mb-60">
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-10-white">
                      Tailored Sessions<i className="fa-light fa-arrow-right"></i>
                    </a>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-10-transparent">
                      Weekend Workshops<i className="fa-light fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="h10_banner-bottom-info">
                    <span>
                      <i className="fa-brands fa-youtube"></i>4k Video Class
                    </span>
                    <span>
                      <i className="fa-light fa-users"></i>18k Total Student
                    </span>
                    <span>
                      <i className="fa-light fa-file-lines"></i>Complete Graduation
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="h10_banner-right pl-110">
                  <img
                    src="assets/img/banner/10/shape-4.png"
                    alt="Not Found"
                    className="h10_banner-shape-4 d-none d-md-block"
                  />
                  <img
                    src="assets/img/banner/10/shape-5.png"
                    alt="Not Found"
                    className="h10_banner-shape-5 d-none d-md-block"
                  />
                  <img
                    src="assets/img/banner/10/shape-6.png"
                    alt="Not Found"
                    className="h10_banner-shape-6 d-none d-md-block"
                  />
                  <div className="h10_banner-img">
                    <img src="assets/img/own/header.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h2_about-area pt-120 pb-70">
        <img
          src="assets/img/about/2/shape-5.png"
          alt=""
          className="h2_about-top-shape"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="h2_about-img mb-50">
                <div className="h2_about-inner-img">
                  <img
                    src="assets/img/about/2/1.jpg"
                    alt=""
                    className="h2_inner-img"
                  />
                  <img
                    src="assets/img/about/2/shape-4.png"
                    alt=""
                    className="h2_inner-img-shape"
                  />
                </div>
                <div className="h2_about-inner-img2">
                  <img src="assets/img/about/2/2.jpg" alt="" />
                  <div className="h2_about-img-button">
                    {/* <a href="https://www.youtube.com/watch?v=dMlASgogxo4" className="popup-video" />
                      <i className="fa-solid fa-play"></i>
                      </a> */}
                  </div>
                </div>
                <div className="h2_about-rating d-none d-sm-block">
                  <span>
                    <i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                  </span>
                  <h5>Congratulations</h5>
                </div>
                <div className="h2_about-img-shape d-none d-sm-block">
                  <img
                    className="h2_about-shape-1"
                    src="assets/img/about/2/shape-1.png"
                    alt=""
                  />
                  <img
                    className="h2_about-shape-2"
                    src="assets/img/about/2/shape-2.png"
                    alt=""
                  />
                  <img
                    className="h2_about-shape-3"
                    src="assets/img/about/2/shape-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 mb-50">
              <div className="section-area-2 mb-35">
                <h2 className="section-title mb-20">
                  Education Instructors Play Crucial Role in Shaping The Lives
                  of Their{" "}
                  <span>
                    Students <img src="assets/img/banner/2/line.png" alt="" />
                  </span>
                </h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour. Donec aliquot, denim ut auctor molestee, era
                  elite pharetra masa, at impediment eros qualm sed libero. Sed
                  arco lorem, rut rum.
                </p>
              </div>
              <div className="h2_about-button">
                <a href="#" className="theme-btn theme-btn-medium">
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="about-content mb-50">
                <div className="section-area mb-20">
                  <span className="section-subtitle">Start learning Free</span>
                  <h2 className="section-title mb-15">
                    Online Course can be Tailored to Need of learners
                  </h2>
                  <p className="section-text">
                    Through a combination of lectures, readings, discussions,
                    students will gain a solid foundation in educational
                    psychology.
                  </p>
                </div>
                <div className="about-content-list">
                  <ul>
                    <li>International course collection in 14 languages</li>
                    <li>Top certifications in tech and business</li>
                    <li>
                      Access to 35,000+ top Eduan courses, anytime, anywhere
                    </li>
                  </ul>
                </div>
                <div className="about-content-button">
                  <a
                    href="about.html"
                    className="theme-btn about-btn theme-btn-medium">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-img mb-50">
                <img src="assets/img/about/1/1.png" alt="" />
                <div className="about-img-meta">
                  <span>
                    <i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                  </span>
                  <h5>Congratulations</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/1.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/2.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>34
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$100</del>$67.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/3.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/4.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>54
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>26
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$240</del>$175
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/5.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$364</del>$254
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/6.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>34
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$124</del>$98.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/7.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>24
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/8.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>67
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>98
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$136</del>$97.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/1.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/2.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>34
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$100</del>$67.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/3.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/4.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>54
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>26
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$240</del>$175
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/5.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$364</del>$254
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/6.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>34
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$124</del>$98.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/7.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>24
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/8.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>67
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>98
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$136</del>$97.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0">
                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/1.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/2.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>34
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$100</del>$67.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/3.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/4.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>54
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>26
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$240</del>$175
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/5.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$364</del>$254
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/6.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>34
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$124</del>$98.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/7.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>24
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/8.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>67
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>98
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$136</del>$97.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-four"
                    role="tabpanel"
                    aria-labelledby="pills-four-tab"
                    tabindex="0">
                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/1.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/2.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>34
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$100</del>$67.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/3.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/4.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>54
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>26
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$240</del>$175
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/5.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$364</del>$254
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/6.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>34
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$124</del>$98.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/7.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>24
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/8.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>67
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>98
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$136</del>$97.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-five"
                    role="tabpanel"
                    aria-labelledby="pills-five-tab"
                    tabindex="0">
                    <div className="row">
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/1.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v1.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                The Complete JavaScript Course From Zero to
                                Expert!
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/2.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>34
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$100</del>$67.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v2.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/3.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v3.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Online Courses Can Also Provide Access
                                High-Quality
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/4.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>54
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>26
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$240</del>$175
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v4.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Learn how to start an amazon FBA store &
                                analysis
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/5.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>50
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$364</del>$254
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v5.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yonsei University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Unity Medical Visualize Deployment and Usability
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/6.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>23
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>34
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$124</del>$98.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v6.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Stanford University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Become a product Manager learn the skills & job.
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/7.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>24
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>47
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$130</del>$86.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v7.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>University of London</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Certified Graphic Designer with Free Project
                                Course
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-4 col-md-6">
                        <div className="course-item mb-30">
                          <div className="course-img">
                            <img src="assets/img/course/1/8.jpg" alt="" />
                          </div>
                          <div className="course-content">
                            <div className="course-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-content-title">
                              <a href="#">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <div className="course-content-bottom">
                              <div className="course-bottom-info">
                                <span>
                                  <i className="fa-thin fa-book-blank"></i>67
                                </span>
                                <span>
                                  <i className="fa-thin fa-user-group"></i>98
                                </span>
                              </div>
                              <div className="course-bottom-price">
                                <span>
                                  <del>$136</del>$97.00
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="course-hover-content">
                            <div className="course-hover-content-top">
                              <div className="course-top-icon">
                                <img src="assets/img/course/1/v8.png" alt="" />
                              </div>
                              <div className="course-top-title">
                                <h6>Yale University</h6>
                              </div>
                            </div>
                            <h5 className="course-hover-content-title">
                              <a href="course-details.html">
                                Computer Fundamentals Basic Start-up Utricles
                                Vitae
                              </a>
                            </h5>
                            <p className="course-hover-content-text">
                              Lorem ipsum dolorous rises quiz varus qualm
                              quisque id connecter adipescent commode
                              impediment.
                            </p>
                            <ul className="course-hover-content-list">
                              <li>
                                <i className="fa-thin fa-check"></i>Eita quad ex,
                                rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi critique
                                lorem sit a met arco utricles tempus.
                              </li>
                            </ul>
                            <div className="course-hover-content-btn">
                              <div className="course-hover-cart-btn">
                                <a href="#" className="theme-btn course-btn">
                                  Add to Cart
                                </a>
                              </div>
                              <div className="course-hover-fav-btn">
                                <a href="#">
                                  <i className="fa-thin fa-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
     <NewsLetter/>
      <Footer />
    </>
    )
}

export default Home;