"use client";

import Image from "next/image";
import Link from "next/link";
import ArgatioLogo1 from "@/../public/argatio_logo_1.svg";
import ArgatioLogo2 from "@/../public/argatio_logo_2.svg";
import ArgatioLogo3 from "@/../public/argatio_logo_3.svg";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";


export default function Testimonials() {

  const t = useTranslations('testimonials');

  const images = [ArgatioLogo1, ArgatioLogo2, ArgatioLogo3];
  const testimonials = [
    t('testimonials.text1'),
    t('testimonials.text2'),
    t('testimonials.text3'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

      setCurrentTestimonyIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, testimonials.length]);

  return (
    <section className="flex flex-col items-center max-w-screen-xl gap-5 p-5 mx-auto my-10 md:px-10">
      <div className="flex flex-col items-center w-full gap-10 mx-auto justify-evenly md:flex-row">
        <div className="flex flex-col items-center w-full gap-5 max-w-60 xl:max-w-72">
          <h3 className="leading-none uppercase text-clamp-big font-nats">
          {t('title')}
          </h3>
          <div className="flex w-full h-full min-h-28">
            <div className="relative w-full h-full text-center text-balance">
              {testimonials.map((testimony, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 transition-opacity duration-1000 text-[clamp(1.1rem,3vw,1.6rem)] leading-none font-montserrat ${
                    index === currentTestimonyIndex
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {testimony}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="relative top-0 bottom-0 left-0 w-screen h-[100vw] md:h-[500px] lg:h-[700px] p-10  max-w-[450px] lg:max-w-[700px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className={`p-5 object-contain absolute top-0 left-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Link
        href="/ViviendaPropia#homeSection"
        className="px-10 py-2 mx-auto text-center text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90 text-clamp-text"
      >
        {t('button')}
      </Link>
    </section>
  );
}
