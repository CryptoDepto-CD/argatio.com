import Image from "next/image";

import BgHero from "@/../public/bg_hero.svg"
import Ellipse from "@/../public/ViviendaPropia/bg_hero.png"
import ViviendaPropia from "@/../public/icons/vivienda_propia.svg"
import Button from "../ui/Button/Button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  
  const t = useTranslations("vivienda-propia.hero-section")

  return (
    <section className="flex flex-col items-center w-full gap-12 px-10 py-8 mx-auto my-10 lg:my-0 md:flex-row justify-evenly lg:h-[clamp(600px,100dvh-80px,1000px)] overflow-hidden">
      <div className="max-w-[500px] lg:w-[2/4] lg:max-w-none">
        <div className="flex flex-col items-start gap-7 md:gap-[10vw]">
          <div className="flex items-center gap-3">
            <Image src={ViviendaPropia} alt="icono" className="w-[clamp(40px,5vw,100px)]" />
            <div>
              <h2 className="leading-none uppercase font-nats text-balance text-clamp-ultrabig ">
                {t("title")}
              </h2>
              <p className="uppercase lg:text-2xl text-md font-nats text-balance">{t("tailored")}</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[2.5rem_5vw] lg:flex-row text-black">
            <Button type="link" href="#howItWorksSection">{t("button-how")}</Button>
            <Button type="link" href="/UnderConstruction">{t("button-iwant")}</Button>
          </div>
          

        </div>
        <div className="hidden text-right uppercase pt-14 font-nats md:block">
          <p className="text-2xl lg:text-3xl">{t("become")}</p>
          <h2 className="text-5xl leading-none text-balance text-clamp-ultrabig ">{t("smart-owner")}</h2>
        </div>
      </div>
      <div className="py-3 lg:w-1/3 translate-x-[30%] md:translate-x-0">
        <Image src={Ellipse} alt="Vivienda Propia" className="w-full" />
      </div>
      <div className="text-right uppercase font-nats md:hidden max-w-[300px]">
        <p className="text-2xl">{t("become")}</p>
        <h2 className="text-5xl text-balance">{t("smart-owner")}</h2>
      </div>
      <div className="absolute md:right-0 left-0 md:left-auto overflow-hidden max-w-[500px] xl:max-w-[40vw] -z-10">
        <Image src={BgHero} alt="" className="md:translate-x-[44%] -translate-x-[40%]" />
      </div>
    </section>
  )
}
