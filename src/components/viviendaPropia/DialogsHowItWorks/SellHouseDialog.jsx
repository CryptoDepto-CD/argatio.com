import Image from "next/image";

import SellHouse2 from "@/../public/ViviendaPropia/sell_house_2.png";
import SellHouse3 from "@/../public/ViviendaPropia/sell_house_3.png";
import SellHouse4 from "@/../public/ViviendaPropia/sell_house_4.png";
import SellHouse5 from "@/../public/ViviendaPropia/sell_house_5.png";
import SellHouse6 from "@/../public/ViviendaPropia/sell_house_6.png";

import Circle1 from "@/../public/ViviendaPropia/circle_1.png";
import Circle2 from "@/../public/ViviendaPropia/circle_2.png";
import Circle3 from "@/../public/ViviendaPropia/circle_3.png";
import Circle4 from "@/../public/ViviendaPropia/circle_4.png";

import Button from "@/components/ui/Button/Button";
import DialogCover from "./DialogCover";
import HouseDividedAnimation from "./HouseDividedAnimation";

export default function SellHouseDialog({ open, handleClick }) {
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
        <DialogCover title="Vende tu propiedad con Argatio" text="Disfruta de los beneficios de la Tokenización" />

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium md:w-2/5">
            Dividimos el valor de tu inmueble en participaciones que pueden ser
            compradas por diferentes personas.
          </p>
          <HouseDividedAnimation />
        </div>

        <div className="flex gap-10 px-12 md:px-20 py-14">
          <div className="relative w-full lg:w-3/5">
            <p className="md:absolute text-[clamp(1.1rem,4vw,1.4rem)] max-w-[22rem] top-2 right-2 pb-5 font-medium">
              Ofrecemos estas partes a nuestra red de inversores, quienes pueden
              adquirir una participación de la propiedad.
            </p>
            <div className="">
              <Image src={Circle1} alt="Circulo 1" className="w-1/3" />
              <Image
                src={Circle2}
                alt="Circulo 2"
                className="w-1/3 -mt-[20px]"
              />
              <Image
                src={Circle3}
                alt="Circulo 3"
                className="w-1/3 -mt-[25%] ml-[30%]"
              />
              <Image
                src={Circle4}
                alt="Circulo 4"
                className="w-1/3 -mt-[30%] ml-[60%]"
              />
            </div>
          </div>
          <div className="relative hidden w-2/5 lg:block">
            <Image src={SellHouse2} alt="Senior con laptop" />
            <span className="absolute p-5 my-auto text-4xl text-center border-2 border-black border-solid rounded-full top-[25%] left-[10%] aspect-square">
              50
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <Image src={SellHouse3} alt="Casa" className="w-full md:w-3/5 " />
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium md:w-2/4">
            Dividimos el valor de tu inmueble en participaciones que pueden ser
            compradas por diferentes personas.
          </p>
        </div>

        <div className="flex flex-col-reverse justify-between gap-10 px-12 md:px-20 py-14 md:flex-row text-balance">
          <p className="text-[clamp(1.1rem,4vw,1.4rem)] font-medium max-w-[300px] text-balance md:pl-10">
            Utilizamos tecnología BLOCKCHAIN para una transacción transparente y
            segura.
          </p>
          <div className="relative w-full md:w-2/4">
            <Image
              src={SellHouse5}
              alt="Circulo"
              className="w-[70%] md:absolute max-w-[300px] -top-[40%] -left-[18%]"
            />
            <Image src={SellHouse4} alt="Hombre con laptop" className="" />
          </div>
        </div>

        <div className="">
          <Image src={SellHouse6} alt="Fondo" className="-mb-[25%]" />
          <div className="w-full py-[5vw] text-center backdrop-blur-sm">
            <div className="max-w-[1000px] px-14 mx-auto text-[clamp(1.1rem,4vw,1.4rem)] text-pretty my-auto">
              <p className="pb-3 font-medium">Leasing con Opción a Compra</p>
              <p>
                También ofrecemos la propiedad a inquilinos potenciales mediante
                nuestro modelo de leasing, donde pueden comprar partes
                gradualmente hasta convertirse en propietarios completos.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center p-10 gap-14">
          <p className="text-center text-clamp-subtitle">
            Registrate y respondemos todas tus dudas
          </p>
          <button className="px-10 py-1 mx-auto font-semibold uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero vender
        </button>
        {/* <Button type="link" href="/ViviendaPropia#homeSection">Quiero Vender</Button> */}
        </div>
      </div>
    </dialog>
  );
}
