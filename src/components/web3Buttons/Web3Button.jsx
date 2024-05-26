import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import './Style.scss'
import ERC20ABI from '../../utils/ERC20.json'
import GlobalVestingABI from '../../utils/OldVesting.json'
import VestingABI from '../../utils/Vesting.json'
import { ethers } from "ethers";
import { addressUSDT, addressUSDC, addressBUSD } from "@/utils/constants";

export function Web3Btn({
    type, 
    contractCall, 
    amount, 
    to, 
    spender,
    onSuccessFunction,
    onErrorFunction,
    stableToken,
    disabled
}) {
    var amountInWei;
    if (contractCall === addressUSDT || contractCall === addressUSDC) { } 
    else {}


    const { contract } = useContract(contractCall)
    const { mutateAsync, isLoading, error } = useContractWrite(contract, type);

    const getAction = () => {

        switch (type) {
            case "approve":
                return () => mutateAsync({ args: [spender, amountInWei] });
            case "purchaseWithUSDT":
                return () => mutateAsync({});
            case "purchaseBatchWithUSDT":
                return () => mutateAsync({ args: [amount] });
            case "invest":
                return () => mutateAsync({ args: [stableToken, amountInWei] })
            case "release":
                return () => mutateAsync({});

            default:
                throw new Error(`Unsupported transaction type: ${type}`);
        }
    };

    return (
        <Web3Button
            contractAddress={contractCall}
            action={getAction()}
            onSuccess={() => onSuccessFunction()}
            onError={(error) => onErrorFunction(error)}
            isDisabled={disabled}
            className="web3btn"


            contractAbi={
                type === 'approve' && USDTabi || 
                type === 'purchaseWithUSDT' && DEPTOabi || 
                type === 'purchaseBatchWithUSDT' && DEPTOabi ||
                type === 'invest' && GlobalVestingABI ||
                type === 'release' && VestingABI
            }

        >
            {type === "approve" && `Aprobar ${amount} USDT`}
            {type === "purchaseWithUSDT" && `Comprar con ${amount * 50} USDT`}
            {type === "purchaseBatchWithUSDT" && `Comprar con ${amount * 50} USDT`}
            {type === "invest" && `Comprar con ${amount} USDT`}
            {type === "release" && `Retirar tokens ARGA`}
        </Web3Button>
    );
}