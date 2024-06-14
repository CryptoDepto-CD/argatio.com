import Image from "next/image";

import Invertir from "@/../public/icons/invertir.svg";
import NegocioPropio from "@/../public/icons/negocio_propio.svg";
import Comprar from "@/../public/icons/comprar.svg";
import Vender from "@/../public/icons/vender.svg";
import ViviendaPropia from "@/../public/icons/vivienda_propia.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ArgatioFiveServices() {

  const t = useTranslations('home.fiveServices');

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 text-xs text-center scale-100 sm:scale-100 font-montserrat">
      <Link href="https://app.argatio.com/" className="absolute uppercase text-[8px] top-0 left-0 p-1 aspect-square border-8 rounded-full w-[60px] text-center leading-3 my-auto flex items-center scale-75 z-10 xl:scale-100 lg:top-2 lg:left-2 hover:bg-black hover:invert duration-300"> {t('title')}</Link>
      <Link href="https://app.argatio.com/marketplace" className="flex flex-col items-center pb-5 pr-5 transition-all duration-300 bg-white rounded-tl-2xl md:p-14 p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 hover:bg-black hover:invert lg:rounded-tl-3xl backdrop-blur-sm">
        <div className="my-auto">
          <Image
            src={Invertir}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-24 blur-none"
          />
          <p className="leading-6 uppercase xl:text-base">{t('text1')}</p>
        </div>
      </Link>
      <Link href="https://app.argatio.com/" className="flex flex-col items-center pb-5 pl-5 transition-all duration-300 bg-white rounded-tr-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:translate-x-2 hover:-translate-y-2 aspect-square md:pb-10 hover:bg-black hover:invert backdrop-blur-sm">
        <div className="my-auto">
          <Image
            src={NegocioPropio}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-20 2xl:max-w-24"
          />
          <p className="mt-1 text-center uppercase text-balance max-w-10 xl:text-base">
          {t('text2')}
          </p>
        </div>
      </Link>
      <Link href="https://app.argatio.com/" className="flex flex-col items-center pt-5 pr-5 transition-all duration-300 bg-white rounded-bl-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:-translate-x-2 hover:translate-y-2 aspect-square md:pt-10 hover:bg-black hover:invert backdrop-blur-sm">
        <div className="my-auto">
          <p className="leading-6 uppercase xl:text-base">{t('text3')}</p>
          <Image
            src={Comprar}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-24"
          />
        </div>
      </Link>
      <Link href="https://app.argatio.com/" className="flex flex-col items-center pt-5 pl-5 transition-all duration-300 bg-white rounded-br-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:translate-x-2 hover:translate-y-2 aspect-square md:pt-10 hover:bg-black hover:invert backdrop-blur-sm">
        <div className="my-auto">
          <p className="leading-6 uppercase xl:text-base">{t('text4')}</p>
          <Image
            src={Vender}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-24"
          />
        </div>
      </Link>
      {/* <div className="relative top-0 z-10 w-full h-full"> */}
      <Link href="https://app.argatio.com/" className="absolute z-10 flex flex-col items-center object-top p-5 pt-6 my-auto transition-all duration-300 bg-white rounded-full md:max-w-28 max-w-[80px] left-[36.5%] sm:left-[35%] top-[33.3%] bg-opacity-40 hover:bg-opacity-95 hover:scale-110 aspect-square h-fit scale-90 sm:scale-100 hover:bg-black hover:invert lg:scale-125 lg:hover:scale-[1.45] 2xl:top-[40%] 2xl:left-[40%] 2xl:scale-150 2xl:hover:scale-[1.7] backdrop-blur-sm">
          <Image
            src={ViviendaPropia}
            alt="Vivienda Propia"
            className="w-2/4 max-w-14"
          />
          <p className="text-[10px] leading-3 md:text-xs text-center uppercase">
          {t('text5')}
          </p>
      </Link>
      {/* </div> */}
    </div>
  );
}
