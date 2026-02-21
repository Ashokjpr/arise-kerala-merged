"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/images/webimg-home.png",
  "/images/webimg-about.png",
  "/images/webimg-success.png",
  "/images/webimg-contacts.png",
  "/images/webimg.png",
  // "/images/webimg.png",
  // "/images/webimg.png",
];

export default function WebsiteSlider() {
  const [active, setActive] = useState(3);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getPosition = (index: number) => {
    const total = slides.length;
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // CENTER
    if (diff === 0)
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        z: 0,
        zIndex: 5,
        opacity: 1,
      };

    // LEFT SIDE
    if (diff === -1)
      return {
        x: -260,
        scale: 0.9,
        rotateY: 23,
        z: -100,
        zIndex: 4,
        opacity: 0.9,
      };

    if (diff === -2)
      return {
        x: -450,
        scale: 0.75,
        rotateY: 40,
        z: -150,
        zIndex: 3,
        opacity: 0.6,
      };

    // RIGHT SIDE
    if (diff === 1)
      return {
        x: 260,
        scale: 0.9,
        rotateY: -23,
        z: -100,
        zIndex: 4,
        opacity: 0.9,
      };

    if (diff === 2)
      return {
        x: 450,
        scale: 0.75,
        rotateY: -40,
        z: -150,
        zIndex: 3,
        opacity: 0.6,
      };

    return {
      x: 0,
      scale: 0,
      rotateY: 0,
      z: -300,
      zIndex: 0,
      opacity: 0,
    };
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[420px] flex items-end justify-center overflow-hidden">
      
      {/* Perspective Wrapper */}
      <div className="relative w-full perspective-[2000px]">
        {slides.map((slide, index) => {
          const position = getPosition(index);

          return (
            <motion.div
              key={index}
              className="absolute w-[270px] h-[400px] left-1/2 bottom-0 -translate-x-1/2"
              style={{
                zIndex: position.zIndex,
                transformStyle: "preserve-3d",
                transformOrigin: "bottom center",
                backfaceVisibility: "hidden",
              }}
              animate={{
                x: position.x,
                scale: position.scale,
                rotateY: position.rotateY,
                opacity: position.opacity,
                z: position.z,
                transformPerspective: 1200,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-full shadow-2xl">
                <Image
                  src={slide}
                  alt="Website"
                  fill
                  className="object-cover rounded-t"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-xl"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-xl"
      >
        ▶
      </button>
    </div>
  );
}