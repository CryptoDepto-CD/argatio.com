import FeedbackAndNewsletterSection from "@/components/home/FeedbackAndNewsletter";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";

import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="text-white">
      <HeroSection />
      <OurServices />
      <Testimonials />
      <FeedbackAndNewsletterSection />
    </main>
  );
}
