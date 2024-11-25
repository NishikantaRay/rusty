import React from "react";
import CounterItem from "./CounterItem";
import counters from "../../data/counter.json";
const CounterArea = () => {
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
