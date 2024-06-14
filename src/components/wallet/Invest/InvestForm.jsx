"use client";
import Button from "@/components/ui/Button/Button";
import { useRef, useState } from "react";
import { ERC20Button } from "@/components/web3Buttons/ERC20-Button";
import { VestingButton } from "@/components/web3Buttons/VestingButton";
import {
  addressUSDT,
  addressUSDC,
  addressBUSD,
  addressVestingARGA
} from "@/utils/constants";
import { GetPhaseInfo, GetCurrentPhaseNumber } from "@/hooks/useBlockchain";
import Alerta from "@/components/ui/Alerta/Alerta";
import { useTranslations } from "next-intl";

export default function InvestForm({ buttonName, buttonClick, light = false }) {
  const [inputValue, setInputValue] = useState(1);
  const [approvalSuccess, setApprovalSuccess] = useState(false);
  const [selectedToken, setSelectedToken] = useState('USDT')
  const [addressSelectedCurrency, setAddressSelectedCurrency] = useState(addressUSDT)

  const {
    phaseNumber
  } = GetCurrentPhaseNumber()

  const {
    tokenPrice
  } = GetPhaseInfo(phaseNumber)

  const handleTokenChange = (e) => {
    const currencyValue = e.target.value;
    setSelectedToken(currencyValue)

    if (currencyValue === 'USDT') {
      setAddressSelectedCurrency(addressUSDT);
    } else if (currencyValue === 'USDC') {
      setAddressSelectedCurrency(addressUSDC);
    } else if (currencyValue === 'BUSD') {
      setAddressSelectedCurrency(addressBUSD);
    }
  }

  const t = useTranslations("wallet.investment-section")

  const handleApprovalSuccess = () => {
    setApprovalSuccess(true);
    Alerta({
      title: t("alerts.approval-success.title"),
      text: t("alerts.approval-success.text", {value: selectedToken}),
      img: Error,
    });
  };

  const handleApprovalError = (error) => {
    setApprovalSuccess(false);
    Alerta({
      title: 'Ups..',
      text: error.reason,
      img: Error,
    });
  };

  const handlePurchaseSuccess = () => {
    setApprovalSuccess(false);
    Alerta({
      title: t("alerts.purchase-success.title"),
      text: t("alerts.purchase-success.text"),
      img: Error,
    });
  };

  const handlePurchaseError = (error) => {
    if (error.reason === "ERC20: transfer amount exceeds balance") {
      setApprovalSuccess(false);
      Alerta({
        title: 'Ups..',
        text: t("alerts.purchase-error-text"),
        img: Error,
      });
    } else {
      setApprovalSuccess(false);
      Alerta({
        title: 'Ups..',
        text: error.reason,
        img: Error,
      });
    }
  };

  return (
    <div className={`${light ? "text-black" : "text-white"}`}>
      <div className="flex flex-wrap items-center justify-center mt-16 mb-10 gap-x-10 gap-y-8 text-clamp-text">
        <div className="flex flex-col items-center">
          <p className="font-semibold font-montserrat">{t("form.title")}</p>
          <div className="flex items-center gap-2">
            <select id="wallet" name="wallet" required
              className={`p-2 ${!light ? "text-black bg-white" : "text-white bg-black"} rounded-md`}
              value={selectedToken}
              onChange={handleTokenChange}
            >
              <option value="USDT">USDT</option>
              <option value="USDC">USDC</option>
              <option value="BUSD">BUSD</option>
            </select>
            <input
              type="number"
              id="value"
              name="value"
              min={0}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
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
              {tokenPrice ? (inputValue / tokenPrice).toFixed(2) : 0}
            </span>
          </div>
          <p className="text-3xl leading-none uppercase font-nats">
            Arga Token
          </p>
        </div>
      </div>

      <div className="mx-auto mt-5 w-fit">

        {/* <Button
          type="button"
          invert={light}
          onclick={buttonClick}
        >
          {buttonName}
        </Button> */}

        {!approvalSuccess ? (
          <ERC20Button
            type={'approve'}
            tokenAddress={addressSelectedCurrency}
            tokenName={selectedToken}
            amount={inputValue.toString()}
            spender={addressVestingARGA}
            onSuccessFunction={() => handleApprovalSuccess()}
            onErrorFunction={(error) => handleApprovalError(error)}
          />
        ) : (
          <VestingButton
            type={'invest'}
            stableAddress={addressSelectedCurrency}
            stableName={selectedToken}
            stableAmount={inputValue.toString()}
            onSuccessFunction={() => handlePurchaseSuccess()}
            onErrorFunction={(error) => handlePurchaseError(error)}
          />
        )}


      </div>
    </div>
  );
}