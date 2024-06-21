import { GetPhaseInvestment, GetPhaseInfo } from "@/hooks/useBlockchain";
import Button from "../ui/Button/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MyArgaTokens() {
  const t = useTranslations("wallet.my-arga-tokens")

  const {
    userInvestment,
    userBalance,
    userReleasable
  } = GetPhaseInvestment(0)

  const {
    userInvestment: userInvestment2,
    userBalance: userBalance2,
    userReleasable: userReleasable2
  } = GetPhaseInvestment(1)

  const {
    tokenPrice
  } = GetPhaseInfo(0)

  const {
    tokenPrice: price1
  } = GetPhaseInfo(1)

  // const {
  //   userInvestment: userInvestment3,
  //   userBalance: userBalance3,
  //   userReleasable: userReleasable3
  // } = GetPhaseInvestment(2)

  const [adquiredAmount, setAdquiredAmount] = useState(userInvestment)
  const [lockedAmount, setLockedAmount] = useState(userBalance)
  const [phasePrice, setPhasePrice] = useState()

  const setPhaseAmounts = (_number) => {
    if (_number === 0) {
      setAdquiredAmount(userInvestment)
      setLockedAmount(userBalance)
      setPhasePrice(tokenPrice)
    } else if (_number === 1) {
      setAdquiredAmount(userInvestment2),
        setLockedAmount(userBalance2)
        setPhasePrice(price1)
    }
  }

  return (
    <div className="py-4 my-auto">
      <h3 className="mx-auto mb-5 leading-none text-center uppercase text-clamp-title font-nats">
        {t("title")}
      </h3>
      <div className="flex border-b-2 border-black border-solid py-1 mb-5 font-bold text-center justify-center items-center gap-5 text-monserrat">
        <span className="text-clamp-text">
          {t("phase")}
        </span>

        <div className="flex gap-2">
          <button className="text-blue-500" onClick={() => setPhaseAmounts(0)}>1</button>
          <button className="text-blue-500" onClick={() => setPhaseAmounts(1)}>2</button>
          <button className="text-stone-400" disabled>3</button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-8 justify-evenly font-montserrat text-clamp-text">
        <div className="*:mb-2">
          <p className="font-medium uppercase">{t("acquired")}</p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{adquiredAmount}</span>
            <span>ARGA</span>
          </p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{(adquiredAmount * 0.07).toFixed(0)}</span>
            <span> $USD </span>
          </p>
        </div>
        <div className="*:mb-2">
          <p className="font-medium uppercase">{t("locked")}</p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{lockedAmount}</span>
            <span>ARGA</span>
          </p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{phasePrice ? (lockedAmount * phasePrice).toFixed(0) : 0}</span>
            <span>$US</span>
          </p>
        </div>

        <div className="*:mb-2">
          <p className="font-medium uppercase">{t("released")}</p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{userReleasable}</span>
            <span>ARGA</span>
          </p>
          <p className="flex gap-5">
            <span className="min-w-[7ch]">{ phasePrice ? (userReleasable * phasePrice).toFixed(0) : 0}</span>
            <span>$US</span>
          </p>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-end">
        <div className="w-full md:w-1/2">
          {/* <Button type="button">Liberar</Button> */}
          <button className="px-10 py-1 uppercase min-w-fit grow w-full rounded-full bg-[#545454] opacity-80 hover:cursor-not-allowed" disabled>{t("release-btn")}</button>
        </div>
      </div>


    </div>
  );
}
