import Image from "next/image";
import Link from "next/link";

import Invertir from "@/../public/icons/invertir.svg";
import NegocioPropio from "@/../public/icons/negocio_propio.svg";
import Comprar from "@/../public/icons/comprar.svg";
import Vender from "@/../public/icons/vender.svg";
import ViviendaPropia from "@/../public/icons/vivienda_propia.svg";
import { useTranslations } from "next-intl";

export default function NewArgatioFiveServices() {

  const t = useTranslations('home.newFive');

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 text-xs text-center scale-100 sm:scale-100 font-montserrat ">
      <Link
        href="/ArgaToken"
        className="absolute w-1/2 transition-all duration-300 -translate-x-1 -translate-y-1 top-[2px] left-[2px] group rounded-tl-2xl h-1/2  overflow-hidden xl:hover:-translate-x-4 hover:-translate-x-2 xl:hover:-translate-y-4 hover:-translate-y-2 backdrop-blur-sm"
      >
        <div className="w-full h-full transition-all duration-300 bg-transparent rounded-tl-full  mix-blend-screen drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] backdrop-blur-sm shadow-[-250px_-250px_0px_250px_rgba(255,255,255,0.10)] group-hover:shadow-[-250px_-250px_0px_250px_rgba(255,255,255,1)] -translate-x-1 -translate-y-1 "></div>
        <div className="absolute uppercase text-[8px] top-0 left-0 p-1 aspect-square border-8 rounded-full w-[60px] text-center leading-3 my-auto flex items-center scale-75 xl:scale-100 lg:top-2 lg:left-2  drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] text-white group-hover:invert">
          {t('title')}
        </div>
      </Link>
      <Link
        href="/wallet "
        className="z-10 flex flex-col items-center pb-5 pr-5 transition-all duration-300 bg-white rounded-tl-full bg-opacity-15 md:p-14 p-14 hover:bg-opacity-100 hover:bg-black hover:invert backdrop-blur-sm drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] shadow-[0px_5px_4px_0px_rgba(0,0,0,0.30)_inset] hover:shadow-[0px_0px_15px_3px_rgba(0,0,0,1)]"
      >
        <div className="my-auto">
          <Image
            src={Invertir}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-24 blur-none"
          />
          <p className="leading-6 uppercase xl:text-base">{t('text1')}</p>
        </div>
      </Link>
      <Link
        href="/ViviendaPropia#homeSection"
        className="flex flex-col items-center pb-5 pl-5 transition-all duration-500 bg-white rounded-tr-full p-14 bg-opacity-15 hover:bg-opacity-100 aspect-square md:pb-10 hover:bg-black hover:invert backdrop-blur-sm  drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] shadow-[0px_5px_4px_0px_rgba(0,0,0,0.30)_inset] hover:shadow-[0px_0px_15px_3px_rgba(0,0,0,1)]"
      >
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
      <Link
        href="/ViviendaPropia#homeSection"
        className="flex flex-col items-center pt-5 pr-5 transition-all duration-500 bg-white rounded-bl-full p-14 bg-opacity-15 hover:bg-opacity-100 h aspect-square md:pt-10 hover:bg-black hover:invert backdrop-blur-sm drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] shadow-[0px_5px_4px_0px_rgba(0,0,0,0.30)_inset] hover:shadow-[0px_0px_15px_3px_rgba(0,0,0,1)]"
      >
        <div className="my-auto">
          <p className="leading-6 uppercase xl:text-base">{t('text3')}</p>
          <Image
            src={Comprar}
            alt="Invertir"
            className="w-3/4 min-w-8 md:w-full max-w-24"
          />
        </div>
      </Link>
      <Link
        href="/ViviendaPropia#homeSection"
        className="flex flex-col items-center pt-5 pl-5 transition-all duration-500 bg-white rounded-br-full p-14 bg-opacity-15 hover:bg-opacity-100 aspect-square md:pt-10 hover:bg-black hover:invert backdrop-blur-sm drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] shadow-[0px_5px_4px_0px_rgba(0,0,0,0.30)_inset] hover:shadow-[0px_0px_15px_3px_rgba(0,0,0,1)]"
      >
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
      <Link
        href="/ViviendaPropia"
        className="absolute z-10 flex flex-col items-center object-top p-5 pt-6 my-auto transition-all duration-300 bg-white rounded-full md:max-w-28 max-w-[80px] left-[36.5%] sm:left-[35%] top-[33.3%] bg-opacity-40 hover:bg-opacity-95  aspect-square h-fit scale-90 sm:scale-100 hover:bg-black hover:invert lg:scale-125  2xl:top-[40%] 2xl:left-[40%] 2xl:scale-150  backdrop-blur-sm drop-shadow-[0px_1px_4px_rgba(255,255,255,0.30)] shadow-[0px_5px_4px_0px_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_15px_3px_rgba(0,0,0,1)]"
      >
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
