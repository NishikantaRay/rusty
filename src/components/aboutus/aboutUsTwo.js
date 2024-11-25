import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsTwo = () => {
  return (
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
                <Link
                  to="about.html"
                  className="theme-btn about-btn theme-btn-medium"
                >
                  More Details
                </Link>
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
  );
};

export default AboutUsTwo;
