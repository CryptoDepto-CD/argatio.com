import Image from "next/image";

import Invertir from "@/../public/icons/invertir.svg";
import NegocioPropio from "@/../public/icons/negocio_propio.svg";
import Comprar from "@/../public/icons/comprar.svg";
import Vender from "@/../public/icons/vender.svg";
import ViviendaPropia from "@/../public/icons/vivienda_propia.svg";
import Link from "next/link";

export default function ArgatioFiveServices() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 text-xs scale-100 sm:scale-110 font-montserrat">
      <Link href="" className="flex flex-col items-center pb-5 pr-5 transition-all duration-300 bg-white rounded-tl-2xl md:p-14 p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 hover:bg-black hover:invert">
        <Image
          src={Invertir}
          alt="Invertir"
          className="w-3/4 min-w-8 md:w-full max-w-16 blur-none"
        />
        <p className="leading-6 uppercase">Invertir</p>
        <Link href="" className="absolute uppercase text-[8px] top-0 left-0 p-1 aspect-square border-8 rounded-full w-[60px] text-center leading-3 my-auto flex items-center scale-75 z-10">arga token</Link>
      </Link>
      <Link href="" className="flex flex-col items-center pb-5 pl-5 transition-all duration-300 bg-white rounded-tr-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:translate-x-2 hover:-translate-y-2 aspect-square md:pb-10 hover:bg-black hover:invert">
        <Image
          src={NegocioPropio}
          alt="Invertir"
          className="w-3/4 min-w-8 md:w-full max-w-16"
        />
        <p className="mt-1 text-center uppercase text-balance max-w-10">
          Negocio Propio
        </p>
      </Link>
      <Link href="" className="flex flex-col items-center pt-5 pr-5 transition-all duration-300 bg-white rounded-bl-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:-translate-x-2 hover:translate-y-2 aspect-square md:pt-10 hover:bg-black hover:invert">
        <p className="leading-6 uppercase">Comprar</p>
        <Image
          src={Comprar}
          alt="Invertir"
          className="w-3/4 min-w-8 md:w-full max-w-16"
        />
      </Link>
      <Link href="" className="flex flex-col items-center pt-5 pl-5 transition-all duration-300 bg-white rounded-br-full p-14 bg-opacity-10 hover:bg-opacity-90 hover:scale-110 hover:translate-x-2 hover:translate-y-2 aspect-square md:pt-10 hover:bg-black hover:invert">
        <p className="leading-6 uppercase">Vender</p>
        <Image
          src={Vender}
          alt="Invertir"
          className="w-3/4 min-w-8 md:w-full max-w-16"
        />
      </Link>
      {/* <div className="relative top-0 z-10 w-full h-full"> */}
      <Link href="" className="absolute z-10 flex flex-col items-center object-top p-5 pt-6 my-auto transition-all duration-300 bg-white rounded-full md:max-w-28 max-w-[80px] left-[36.5%] sm:left-[35%] top-[35%] bg-opacity-40 hover:bg-opacity-95 hover:scale-110 aspect-square h-fit scale-90 sm:scale-100 hover:bg-black hover:invert">
        <Image
          src={ViviendaPropia}
          alt="Vivienda Propia"
          className="w-2/4 max-w-14"
        />
        <p className="text-[10px] leading-3 md:text-xs text-center uppercase">
          Vivienda Propia
        </p>
      </Link>
      {/* </div> */}
    </div>
  );
}
