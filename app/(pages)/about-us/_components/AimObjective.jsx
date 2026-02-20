"use client";

export default function AimObjective() {
  const objectives = [
    "TO PROVIDE THE BEST ENVIRONMENT TO ALL THE FOREIGN MEDICAL GRADUATES.",
    "TO EXPAND MEDICAL FIELD OPPORTUNITIES AROUND THE GLOBE.",
    "TO ENHANCE AND PROVIDE THE BEST EDUCATIONAL TOOLS TO THE FMGE ASPIRANTS.",
    "TO MAKE UP SUCCESSFUL DOCTORS FOR OUR MOTHERLAND AND THEY SERVE GOOD, BETTER AND BEST OF THEIR CAPABILITIES FOR OUR NATION.",
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 "
            data-aos="fade-up"
           >
          OUR AIM AND OBJECTIVE
        </h2>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-12 rounded-full"></div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
                data-aos="zoom-in"
               data-aos-delay={index * 150}
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



// "use client";

// import { FaGlobeAsia, FaHospitalUser, FaBookMedical, FaUserMd } from "react-icons/fa";

// export default function AimObjective() {
//   const aims = [
//     {
//       icon: <FaHospitalUser size={28} />,
//       title: "Support Foreign Medical Graduates",
//       description:
//         "To provide the best academic and professional environment to all Foreign Medical Graduates (FMGs) to help them succeed with confidence.",
//     },
//     {
//       icon: <FaGlobeAsia size={28} />,
//       title: "Global Medical Opportunities",
//       description:
//         "To expand medical field opportunities across the globe and open new pathways for international success.",
//     },
//     {
//       icon: <FaBookMedical size={28} />,
//       title: "Advanced Educational Tools",
//       description:
//         "To enhance and provide the best educational resources and learning tools for FMGE aspirants.",
//     },
//     {
//       icon: <FaUserMd size={28} />,
//       title: "Building Successful Doctors",
//       description:
//         "To shape successful doctors who serve our motherland with dedication, excellence, and the highest standards of medical care.",
//     },
//   ];

//   return (
//     <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Heading */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
//           OUR AIM & OBJECTIVE
//         </h2>

//         <div className="w-24 h-1 bg-red-600 mx-auto mb-12 rounded-full"></div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {aims.map((item, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-100 transition duration-300 hover:-translate-y-2"
//             >
//               {/* Icon */}
//               <div className="flex justify-center items-center w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
