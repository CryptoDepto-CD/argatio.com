import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import GlobalVestingABI from '../../utils/OldVesting.json'
import VestingABI from '../../utils/Vesting.json'
import { addressVestingARGA } from "@/utils/constants";
import { GetWeiAmount } from "@/hooks/useBlockchain";
import { useTranslations } from "next-intl";

export function VestingButton({
    type,
    stableAddress,
    stableName,
    stableAmount,
    onSuccessFunction,
    onErrorFunction,
    disabled,
    phaseNumber,
    className
}) {

    const t = useTranslations("wallet.investment-section")

    var amountInWei = GetWeiAmount(stableAddress, stableAmount)

    const { contract } = useContract(addressVestingARGA)
    const { mutateAsync, isLoading, error } = useContractWrite(contract, type);

    const getAction = () => {

        switch (type) {
            case "invest":
                return () => mutateAsync({ args: [stableAddress, amountInWei] })
            case "release":
                return () => mutateAsync({ args: [phaseNumber] })

            default:
                throw new Error(`Unsupported transaction type: ${type}`);
        }
    };

    return (
        <Web3Button
            contractAddress={addressVestingARGA}
            action={getAction()}
            onSuccess={() => onSuccessFunction()}
            onError={(error) => onErrorFunction(error)}
            isDisabled={disabled}
            contractAbi={VestingABI}
            className={className}
        >
            {type === "invest" && `${t("vesting-btn")} ${stableAmount} ${stableName}`}
            {type === "release" && "Liberar"}
        </Web3Button>
    );
}