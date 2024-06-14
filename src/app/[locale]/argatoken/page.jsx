import ArgUtilitiesSection from "@/components/ArgaToken/ArgUtilitiesSection";
import AssignmentsSection from "@/components/ArgaToken/AssignmentsSection";
import ContractSection from "@/components/ArgaToken/ContractSection";
import HeroSection from "@/components/ArgaToken/HeroSection";
import HowBuySection from "@/components/ArgaToken/HowBuySection";
import KnowTheTeamSection from "@/components/ArgaToken/KnowTheTeamSection";
import MediaSection from "@/components/ArgaToken/MediaSection";
import NewsletterSection from "@/components/ArgaToken/NewsletterSection";
import VestingPreventSection from "@/components/ArgaToken/VestingPreventSection";

export default function ArgaToken() {
  return (
    <main className="">
      <HeroSection />
      <ContractSection />
      {/* <HowBuySection /> */}
      <AssignmentsSection />
      <ArgUtilitiesSection />
      <VestingPreventSection />
      <KnowTheTeamSection />
      <MediaSection />
      <NewsletterSection />
    </main>
  );
}
