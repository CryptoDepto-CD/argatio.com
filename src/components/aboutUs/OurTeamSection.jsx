"use client";

import Test from "@/../public/AboutUs/text_mati.svg";
import Carousel from "./Carousel/Carousel";

const cards = [
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
  {
    linkedin: "#",
    image: Test,
    name: "Matias Peralta",
    role: "CEO",
    birthday: "",
  },
];

export default function OurTeamSection() {
  return (
    <section className="m-10 my-16">
      <div className="">
        <h2 className="my-8 leading-none text-center uppercase font-nats text-clamp-big">
          nuestro equipo
        </h2>
        <p className="max-w-screen-md mx-auto text-center text-clamp-text font-montserrat">
          Creemos firmemente que la clave del éxito radica en las personas. Por
          eso, nos enfocamos en reunir a los mejores talentos, profesionales
          apasionados y comprometidos, listos para enfrentar y superar los
          desafíos del dinámico mundo inmobiliario.
        </p>
        <div>
          <Carousel cards={cards} />
        </div>
      </div>
    </section>
  );
}
