import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import ERC20ABI from '../../utils/ERC20.json'
import GlobalVestingABI from '../../utils/OldVesting.json'
import VestingABI from '../../utils/Vesting.json'
import { ethers } from "ethers";
import { addressUSDT, addressUSDC, addressBUSD } from "@/utils/constants";
import { GetWeiAmount } from "@/hooks/useBlockchain";
import { useTranslations } from "next-intl";

export function ERC20Button({
    type,
    tokenAddress,
    tokenName,
    amount,
    to,
    spender,
    onSuccessFunction,
    onErrorFunction,
    stableToken,
    disabled
}) {

    const t = useTranslations("wallet.investment-section")

    var amountInWei = GetWeiAmount(tokenAddress, amount)

    const { contract } = useContract(tokenAddress)
    const { mutateAsync, isLoading, error } = useContractWrite(contract, type);

    const getAction = () => {

        switch (type) {
            case "approve":
                return () => mutateAsync({ args: [spender, amountInWei] });

            default:
                throw new Error(`Unsupported transaction type: ${type}`);
        }
    };

    return (
        <Web3Button
            contractAddress={tokenAddress}
            action={getAction()}
            onSuccess={() => onSuccessFunction()}
            onError={(error) => onErrorFunction(error)}
            isDisabled={disabled}
            contractAbi={ERC20ABI}
        >
            {type === "approve" && `${t("erc20-btn")} ${amount} ${tokenName}`}
        </Web3Button>
    );
}