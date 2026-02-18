'use client'
import Hero from "./_components/Hero";
import StatsSection from "./_components/StatsSection";
import CoursesSection from "./_components/CoursesSection";
import AboutUs from "./_components/AboutUs";
import OurStudents from "./_components/OurStudents";
import Faqs from "./_components/FAQSection";
import FeaturesSection from "./_components/FeaturesSection";

function page() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <StatsSection />
      <CoursesSection />
      <FeaturesSection />
      <OurStudents />
      <Faqs />

    </div>
  )
}

export default page
