import React from 'react';
import CoursesList from './CoursesList';
const TabPane = ({ id, label, isActive }) => {
  return (
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList />
      </div>
    </div>
  );
};

export default TabPane;
