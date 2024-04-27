import Image from "next/image";


import BgHero from "@/../public/bg_hero.svg"
import ArgatioFiveServices from "../ui/ArgatioFiveServices";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-12 px-10 py-8 mx-auto my-10 md:flex-row justify-evenly">
      <div className="max-w-[300px] lg:max-w-[500px]">
        <div className="flex flex-col gap-5 text-left">
          <h2 className="text-4xl uppercase lg:text-6xl font-nats text-balance">
            revolucionamos el mundo inmobiliario
          </h2>
          <button className="w-full px-10 py-2 mx-auto text-center text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90 max-w-[300px]">
            Quiero ser dueño
          </button>
        </div>
        <div className="hidden text-right uppercase pt-14 font-nats md:block">
          <p className="text-2xl">Convertite en</p>
          <h2 className="text-5xl text-balance">Dueño Inteligente</h2>
        </div>
      </div>
      <div className="py-3 text-xs font-montserrat">
        <ArgatioFiveServices />
      </div>
      <div className="text-right uppercase font-nats md:hidden max-w-[300px]">
        <p className="text-2xl">Convertite en</p>
        <h2 className="text-5xl text-balance">Dueño Inteligente</h2>
      </div>
      <Image src={BgHero} alt="" className="right-0 hidden max-w-md xl:max-w-lg md:block md:absolute -z-10" />
    </section>
  );
}
