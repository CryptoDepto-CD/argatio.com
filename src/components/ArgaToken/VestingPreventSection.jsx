import Phases from "@/components/ui/ArgaToken/Phases";
import BuyArgaToken from "../ui/ArgaToken/BuyArgaToken/BuyArgaToken";
import { useTranslations } from "next-intl";

export default function VestingPreventSection() {
  const t = useTranslations("argatoken.presale-vesting-section")

  return (
    <section className="px-10 py-10">
      <div className="flex flex-row items-center justify-center">
        <div
          className={`font-nats aspect-square rounded-full border-[clamp(15px,2.5vw,25px)] flex items-center text-center w-fit scale-[0.6]`}
        >
          <p className="text-clamp-ultrabig uppercase leading-none px-[clamp(15px,3vw,45px)]">
            Arga
            <br />
            Token
          </p>
        </div>
        <div className="uppercase">
          <p className="leading-none text-[clamp(1.5rem,3.6vw,4rem)] font-nats">{t("presale")}</p>
          <p className="leading-none text-clamp-ultrabig font-nats">VESTING</p>
        </div>
      </div>
      <div className="">
        <Phases />
      </div>
      <div className="mx-auto my-16 max-w-80">
        <BuyArgaToken />
      </div>
    </section>
  );
}
