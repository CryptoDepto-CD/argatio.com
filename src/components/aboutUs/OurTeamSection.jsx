"use client";

import Test from "@/../public/AboutUs/text_mati.svg";
import Carousel from "./Carousel/Carousel";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("aboutUs.ourTeam")

  return (
    <section className="m-10 my-16">
      <div className="">
        <h2 className="my-8 leading-none text-center uppercase font-nats text-clamp-big">
          {t('title')}
        </h2>
        <p className="max-w-screen-md mx-auto text-center text-clamp-text font-montserrat">
          {t('description')}
        </p>
        <div>
          <Carousel cards={cards} />
        </div>
      </div>
    </section>
  );
}
