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
import { useAddress, useBalance } from "@thirdweb-dev/react";
import { ethers } from "ethers";

// -------------------------------------------------------------------
// -------------------------   GETTERS   -----------------------------
// -------------------------------------------------------------------

export const GetERC20Balance = (_addressERC20) => {
    const address = useAddress();
    const { data: usdt, isLoading: isLoadingUSDT } = useBalance(_addressERC20);
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