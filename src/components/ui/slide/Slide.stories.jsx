import Slide from "./Slide";
import HeartHouse from "@/../public/icons/heart_house.svg";
import Financiation from "@/../public/icons/financiation.svg";
import Owner from "@/../public/icons/owner.svg";
import ImgViviendaPropia from "@/../public/img_vivienda_propia.png";

export default {
  component: Slide,
  title: "Argatio/Home/Slide",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    )
  ],
};

export const Default = {
  args: {
    title: {
      title: "Vivienda propia",
      description: "De inquilino a propietario",
      icon: "",
    },
    icons: [
      {
        src: HeartHouse,
        alt: "Casa con corazon",
        text: "encuentra tu hogar",
      },
      {
        src: Financiation,
        alt: "Financiacion",
        text: "gestiona la financiación",
      },
      {
        src: Owner,
        alt: "Documento de propiedad",
        text: "Convertite en dueño",
      },
    ],
    buttons: () => (
      <a
        href="https://app.argatio.com/"
        className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white"
      >
        Quiero mi hogar
      </a>
    ),
    bgImage: { src: ImgViviendaPropia, alt: "Vivienda Propia" },
  },
};
