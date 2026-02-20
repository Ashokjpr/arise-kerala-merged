"use client";

import { useEffect } from "react";
import { fmgeRegularCourse } from "../_data/cources/CourcesData";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FMGERegularCourse() {
  return (
    <>
      <main className="w-full overflow-hidden pb-24">
        {/* HERO SECTION */}
        <section
          className="bg-gradient-to-b from-[#02024d] to-[#000033] text-white py-20 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {fmgeRegularCourse.hero.title}
          </h1>

          <Link
            href={fmgeRegularCourse.hero.cta.link}
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-md transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {fmgeRegularCourse.hero.cta.label} →
          </Link>
        </section>

        {/* COURSE DETAILS CARD */}
        <section
          className="bg-white rounded-t-3xl mt-[-50px] px-6 md:px-12 py-10 max-w-5xl mx-auto shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-4">
            {fmgeRegularCourse.courseDetails.heading}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            {fmgeRegularCourse.courseDetails.description}
          </p>

          {/* HIGHLIGHTS */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fmgeRegularCourse.highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-md hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="text-green-600 text-lg leading-none">✔</span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* STICKY REGISTER BUTTON */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-semibold text-gray-800 hidden sm:block">
            Ready to start FMGE preparation?
          </span>

          <Link
            href={fmgeRegularCourse.hero.cta.link}
            className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            {fmgeRegularCourse.hero.cta.label}
          </Link>
        </div>
      </div> */}
    </>
  );
}
