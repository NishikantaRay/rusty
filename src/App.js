function App() {
  return (
    <div class="page-wrapper">
    <header class="main-header-two">
      <nav class="main-menu">
        <div class="container">
          <div class="main-menu__logo">
            <a href="index.html">
              <img src="assets/images/logo-two.png" width="183" height="48" alt="Eduact" />
            </a>
          </div>
          <div class="main-menu__nav">
            <ul class="main-menu__list">
              <li >
                <a href="#">Home</a>
               
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Career Training
                </a>

              </li>
              <li>
                <a href="#">Workshops
                </a>

              </li>
              <li>
                <a href="#">Blogs</a>

              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          
          <div class="main-menu__right">
            <a href="#" class="main-menu__toggler mobile-nav__toggler">
              <i class="fa fa-bars"></i> </a>
            <a href="contact.html" class="eduact-btn"><span class="eduact-btn__curve"></span>Subscribe to
              Newsletter</a>
           
          </div>
         
        </div>
       
      </nav>
     
    </header>
   

    <div class="stricky-header stricked-menu main-menu main-header-two">
      <div class="sticky-header__content"></div>
     
    </div>
    
    <footer class="main-footer-two">
      <div class="main-footer-two__bg" style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-2.png)"
          }}></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-md-5 wow fadeInUp" data-wow-delay="100ms">
            <div class="main-footer-two__about">
              <a href="index.html" class="main-footer-two__logo">
                <img src="assets/images/footer-logo-two.png" alt="eduact" width="159" height="40" />
              </a>
              <ul class="main-footer-two__info-list">
                <li>
                  <span class="icon-Location"></span>6391 Elgin St. Celina,
                  Delaware 10299
                </li>
                <li>
                  <span class="icon-Telephone"></span><a href="tel:3035550105">(303) 555-0105</a>
                </li>
                <li>
                  <span class="icon-Email"></span><a href="mailto:michael.mitc@example.com">michael.mitc@example.com</a>
                </li>
              </ul>
              <div class="main-footer-two__social">
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
              </div>
              
            </div>
          
          </div>
          <div class="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="200ms">
            <div class="main-footer-two__navmenu main-footer-two__widget01">
              <h3 class="main-footer-two__title">Quick Links</h3>
              <ul>
                <li><a href="course.html">Latest Courses</a></li>
                <li><a href="about.html">Mission & Vision</a></li>
                <li><a href="services.html">Our Approach</a></li>
                <li><a href="team.html">Exclusive Advisors</a></li>
                <li><a href="team-become.html">Join a Carrer</a></li>
              </ul>
             
            </div>
           
          </div>
          <div class="col-xl-2 col-md-3 wow fadeInUp" data-wow-delay="300ms">
            <div class="main-footer-two__navmenu main-footer-two__widget02">
              <h3 class="main-footer-two__title">Explore</h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="course.html">Upcoming Events</a></li>
                <li><a href="blog-grid-right.html">Blog & News</a></li>
                <li><a href="faq.html">FAQ Question</a></li>
                <li><a href="pricing.html">Testimonial</a></li>
                <li><a href="contact.html">Privacy Policy</a></li>
              </ul>
            </div>
          
          </div>
          <div class="col-xl-3 col-md-12 wow fadeInUp" data-wow-delay="400ms">
            <div class="main-footer-two__gallery">
              <h3 class="main-footer-two__title">Gallery</h3>
              <div class="main-footer-two__galleries">
                <a class="img-popup" href="assets/images/gallery/fg-1.jpg"><img src="assets/images/gallery/fg-1.jpg"
                    alt="eduact" /></a>
                <a class="img-popup" href="assets/images/gallery/fg-2.jpg"><img src="assets/images/gallery/fg-2.jpg"
                    alt="eduact" /></a>
                <a class="img-popup" href="assets/images/gallery/fg-3.jpg"><img src="assets/images/gallery/fg-3.jpg"
                    alt="eduact" /></a>
                <a class="img-popup" href="assets/images/gallery/fg-4.jpg"><img src="assets/images/gallery/fg-4.jpg"
                    alt="eduact" /></a>
                <a class="img-popup" href="assets/images/gallery/fg-5.jpg"><img src="assets/images/gallery/fg-5.jpg"
                    alt="eduact" /></a>
                <a class="img-popup" href="assets/images/gallery/fg-6.jpg"><img src="assets/images/gallery/fg-6.jpg"
                    alt="eduact" /></a>
              </div>
            </div>
           
          </div>
        </div>
    
      </div>
     
    </footer>
  
    <section class="copyright text-center">
      <div class="container wow fadeInUp" data-wow-delay="400ms">
        <p class="copyright__text">
          Copyright <span class="dynamic-year"></span>
          | Eduact HTML Template. All Rights Reserved
        </p>
      </div>
     
    </section>
    
  </div>
  );
}

export default App;
