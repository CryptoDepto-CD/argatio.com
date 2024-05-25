"use client";

import Button from "@/components/ui/Button/Button";

export default function WithdrawDialog({ open, handleClick }) {
  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed top-[15%] 2xl:top-[17%] left-[10%] lg:left-[25%] bg-white  rounded-2xl p-10 px-6 md:px-10  w-[clamp(250px,80vw,900px)] lg:w-[clamp(200px,50vw,1000px)] overflow-hidden`}
      >
        <form className="flex flex-col items-center gap-4 text-center md:mx-10">
          <div className="w-full md:my-10">
            <p className=" leading-none text-[clamp(1.2rem,4vw,2rem)] font-montserrat font-semibold uppercase py-5">
              Dirección del destino
            </p>
            <input
              type="text"
              id="direction"
              name="direction"
              autofocus
              required
              className="w-full px-5 py-2 border border-black border-solid rounded-lg outline-none max-w-[50ch] mx-auto text-sm md:text-clamp-text  bg-transparent"
            />
          </div>

          <div className="flex items-start justify-center my-12 gap-x-4 md:gap-x-10 font-montserrat">
            <div className="flex flex-col gap-5 ">
              <div className="flex items-center justify-end gap-3 md:text-clamp-text">
                <label className="font-semibold text-right uppercase">
                  Activo
                </label>
                <select
                  id="active"
                  name="active"
                  required
                  className="text-white bg-black w-[clamp(6.5rem,20vw,15rem)] rounded-lg py-2 px-5"
                >
                  <option value="1">ARGA</option>
                  <option value="2">ARGA</option>
                  <option value="3">ARGA</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-3 md:text-clamp-text">
                <label className="font-semibold text-right ">Inversión</label>
                <input
                  type="number"
                  id="value"
                  name="value"
                  placeholder="00000"
                  min={0}
                  required
                  className=" px-5 py-2 text-sm text-center bg-transparent border-2 border-black border-solid rounded-lg outline-none md:text-clamp-text w-[clamp(6.5rem,20vw,15rem)]"
                />
              </div>
            </div>
            <p className="font-semibold uppercase md:text-clamp-text">SALDO: <span>300000</span></p>
          </div>

          <div className="my-14">
            <Button type="button" invert={true} onclick={(e) => {e.preventDefault()}}>Retirar</Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
