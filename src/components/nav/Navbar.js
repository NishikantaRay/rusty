import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import menuLinks from "../../data/nav.json";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                  <Link to="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link> 
                </div>
                <nav className="main-menu mobile-menu d-none d-xl-block" id="mobile-menu">
                  <ul>
                    {menuLinks.mainMenu.map((item, index) => (
                      <li key={index}>
                        <Link to={item.url}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="header-right">
                <div className="header-btn d-none d-sm-block">
                  <Link to="#" className="header-btn theme-btn theme-btn-medium">
                    Subscribe to Newsletter
                  </Link> 
                </div>
                <div className="header-menu-bar d-xl-none ml-10">
                  <span
                    className="header-menu-bar-icon side-toggle"
                    onClick={toggleSidebar}>
                    <i className="fa-light fa-bars"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
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
            {menuLinks.sidebarMenu.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.label}</Link> 
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}></div>
    </header>
  );
};

export default Navbar;
