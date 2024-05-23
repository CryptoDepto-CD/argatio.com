import BgForms from "@/../public/ViviendaPropia/forms_bg.svg"

import Image from "next/image";

import HeroSection from "@/components/ViviendaPropia/HeroSection";
import ApplyAsBuyerSection from "@/components/viviendaPropia/ApplyAsBuyerSection";
import ApplyPropertySection from "@/components/viviendaPropia/ApplyPropertySection";
import HowItWorksSection from "@/components/viviendaPropia/HowItWorksSection";
import WhyOwnHome from "@/components/viviendaPropia/WhyOwnHome";
import NeedHelpSection from "@/components/viviendaPropia/NeedHelpSection";

export default function ViviendaPropia() {
  return (
    <main className="font-monserrat">
      <HeroSection />
      <HowItWorksSection />
      <WhyOwnHome />
      <div id="homeSection" className="relative flex flex-col items-center p-10 justify-evenly lg:flex-row gap-14">
        <ApplyPropertySection />
        <div className="hidden w-2 h-[clamp(600px,90vh,1000px)] bg-white lg:block"></div>
        <ApplyAsBuyerSection />
        <Image src={BgForms} alt="background" className="absolute px-5 -z-10 max-w-[1000px]" />
      </div>
      <NeedHelpSection />
    </main>
  )
}
