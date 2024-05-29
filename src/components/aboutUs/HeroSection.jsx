import Image from "next/image"

import Logo from "@/../public/logo.svg"
import BgHero from "@/../public/AboutUs/bg_hero.png"
import LogoHover from "@/../public/AboutUs/logotipo_argatio.svg"

export default function HeroSection() {
  return (
    <section className="px-10 lg:h-[clamp(500px,100dvh-80px,1000px)] flex items-center flex-col-reverse md:flex-row gap-10 my-5 mb-16 ">
      <div className="relative flex items-center justify-center w-full md:w-2/4 lg:w-2/5 lg:mx-10">
        <div className="flex group w-full items-center justify-center rounded-full aspect-square shadow-[0px_1px_4px_rgba(11,55,0,0.27),0px_4px_5px_rgba(0,0,0,0.16)_inset] backdrop-blur-[6px] bg-[linear-gradient(141deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_98.3%)] border border-solid border-[rgba(255,255,255,0.12)]">
          <Image src={Logo} alt="Logo Argatio" className="w-full px-[15%]" priority />
          <div className="absolute  opacity-0 group-hover:opacity-100 flex  items-center justify-center w-full transition-all duration-200 bg-white rounded-full aspect-square shadow-[0px_0px_10px_#fff,0px_1px_4px_rgba(11,55,0,0.27),0px_4px_5px_rgba(0,0,0,0.16)_inset]">
            <Image src={LogoHover} alt="Logo Argatio" className=" px-[15%]  w-full " priority />
          </div>
        </div>
        <Image src={BgHero} alt="Fondo" className="absolute hidden w-full px-2 -z-10 md:block" />
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-5 mt-5 text-center md:w-2/4  lg:w-3/5 *:text-balance">
        <h1 className="leading-none uppercase font-nats text-clamp-ultrabig">¿Quiénes somos?</h1>
        <p className="text-clamp-text">Argatio es una plataforma de bienes raíces que fusiona el mundo tradicional con la vanguardia de la tecnología blockchain. </p>
        <p className="text-clamp-text">Buscamos transformar la inversión inmobiliaria, haciéndola accesible y equitativa para todos. Nos esforzamos por abrir oportunidades de inversión antes limitadas a un círculo exclusivo, democratizando el acceso al mercado inmobiliario a nivel global.</p>
      </div>
    </section>
  )
}
