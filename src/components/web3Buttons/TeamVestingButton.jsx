import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import GlobalVestingABI from '../../utils/OldVesting.json'
import TeamVestingABI from '../../utils/TeamVesting.json'
import { addressTeamArga } from "@/utils/constants";
import { ethers } from "ethers";

export function TeamVestingButton({
    type,
    tokenAmount,
    teamMembers,
    onSuccessFunction,
    onErrorFunction,
    disabled
}) {

    var amountInWei = tokenAmount ? ethers.utils.parseEther(tokenAmount) : 0

    const { contract } = useContract(addressTeamArga)
    const { mutateAsync, isLoading, error } = useContractWrite(contract, type);

    const getAction = () => {

        switch (type) {
            case "allocateTokens":
                return () => mutateAsync({ args: [amountInWei, teamMembers] });

            default:
                throw new Error(`Unsupported transaction type: ${type}`);
        }
    };

    return (
        <Web3Button
            contractAddress={addressTeamArga}
            action={getAction()}
            onSuccess={() => onSuccessFunction()}
            onError={(error) => onErrorFunction(error)}
            isDisabled={disabled}
            contractAbi={TeamVestingABI}
        >
            {type === "allocateTokens" && `Establecer`}
        </Web3Button>
    );
}