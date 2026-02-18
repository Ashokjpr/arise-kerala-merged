"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const images = [
  "/assets/collage-img/img-1.webp",
  "/assets/collage-img/img-2.webp",
  "/assets/collage-img/img-3.webp",
  "/assets/collage-img/img-4.webp",
  "/assets/collage-img/img-5.webp",
  "/assets/collage-img/img-6.webp",
  "/assets/collage-img/img-7.webp",
  "/assets/collage-img/img-8.webp",
  "/assets/collage-img/img-9.webp",
];

function Collage() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2
          className="text-center text-2xl md:text-3xl font-semibold text-green-900 mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Title
        </h2>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="relative h-40 overflow-hidden rounded-xl shadow-sm cursor-pointer"
            >
              <Image
                src={img}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* DESKTOP MASONRY */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <Image
                src={img}
                alt={`Project ${index + 1}`}
                width={600}
                height={800}
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FaTimes />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div
            className="relative w-[90%] max-w-4xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`Project ${current + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

export default Collage;
