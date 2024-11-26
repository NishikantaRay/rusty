import React from "react";
import { Link } from "react-router-dom"; 
import { FooterWidget } from "../../helper/index";
import links from "../../data/footer.json";

const Footer = () => {
  return (
    <footer className="footer-area h2_footer-area">
      <div className="footer-top pt-240 pb-55">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <div className="footer-widget mb-40">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo-white.png" alt="" />
                  </Link> 
                </div>
                <p className="footer-widget-text mb-35">
                  Through a combination of lectures, readings, discussions,
                  students will gain solid foundation in educational.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link> 
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center">
              <div className="footer-widget mb-40">
                <div className="footer-widget-list">
                  <FooterWidget title="Useful Links" links={links.usefulLinks} />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center order-md-4 order-xl-3">
              <div className="footer-widget mb-40">
                <div className="footer-widget-list">
                  <FooterWidget title="Categories" links={links.categories} />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12 order-md-3 order-xl-4">
              <div className="footer-widget ml-80 mb-40">
                <h5 className="footer-widget-title">Newsletter</h5>
                <p className="footer-widget-text mb-20 newsletter-text">
                  Sign up for our newsletter and get 34% <br /> off your next
                  course.
                </p>
                <form action="#">
                  <div className="footer-subscribe-form">
                    <input type="email" placeholder="Enter Your Email*" />
                    <button type="submit">Subscribe</button>
                  </div>
                  <div className="footer-subscribe-condition">
                    <label className="condition_label">
                      I agree to the terms of use and privacy policy.
                      <input type="checkbox" />
                      <span className="check_mark"></span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text">
                <p>Copyright © 2023 All Rights Reserved by Eduan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
