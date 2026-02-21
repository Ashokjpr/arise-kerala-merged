"use client"
import HeroSection from "./_components/HeroSection"
import StatsSection from "./_components/StatsSection"
import Students from "./_components/Students"
import TestimonialSection from "./_components/TestimonialSection"
import CTASection from "./_components/CTASection"
 
function page() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <Students />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}

export default page
