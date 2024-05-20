import Image from "next/image";

import BuyHouse1 from "@/../public/ViviendaPropia/buy_house_1.png";
import BuyHouse2 from "@/../public/ViviendaPropia/sell_house_3.png";
import BuyHouse3 from "@/../public/ViviendaPropia/sell_house_6.png";
import BuyHouse4 from "@/../public/ViviendaPropia/buy_house_2.png";

import DialogCover from "./DialogCover";
import HouseDividedAnimation from "./HouseDividedAnimation";
import ChangeHousesAnimation from "./ChangeHousesAnimation";

export default function BuyHouseDialog({ open, handleClick }) {
  return (
    <dialog
      className="z-40 hidden transition-all duration-500 group-hover:block font-montserrat"
      open={true}
    >
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm hover:hidden"
      ></div>
      <div
        className={`z-50 fixed top-[20vh] left-[10vw] bg-white  rounded-[50px] py-10 text-bluePrimary w-[clamp(250px,80vw,80vw)] h-[clamp(500px,65vh,1000px)] overflow-x-hidden overflow-y-scroll `}
      >
        <DialogCover
          title="Compra una propiedad con Argatio"
          text="Convertite en dueño"
        />

        <div className="flex flex-col px-12 pb-10 md:flex-row pt-14 md:px-20 gap-y-5 ">
          <div className="w-full md:w-1/2 md:pr-10 *:md:line-clamp-5">
            <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium mb-10">Navega por nuestro catálogo de propiedades disponibles y elige la que mejor se adapte a tus necesidades y presupuesto.</p>
            <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium">También puedes proponer una vivienda que esté a la venta y que desees comprar con nuestro método, nos pondremos en contacto con el dueño. </p>
          </div>
          <div className="w-full md:w-1/2 min-h-[75%] aspect-[4/3]">
            <ChangeHousesAnimation />
          </div>
        </div>

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium">
            Dividimos el valor de tu inmueble en participaciones que pueden ser
            compradas por diferentes personas.
          </p>
          <HouseDividedAnimation />
        </div>

        <div className="flex flex-col-reverse gap-10 px-12 md:px-20 py-14 md:flex-row">
          <Image
            src={BuyHouse1}
            alt="Hombre con laptop"
            className="w-full md:w-1/2"
          />
          <div className="flex items-center justify-center w-full border-2 border-black border-solid rounded-full md:w-1/2 aspect-square shrink-0">
            <Image src={BuyHouse4} alt="texto" className="max-w-[75%] aspect-square object-contain mx-auto" />
          </div>
        </div>

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <Image src={BuyHouse2} alt="Casa" className="w-full md:w-3/5 " />
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium md:w-2/4">
            Cuando hayas comprado todas las participaciones de la propiedad, te
            conviertes en el propietario total de la vivienda.
          </p>
        </div>

        <div className="flex justify-end gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium max-w-[300px] text-center md:mr-[10vw]">
            Utilizamos tecnología BLOCKCHAIN para una transacción transparente y
            segura.
          </p>
        </div>

        <div className="">
          <Image src={BuyHouse3} alt="Fondo" className="-mb-[25%]" />
          <div className="w-full py-[5vw] text-center backdrop-blur-sm">
            <div className="flex flex-col items-center p-10 gap-14">
              <p className="text-center text-clamp-subtitle">
                Registrate y respondemos todas tus dudas
              </p>
              <button className="px-10 py-1 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
                Quiero vender
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
