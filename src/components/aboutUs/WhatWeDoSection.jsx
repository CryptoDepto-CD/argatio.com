import Image from "next/image";

import Tokenizacion from "@/../public/AboutUs/tokenizacion.svg";
import Leasing from "@/../public/AboutUs/leasing.svg";
import Adquisicion from "@/../public/AboutUs/adquisicion.svg";

export default function WhatWeDoSection() {
  const elements = [
    {
      title: "Tokenización",
      text: "Transformamos propiedades en fracciones digitales para una inversión y propiedad compartida.",
      img: Tokenizacion,
    },
    {
      title: "Leasing",
      text: "Los inquilinos pueden convertirse gradualmente en propietarios, pagando un leasing que se convierte en inversión.",
      img: Leasing,
    },
    {
      title: "Adquisición",
      text: "Con cada pago, los inquilinos adquieren tokens de la propiedad, avanzando hacia la propiedad plena.",
      img: Adquisicion,
    },
  ];

  return (
    <section className="m-10 my-20 mb-32">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-big">
        ¿Qué hacemos?
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
