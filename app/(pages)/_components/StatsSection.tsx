import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { number: "40,000+", label: "Trained Medicos", bgImg: "/images/Statscard-bg1.avif" },
    { number: "15+", label: "Years Experience", bgImg: "/images/Statscard-bg2.avif" },
    { number: "50+", label: "Building Generational wealth for physicians since 1956", bgImg: "/images/Statscard-bg3.jpg" },
    { number: "7+", label: "Courses", bgImg: "/images/Statscard-bg4.jpg" },
  ];

  return (
    <section className="py-16" style={{
      backgroundImage: "url('/images/rajesthan-bg.jpg')",
      backgroundSize: "contain",
    }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
         <div key={index} className="relative text-white text-center py-12 rounded-xl shadow-lg hover:scale-105 transition overflow-hidden">
  <Image
    src={item.bgImg}
    alt=""
    fill
    className="object-cover"
  />
  
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10">
    <h3 className="text-4xl font-bold">{item.number}</h3>
    <p className="mt-2 text-lg">{item.label}</p>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}
