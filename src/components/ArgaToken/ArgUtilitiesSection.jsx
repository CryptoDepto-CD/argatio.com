import Icon1 from "@/../public/ArgaToken/icon_1.svg";
import Icon2 from "@/../public/ArgaToken/icon_2.svg";
import Icon3 from "@/../public/ArgaToken/icon_3.svg";
import Icon4 from "@/../public/ArgaToken/icon_4.svg";
import Image from "next/image";
import Button from "../ui/Button/Button";
import BuyArgaToken from "../ui/ArgaToken/BuyArgaToken/BuyArgaToken";

import { useTranslations } from "next-intl";

export default function ArgUtilitiesSection() {
  const t = useTranslations("argatoken.arg-utilities-section")

  const images = [Icon1, Icon2, Icon3, Icon4];
  const utilities = [
    "fixed-yield",
    "stake",
    "high-liquidity",
    "staking",
  ]

  return (
    <section className="px-10 py-12">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-title">
        {t("title")}
      </h2>
      <div className="flex flex-wrap items-start gap-10 gap-y-14">
        {utilities.map((element, index) => (
          <div
            className="flex flex-col items-center h-full gap-5 text-center w-[clamp(250px,25%,350px)]  my-auto mx-auto"
            key={index}
          >
            <div className="flex items-center mb-2 max-w-52 min-h-44">
              <Image src={images[index]} alt={t(`utilities.${element}.title`)} className="" />
            </div>
            <p className="font-medium uppercase text-clamp-text">
              {t(`utilities.${element}.title`)}
            </p>
            <p className="text-clamp-text">{t(`utilities.${element}.text`)}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto my-16 max-w-80">
        <BuyArgaToken />
      </div>
    </section>
  );
}
