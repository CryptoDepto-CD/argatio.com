import Icon1 from "@/../public/ViviendaPropia/icon_1.svg";
import Icon2 from "@/../public/ViviendaPropia/icon_2.svg";
import Icon3 from "@/../public/ViviendaPropia/icon_3.svg";
import Icon4 from "@/../public/ViviendaPropia/icon_4.svg";
import Image from "next/image";

export default function WhyOwnHome() {
  const elements = [
    {
      image: Icon1,
      title: "acelera",
      text: "La tokenizacion permite que se acelere la venta del inmueble.",
    },
    {
      image: Icon2,
      title: "mínimo",
      text: "Se puede ser parte con un mínimo de capital.",
    },
    {
      image: Icon3,
      title: "personaliza",
      text: "La financiación se personaliza de acuerdo a las posibilidades del comprador",
    },
    {
      image: Icon4,
      title: "dueño",
      text: "Ya sos dueño con solo la compra de una parte y eso no cambia salvo que la vendas.",
    },
  ];

  return (
    <section className="w-full px-10 py-20">
      <h2 className="pb-10 text-center uppercase text-clamp-big font-nats ">
        ¿Por qué vivienda propia?
      </h2>
      <div className="flex flex-wrap items-end gap-10 gap-y-14">
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
