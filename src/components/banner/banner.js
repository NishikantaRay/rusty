import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
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
                    <Link
                      to="#"
                      className="theme-btn theme-btn-10 theme-btn-10-white">
                      Tailored Sessions
                      <i className="fa-light fa-arrow-right"></i>
                    </Link>
                    <Link
                      to="#"
                      className="theme-btn theme-btn-10 theme-btn-10-transparent">
                      Weekend Workshops
                      <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="h10_banner-bottom-info">
                    <span>
                      <i className="fa-brands fa-youtube"></i>4k Video Class
                    </span>
                    <span>
                      <i className="fa-light fa-users"></i>18k Total Student
                    </span>
                    <span>
                      <i className="fa-light fa-file-lines"></i>Complete
                      Graduation
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
    </>
  );
};

export default Banner;
