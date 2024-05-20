import Image from "next/image";

import BgHero from "@/../public/bg_hero.svg"
import Ellipse from "@/../public/ViviendaPropia/bg_hero.png"
import ViviendaPropia from "@/../public/icons/vivienda_propia.svg"
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center w-full gap-12 px-10 py-8 mx-auto my-10 lg:my-0 md:flex-row justify-evenly lg:h-[clamp(600px,100dvh-80px,1000px)]">
      <div className="max-w-[300px] lg:w-[2/4] lg:max-w-none">
        <div className="flex flex-col items-start gap-7 md:gap-[10vw]">
          <div className="flex items-center gap-3">
            <Image src={ViviendaPropia} alt="icono" className="w-[clamp(40px,5vw,100px)]" />
            <div>
              <h2 className="leading-none uppercase font-nats text-balance text-clamp-ultrabig ">
                Vivienda Propia
              </h2>
              <p className="uppercase lg:text-2xl text-md font-nats text-balance">una financiación adaptada a tus posibilidades</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[1rem_5vw] lg:flex-row text-black">
            <Button type="link" href="#howItWorksSection">Como Funciona</Button>
            <Button type="link" href="#homeSection">Quiero mi hogar</Button>
          </div>
          

        </div>
        <div className="hidden text-right uppercase pt-14 font-nats md:block">
          <p className="text-2xl lg:text-3xl">Convertite en un</p>
          <h2 className="text-5xl leading-none text-balance text-clamp-ultrabig ">Dueño Inteligente</h2>
        </div>
      </div>
      <div className="py-3 lg:w-1/3 font-montserrat">
        <Image src={Ellipse} alt="Vivienda Propia" className="w-full" />
      </div>
      <div className="text-right uppercase font-nats md:hidden max-w-[300px]">
        <p className="text-2xl">Convertite en</p>
        <h2 className="text-5xl text-balance">Dueño Inteligente</h2>
      </div>
      <div className="absolute right-0 overflow-hidden max-w-md xl:max-w-[40vw] -z-10">
        
        <Image src={BgHero} alt="" className="translate-x-[44%] " />
      </div>
    </section>
  )
}
