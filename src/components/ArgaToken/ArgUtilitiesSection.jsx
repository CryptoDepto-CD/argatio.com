import Icon1 from "@/../public/ArgaToken/icon_1.svg";
import Icon2 from "@/../public/ArgaToken/icon_2.svg";
import Icon3 from "@/../public/ArgaToken/icon_3.svg";
import Icon4 from "@/../public/ArgaToken/icon_4.svg";
import Image from "next/image";
import Button from "../ui/Button/Button";
import BuyArgaToken from "../ui/ArgaToken/BuyArgaToken/BuyArgaToken";

export default function ArgUtilitiesSection() {
  const elements = [
    {
      image: Icon1,
      title: "Rendimiento Fijo",
      text: "Los inversores reciben un rendimiento anual fijo (APY) del 8%, distribuido mensualmente.",
    },
    {
      image: Icon2,
      title: "Participación",
      text: "Inversión en fracciones de propiedades, diversificando y minimizando riesgos.",
    },
    {
      image: Icon3,
      title: "Alta Liquidez",
      text: "Los tokens pueden ser vendidos en el mercado secundario, ofreciendo flexibilidad y acceso rápido a los fondos.",
    },
    {
      image: Icon4,
      title: "Staking",
      text: "Los tokens ARGA pueden ser utilizados en programas de staking para generar rendimientos adicionales.",
    },
  ];

  return (
    <section className="px-10 py-12">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-title">
        Utilidades ARG
      </h2>
      <div className="flex flex-wrap items-start gap-10 gap-y-14">
        {elements.map((element, index) => (
          <div
            className="flex flex-col items-center h-full gap-5 text-center w-[clamp(250px,25%,350px)]  my-auto mx-auto"
            key={index}
          >
            <div className="flex items-center mb-2 max-w-52 min-h-44">
              <Image src={element.image} alt={element.title} className="" />
            </div>
            <p className="font-medium uppercase text-clamp-text">
              {element.title}
            </p>
            <p className="text-clamp-text">{element.text}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto my-16 max-w-80">
        <BuyArgaToken />
      </div>
    </section>
  );
}
