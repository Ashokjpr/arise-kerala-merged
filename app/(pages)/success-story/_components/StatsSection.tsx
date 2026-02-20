"use client";

import Image from "next/image";
import { FaUserGraduate, FaAward } from "react-icons/fa";

export default function MedicalSuccessStatus() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-blue-900 leading-snug"
            data-aos="fade-right"
            >
              GLIMPSES OF SUCCESS EVENT HELD IN JAIPUR FOR FMGE JAN 2024.
            </h2>

            {/* Highlight Statement */}
            <p className="mt-6 text-red-600 text-sm sm:text-xl font-medium leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="200"
           >
              10+ Students Scored 200+ marks and more than 140 students cleared their FMGE Exam in first attempt.
            </p>

            {/* ===== Status Cards ===== */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="bg-white border-l-4 border-blue-900 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition"
            data-aos="fade-left"
           >
                <div className="bg-blue-100 text-blue-900 p-4 rounded-full">
                  <FaAward size={22} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">10+</h3>
                  <p className="text-sm text-gray-600">
                    Students Scored 200+ Marks
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-l-4 border-blue-900 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition"
              
            data-aos="fade-right"

           >
                <div className="bg-blue-100 text-blue-900 p-4 rounded-full">
                  <FaUserGraduate size={22} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">140+</h3>
                  <p className="text-sm text-gray-600">
                    Students Cleared in First Attempt
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100"
            data-aos="fade-left"
           >
            <Image
              src="/images/SUCCESS-img.png"  // Replace with your image
              alt="Success Event Jaipur"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}