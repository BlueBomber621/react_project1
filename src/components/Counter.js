import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // handle increment of counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // handle decement of counter
  const handleDecement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <div className="inner">
        <div>
          <button className="btn btn-3" onClick={handleDecement}>
            Subtract 1
          </button>
          <button className="btn btn-2" onClick={handleIncrement}>
            Add 1
          </button>
        </div>
        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
