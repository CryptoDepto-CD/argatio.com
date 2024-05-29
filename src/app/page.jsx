import FeedbackAndNewsletterSection from "@/components/home/FeedbackAndNewsletter";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import Script from "next/script";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <main className="text-white">
      <iframe
        className="rounded-2xl fixed bottom-1 right-4 z-50"
        height={725}
        width={440}
        src="https://mtsclub.org/chatbots/argatio"
      />
      <HeroSection />
      <OurServices />
      <Testimonials />
      <FeedbackAndNewsletterSection />
    </main>
  );
}
