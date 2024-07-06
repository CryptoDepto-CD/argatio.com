import HeroSection from "@/components/vesting/HeroSection";
import HowItWorks from "@/components/vesting/HowItWorks";
import InvesmentSimulationSection from "@/components/vesting/InvesmentSimulationSection";
import WhyInvest from "@/components/vesting/WhyInvest";


export default function Vesting() {
  return (
    <main className="font-monserrat min-h-screen">
      <HeroSection />
      <HowItWorks />
      <WhyInvest />
      <InvesmentSimulationSection />
    </main>
  )
}
