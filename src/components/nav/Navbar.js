import React, { useState } from 'react';
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <header>
    <div className="header-area header-sticky">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-10 col-lg-10 col-md-6 col-6">
            <div className="header-left">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <nav
                className="main-menu mobile-menu d-none d-xl-block"
                id="mobile-menu"
              >
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Career Training</a></li>
                  <li><a href="#">Workshops</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="header-right">
             
              <div className="header-btn d-none d-sm-block">
                <a href="#" className="header-btn theme-btn theme-btn-medium">
                Subscribe to Newsletter
                </a>
              </div>
             
              <div className="header-menu-bar d-xl-none ml-10">
                <span
                  className="header-menu-bar-icon side-toggle"
                  onClick={toggleSidebar}
                >
                  <i className="fa-light fa-bars"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sidebar (the sidebar will appear when isSidebarOpen is true) */}
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src="assets/img/logo/logo-white.png" alt="Logo" />
        </div>
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="fal fa-times"></i>
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>

    {/* Overlay to close sidebar */}
    <div
      className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
      onClick={toggleSidebar}
    ></div>
  </header>
  );
};

export default Navbar;
