import Button from "../ui/Button/Button";
import { useTranslations } from "next-intl";

export default function MissionSection() {

  const t = useTranslations("mission")

  return (
    <section className="mx-10 my-16">
      <div className="px-5 md:px-10 py-10 pb-16 shadow-[0px_4px_5px_rgba(255,255,255,0.16)_inset,0px_1px_4px_rgba(11,55,0,0.27)] [backdrop-filter:blur(15px)] rounded-[19px] bg-[linear-gradient(121deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="flex flex-col gap-5 text-center max-w-[300px]">
          <h2 className="uppercase font-nats text-clamp-big">{t('title')}</h2>
          <p className="text-monserrat text-clamp-text">
            {t('description')}
          </p>
        </div>
        <div className="">
          <h2 className="my-10 leading-none text-center uppercase lg:mx-10 font-nats text-clamp-big">
            {t('text')}
          </h2>
          <div className="flex flex-wrap gap-10 *:flex-1 *:w-fit">
            <Button type="link" href="https://whitepaper.argatio.com/">
              pitch deck
            </Button>
            <Button
              type="link"
              href="https://whitepaper.argatio.com/10.-hoja-de-ruta-roadmap"
            >
              road map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
