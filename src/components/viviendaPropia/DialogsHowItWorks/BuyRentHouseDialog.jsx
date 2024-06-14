import Image from "next/image";

import BuyHouse1 from "@/../public/ViviendaPropia/buy_house_1.png";
import BuyHouse2 from "@/../public/ViviendaPropia/sell_house_3.png";
import BuyHouse3 from "@/../public/ViviendaPropia/sell_house_6.png";
import BuyHouse4 from "@/../public/ViviendaPropia/buy_house_2.png";
import BuyHouseEn4 from "@/../public/ViviendaPropia/buy_house_2_en.png";
import BuyHouse5 from "@/../public/ViviendaPropia/buy_rent_house_1.png";
import BuyHouse6 from "@/../public/ViviendaPropia/buy_house_3.png";
import BuyHouseEn6 from "@/../public/ViviendaPropia/buy_house_3_en.png";

import DialogCover from "./DialogCover";
import HouseDividedAnimation from "./HouseDividedAnimation";
import { useLocale, useTranslations } from "next-intl";

export default function BuyRentHouseDialog({ open, handleClick }) {

  const t = useTranslations("vivienda-propia.how-it-works-section.buy-rent-house-dialog")
  const locale = useLocale()

  return (
    <dialog
      className="z-40 hidden transition-all duration-500 group-hover:block font-montserrat"
      open={true}
    >
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-[2px] hover:hidden"
      ></div>
      <div
        className={`z-50 fixed top-[20vh] left-[10vw] bg-white  rounded-[50px] py-10 text-bluePrimary w-[clamp(250px,80vw,80vw)] h-[clamp(500px,65vh,1000px)] overflow-x-hidden overflow-y-scroll `}
      >
        <DialogCover
          title={t("title")}
          text={t("subtitle")}
        />

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <div className="w-full md:w-2/4">
            <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium pb-5">
              {t("text-section-1.text-1")}
            </p>
            <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium">
              {t("text-section-1.text-2")}
            </p>
          </div>
          <Image src={BuyHouse5} alt="Casa" className="w-full md:w-3/5 " />
        </div>

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium md:w-1/2">
            {t("text-section-2")}
          </p>
          <HouseDividedAnimation />
        </div>

        <div className="flex flex-col-reverse gap-10 px-12 md:px-20 py-14 md:flex-row">
          <Image
            src={BuyHouse1}
            alt="Hombre con laptop"
            className="w-full md:w-1/2"
          />
          <div className="relative flex items-center justify-center w-full md:w-1/2 aspect-square shrink-0">
            {locale === "es" ? (
              <>
                <Image src={BuyHouse4} alt="texto" className="absolute z-20 -top-5 -left-5 sm:-top-8 md:-top-6 md:-left-8 xl:-left-14 max-w-[75%] aspect-square object-contain mx-auto" />
                <Image src={BuyHouse6} alt="texto" className="absolute z-10 bottom-0 -right-2 sm:-right-8 md:right-0 max-w-[60%] aspect-square object-contain mx-auto" />
              </>
            ) : (
              <>
                <Image src={BuyHouseEn4} alt="texto" className="absolute z-20 -top-5 -left-5 sm:-top-8 md:-top-6 md:-left-8 xl:-left-14 max-w-[75%] aspect-square object-contain mx-auto" />
                <Image src={BuyHouseEn6} alt="texto" className="absolute z-10 bottom-0 -right-2 sm:-right-8 md:right-0 max-w-[60%] aspect-square object-contain mx-auto" />
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <Image src={BuyHouse2} alt="Casa" className="w-full md:w-3/5 " />
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium md:w-2/4">
            {t("text-section-3")}
          </p>
        </div>

        <div className="flex justify-end gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium max-w-[300px] text-center md:mr-[10vw]">
            {t("text-section-4")}
          </p>
        </div>

        <div className="">
          <Image src={BuyHouse3} alt="Fondo" className="-mb-[25%]" />
          <div className="w-full py-[5vw] text-center backdrop-blur-sm">
            <div className="flex flex-col items-center p-10 gap-14">
              <p className="text-center text-clamp-subtitle">
                {t("text-section-5")}
              </p>
              <button className="px-10 py-1 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
