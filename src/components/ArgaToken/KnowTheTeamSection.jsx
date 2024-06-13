import { useTranslations } from "next-intl";
import Button from "../ui/Button/Button";

export default function KnowTheTeamSection() {
  const t = useTranslations("argatoken.meet-the-team-section")

  return (
    <section className="px-10 py-10">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-title">{t("title")}</h2>
      <p className="max-w-screen-lg mx-auto text-center text-balance text-clamp-text ">{t("description")}</p>
      <div className="my-16 text-center">
        <Button type="link" href="/UnderConstruction">
          {t("button")}
        </Button>
      </div>
    </section>
  )
}
