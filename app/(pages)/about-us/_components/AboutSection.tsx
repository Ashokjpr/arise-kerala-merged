"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-xl"
              data-aos="fade-right"
            >
            <Image
              src="/images/building.webp" 
              alt="Arise Building"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6" >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900"
            data-aos="fade-left"
           >
              About Arise Medical Academy Jaipur
            </h2>

            <p className="text-gray-700 text-sm sm:text-base "
            data-aos="fade-left"
            data-aos-delay="100"
           >
              Arise is giving quality medical education and have many success stories from last 10 Years.
            </p>

            <p className="text-gray-700 text-sm sm:text-base "
            data-aos="fade-left"
            data-aos-delay="150"
           >
              Arise started in 2014 for FMGE aspirants with a vision to fulfil the career goals which has to be attained by all Abroad MBBS Students.
            </p>
            <p className="text-gray-700 text-sm sm:text-base "
            data-aos="fade-left"
            data-aos-delay="200"
           >
              In last 10 years Arise has earned a good reputation and has proved itself the best FMGE Coaching Institute in INDIA through our honesty, dedication and efforts like our saying “BUILDING BETTER DOCTORS”.
             </p>
            <p className="text-gray-700 text-sm sm:text-base "
            data-aos="fade-left"
            data-aos-delay="250"
           >
              Arise Medical Academy Jaipur has started in JUNE 2023 and has given the best efforts to made it to more than 67% in the very first Batch. 
             </p>
            <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            data-aos="fade-left"
            data-aos-delay="250"
           >
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
