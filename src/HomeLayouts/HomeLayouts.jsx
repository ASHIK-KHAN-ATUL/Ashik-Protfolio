import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import "./Homelayouts.css";

const HomeLayouts = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 700);
          return 100;
        }
        return prev + 1; // smooth increment
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  if (!done) {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-red-500">
        {/* Circular Ring */}
        <svg width="180" height="180" className="rotate-[-90deg] mb-6">
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#2a0000"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#ff4500" // red-orange
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300 red-glow"
          />
        </svg>

        {/* Portfolio Text */}
        <p className="text-xs uppercase tracking-widest opacity-70 mb-2 loader-text">
          Ashik Khan • Atul
        </p>

        {/* Progress percentage */}
        <span className="text-[10px] tracking-[0.3em] opacity-50 loader-percent">
          {progress}%
        </span>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen bg-black text-white overflow-x-hidden animate-fadeIn">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayouts;
