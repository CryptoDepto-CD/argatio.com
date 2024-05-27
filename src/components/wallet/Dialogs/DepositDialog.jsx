"use client";

import Button from "@/components/ui/Button/Button";
import { useAddress } from "@thirdweb-dev/react";

export default function DepositDialog({ open, handleClick }) {
  
  const address = useAddress()

  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed top-[20%] left-[10%] lg:left-[25%] bg-white  rounded-2xl p-10 pt-16 px-6 md:px-10  w-[clamp(250px,80vw,900px)] lg:w-[clamp(200px,50vw,1000px)] overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-4 text-center font-nats">
          <p className=" leading-none text-[clamp(1.2rem,4vw,2rem)] font-montserrat font-semibold uppercase">
            Dirección de la wallet
          </p>
          <p className="leading-none break-all text-clamp-text font-montserrat">
            {address}
          </p>
        </div>

        <div className="flex items-center max-w-sm gap-5 p-8 mx-auto my-20 font-semibold justify-evenly font-montserrat text-clamp-text shadow-[0px_4px_5px_rgba(255,_255,_255,_0.16)_inset,_0px_1px_4px_rgba(11,_55,_0,_0.27)] rounded-[19px] [background:linear-gradient(120.89deg,_rgba(0,_0,_0,_0.06),_rgba(0,_0,_0,_0.01))] box-border border-[1px] border-solid border-[rgba(255,255,255,0.02)]`">
          <p >RED</p>
          <p>Polygon</p>
        </div>
        <div className="mx-auto my-10 w-fit">
        <Button
          type="button"
          invert={true}
          onclick={(e) => {
            e.preventDefault();
          }}
        >
          Copiar
        </Button>
      </div>
      </div>
    </dialog>
  );
}
