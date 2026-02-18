'use client';

import { useEffect, useState } from "react";

export default function TopSlider() {
  const sliderContent = [
    "Enroll Now for Comprehensive Medical Exam Preparation!",
    "Join ARISE Jaipur - Your Pathway to Medical Success!",
    "Unlock Your Medical Career with ARISE Jaipur Today!",
  ];

  const sliderBgColor = [
    "bg-red-700",
    "bg-blue-900",
    "bg-green-700",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderContent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`max-h-10 bg-green-700 ${sliderBgColor[current-1]} overflow-hidden`}>
      <div
        key={current}
        className={ `text-white text-center p-1 text-sm  slide-left ${sliderBgColor[current]}` }
      >
        {sliderContent[current]}
      </div>

      {/* ✅ CSS INSIDE  */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-left {
          animation: slide-left 0.5s ease-out;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
