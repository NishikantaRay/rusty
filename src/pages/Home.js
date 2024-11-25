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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
                                <i className="fa-thin fa-check"></i>Eita quad
                                ex, rhonchus vitae lectors in, digicam pharetra
                                ipsum.
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Magmas dis
                                parturient mantes
                              </li>
                              <li>
                                <i className="fa-thin fa-check"></i>Morbi
                                critique lorem sit a met arco utricles tempus.
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
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
