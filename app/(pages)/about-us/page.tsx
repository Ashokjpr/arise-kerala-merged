"use client"
import Hero from "./_components/about-hero"
import AboutSection from "./_components/AboutSection"
import AimObjective from "./_components/AimObjective"
import MissionVision from "./_components/MissionVision"
import SpecialitiesServices from "./_components/SpecialitiesServices"
import OurBranches from "./_components/OurBranches"

function page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AimObjective />
      <MissionVision />
      <SpecialitiesServices />
      <OurBranches />
    </div>
  )
}

export default page
