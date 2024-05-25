import Logo from "@/../public/logo.svg"

import BuyButton from "./ButtonsWithDialogs/BuyButton";
import DepositButton from "./ButtonsWithDialogs/DepositButton";
import ExchangeButton from "./ButtonsWithDialogs/ExchangeButton";
import WithdrawButton from "./ButtonsWithDialogs/WithdrawButton";
import Funds from "./Funds";
import MyArgaTokens from "./MyArgaTokens";
import Image from "next/image";

export default function WalletSection() {
  return (
    <section className=" px-6 md:px-10 py-10 mx-10 my-16 bg-[linear-gradient(120deg,rgba(255,255,255,0.063)_5.96%,rgba(255,255,255,0.012)_68.72%)] drop-shadow-[0px_1px_4px_0px_#0B370045] shadow-[0px_4px_5px_0px_#FFFFFF29_inset] rounded-2xl  ">
      <div className="flex flex-col flex-wrap justify-center gap-10 mb-10">
          <div className="flex items-center gap-5 sm:ml-[10vw]">
            <div>
              <Image src={Logo} alt="Logo Argatio" className="" />
            </div>
            <h3 className="mb-5 leading-none uppercase text-clamp-title font-nats">
              WALLET Argatio
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 *:max-sm:flex-1">
            <BuyButton />
            <DepositButton />
            <WithdrawButton />
            <ExchangeButton />
          </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-14">
        <div className="w-full max-w-[350px]">
          <Funds />
        </div>
        <div className="w-full max-w-[850px] px-6 md:px-10 py-10 text-black bg-white md:w-3/5 rounded-3xl">
          <MyArgaTokens />
        </div>
      </div>
    </section>
  );
}
