"use client";
import InvestForm from "../Invest/InvestForm";

export default function BuyDialog({ open, handleClick }) {
  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed top-[10%] 2xl:top-[17%] left-[10%] lg:left-[25%] bg-white  rounded-2xl p-10 px-6 md:px-10  w-[clamp(250px,80vw,900px)] lg:w-[clamp(200px,50vw,1000px)] overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-4 text-center font-nats">
          <p className="leading-none uppercase text-clamp-big">Fase 02</p>
          <p className=" leading-none text-[clamp(1.2rem,4vw,2rem)] font-montserrat">
            Arga Token = US$0.08
          </p>
          <p className=" leading-none text-[clamp(1.2rem,4vw,2rem)] font-montserrat">
            01/06/24 - 28/06/24
          </p>
        </div>

        <div className="flex flex-col gap-4 my-10 font-montserrat text-clamp-text">
          <div className="flex flex-col justify-center gap-[0.7rem_5vw] md:flex-row">
            <p className="font-semibold uppercase md:text-right md:w-2/5">
              Contrato Arga Token
            </p>
            <span className="break-all min-w-[150px] mr-3 md:w-3/5">
              0xe49A8863cb86f962100767dfD7Dee165E187A571
            </span>
          </div>
          <div className="flex flex-col justify-center gap-[0.7rem_5vw] md:flex-row">
            <p className="font-semibold uppercase md:text-right md:w-2/5">
              RED
            </p>
            <span className="break-all min-w-[150px] mr-3 md:w-3/5">
              Polygon
            </span>
          </div>
        </div>

        <InvestForm
          buttonName="Comprar"
          light={true}
          buttonClick={(e) => {
            e.preventDefault();
            // Metodos para cuando se de click en comprar
          }}
        />
      </div>
    </dialog>
  );
}
