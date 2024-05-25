"use client";

import Button from "@/components/ui/Button/Button";
import { useState } from "react";

const tokenPhases = [
  { phase: 1, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 2, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 3, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 4, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 5, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 6, total: 1000, toRealese: 500, liberated: 500 },
  { phase: 7, total: 1000, toRealese: 500, liberated: 500 },
];

export default function ExchangeDialog({ open, handleClick }) {
  const [tokens, setTokens] = useState(0);

  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed top-[10%]  left-[10%] lg:left-[25%] bg-white  rounded-2xl p-10 px-6 md:px-10  w-[clamp(250px,80vw,900px)] lg:w-[clamp(200px,50vw,1000px)] h-[clamp(600px,80vh,950px)] overflow-y-scroll overflow-hidden`}
      >
        <p className=" leading-none text-[clamp(1.2rem,4vw,2rem)] font-montserrat font-semibold uppercase py-5 text-center">
          Dirección del destino
        </p>
        <form className="flex flex-col items-center gap-4 text-center md:mx-10">
          <div className="w-full">
            <p className="font-semibold text-left font-monserrat md:text-clamp-text">
              ¿Cuántos TOKEN CD poseo?
              <br />
              Elegí la fase y se te indicara el monto
            </p>
            <div className="flex items-start gap-6 my-3">
              <p className="py-2 font-semibold uppercase md:text-clamp-text shrink-0">
                TOKEN CD
              </p>
              <div className="flex flex-wrap  w-full gap-[0.8rem_2vw] md:mb-[8.5rem]">
                {tokenPhases.map((token, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center group aspect-square shrink-0 "
                  >
                    {/* <div className="relative group"> */}
                    <input
                      type="radio"
                      id="tokenPhase"
                      name="tokenPhase"
                      value={token.phase}
                      className="peer/phase w-11 h-11 appearance-none bg-transparent border-black border-solid rounded-full border-[5px]  checked:bg-black after:contents-[1] transition-all duration-300 cursor-pointer"
                    />
                    <span className=" absolute -z-10 pt-[17%] left-0 transition-all duration-300 text-lg font-medium rounded-full h-11 w-11 font-montserrat peer-checked/phase:z-10 peer-checked/phase:text-white">
                      {token.phase}
                    </span>
                    {/* </div> */}
                    <div className="hidden min-w-52 group-hover:block md:peer-checked/phase:block absolute z-20 top-14 p-5 shadow-[0px_4px_5px_rgba(255,255,255,0.16)_inset,0px_1px_4px_rgba(11,55,0,0.27)] [backdrop-filter:blur(15px)] rounded-[19px] [background:linear-gradient(120.89deg,rgba(0,0,0,0.06),rgba(0,0,0,0.01))] box-border  border-[1px] border-solid border-[rgba(255,255,255,0.02)] text-left">
                      <p className="md:text-clamp-text">Usted posee:</p>
                      <p className="font-semibold uppercase min-w-fit md:text-clamp-text">
                        <span>{token.total}</span> TOKEN CD
                      </p>
                      <p className="md:text-clamp-text">
                        <span>{token.toRealese}</span> por liberar
                      </p>
                      <p className="md:text-clamp-text">
                        <span>{token.liberated}</span> liberados
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-5 font-montserrat">
            <p className="pb-5 font-semibold uppercase md:text-clamp-text text-balance">
              ¿Cuántos TOKEN CD quieres intercambiar a ARGA TOKEN?
            </p>
            <div className="flex flex-row flex-wrap items-start justify-center gap-5">
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  id="tokens"
                  name="tokens"
                  min={0}
                  placeholder="0000"
                  onChange={(event) => {
                    setTokens(event.target.value);
                  }}
                  required
                  autoFocus
                  className={`w-[clamp(9rem,20vw,12rem)] px-3 py-2 text-center text-black bg-transparent border-2 border-solid rounded-md outline-0 border-black`}
                />
                <p className={`text-7xl -mt-4 leading-none text-black`}>▶</p>
              </div>

              <div className="flex flex-col items-start gap-4 mt-3 font-montserrat md:text-clamp-text">
                <p className="font-bold uppercase">Balance</p>
                <div className="p-5 shadow-[0px_4px_5px_rgba(255,255,255,0.16)_inset,0px_1px_4px_rgba(11,55,0,0.27)] [backdrop-filter:blur(15px)] rounded-[19px] [background:linear-gradient(120.89deg,rgba(0,0,0,0.06),rgba(0,0,0,0.01))] box-border  border-[1px] border-solid border-[rgba(255,255,255,0.02)] text-left">
                  <div className="mb-4">
                    <p className="font-semibold uppercase min-w-fit md:text-clamp-text">
                      <span>{tokens}</span> TOKEN CD
                    </p>
                    <p className="md:text-clamp-text">
                      <span>{tokens}</span> por liberar
                    </p>
                    <p className="md:text-clamp-text">
                      <span>0</span> liberados
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase min-w-fit md:text-clamp-text">
                      <span>{tokens}</span> Arga Token
                    </p>
                    <p className="md:text-clamp-text">
                      <span>{tokens}</span> por liberar
                    </p>
                    <p className="md:text-clamp-text">
                      <span>0</span> liberados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <Button
              type="button"
              invert={true}
              onclick={(e) => {
                e.preventDefault();
              }}
            >
              Retirar
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
