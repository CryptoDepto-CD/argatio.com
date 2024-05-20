"use client";

import Imagen1 from "@/../public/ViviendaPropia/animacion_casas_1.png";
import Imagen2 from "@/../public/ViviendaPropia/animacion_casas_2.jpeg";
import Imagen3 from "@/../public/ViviendaPropia/animacion_casas_3.jpeg";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function ChangeHousesAnimation() {
  const images = [Imagen1, Imagen2, Imagen3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full relative flex gap-3  *:max-w-[50%] h-full">
      {images.map((image, index) => {
        const isActive = index === currentImage;
        const isPrev =
          index === (currentImage - 1 + images.length) % images.length;
        const isNext = index === (currentImage + 1) % images.length;

        return (
          <div
            key={index}
            className={`absolute w-full aspect-[9/14] transition-all rounded-3xl  duration-700 ease-in-out
              ${
                isActive
                  ? "z-30 opacity-100 shadow-[0px_0px_100px_1px_#fff]"
                  : "z-10 opacity-0"
              } 
              ${isPrev || isNext ? "z-20 opacity-90 brightness-50" : ""} 
              ${
                isActive
                  ? "translate-x-[50%]"
                  : isPrev
                  ? "translate-x-[0%]"
                  : "translate-x-[100%]"
              }`}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        );
      })}
    </div>
  );
}
