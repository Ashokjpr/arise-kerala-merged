"use client";

import Image from "next/image";

export default function FacultyCard({ name, subject, image }) {
  return (
    <div className=" relative w-full max-w-[250px] mx-auto">

      {/* Card Container */}
      <div className="relative pt-5  items-center text-center overflow-hidden group transition duration-300 hover:shadow-2xl min-h-55">

        {/* Background Decorative Shape */}
       <div
  className="absolute  left-1/2 -translate-x-1/2 w-30 h-35 mt-5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
  style={{
    clipPath: "polygon(-2% 0%, 101% 0%, 89% 94%, 13% 94%)"
  }}
></div>
        <div className="absolute  w-30 h-40 left-15 ms-3 md:-ms-2 lg:-ms-4 xl:ms-3 -mt-2 rounded-2xl mx-auto  border-3 border-blue-50 shadow-xl"
       
      > </div>

        {/* Doctor Image */}
        <div className="relative z-3 w-30 h-40 -mt-3 mx-auto rounded-2xl overflow-hidden ">
          <Image
            src={image}
            // src="/images/DrKhaleel2.png"
            alt={name}
            fill
            className="object-cover h-40 w-25"
          />
        </div>

        <div className="mt-1">
          {/* Name */}
        <span className="text-lg  font-bold text-gray-800 bg-blue-300  shadow-2xl px-3 mx-5">
          {name}
        </span>

        {/* Subject Badge */}
        <span className=" inline-block bg-teal-500 text-white text-xs font-semibold px-4 py-1 -mt-2">
          {subject}
        </span>
        </div>

      </div>
    </div>
  );
}
