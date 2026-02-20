"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function SpecialitiesServices() {
  const services = [
    "OFFLINE AND ONLINE REGULAR CLASSES.",
    "NATIONAL LEVEL FACULTIES.",
    "EXCLUSIVE PRINTED WORKBOOKS FOR ALL THE SUBJECTS.",
    "SUBJECT WISE TESTS.",
    "MONTHLY GRAND TESTS.",
    "TEST AND DISCUSSIONS.",
    "RAPID REVISION (QRP, CCD & PYQ’S)",
    "SUPPORT STAFF",
    "LIVE INTERACTIVE SESSIONS FOR OFFLINE AND ONLINE BATCHES.",
    "AC DIGITAL CLASSROOMS.",
    "STRESS FREE AND PEACEFUL ENVIRONMENT.",
    "24X7 IN CAMPUS LIBRARY.",
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          {/* OUR SPECIALITIES */}
          <div>
            <h2 className="text-4xl font-serif font-semibold text-center lg:text-left mb-10"
             data-aos="fade-up"
            >
              OUR SPECIALITIES
            </h2>

            <div className="relative w-full h-80 sm:h-96 lg:h-[500px]  overflow-hidden"
             data-aos="fade-right">
              <Image
                src="/images/special-main.jpg" // put your single image here
                alt="Our Specialities"
                fill
                className="object-cover"
              />
            </div>
          </div>


          {/* ================= RIGHT SIDE ================= */}
          {/* OUR SERVICES */}
          <div>
            <h2 className="text-4xl font-serif font-semibold text-center lg:text-left mb-10"
             data-aos="fade-up"
             >
              OUR SERVICES
            </h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <FaCheckCircle className="text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
