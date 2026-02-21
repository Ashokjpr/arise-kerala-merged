"use client";

import Image from "next/image";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900"
           data-aos="fade-up"
           >
            OUR MISSION & VISION
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Image - Mobile First */}
          <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-full overflow-hidden shadow-lg order-1 lg:order-2"
           data-aos="fade-right"
           >
            <Image
              src="/images/classroom1.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1"
           data-aos="fade-left"
           >
            <div className="flex items-center gap-4 mb-6">
              <FaBullseye className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">MISSION</h3>
            </div>

            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>Our mission is to be recognized as the best FMGE Institute around the globe.</li>
              <li>To Provide high quality medical education.</li>
              <li>To provide 0 to 100% facilities under a roof for better support to students.</li>
              <li>Arise have An Eco-System which is beneficial for students and peaceful environment.</li>
            </ul>
          </div>
        </div>


        {/* ================= VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image - Mobile First */}
          <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-full overflow-hidden shadow-lg order-1"
           data-aos="fade-left"
           >
            <Image
              src="/images/classroom2.jpg"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-2"
           data-aos="fade-right"
           >
            <div className="flex items-center gap-4 mb-6">
              <FaEye className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">VISION</h3>
            </div>


            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>
                We envision Arise Medical Academy as a center of academic excellence imparting students with profound theoretical knowledge along with clinical expertise.
              </li>
              <li>
                The holistic approach not just to create doctors but to create best and better doctors with good medical ethics and also better human beings who have compassion, empathy and sympathy.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
