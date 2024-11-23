import React from "react";
import CounterItem from "./CounterItem";

const CounterArea = () => {
  const counters = [
    {
      iconClass: "fa-thin fa-globe",
      dataCount: 34,
      text: "Foreign Followers",
    },
    {
      iconClass: "fa-thin fa-book-open",
      dataCount: 12,
      text: "Classes Complete",
    },
    {
      iconClass: "fa-thin fa-user-group",
      dataCount: 214,
      text: "Students Enrolled",
    },
    {
      iconClass: "fa-thin fa-medal",
      dataCount: 56,
      text: "Certified Teachers",
    },
  ];

  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-wrap">
          <div className="row g-0">
            {counters.map((counter, index) => (
              <CounterItem
                key={index}
                iconClass={counter.iconClass}
                dataCount={counter.dataCount}
                text={counter.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
