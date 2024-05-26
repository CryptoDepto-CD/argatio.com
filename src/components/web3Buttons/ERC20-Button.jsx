import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import ERC20ABI from '../../utils/ERC20.json'
import GlobalVestingABI from '../../utils/OldVesting.json'
import VestingABI from '../../utils/Vesting.json'
import { ethers } from "ethers";
import { addressUSDT, addressUSDC, addressBUSD } from "@/utils/constants";

export function ERC20Button({
    type,
    tokenAddress,
    amount,
    to,
    spender,
    onSuccessFunction,
    onErrorFunction,
    stableToken,
    disabled
}) {
    var amountInWei;
    if (tokenAddress === addressUSDT || tokenAddress === addressUSDC) {
        amountInWei = ethers.utils.parseUnits(amount, 6)
    } else if (tokenAddress === addressBUSD) {
        amountInWei = ethers.utils.parseEther(amount)
    }

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
            className="web3btn"
            contractAbi={ERC20ABI}
        >
            {type === "approve" && `Aprobar ${amount} USDT`}
        </Web3Button>
    );
}