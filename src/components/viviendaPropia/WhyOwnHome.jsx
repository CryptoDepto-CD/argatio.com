import Icon1 from "@/../public/ViviendaPropia/icon_1.svg";
import Icon2 from "@/../public/ViviendaPropia/icon_2.svg";
import Icon3 from "@/../public/ViviendaPropia/icon_3.svg";
import Icon4 from "@/../public/ViviendaPropia/icon_4.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhyOwnHome() {
  const t = useTranslations("vivienda-propia.why-own-home")
  const elements = [
    {
      image: Icon1,
      title: t("acelerate.title"),
      text: t("acelerate.text"),
    },
    {
      image: Icon2,
      title: t("mininmum.title"),
      text: t("mininmum.text"),
    },
    {
      image: Icon3,
      title: t("personalize.title"),
      text: t("personalize.text")
    },
    // {
    //   image: Icon4,
    //   title: "dueño",
    //   text: "Ya sos dueño con solo la compra de una parte y eso no cambia salvo que la vendas.",
    // },
  ];

  return (
    <section className="w-full px-10 py-20">
      <h2 className="pb-10 text-center uppercase text-clamp-big font-nats ">
        {t("title")}
      </h2>
      <div className="flex flex-wrap items-end gap-10 gap-y-14 justify-evenly">
        {elements.map( (element, index) => (
          <div className="flex flex-col items-center h-full gap-7 text-center w-[clamp(250px,25%,400px)]  my-auto mx-auto" key={index}>
            <div className="flex items-end max-w-52 min-h-52">
              <Image src={element.image} alt={element.title} className="" />
            </div>
            <p className="font-medium uppercase text-clamp-text">{element.title}</p>
            <p className="text-clamp-text">{element.text}</p>
          </div>
        ) )}
      </div>
    </section>
  );
}
