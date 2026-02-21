"use client";

import Image from "next/image";

export default function BranchesShowcase() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900"
           data-aos="fade-up">
            OUR BRANCHES
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Branch Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">


          {/* Left Small Card */}
          <div className=" text-white w-full lg:w-1/4  order-2 lg:order-1"
            data-aos="fade-right"
           >
            <Image
              src="/images/branch-chennai.png"
              alt="Chennai Branch"
                width={400}
                height={300}
              className="rounded-lg mb-4 object-cover"
            />
          </div>


          {/* Center Big Card */}
          <div className=" text-white  p-8 w-full  lg:w-2/4 relative overflow-hidden  order-1 lg:order-2"
           data-aos="zoom-in">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center w-50 h-35 md:h-65">
             <Image
              src="/images/branch-jaipur1.png"
              alt="jaipur Branch"
              height={200}
              width={600}
            //   fill
              className="object-cover opacity-100 absolute inset-0"
                />
            
            </div>
          </div>


          {/* Right Small Card */}
          <div className=" text-white w-full lg:w-1/4  order-3"
            data-aos="fade-left"
           >
            <Image
              src="/images/branch-delhi.png"
              alt="Delhi Branch"
                width={400}
                height={300}
              className="rounded-lg mb-4 object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
