function NewsLetter() {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="cta-content mb-30 mb-lg-0">
                <span className="cta-subtitle">Download App</span>
                <h2 className="cta-title">
                  Are you Ready to Start your Online Course?
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="cta-button">
                <form action="#">
                  <div className="footer-subscribe-form bg-light">
                    <input type="email" placeholder="Enter Your Email*" />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
