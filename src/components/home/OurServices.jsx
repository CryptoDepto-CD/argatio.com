"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../ui/slide/Slide";
import { useTranslations } from "next-intl";

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

  const t = useTranslations('home.slides');

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
        title: t('slide1.title'),
        description: t('slide1.description'),
        icon: "",
      },
      icons: [
        {
          src: HeartHouse,
          alt: "Casa con corazon",
          text: t('slide1.icons.0.text'),
        },
        {
          src: Financiation,
          alt: "Financiacion",
          text: t('slide1.icons.1.text'),
        },
        {
          src: Owner,
          alt: "Documento de propiedad",
          text: t('slide1.icons.2.text'),
        },
      ],
      buttons: () => (
        <a href="/ViviendaPropia" className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
           {t('slide1.buttonText')}
        </a>
      ),
      bgImage: { src: ImgViviendaPropia, alt: "Vivienda Propia" },
    },
    {
      title: {
        title: t('slide2.title'),
        description: t('slide2.description'),
        icon: "",
      },
      icons: [
        {
          src: HeartHouse,
          alt: "Casa con corazon",
          text: t('slide2.icons.0.text'),
        },
        {
          src: Financiation,
          alt: "Financiacion",
          text: t('slide2.icons.1.text'),
        },
        {
          src: Owner,
          alt: "Documento de propiedad",
          text: t('slide2.icons.2.text'),
        },
      ],
      buttons: () => (
        <button className="px-10 py-2 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
       {t('slide2.buttonText')}
        </button>
      ),
      bgImage: { src: ImgNegocioPropio, alt: "Negocio Propio" },
    },
    {
      title: {
        title: t('slide3.title'),
        description: t('slide3.description'),
        icon: "",
      },
      icons: [
        {
          src: House,
          alt: "Casa",
          text: t('slide3.icons.0.text'),
        },
        {
          src: AnalizingNumbers,
          alt: "Analiza",
          text: t('slide3.icons.1.text'),
        },
        {
          src: Moneybag,
          alt: "Bolsa de monedas",
          text: t('slide3.icons.2.text'),
        },
      ],
      buttons: () => (
        <>
          <button className="px-10 py-2 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          {t('slide3.buttonText1')}
          </button>
          <button className="px-10 py-2 mx-auto font-semibold text-white uppercase transition-all duration-100 bg-black border border-black border-solid rounded-full max-w-96 font-montserrat hover:opacity-75">
          {t('slide3.buttonText2')}
          </button>
        </>
      ),
      bgImage: { src: ImgInvertir, alt: "Invertir" },
    },
    {
      title: {
        title: t('slide4.title'),
        description: t('slide4.description'),
        icon: "",
      },
      icons: [
        {
          src: SearchHouse,
          alt: "Casa con lupa",
          text: t('slide4.icons.0.text'),
        },
        {
          src: ManagePurchase,
          alt: "Gestiona tu compra",
          text: t('slide4.icons.1.text'),
        },
        {
          src: KeyHouse,
          alt: "Llave",
          text: t('slide4.icons.2.text'),
        },
      ],
      buttons: () => (
        <button className="px-10 py-2 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
         {t('slide4.buttonText')}
        </button>
      ),
      bgImage: { src: ImgComprar, alt: "Comprar" },
    },
    {
      title: {
        title: t('slide5.title'),
        description: t('slide5.description'),
        icon: "",
      },
      icons: [
        {
          src: TokenHouse,
          alt: "Casa con tokens",
          text: t('slide5.icons.0.text'),
        },
        {
          src: DocumentHouse,
          alt: "Casa con documentos",
          text: t('slide5.icons.1.text'),
        },
        {
          src: HandsHouse,
          alt: "Negociacion",
          text: t('slide5.icons.2.text'),
        },
      ],
      buttons: () => (
        <button className="px-10 py-2 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
         {t('slide5.buttonText')}
        </button>
      ),
      bgImage: { src: ImgVender, alt: "Vivienda Propia" },
    },
  ];

  return (
    <section className="flex flex-col items-center my-20 overflow-hidden text-center ">
      <h2 className="font-semibold leading-none text-white uppercase text-clamp-big font-montserrat">{t('header')}</h2>
      <div className="flex flex-col items-center w-full py-10 mx-auto text-white slider-container">
        <Slider
          {...settings}
          className="text-black w-[300vw] sm:w-[220vw] 2xl:w-[180vw] min-h-fit"
        >
          {slides.map((slide, index) => (
            <div className="min-h-full px-10" key={index}>
              <Slide {...slide} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
