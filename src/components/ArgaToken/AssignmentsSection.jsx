import Image from "next/image";

import Assignements from '@/../public/ArgaToken/assignements.png'
import AssignementsSm from '@/../public/ArgaToken/assignements_sm.svg'
import AssignementsEn from '@/../public/ArgaToken/assignements_en.png'
import AssignementsEnSm from '@/../public/ArgaToken/assignements_en_sm.svg'

import { useLocale, useTranslations } from "next-intl";

export default function AssignmentsSection() {

  const t = useTranslations("argatoken.assignments-section")
  const locale = useLocale();
  
  return (
    <section className="px-10 py-10">
      <h2 className="text-center uppercase font-nats text-clamp-title">{t("title")}</h2>
      <p className="text-sm text-center uppercase md:text-base">{t("text")}</p>
      <Image src={locale === "en" ? AssignementsEn : Assignements} alt={t("text")} className="hidden mx-auto lg:block" />
      <Image src={locale === "en" ? AssignementsEnSm : AssignementsSm} alt={t("text")} className="w-full max-w-[500px] pt-5 mx-auto lg:hidden" />
    </section>
  )
}
