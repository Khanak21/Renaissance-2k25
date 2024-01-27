"use client";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [progress, setProgress] = useState(0);
  const duration = 120; // 120 seconds total duration of otp expire
  const [remTime, setRemTime] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      setRemTime(parseInt(elapsedTime / 1000));
      const newProgress = (elapsedTime / (duration * 1000)) * 100;

      if (newProgress >= 100) {
        clearInterval(intervalId);
        setProgress(100);
      } else {
        setProgress(newProgress);
      }
    }, 100); // Adjust the interval to control the smoothness of the animation

    return () => clearInterval(intervalId);
  }, [duration]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      {" "}
      <svg style={{ transform: "rotate(-90deg)" }} height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="10"
          stroke="url(#gradient)"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          transform="rotate(90, 50, 50)"
          textAnchor="middle"
          dy="0.3em"
          fill="black"
          fontSize="12"
          fontWeight="bold"
        >
          {duration - remTime}s
        </text>

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="90%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#1D174F", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1D174F", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Timer;
