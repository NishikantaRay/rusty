import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const FooterWidget = ({ title, links }) => (
  <div className="footer-widget mb-40">
    <h5 className="footer-widget-title">{title}</h5>
    <ul className="footer-widget-list">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>{link.label}</Link> {/* Replace a with Link */}
        </li>
      ))}
    </ul>
  </div>
);
