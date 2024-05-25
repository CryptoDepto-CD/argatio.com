"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import ConnectWalletDialog from "./ConnectWalletDialog";

export default function LogInDialog({ open, handleClick }) {

  const [isOpenWalletOption, setIsOpenWallerOption] = useState(false)
  
  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed top-[10%] md:top-[17%] left-[10%] lg:left-1/4 bg-white  rounded-2xl p-10 px-5 md:px-10  w-[clamp(250px,80vw,900px)] lg:w-[clamp(200px,50vw,1000px)] overflow-hidden`}
      >
        <p className="m-10 mx-auto text-center font-montserrat w-fit text-balance">
          Estas a un paso de ser parte de la
          <br />
          Revolución Inmobiliaria mas grande
        </p>
        <form className="flex flex-col max-w-screen-sm gap-5 mx-auto">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre y Apellido"
            className="w-full px-6 py-2 border border-black border-solid rounded-lg outline-none placeholder:italic"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Mail"
            className="w-full px-6 py-2 border border-black border-solid rounded-lg outline-none placeholder:italic"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono"
            className="w-full px-6 py-2 border border-black border-solid rounded-lg outline-none placeholder:italic"
          />

          <div>
            <div
              onClick={() => {setIsOpenWallerOption(true)}}
              className="flex justify-between px-5 py-2 my-10 text-white bg-black rounded-md cursor-pointer md:px-10"
            >
              <p>Conectar Wallet</p>
              <span>▼</span>
            </div>
            <ConnectWalletDialog open={isOpenWalletOption} handleClick={() => setIsOpenWallerOption(false)} />
          </div>

          <div className="mx-auto my-8 max-w-fit">
            <Button type="button" onclick={(e) => {e.preventDefault()}} light={true}>
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
