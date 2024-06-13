"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

export default function DiscoverMoreSection() {

  const t = useTranslations("discoverMore")

  const slides = [
    {
      link: (
        <iframe
          src="https://www.youtube.com/embed/SmrOO6wjPvE?si=WoXzL26nvZLwc77j&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      link: (
        <iframe
          src="https://www.youtube.com/embed/vK-bZRb7Wc0?si=muzQx2nS2m7IJ9On&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      link: (
        <iframe
          src="https://www.youtube.com/embed/JxnPKcZHmxM?si=0_gFgesSLp0vLpkD&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ];

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
      <div className="self-center w-3 h-3 mx-auto mt-5 bg-white rounded-full opacity-75 hover:opacity-100 active:opacity-100"></div>
    ),
  };

  return (
    <section className="w-full my-20 overflow-hidden">
      <div className="">
        <h2 className="my-8 leading-none text-center uppercase font-nats text-clamp-big">
          {t('discover')}
        </h2>
        <p className="mx-auto text-center text-clamp-text font-montserrat">
          {t('info')}
        </p>
      </div>
      <div className="flex flex-col items-center w-full py-10 mx-auto text-white slider-container">
        <Slider
          {...settings}
          className="text-black w-[250vw] md:w-[200vw] lg:w-[120vw]"
        >
          {slides.map((slide, index) => (
            <div
              className="lg:px-10 md:px-4 px-2 w-[33%] *:w-full *:aspect-video *:rounded-[30px] overflow-hidden"
              key={index}
            >
              {slide.link}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
