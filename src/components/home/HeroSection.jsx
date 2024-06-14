import Image from "next/image";

import BgHero from "@/../public/bg_hero.svg";
import NewArgatioFiveServices from "@/components/ui/NewArgatioFiveServices";
import Link from "next/link";
import ArgatioFiveServices from "@/components/ui/ArgatioFiveServices";
import { useTranslations } from "next-intl";

export default function HeroSection() {

  const t = useTranslations("home.heroHome")

  return (
    <section className="flex flex-col items-center w-full gap-12 px-10 py-8 mx-auto my-10 lg:my-0 md:flex-row justify-evenly lg:h-[clamp(600px,100dvh-80px,1300px)] ">
      <div className="max-w-[300px] lg:w-2/5 lg:max-w-none">
        <div className="flex flex-col items-start gap-5">
          <h2 className="leading-none uppercase font-nats text-balance text-clamp-ultrabig">
          {t('title')}
          </h2>
          <Link
            href="/own-home#homeSection"
            className="w-full px-10 py-2 mx-auto lg:mx-0 text-center text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90 max-w-[350px] lg:text-lg"
          >
            {t('link')}
          </Link>
        </div>
        <div className="hidden text-right uppercase pt-14 font-nats md:block">
          <p className="text-2xl lg:text-3xl"> {t('subtitle1')}</p>
          <h2 className="text-5xl leading-none text-balance text-clamp-ultrabig">
          {t('subtitle2')}
          </h2>
        </div>
      </div>
      <div className="py-3 text-xs lg:w-1/3 font-montserrat">
        <NewArgatioFiveServices />
      </div>
      <div className="text-right uppercase font-nats md:hidden max-w-[300px]">
        <p className="text-2xl">{t('subtitle3')}</p>
        <h2 className="text-5xl text-balance">{t('subtitle4')}</h2>
      </div>
      <Image
        src={BgHero}
        alt=""
        className="right-0 hidden max-w-md xl:max-w-[40vw] md:block md:absolute -z-10"
      />
    </section>
  );
}
