"use client";

import Image from "next/image";

export default function SuccessHero() {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[90vh] overflow-hidden">

      {/* Banner Image */}
      <Image
        src="/images/SUCCESS3.png" // Put your banner image here
        alt="Success Event"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"> */}

        {/* Main Heading */}
        {/* <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
          GLIMPSES OF SUCCESS EVENT HELD IN JAIPUR FOR FMGE JAN 2024.
        </h1> */}

        {/* Highlight Text */}
        {/* <p className="mt-8 text-red-500 text-lg sm:text-2xl lg:text-3xl font-semibold max-w-6xl leading-relaxed">
          10+ Students Scored 200+ marks and more than 140 students cleared their FMGE Exam in first attempt.
        </p> */}

      {/* </div> */}

    </section>
  );
}