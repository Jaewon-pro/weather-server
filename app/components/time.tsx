import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
