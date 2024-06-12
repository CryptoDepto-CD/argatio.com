import React from "react";
import SellHouseDialog from "./DialogsHowItWorks/SellHouseDialog";
import BuyHouseDialog from "./DialogsHowItWorks/BuyHouseDialog";
import BuyRentHouseDialog from "./DialogsHowItWorks/BuyRentHouseDialog";
import BuyRentLocalDialog from "./DialogsHowItWorks/BuyRentLocalDialog";
import { useTranslations } from "next-intl";

const styleCircle =
  "flex items-center w-full h-full transition-all duration-300 bg-white rounded-full bg-opacity-10  group";

export default function HowItWorksSection() {

  const t = useTranslations("vivienda-propia.how-it-works-section")

  return (
    <section id="howItWorksSection" className="w-full px-10 py-14">
      <p className="pb-10 text-center uppercase text-clamp-big font-nats lg:translate-y-[31.7rem]">
        {t("title")}
      </p>
      <div className="grid w-full max-w-[850px] grid-cols-2 grid-rows-2 mx-auto gap-[7vw] aspect-square">
        <div className={styleCircle}>
          <p className="uppercase text-[clamp(0.8rem,3.5vw,2rem)] text-center w-full px-[clamp(1rem,5vw,3rem)]">
            {t("step-1")}
          </p>
          <SellHouseDialog />
        </div>
        <div className={styleCircle}>
          <p className="uppercase text-[clamp(0.8rem,3.5vw,2rem)] text-center w-full px-[clamp(1rem,5vw,3rem)]">
            {t("step-2")}
          </p>
          <BuyHouseDialog />
        </div>
        <div className={styleCircle}>
          <p className="uppercase text-[clamp(0.8rem,3.5vw,2rem)] text-center w-full px-[clamp(1rem,5vw,3rem)]">
            {t("step-3")}
          </p>
          <BuyRentHouseDialog />
        </div>
        <div className={styleCircle}>
          <p className="uppercase text-[clamp(0.8rem,3.5vw,2rem)] text-center w-full px-[clamp(1rem,5vw,3rem)]">
            {t("step-4")}
          </p>
          <BuyRentLocalDialog />
        </div>
      </div>
    </section>
  );
}
