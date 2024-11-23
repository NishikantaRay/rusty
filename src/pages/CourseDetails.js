import Footer from "../components/footer/footer";
import Navbar from "../components/nav/Navbar";

const CourseDetails = () => {
  return (
    <>
      <Navbar />
      <section
        class="breadcrumb-area bg-default"
        data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
        <img
          src="assets/img/breadcrumb/shape-1.png"
          alt=""
          class="breadcrumb-shape"
        />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-content">
                <h2 class="breadcrumb-title">
                  Introduction to User Experience Design
                </h2>
                <div class="breadcrumb-list">
                  <a href="index.html">Home</a>
                  <span>Course Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="course_details-area pt-120 pb-60">
        <div class="container">
          {/* <div class="course_details-img">
            <img src="assets/img/course/details/1.jpg" alt="" />
          </div> */}
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="course_details-wrap mb-55">
                <div class="course_details-top mb-60">
                  <h3 class="course_details-title">
                    Introduction to User Experience Design
                  </h3>
                  <div class="course_details-meta">
                    <div class="course_details-meta-left">
                      <div class="course_details-author">
                        <div class="course_details-author-img">
                          <img
                            src="assets/img/course/details/author.jpg"
                            alt=""
                          />
                        </div>
                        <div class="course_details-author-info">
                          <span>Teacher</span>
                          <h5>
                            <a href="team.html">Dylan Meringue</a>
                          </h5>
                        </div>
                      </div>
                      <div class="course_details-category">
                        <span>Categories</span>
                        <h5>
                          <a href="#">Online Teaching</a>
                        </h5>
                      </div>
                      <div class="course_details-rating">
                        <span>Review</span>
                        <ul>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i class="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="course_details-meta-right">
                      <a href="#" class="theme-btn theme-btn-medium">
                        Free
                      </a>
                    </div>
                  </div>
                </div>
                <div class="course_details-tab-button">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        <i class="fa-solid fa-bookmark"></i>
                        <span>Overview</span>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-thin fa-box"></i>
                        <span>Curriculum</span>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false">
                        <i class="fa-thin fa-user"></i>
                        <span>Instructor</span>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-four-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-four"
                        type="button"
                        role="tab"
                        aria-controls="pills-four"
                        aria-selected="false">
                        <i class="fa-thin fa-message-dots"></i>
                        <span>Reviews</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="course_details-tab-content">
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0">
                      <div class="course_details-content">
                        <h4 class="course_details-content-title mb-15">
                          Courses Description
                        </h4>
                        <p class="mb-25">
                          Curabitur tempus tincidunt tellus ac placerat. Nullam
                          non libero nisi. Fusce congue est eget nisl tristique
                          ornare. Vestibulum id massa felis. Nullam vehicula
                          bibendum nulla eu vulputate. Aenean fringilla tortor
                          ut laoreet congue magna, a viverra turpis consectetur
                          porta.
                        </p>
                        <p class="mb-40">
                          Curabitur tempus tincidunt tellus ac placerat. Nullam
                          non libero nisi. Fusce congue est eget nisl tristique
                          ornare. Vestibulum id massa felis. Nullam vehicula
                          bibendum nulla eu vulputate. Aenean fringilla tortor
                          ut laoreet congue magna, a viverra turpis consectetur
                          porta.
                        </p>
                        <h4 class="course_details-content-title mb-20">
                          What you will learn in this course
                        </h4>
                        <div class="course_details-content-list">
                          <ul>
                            <li>
                              Etyma protium et olio gravida cur abitur est dui
                              viverrid non mi egret
                            </li>
                            <li>
                              Dictum Bibendum sapiens internum malasada fames ac
                              ante ipsum primes
                            </li>
                            <li>
                              Fauci bus cur abitur pulvinar rut rum masa sed so
                              dales sapiens utricles
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0">
                      <div class="course_details-curriculum">
                        <h4 class="course_details-content-title mb-15">
                          Course Curriculum
                        </h4>
                        <p class="mb-25">
                          Curabitur tempus tincidunt tellus ac placerat. Nullam
                          non libero nisi. Fusce congue est eget nisl tristique
                          ornare. Vestibulum id massa felis. Nullam vehicula
                          bibendum nulla eu vulputate. Aenean fringilla tortor
                          ut laoreet congue magna, a viverra turpis consectetur
                          porta.
                        </p>
                        <div class="accordion" id="Expp">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                Greetings and introduction
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#Expp">
                              <div class="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree">
                                Lesson 1
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#Expp">
                              <div class="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour">
                                Lesson 2
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#Expp">
                              <div class="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive">
                                Lesson 3
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#Expp">
                              <div class="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix">
                                Lesson 4
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#Expp">
                              <div class="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i class="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0">
                      <div class="course_details-instructor">
                        <div class="course_details-thumbnail w_img">
                          <img
                            src="assets/img/teacher/2/1.jpg"
                            alt="team images"
                          />
                        </div>
                        <div class="course_details-author-content">
                          <h6 class="course_details-author-title">
                            Jane Seymour
                          </h6>
                          <span class="course_details-author-subtitle">
                            Founder &amp; CEO
                          </span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                          <div class="contact-social">
                            <span>Social Media</span>
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa-brands fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa-brands fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa-brands fa-behance"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-four"
                      role="tabpanel"
                      aria-labelledby="pills-four-tab"
                      tabindex="0">
                      <div class="course_details-review">
                        <h4 class="course_details-review-title">
                          Student Ratings &amp; Reviews
                        </h4>
                        <div class="course_details-review-wrap">
                          <div class="row d-flex align-items-center">
                            <div class="col-md-4 col-sm-4">
                              <div class="course_details-review-left">
                                <h5>5.0</h5>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i class="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                </ul>
                                <p>(4 Reviews)</p>
                              </div>
                            </div>
                            <div class="col-md-8 col-sm-8">
                              <div class="course_details-review-content">
                                <ul>
                                  <li>
                                    <span class="review-rating">
                                      5 <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span class="review-progress-bar"></span>
                                    <span class="review-rating-count">1</span>
                                  </li>
                                  <li>
                                    <span class="review-rating">
                                      4 <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span class="review-progress-bar"></span>
                                    <span class="review-rating-count">3</span>
                                  </li>
                                  <li>
                                    <span class="review-rating">
                                      5 <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span class="review-progress-bar"></span>
                                    <span class="review-rating-count">0</span>
                                  </li>
                                  <li>
                                    <span class="review-rating">
                                      5 <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span class="review-progress-bar"></span>
                                    <span class="review-rating-count">0</span>
                                  </li>
                                  <li>
                                    <span class="review-rating">
                                      5 <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span class="review-progress-bar"></span>
                                    <span class="review-rating-count">0</span>
                                  </li>
                                </ul>
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
            <div class="col-xl-4 col-lg-4">
              <div class="course_details-sidebar mb-60">
                <div class="course_details-price">
                  <del>$36.00</del>
                  <h2>$28.00</h2>
                </div>
                <div class="course_details-list">
                  <ul>
                    <li>
                      <span>
                        <i class="fa-thin fa-clock"></i>Duration
                      </span>
                      <span>15 Weeks</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-user-group"></i>Students
                      </span>
                      <span>354</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-file-lines"></i>Lessons
                      </span>
                      <span>42</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-chart-line-up"></i>Skill Level
                      </span>
                      <span>Beginner</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-language"></i>Language
                      </span>
                      <span>English</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-user"></i>Instructor
                      </span>
                      <span>Dylan Meringue</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-percent"></i>Pass Percentage
                      </span>
                      <span>84%</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-thin fa-calendar-days"></i>Deadline
                      </span>
                      <span>24 March 2023</span>
                    </li>
                  </ul>
                  <div class="course_details-sidebar-btn">
                    <a href="#" class="course-btn theme-btn theme-btn-big">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="cta-area">
        <div class="container">
          <div class="cta-wrapper">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="cta-content mb-30 mb-lg-0">
                  <span class="cta-subtitle">Download App</span>
                  <h2 class="cta-title">
                    Are you Ready to Start your Online Course?
                  </h2>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="cta-button">
                  <a href="#" class="cta-btn">
                    <i class="fa-brands fa-apple"></i>Apple Store
                  </a>
                  <a href="#" class="cta-btn">
                    <i class="fa-brands fa-google-play"></i>Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
