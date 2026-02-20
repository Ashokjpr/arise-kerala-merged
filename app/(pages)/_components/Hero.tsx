'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative pt-10 md:pt-20  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6" data-aos="fade-left">Arise Medical Academy Jaipur</h2>
        <p className="text-sm md:text-xl mb-8"data-aos="fade-right">
          A coaching and training institute focused on medical exam preparation, especially for FMGE/MCI Screening Examination and related exams.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-blue-600  px-3 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition"data-aos="fade-left">
            View Courses
          </button>
          <button className="bg-white text-blue-600  px-3 py-2 md:px-6 md:py-3 rounded-lg hover:bg-gray-200 transition" data-aos="fade-right">
            Contact Us
          </button>
        </div>
        <div className="mt-12" data-aos="fade-up">
            <Image
                src="/images/banner-2.webp"
                alt="Hero Image"
                width={1200}
                height={600}
                className="mx-auto  md:h-auto min-w-[90%]"
            />
        </div>
      </div>
       
    </section>
  );
}
