"use client";
import Image from "next/image";
export default function FeaturesSection() {
const features = [
  "Specialized FMGE / NEXT Preparation",
  "Experienced Medical Faculty",
  "Comprehensive Study Materials",
  "Subject-wise Video Lectures",
  "Daily Practice Questions (DPQs)",
  "Grand Mock Tests & Exam Simulators",
  "Online & Offline Classes Available",
  "Revision & Crash Courses",
  "Dedicated Mobile Learning App",
  "Performance Analysis & Student Support",
];


  return (
    <section className="pt-20 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Arise Medical Academy features
        </h3>
        <p className="text-gray-500 mt-4">
          There are many reasons to choose Arise Medical Academy
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-gray-600">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center gap-2" 
           data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <span className="text-blue-600 font-bold">✔</span>
            {feature}
          </p>
        ))}
      </div>
      {/* <div style={{
          backgroundImage: "url('/rajesthan-icon/camel-group-2.png')",
          backgroundSize: "contain",
          height: "60px",
        }}>
       
      </div> */}
    </section>
  );
}
