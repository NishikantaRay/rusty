import React, { useState } from "react";
import "./Sidebar.css"; // Make sure to add your CSS for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar-info side-info ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-8">
              <div className="sidebar-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo-white.png" alt="logo-img" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-4">
              <div className="sidebar-close-wrapper text-end">
                <button
                  className="sidebar-close side-info-close"
                  onClick={toggleSidebar}
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-menu-wrapper fix">
          <div className="mobile-menu"></div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${isOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Header */}
      <header>
        <div className="header-area header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 col-md-6 col-6">
                <div className="header-left">
                  <div className="header-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  <nav className="main-menu mobile-menu d-none d-xl-block" id="mobile-menu">
                    <ul>
                      {/* Add your menu items here */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6 col-6">
                <div className="header-right">
                  <div className="header-search d-none d-lg-block">
                    <form action="#">
                      <input type="text" placeholder="Search Item" />
                      <button type="submit" className="header-search-btn">
                        <i className="fa-thin fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  <div className="header-btn d-none d-sm-block">
                    <a href="#" className="header-btn theme-btn theme-btn-medium">
                      Enroll Now
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
      </header>
    </div>
  );
};

export default Sidebar;
