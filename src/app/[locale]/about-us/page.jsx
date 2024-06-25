import DiscoverMoreSection from "@/components/aboutUs/DiscoverMoreSection";
import HeroSection from "@/components/aboutUs/HeroSection";
import MissionSection from "@/components/aboutUs/MissionSection";
import OurTeamSection from "@/components/aboutUs/OurTeamSection";
import SocialMediaSection from "@/components/aboutUs/SocialMediaSection";
import WhatWeDoSection from "@/components/aboutUs/WhatWeDoSection";

export default function AboutUs() {
  return (
    <main className="">
      <HeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <OurTeamSection />
      {/* <DiscoverMoreSection /> */}
      <SocialMediaSection />
    </main>
  )
}
