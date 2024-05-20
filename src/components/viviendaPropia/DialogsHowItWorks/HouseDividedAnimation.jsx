"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import HouseDivided1 from "@/../public/ViviendaPropia/house_divided_1.png";
import HouseDivided2 from "@/../public/ViviendaPropia/house_divided_2.png";
import HouseDivided3 from "@/../public/ViviendaPropia/house_divided_3.png";

export default function HouseDividedAnimation() {
  const images = [HouseDivided1, HouseDivided2, HouseDivided3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] min-w-[200px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={` absolute transition-opacity duration-1000  ${
            index === currentImageIndex ? "opacity-100 " : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
