"use client";
import Button from "@/components/ui/Button/Button";
import { useRef, useState } from "react";
import { ERC20Button } from "@/components/web3Buttons/ERC20-Button";

export default function InvestForm({ buttonName, buttonClick, light = false }) {
  const [money, setMoney] = useState(0);

  const valueInput = useRef();

  return (
    <form className={`${light ? "text-black" : "text-white"}`}>
      <div className="flex flex-wrap items-center justify-center mt-16 mb-10 gap-x-10 gap-y-8 text-clamp-text">
        <div className="flex flex-col items-center">
          <p className="font-semibold font-montserrat">Inversión</p>
          <div className="flex items-center gap-2">
            <select id="wallet" name="wallet" required
              className={`p-2 ${!light ? "text-black bg-white" : "text-white bg-black"} rounded-md`}
            >
              <option value="1">USDT</option>
              <option value="2">USDT</option>
              <option value="3">USDT</option>
            </select>
            <input
              type="number"
              id="value"
              name="value"
              min={0}
              ref={valueInput}
              value={money}
              onChange={(event) => {
                setMoney(event.target.value);
              }}
              required
              autoFocus
              className={`w-full px-3 py-2 text-center text-black bg-transparent border-2 border-solid rounded-md outline-0 ${light ? "text-black border-black" : "text-white border-white"}`}
            />
            <p className={`text-5xl ${light ? "text-black" : "text-white"}`}>
              ▶
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div
            className={`aspect-square rounded-full border-[4px] border-solid flex items-center justify-center ${light ? "border-black" : "border-white"}`}
          >
            <span className="px-5 min-w-[8ch] text-center">
              {money === 0 ? "00000" : money / 0.08}
            </span>
          </div>
          <p className="text-3xl leading-none uppercase font-nats">
            Arga Token
          </p>
        </div>
      </div>

      <div className="mx-auto mt-5 w-fit">
        <Button
          type="button"
          invert={light}
          onclick={buttonClick}
        >
          {buttonName}
        </Button>
      </div>
    </form>
  );
}