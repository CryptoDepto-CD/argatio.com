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

export const getERC20Balance = (_addressERC20) => {
    const address = useAddress();
    const { data: usdt, isLoading: isLoadingUSDT } = useBalance(_addressERC20);
}