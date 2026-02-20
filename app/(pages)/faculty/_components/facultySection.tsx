"use client";

import FacultyCard from "./FacultyCard";

export default function FacultyPage() {
  const faculty = [
    {
      name: "Dr. Rajesh Sharma",
      subject: "Anatomy",
      qualification: "MBBS, MD",
      image: "/images/DrKhaleel.png",
    },
    {
      name: "Dr. Priya Mehta",
      subject: "Physiology",
      qualification: "MBBS, MD",
      image: "/images/DrKhaleel.png",
    },
    {
      name: "Dr. Amit Verma",
      subject: "Pathology",
      qualification: "MBBS, MD",
      image: "/images/DrKhaleel.png",
    },
    {
      name: "Dr. Sneha Iyer",
      subject: "Pharmacology",
      qualification: "MBBS, MD",
      image: "/images/DrKhaleel.png",
    },
    {
      name: "Dr. Arjun Rao",
      subject: "Medicine",
      qualification: "MBBS, MD",
      image: "/images/DrKhaleel.png",
    },
    {
      name: "Dr. Kavita Nair",
      subject: "Surgery",
      qualification: "MBBS, MS",
      image: "/images/DrKhaleel.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900"
           data-aos="fade-up">
            OUR FACULTY
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Faculty Grid */}
        <div className="container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 py-5">
          {faculty.map((member, index) => (
            <div key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
           
            >
              <FacultyCard
              name={member.name}
              subject={member.subject}
              image={member.image}
            />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
