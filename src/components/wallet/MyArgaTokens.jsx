import { GetPhaseInvestment } from "@/hooks/useBlockchain";

export default function MyArgaTokens() {

  const { 
    userInvestment
  } = GetPhaseInvestment(0)

  return (
    <div className="py-4 my-auto">
      <h3 className="mx-auto mb-5 leading-none text-center uppercase text-clamp-title font-nats">
        Mis Arga Tokens
      </h3>
      <p className="py-1 mb-5 font-bold text-center border-b-2 border-black border-solid text-monserrat text-clamp-text">Fase <span>01</span></p>
      <div className="flex flex-wrap items-center gap-8 justify-evenly font-montserrat text-clamp-text">
        <div className="*:mb-2">
          <p className="font-medium uppercase">Adquirido</p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{userInvestment}</span>
            <span>Arga tokens</span>
          </p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{(userInvestment * 0.07).toFixed(2)}</span>
            <span> $USD </span>
          </p>
        </div>
        <div className="*:mb-2">
          <p className="font-medium uppercase">Liberados</p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">00.00</span>
            <span>Arga tokens</span>
          </p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">0.0</span>
            <span>$US</span>
          </p>
        </div>
      </div>
    </div>
  );
}
