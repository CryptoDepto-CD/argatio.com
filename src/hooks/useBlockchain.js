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
    useContractRead } from "@thirdweb-dev/react";
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

    return {
        userInvestment: data?.total ? parseFloat(ethers.utils.formatEther(data.total)).toFixed(0) : 0
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