import Link from "next/link";
import NewsletterForm from "@/components/home/NewsletterForm/NewsletterForm";
import SocialMediaLinks from "@/components/ui/SocialMediaLinks";
import { useTranslations } from "next-intl";

export default function NewsletterSection() {

  const t = useTranslations("home.newsHome")

  return (
    <div className="flex flex-col items-center w-10/12 max-w-screen-sm gap-5 lg:gap-10 lg:w-5/12">
      <h5 className="font-medium leading-none text-center uppercase text-clamp-big font-nats">
      {t('title')}
      </h5>
      <div className="flex flex-col w-10/12 gap-10">
        <NewsletterForm />
        <div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
          <p className="text-clamp-text w-fit font-montserrat lg:text-xl">{t('subtitle')}</p>
          <SocialMediaLinks textColor="white" bgColor="bluePrimary" />
        </div>
      </div>
    </div>
  );
}
