import Link from "next/link";
import ArgaTokenAnimation from "../ui/ArgaToken/ArgaTokenAnimation";
import BuyArgaToken from "../ui/ArgaToken/BuyArgaToken/BuyArgaToken";
import Button from "../ui/Button/Button";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center w-full gap-10 px-10 py-8 mx-auto my-10 lg:my-0  justify-evenly h-[clamp(600px,100lvh-80px,900px)] overflow-hidden text-center">
      <h3 className="uppercase font-nats text-[clamp(1.2rem,4vw,2rem)] font-thin text-center">sumate a la revolucion inmobiliaria</h3>
      <ArgaTokenAnimation />
      <p className="text-clamp-text">El token que impulsa la plataforma de tokenización de inmuebles ARGATIO</p>
      <div className="flex items-center gap-[2rem_5vw] justify-between w-full max-w-[900px] flex-col *:min-w-fit *:flex-auto md:flex-row">
        <BuyArgaToken />
        <Link href="/UnderConstruction" className="px-10 py-1 uppercase min-w-fit grow w-full rounded-full bg-[#545454] opacity-80 hover:cursor-not-allowed" disabled>Stake Arga Token</Link>
      </div>
    </section>
  )
}
