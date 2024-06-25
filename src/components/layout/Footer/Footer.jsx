import LogoArgatio from "@/../public/logo_footer.svg";
import LogoArgatioEn from "@/../public/logo_footer_en.svg";
import Image from "next/image";
import Link from "next/link";

import { Instagram, Youtube, Linkedin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common.footer");

  const locale = useLocale()

  const SocialMediaIcons = [
    {
      icon: <Youtube size={30} />,
      link: "https://youtube.com/@argatio_?si=HMFB2Xic9E_9jU71",
      name: "logo youtube",
    },
    {
      icon: <Instagram size={30} />,
      link: "https://www.instagram.com/argatio__?igsh=MXZkZjYzNXkxNzFweA==",
      name: "logo instagram",
    },
    {
      icon: <Linkedin size={30} />,
      link: "https://www.linkedin.com/company/crypto-depto/",
      name: "logo linkedin",
    },
  ];

  return (
    <footer className="w-full bg-black">
      <div className="flex flex-row flex-wrap items-start justify-between px-10 py-10 text-sm gap-7 md:justify-evenly md:text-base">
        <Link href="/" className="w-[48%] max-w-60 shrink">
          <Image src={locale === "en" ? LogoArgatioEn : LogoArgatio} alt="Logo Argatio" className="w-[90%]" />
        </Link>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">{t("invest.title")}</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link
                href="/about-us"
                className="transition-all hover:underline"
              >
                {t("invest.aboutus")}
              </Link>
            </li>
            <li>
              <Link
                href={locale === "en" ? "https://crypto-depto.gitbook.io/white-paper-argatio-inenglish" : "https://whitepaper.argatio.com" }
                className="transition-all hover:underline"
                target="_blank"
              >
                White paper
              </Link>
            </li>
            <li>
              <Link
                href={locale === "en" ? "https://crypto-depto.gitbook.io/white-paper-argatio-inenglish/10.-roadmap" : "https://whitepaper.argatio.com/10.-hoja-de-ruta-roadmap"}
                className="transition-all hover:underline"
                target="_blank"
              >
                Road map
              </Link>
            </li>
            <li>
              <Link
                href={locale === "en" ? "https://crypto-depto.gitbook.io/white-paper-argatio-inenglish/12.-legal-and-compliance-aspects" : "https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento"}
                className="transition-all hover:underline"
                target="_blank"
              >
                {t("invest.legal-information")}
              </Link>
            </li>
          </ol>
        </div>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">{t("our-services.title")}</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link
                href="/own-home"
                className="transition-all hover:underline"
              >
                {t("our-services.own-home")}
              </Link>
            </li>
            <li>
              <Link
                href="/under-construction"
                className="transition-all hover:underline"
              >
                {t("our-services.own-business")}
              </Link>
            </li>
            <li>
              <Link
                href="/under-construction"
                className="transition-all hover:underline"
              >
                {t("our-services.invest")}
              </Link>
            </li>
            <li>
              <Link
                href="/under-construction"
                className="transition-all hover:underline"
              >
                {t("our-services.buy")}
              </Link>
            </li>
            <li>
              <Link
                href="/under-construction"
                className="transition-all hover:underline"
              >
                {t("our-services.sell")}
              </Link>
            </li>
          </ol>
        </div>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">{t("help.title")}</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link
                href="https://t.me/+RHYVHbF6iPMwZTgx"
                className="transition-all hover:underline"
              >
                {t("help.help-center")}
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/+RHYVHbF6iPMwZTgx"
                className="transition-all hover:underline"
              >
                {t("help.contact")}
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 px-4 py-5 border-t border-solid md:px-10">
        <div className="flex gap-1 text-[10px]">
          <p>© 2024 Argatio. All right reserved.</p>
          <Link
            href={locale === "en" ? "https://crypto-depto.gitbook.io/white-paper-argatio-inenglish/12.-legal-and-compliance-aspects" : "https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento/politicas-de-privacidad-y-seguridad"}
            className="transition-all hover:underline"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            href={locale === "en" ? "https://crypto-depto.gitbook.io/white-paper-argatio-inenglish/12.-legal-and-compliance-aspects" : "https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento/politicas-de-privacidad-y-seguridad"}
            className="transition-all hover:underline"
            target="_blank"
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex gap-5 mx-auto max-w-40">
          {SocialMediaIcons.map((element, index) => (
            <Link
              key={index}
              href={element.link}
              target="_blank"
              className={`object-fill rounded-full w-5 h-5 flex items-center justify-center text-white `}
            >
              {element.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
