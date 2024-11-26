import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const CourseItem = ({ course }) => {
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6">
      <div className="course-item mb-30">
        <div className="course-img">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-content">
          <div className="course-content-top">
            <div className="course-top-icon">
              <img src={course.icon} alt={course.university} />
            </div>
            <div className="course-top-title">
              <h6>{course.university}</h6>
            </div>
          </div>
          <h5 className="course-content-title">
            <Link to={`/cart/add/${course.id}`}>{course.title}</Link> {/* Link to specific course */}
          </h5>
          <div className="course-content-bottom">
            <div className="course-bottom-info">
              <span>
                <i className="fa-thin fa-book-blank"></i>{course.lessons}
              </span>
              <span>
                <i className="fa-thin fa-user-group"></i>{course.enrolled}
              </span>
            </div>
            <div className="course-bottom-price">
              <span>
                <del>{course.oldPrice}</del>{course.newPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="course-hover-content">
          <div className="course-hover-content-top">
            <div className="course-top-icon">
              <img src={course.icon} alt={course.university} />
            </div>
            <div className="course-top-title">
              <h6>{course.university}</h6>
            </div>
          </div>
          <h5 className="course-hover-content-title">
            <Link to={`/cart/add/${course.id}`}>{course.title}</Link> {/* Link to specific course */}
          </h5>
          <p className="course-hover-content-text">
            {course.description}
          </p>
          <ul className="course-hover-content-list">
            {course.features.map((feature, index) => (
              <li key={index}>
                <i className="fa-thin fa-check"></i>{feature}
              </li>
            ))}
          </ul>
          <div className="course-hover-content-btn">
            <div className="course-hover-cart-btn">
              <Link to={`/cart/add/${course.id}`} className="theme-btn course-btn"> {/* Add to cart link */}
                Add to Cart
              </Link>
            </div>
            <div className="course-hover-fav-btn">
              <Link to={`/favorites/add/${course.id}`}>
                <i className="fa-thin fa-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
