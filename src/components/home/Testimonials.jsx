"use client";

import Image from "next/image";

import ArgatioLogo1 from "@/../public/argatio_logo_1.svg";
import ArgatioLogo2 from "@/../public/argatio_logo_2.svg";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const images = [ArgatioLogo1, ArgatioLogo2];
  const testimonials = [
    "Nunca pensé en tener mi casa propia, es un sueño!",
    "No creí que sería posible tener un negocio propio a esta edad, pero ahora esa es mi realidad!",
    "Al comienzo dudé, pero luego de invertir estoy seguro que fue la mejor decisión de mi vida!",
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
  }, []);

  return (
    <section className="flex flex-col items-center max-w-screen-xl gap-5 p-5 mx-auto my-10">
      <div className="flex flex-col items-center w-full gap-10 mx-auto justify-evenly md:flex-row">
        <div className="flex flex-col items-center w-full gap-5 max-w-56">
          {() => {}}
          <h3 className="text-4xl uppercase font-nats">Testimonio</h3>
          <div className="flex w-full h-full min-h-28">
          <div className="relative w-full h-full text-center text-balance">
            {testimonials.map((testimony, index) => (
              <p
                key={index}
                className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                  index === currentTestimonyIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {testimony}
              </p>
            ))}
          </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="relative top-0 bottom-0 left-0 w-screen h-[100vw] md:h-[600px] p-10  max-w-[500px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className={`p-5 max-w-screen-[500px] object-contain absolute top-0 left-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="px-10 py-2 mx-auto text-center text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90">
        Quiero ser dueño
      </button>
    </section>
  );
}
