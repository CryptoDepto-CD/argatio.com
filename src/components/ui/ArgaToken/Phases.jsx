"use client";
import { useState } from "react";

const activeStyles = "text-black bg-white";

export default function Phases() {

  const [phase, setPhase] = useState(1);
  
  return (
    <div className="flex border-[5px] border-white border-solid rounded-[28px] items-center font-montserrat *:flex-1 max-w-screen-xl mx-auto *:min-w-48  flex-wrap">
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phase === 1 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">Fase 01</p>
        <p className="lg:text-xl">Arga Token = US$0.07</p>
        <p className="lg:text-xl">13/05/24 - 31/05/24</p>
      </div>
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phase === 2 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">Fase 02</p>
        <p className="lg:text-xl">Arga Token = US$0.07</p>
        <p className="lg:text-xl">13/05/24 - 31/05/24</p>
      </div>
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phase === 3 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">Fase 03</p>
        <p className="lg:text-xl">Arga Token = US$0.07</p>
        <p className="lg:text-xl">13/05/24 - 31/05/24</p>
      </div>
    </div>
  )
}
