import Image from "next/image";

import Tokenizacion from "@/../public/AboutUs/tokenizacion.svg";
import Leasing from "@/../public/AboutUs/leasing.svg";
import Adquisicion from "@/../public/AboutUs/adquisicion.svg";
import { useTranslations } from "next-intl";

export default function WhatWeDoSection() {

  const t = useTranslations("aboutUs.whatWeDo")

  const elements = [
    {
      title: t('elements.title1'),
      text: t('elements.text1'),
      img: Tokenizacion,
    },
    {
      title: t('elements.title2'),
      text: t('elements.text2'),
      img: Leasing,
    },
    {
      title: t('elements.title3'),
      text: t('elements.text3'),
      img: Adquisicion,
    },
  ];

  return (
    <section className="m-10 my-20 mb-32">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-big">
        {t('header')}
      </h2>
      <div className="flex flex-row flex-wrap justify-center my-5 gap-14">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 gap-8 text-center max-w-[400px]"
          >
            <Image
              src={element.img}
              alt={element.text}
              className="max-w-[230px]"
            />
            <p className="text-2xl uppercase font-monserrat font-semibol">
              {element.title}
            </p>
            <p className="font-montserrat text-clamp-text">{element.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
