"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../ui/Title";
import Slide from "../ui/Slide";

// Carousel Imagenes
import ImgViviendaPropia from "@/../public/img_vivienda_propia.png";
import ImgNegocioPropio from "@/../public/img_negocio_propio.png";
import ImgInvertir from "@/../public/img_invertir.png";
import ImgComprar from "@/../public/img_comprar.png";
import ImgVender from "@/../public/img_vender.png";

// Icons
import HeartHouse from "@/../public/icons/heart_house.svg";
import Financiation from "@/../public/icons/financiation.svg";
import Owner from "@/../public/icons/owner.svg";
import AnalizingNumbers from "@/../public/icons/analizing_numbers.svg";
import House from "@/../public/icons/house.svg";
import KeyHouse from "@/../public/icons/key_house.svg";
import ManagePurchase from "@/../public/icons/manage_purchase.svg";
import Moneybag from "@/../public/icons/moneybag.svg";
import SearchHouse from "@/../public/icons/search_house.svg";
import TokenHouse from "@/../public/icons/house_token.svg";
import DocumentHouse from "@/../public/icons/house_documents.svg";
import HandsHouse from "@/../public/icons/house_hands.svg";
import { Link } from "lucide-react";

export default function OurServices() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,
    
    customPaging: (i) => (
      <div className="self-center w-3 h-3 mx-auto mt-3 bg-white rounded-full opacity-75 hover:opacity-100 active:opacity-100"></div>
    ),
  };

  const slides = [
    {
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
        <a href="https://app.argatio.com/" className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero mi hogar
        </a>
      ),
      bgImage: { src: ImgViviendaPropia, alt: "Vivienda Propia" },
    },
    {
      title: {
        title: "negocio propio",
        description: "tu negocio, tu local",
        icon: "",
      },
      icons: [
        {
          src: HeartHouse,
          alt: "Casa con corazon",
          text: "encuentra tu espacio",
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
        <button className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero mi espacio
        </button>
      ),
      bgImage: { src: ImgNegocioPropio, alt: "Negocio Propio" },
    },
    {
      title: {
        title: "INVERTIR",
        description: "Multiplica tu dinero en todo el mundo.",
        icon: "",
      },
      icons: [
        {
          src: House,
          alt: "Casa",
          text: "selecciona una propiedad",
        },
        {
          src: AnalizingNumbers,
          alt: "Analiza",
          text: "analiza los números",
        },
        {
          src: Moneybag,
          alt: "Bolsa de monedas",
          text: "Recibe las ganancias",
        },
      ],
      buttons: () => (
        <>
          <button className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
            Oportunidades
          </button>
          <button className="px-10 py-2 mx-auto text-white uppercase transition-all duration-100 bg-black border border-black border-solid rounded-full max-w-96 font-montserrat hover:opacity-75">
            Simular Inversion
          </button>
        </>
      ),
      bgImage: { src: ImgInvertir, alt: "Invertir" },
    },
    {
      title: {
        title: "Comprar",
        description: "una realidad para todos",
        icon: "",
      },
      icons: [
        {
          src: SearchHouse,
          alt: "Casa con lupa",
          text: "Busca y Selecciona",
        },
        {
          src: ManagePurchase,
          alt: "Gestiona tu compra",
          text: "Gestiona tu compra",
        },
        {
          src: KeyHouse,
          alt: "Llave",
          text: "vive tu sueño",
        },
      ],
      buttons: () => (
        <button className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero ser dueño
        </button>
      ),
      bgImage: { src: ImgComprar, alt: "Comprar" },
    },
    {
      title: {
        title: "vender",
        description: "disfruta los beneficios de la tokenizacion",
        icon: "",
      },
      icons: [
        {
          src: TokenHouse,
          alt: "Casa con tokens",
          text: "tokenizamos tu propiedad",
        },
        {
          src: DocumentHouse,
          alt: "Casa con documentos",
          text: "llegamos a los inversores",
        },
        {
          src: HandsHouse,
          alt: "Negociacion",
          text: "recibe tu dinero",
        },
      ],
      buttons: () => (
        <button className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero mi hogar
        </button>
      ),
      bgImage: { src: ImgVender, alt: "Vivienda Propia" },
    },
  ];

  return (
    <section className="flex flex-col items-center my-20 overflow-hidden text-center ">
      <h2 className="font-semibold leading-none text-white uppercase text-clamp-big font-montserrat">Nuestros servicios</h2>
      <div className="flex flex-col items-center w-full py-10 mx-auto text-white slider-container">
        <Slider
          {...settings}
          className="text-black w-[300vw] sm:w-[220vw] 2xl:w-[170vw]"
        >
          {slides.map((slide, index) => (
            <div className="px-10" key={index}>
              <Slide {...slide} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
