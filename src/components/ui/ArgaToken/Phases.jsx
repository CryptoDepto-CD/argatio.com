"use client";
import { useState } from "react";

const activeStyles = "text-black bg-white";
import { GetCurrentPhaseNumber } from "@/hooks/useBlockchain";
import { useTranslations } from "next-intl";

export default function Phases() {
  const t = useTranslations("argatoken.presale-vesting-section.phases")

  const {
    phaseNumber
  } = GetCurrentPhaseNumber()
  
  return (
    <div className="flex border-[5px] border-white border-solid rounded-[28px] items-center font-montserrat *:flex-1 max-w-screen-xl mx-auto *:min-w-48  flex-wrap">
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phaseNumber === 0 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">{t("phase01")}</p>
        <p className="lg:text-xl">Arga Token = US$0.07</p>
        <p className="lg:text-xl">13/05/24 - 31/05/24</p>
      </div>
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phaseNumber === 1 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">{t("phase02")}</p>
        <p className="lg:text-xl">Arga Token = US$0.08</p>
        <p className="lg:text-xl">01/06/24 - 28/06/24</p>
      </div>
      <div className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-square shadow-[2px_2px_0px_3px_white] ${phaseNumber === 2 && activeStyles}`}>
        <p className="uppercase text-clamp-title font-nats">{t("phase03")}</p>
        <p className="lg:text-xl">Arga Token = US$0.11</p>
        <p className="lg:text-xl">01/07/24 - 31/07/24</p>
      </div>
    </div>
  )
}
