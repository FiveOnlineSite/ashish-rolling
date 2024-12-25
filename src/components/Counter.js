import React, { useState, useEffect, useRef, useCallback } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

const Counter = ({ target, step = 1, intervalTime = 500 }) => {
  const [count, setCount] = useState(0);
  const odometerRef = useRef(null);

  // Memoize the formatCount function to prevent it from changing on every render
  const formatCount = useCallback(
    (num) => {
      const targetLength = Math.max(2, target.toString().length);
      return num.toString().padStart(targetLength, "0");
    },
    [target]
  );

  // Initialize the Odometer on mount
  useEffect(() => {
    if (odometerRef.current) {
      new Odometer({
        el: odometerRef.current,
        value: formatCount(0), // Initialize with 0
        format: "(,ddd)",
      }).render();
    }
  }, [formatCount]);

  // Update the Odometer whenever count changes
  useEffect(() => {
    if (odometerRef.current) {
      odometerRef.current.innerHTML = formatCount(count);
    }
  }, [count, formatCount]);

  // Increment the counter until it reaches the target
  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + step;
          if (newCount <= target) {
            return newCount;
          } else {
            clearInterval(interval);
            return target; // Ensure we don't exceed the target
          }
        });
      }, intervalTime);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [count, target, step, intervalTime]);

  return (
    <div className="odometer-counter">
      <div className="odometer-container">
        <div ref={odometerRef} className="odometer">
          {formatCount(count)}
        </div>
      </div>
    </div>
  );
};

export default Counter;
