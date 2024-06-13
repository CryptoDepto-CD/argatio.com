import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import ERC20ABI from '../../utils/ERC20.json'
import ExchangeABI from '../../utils/Exchange.json'
import { GetWeiAmount } from "@/hooks/useBlockchain";
import { addressExchangeARGA, addressARGA } from "@/utils/constants";

export function ExchangeButton({
    amount,
    type,
    onSuccessFunction,
    onErrorFunction,
}) {

    var amountInWei = GetWeiAmount(addressARGA, amount)

    const { contract } = useContract(addressExchangeARGA)
    const { mutateAsync, isLoading, error } = useContractWrite(contract, type);

    const getAction = () => {

        switch (type) {
            case "exchangeTokens":
                return () => mutateAsync({ args: [amountInWei] });

            default:
                throw new Error(`Unsupported transaction type: ${type}`);
        }
    };

    return (
        <Web3Button
            contractAddress={addressExchangeARGA}
            action={getAction()}
            onSuccess={() => onSuccessFunction()}
            onError={(error) => onErrorFunction(error)}
            contractAbi={ExchangeABI}
        >
            {type === "exchangeTokens" && `Intercambiar ${amount} tokens CD`}
        </Web3Button>
    );
}