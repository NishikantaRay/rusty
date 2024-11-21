import "./Header.css"; // Ensure to add styles in a separate CSS file
import Navbar from "./components/nav/Navbar";
import TestimonialArea from "./components/testimonialSlider/testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <section class="h10_banner-area">
        <div
          class="h10_single-banner bg-default"
          data-background="assets/img/banner/10/bg.jpg">
          <img
            src="assets/img/banner/10/shape-1.png"
            alt="Not Found"
            class="h10_banner-shape-1 d-none d-xxl-block"
          />
          <img
            src="assets/img/banner/10/shape-2.png"
            alt="Not Found"
            class="h10_banner-shape-2 d-none d-xl-block"
          />
          <img
            src="assets/img/banner/10/shape-3.png"
            alt="Not Found"
            class="h10_banner-shape-3 d-none d-xl-block"
          />
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="h10_banner-content mb-60 mb-lg-0">
                  <h1 class="h10_banner-content-title">
                    Tailored Rust: Your Needs,
                    <span>
                      Our Expertise{" "}
                      <img src="assets/img/banner/1/line.png" alt="" />
                    </span>
                  </h1>
                  <p class="h10_banner-content-text">
                    Pick and Learn Rust concepts that you want for less than a
                    burger meal.
                  </p>
                  <div class="h10_banner-content-btn mb-60">
                    <a
                      href="#"
                      class="theme-btn theme-btn-10 theme-btn-10-white">
                      Tailored Sessions<i class="fa-light fa-arrow-right"></i>
                    </a>
                    <a
                      href="#"
                      class="theme-btn theme-btn-10 theme-btn-10-transparent">
                      Weekend Workshops<i class="fa-light fa-arrow-right"></i>
                    </a>
                  </div>
                  <div class="h10_banner-bottom-info">
                    <span>
                      <i class="fa-brands fa-youtube"></i>4k Video Class
                    </span>
                    <span>
                      <i class="fa-light fa-users"></i>18k Total Student
                    </span>
                    <span>
                      <i class="fa-light fa-file-lines"></i>Complete Graduation
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-6 col-lg-6">
                <div class="h10_banner-right pl-110">
                  <img
                    src="assets/img/banner/10/shape-4.png"
                    alt="Not Found"
                    class="h10_banner-shape-4 d-none d-md-block"
                  />
                  <img
                    src="assets/img/banner/10/shape-5.png"
                    alt="Not Found"
                    class="h10_banner-shape-5 d-none d-md-block"
                  />
                  <img
                    src="assets/img/banner/10/shape-6.png"
                    alt="Not Found"
                    class="h10_banner-shape-6 d-none d-md-block"
                  />
                  <div class="h10_banner-img">
                    <img src="assets/img/own/header.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="h2_about-area pt-120 pb-70">
        <img
          src="assets/img/about/2/shape-5.png"
          alt=""
          class="h2_about-top-shape"
        />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="h2_about-img mb-50">
                <div class="h2_about-inner-img">
                  <img
                    src="assets/img/about/2/1.jpg"
                    alt=""
                    class="h2_inner-img"
                  />
                  <img
                    src="assets/img/about/2/shape-4.png"
                    alt=""
                    class="h2_inner-img-shape"
                  />
                </div>
                <div class="h2_about-inner-img2">
                  <img src="assets/img/about/2/2.jpg" alt="" />
                  <div class="h2_about-img-button">
                    {/* <a href="https://www.youtube.com/watch?v=dMlASgogxo4" class="popup-video" />
                      <i class="fa-solid fa-play"></i>
                      </a> */}
                  </div>
                </div>
                <div class="h2_about-rating d-none d-sm-block">
                  <span>
                    <i class="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                  </span>
                  <h5>Congratulations</h5>
                </div>
                <div class="h2_about-img-shape d-none d-sm-block">
                  <img
                    class="h2_about-shape-1"
                    src="assets/img/about/2/shape-1.png"
                    alt=""
                  />
                  <img
                    class="h2_about-shape-2"
                    src="assets/img/about/2/shape-2.png"
                    alt=""
                  />
                  <img
                    class="h2_about-shape-3"
                    src="assets/img/about/2/shape-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-10 mb-50">
              <div class="section-area-2 mb-35">
                <h2 class="section-title mb-20">
                  Education Instructors Play Crucial Role in Shaping The Lives
                  of Their{" "}
                  <span>
                    Students <img src="assets/img/banner/2/line.png" alt="" />
                  </span>
                </h2>
                <p class="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour. Donec aliquot, denim ut auctor molestee, era
                  elite pharetra masa, at impediment eros qualm sed libero. Sed
                  arco lorem, rut rum.
                </p>
              </div>
              <div class="h2_about-button">
                <a href="#" class="theme-btn theme-btn-medium">
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-area pt-140 pb-90">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-10">
              <div class="about-content mb-50">
                <div class="section-area mb-20">
                  <span class="section-subtitle">Start learning Free</span>
                  <h2 class="section-title mb-15">
                    Online Course can be Tailored to Need of learners
                  </h2>
                  <p class="section-text">
                    Through a combination of lectures, readings, discussions,
                    students will gain a solid foundation in educational
                    psychology.
                  </p>
                </div>
                <div class="about-content-list">
                  <ul>
                    <li>International course collection in 14 languages</li>
                    <li>Top certifications in tech and business</li>
                    <li>
                      Access to 35,000+ top Eduan courses, anytime, anywhere
                    </li>
                  </ul>
                </div>
                <div class="about-content-button">
                  <a
                    href="about.html"
                    class="theme-btn about-btn theme-btn-medium">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="about-img mb-50">
                <img src="assets/img/about/1/1.png" alt="" />
                <div class="about-img-meta">
                  <span>
                    <i class="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                  </span>
                  <h5>Congratulations</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialArea/>
     
    </>
  );
};

export default App;
