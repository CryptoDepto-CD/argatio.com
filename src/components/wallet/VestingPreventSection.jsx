import Phases from "@/components/ui/ArgaToken/Phases";
import { GetPhaseInfo } from "@/hooks/useBlockchain";

export default function VestingPreventSection() {
  const activeStyles = "text-black bg-white";
  
  const phase = 1;

  const {
    initialBalance,
    currentBalance,
    maxTokensPerInvestor
  } = GetPhaseInfo(0)

  return (
    <section className="px-10 py-10 mx-auto max-w-screen-2xl">
      <div className="flex flex-row items-center max-w-screen-xl mx-auto">
        <div
          className={`font-nats aspect-square rounded-full border-[clamp(15px,2.5vw,25px)] flex items-center text-center w-fit scale-[0.6] -ml-6 lg:-ml-10`}
        >
          <p className="text-clamp-ultrabig uppercase leading-none px-[clamp(15px,3vw,45px)]">
            Arga
            <br />
            Token
          </p>
        </div>
        <div className="uppercase">
          <p className="leading-none text-[clamp(1.5rem,3.6vw,4rem)] font-nats">
            Preventa
          </p>
          <p className="leading-none text-clamp-ultrabig font-nats">VESTING</p>
        </div>
      </div>
      <div className="mx-auto max-w-[400px] md:max-w-full">
        <div className="flex border-[5px] border-white border-solid rounded-[28px] items-center font-montserrat *:flex-1  mx-auto *:min-w-48 *:w-full  md:w-full flex-col md:flex-row">
          <div
            className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-[4/3] shadow-[2px_2px_0px_3px_white] ${phase === 1 && activeStyles}`}
          >
            <p className="uppercase text-clamp-title font-nats">Fase 01</p>
            <p className="lg:text-xl">Arga Token = US$0.07</p>
            <p className="lg:text-xl">13/05/24 - 31/05/24</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-[4/3] shadow-[2px_2px_0px_3px_white] ${phase === 2 && activeStyles}`}
          >
            <p className="uppercase text-clamp-title font-nats">Fase 02</p>
            <p className="lg:text-xl">Arga Token = US$0.08</p>
            <p className="lg:text-xl">01/06/24 - 28/06/24</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center px-10 text-center rounded-3xl aspect-[4/3] shadow-[2px_2px_0px_3px_white] ${phase === 3 && activeStyles}`}
          >
            <p className="uppercase text-clamp-title font-nats">Fase 03</p>
            <p className="lg:text-xl">Arga Token = US$0.11</p>
            <p className="lg:text-xl">01/07/24 - 31/07/24</p>
          </div>
        </div>
        <div className="flex text-clamp-†ext mt-1 gap-1 md:w-1/3 flex-col lg:flex-row">
          <div className="flex-auto text-center text-black bg-white p-7 rounded-3xl shrink">
            <span>{(initialBalance - currentBalance).toFixed(0)}</span>
            <p>Tokens vendidos</p>
          </div>
          <div className="flex-auto text-center text-black bg-white p-7 rounded-3xl">
            <span>Limite de wallets por fase</span>
            <p>{maxTokensPerInvestor}</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
