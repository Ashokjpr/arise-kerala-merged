'use client';
import Image from "next/image";

export default function CoursesSection() {
  return (
    <section className="bg-gray-100 py-20" >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">
          Choose Your Course
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="h-56 bg-gray-300 flex items-center justify-center">
              <Image
                src={`/images/courses.jpg`}
                alt="Course Image" 
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />

            </div>

            <div className="p-6 text-center">
              <h4 className="font-semibold text-lg">
                FMGE Courses 
              </h4>
              <p className="text-gray-500 text-sm">
                Animation Text Slider {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
