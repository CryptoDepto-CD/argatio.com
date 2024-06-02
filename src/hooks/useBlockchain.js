import {
    addressUSDT,
    addressUSDC,
    addressBUSD,
    addressCD,
    addressARGA,
    addressVestingCD1,
    addressVestingCD2,
    addressVestingCD3,
    addressVestingCD4,
    addressVestingCDG,
    addressVestingARGA,
    addressTeamArga,
    addressExchangeARGA
} from "@/utils/constants";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/react";
import {
    useAddress,
    useBalance,
    useContract,
    useContractRead
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import VestingABI from "@/utils/Vesting.json"

// -------------------------------------------------------------------
// -------------------------   GETTERS   -----------------------------
// -------------------------------------------------------------------

export const GetNativeBalance = () => {
    const { data } = useBalance(NATIVE_TOKEN_ADDRESS);

    return {
        nativeBalance: data ? parseFloat(data.displayValue).toFixed(2) : 0
    }
}

export const GetERC20Balance = (_addressERC20) => {
    const { data } = useBalance(_addressERC20);

    return {
        tokenBalance: data ? parseFloat(data.displayValue).toFixed(2) : 0
    }
}

export const GetPhaseInvestment = (_phaseNumber) => {
    const address = useAddress()
    const { contract } = useContract(addressVestingARGA, VestingABI)
    const { data } = useContractRead(contract, "getUserInvestment", [address, _phaseNumber])
    const { data: releasable } = useContractRead(contract, "releasableAmount", [_phaseNumber], { from: address })

    return {
        userInvestment: data?.total ? parseFloat(ethers.utils.formatEther(data.total)).toFixed(0) : 0,
        userBalance: data?.balance ? parseFloat(ethers.utils.formatEther(data.balance)).toFixed(0) : 0,
        userReleasable: releasable ? parseFloat(ethers.utils.formatEther(releasable)).toFixed(0) : 0,
    }
}

export const GetCurrentPhaseNumber = () => {
    const { contract } = useContract(addressVestingARGA, VestingABI)
    const { data } = useContractRead(contract, "getCurrentPhaseNumber")

    return {
        phaseNumber: data ?? 0
    }
}

export const GetPhaseInfo = (_phaseNumber) => {
    const { contract } = useContract(addressVestingARGA, VestingABI)
    const { data } = useContractRead(contract, "getPhase", [_phaseNumber])

    return {
        tokenPrice: data?.tokenPrice ? parseFloat(ethers.utils.formatEther(data.tokenPrice)).toFixed(2) : 0,
        initialBalance: data?.initialBalance ? parseFloat(ethers.utils.formatEther(data.initialBalance)) : 0,
        currentBalance: data?.balance ? parseFloat(ethers.utils.formatEther(data.balance)) : 0,
        maxTokensPerInvestor: data?.maxTokensPerInvestor ? parseFloat(ethers.utils.formatEther(data.maxTokensPerInvestor)).toFixed(0) : 0
    }
}

// -------------------------------------------------------------------
// --------------------------   UTILS   ------------------------------
// -------------------------------------------------------------------

export const GetWeiAmount = (_tokenAddress, _amount) => {
    if (_tokenAddress === addressUSDT || _tokenAddress === addressUSDC)
        return ethers.utils.parseUnits(_amount, 6)
    else
        return ethers.utils.parseEther(_amount)
}