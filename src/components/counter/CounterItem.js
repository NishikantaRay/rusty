import React, { useEffect, useState, useRef } from "react";

const CounterItem = ({ iconClass, dataCount, text }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentCount = 0;
          const interval = setInterval(() => {
            if (currentCount < dataCount) {
              currentCount += 1;
              setCount(currentCount);
            } else {
              clearInterval(interval);
            }
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [dataCount]);

  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="counter-item">
        <div className="counter-icon">
          <i className={iconClass}></i>
        </div>
        <div className="counter-info">
          <h3 className="counter-info-title">
            <span ref={elementRef} className="odometer count_one">
              {count}
            </span>
            <span>k</span>
          </h3>
          <span className="counter-info-text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterItem;
