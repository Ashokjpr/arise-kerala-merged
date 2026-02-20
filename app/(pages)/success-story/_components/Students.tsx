"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface Student {
  name: string;
  image: string;
}

export default function Students() {
  const students: Student[] = [
    { name: "Dr. Priyansh Jain", image: "/images/student.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/special-main.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/student.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/special-main.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/student.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/special-main.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/student.jpg" },
    { name: "Dr. Priyansh Jain", image: "/images/special-main.jpg" },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const openModal = (index: number): void => {
    setCurrent(index);
    setOpen(true);
  };

  const closeModal = (): void => setOpen(false);

  const prev = (): void => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  const next = (): void => {
    setCurrent((prevIndex) =>
      prevIndex === students.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* ================= GRID SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white md:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-500 tracking-wide hover:text-gray-700 transition">
              SUCCESS STORY
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {students.map((student, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <p className="text-white font-semibold text-sm">
                    {student.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl z-50 hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-3xl z-50 hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Image Container */}
          <div className="relative w-[90%] max-w-4xl h-[70vh] z-40">
            <Image
              src={students[current].image}
              alt={students[current].name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-6 text-white text-3xl z-50 hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}