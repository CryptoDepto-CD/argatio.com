import FeedbackSection from "@/components/home/FeedbackSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function FeedbackAndNewsletterSection() {
  return (
    <section className="relative flex flex-col lg:flex-row lg:h-[510px] items-center justify-evenly gapx--10 gap-y-20 my-16">
    {/* TODO Crear los modales de Newsletter y Feedback */}
      <NewsletterSection />
      <FeedbackSection />
    </section>
  );
}
