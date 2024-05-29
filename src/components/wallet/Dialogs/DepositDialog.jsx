"use client";
import { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import Button from "@/components/ui/Button/Button";
import { useAddress } from "@thirdweb-dev/react";

export default function DepositDialog({ open, handleClick }) {

  const address = useAddress()
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = (e) => {
    e.preventDefault();
    clipboardCopy(address);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

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

        <div className='flex justify-center gap-2'>
          <span className='text-red-500 font-bold text-sm md:text-xl'>Importante:</span>
          <span className='text-sm md:text-xl text-center'>Sólo envía criptomonedas a esta dirección a través de la red Polygon</span>
        </div>

        <div className="mx-auto my-10 w-fit relative">
          <Button
            type="button"
            invert={true}
            onclick={handleCopyAddress}
          >
            Copiar
          </Button>

          {copied && (
            <div className='absolute w-full flex justify-center mt-4'>
              <span className='text-green-600 font-bold'>Dirección copiada</span>
            </div>
          )}

        </div>
      </div>
    </dialog>
  );
}
