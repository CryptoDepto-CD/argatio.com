import Image from "next/image";

import BgContract from "@/../public/ViviendaPropia/forms_bg.svg"
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContractSection() {
  const t = useTranslations("argatoken.contract-section");
  
  return (
    <section className='relative flex flex-col items-center justify-center w-full px-10 py-10 sm:py-32'>
      <div className='w-full bg-[linear-gradient(120.89deg,rgba(255,255,255,0.063)_5.96%,rgba(255,255,255,0.012)_68.72%)] rounded-2xl drop-shadow-[0px_1px_4px_0px_#0B370045] shadow-[0px_4px_5px_0px_#FFFFFF29_inset] px-10 py-20 flex flex-col gap-12 items-center text-clamp-text backdrop-blur-sm'>
        <div className="flex items-center gap-[1.5rem_3rem] flex-row flex-wrap justify-center">
          <p className='font-semibold uppercase shrink-0'>{t("title")}</p>
          <p className="break-all font-monserrat">0xe49A8863cb86f962100767dfD7Dee165E187A571</p>
        </div>
        <div className="flex justify-center flex-wrap *:flex-1 max-w-screen-md w-full gap-[1.5rem_2.5rem] text-center *:max-w-[300px]">
          <Link href="/under-construction" className="w-full px-12 py-2 transition-all border border-white border-solid rounded-full min-w-fit hover:translate-y-1">{t("btn-audit")}</Link>
          <Link href="https://whitepaper.argatio.com/" className="px-12 py-2 transition-all border border-white border-solid rounded-full min-w-fit hover:translate-y-1">White Paper</Link>
          <Link href="https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento" className="px-12 py-2 transition-all border border-white border-solid rounded-full min-w-fit hover:translate-y-1">{t("btn-legal-opinion")}</Link>
        </div>
      </div>
      <Image src={BgContract} alt="background" className="absolute px-5  -z-10 w-full  max-w-[850px]" />
    </section>
  )
}
