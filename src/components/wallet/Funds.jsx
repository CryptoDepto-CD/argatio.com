import Matic from "@/../public/wallet/icon_matic.svg"
import USDT from "@/../public/wallet/icon_usdt.svg"
import USDC from "@/../public/wallet/icon_usdc.svg"
import BUSD from "@/../public/wallet/icon_busd.png"
import Image from "next/image";
import {
  addressUSDT,
  addressUSDC,
  addressBUSD
} from "@/utils/constants";
import {
  GetNativeBalance,
  GetERC20Balance
} from "@/hooks/useBlockchain";

const elements = [
  { logo: Matic, token: "MATIC", value: "00.00" },
  { logo: USDT, token: "USDT", value: "00.00" },
  { logo: USDC, token: "USDC", value: "00.00" },
  // { logo: "", token: "TOKEN", value: "00.00" },
];

export default function Funds() {

  const { nativeBalance } = GetNativeBalance()
  const { tokenBalance: balanceUSDT } = GetERC20Balance(addressUSDT)
  const { tokenBalance: balanceUSDC } = GetERC20Balance(addressUSDC)
  const { tokenBalance: balanceBUSD } = GetERC20Balance(addressBUSD)

  return (
    <div>
      <h3 className="my-5 text-center uppercase text-clamp-title font-nats">
        Fondos
      </h3>
      <div className="">

        {/* {elements.map((element, index) => (
          <div key={index} className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
            <div className="flex items-center">
              <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
                <Image src={elements[index].logo} alt={elements[index].token} className="" />
              </span>
              <p>{elements[index].token}</p>
            </div>
            <span>{elements[index].value}</span>
          </div>
        ))} */}

        <div className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
          <div className="flex items-center">
            <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
              <Image src={Matic} alt="MATIC" className="" />
            </span>
            <p>MATIC</p>
          </div>
          <span>{nativeBalance}</span>
        </div>

        <div className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
          <div className="flex items-center">
            <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
              <Image src={USDT} alt="USDT" className="" />
            </span>
            <p>USDT</p>
          </div>
          <span>{balanceUSDT}</span>
        </div>

        <div className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
          <div className="flex items-center">
            <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
              <Image src={USDC} alt="USDC" className="" />
            </span>
            <p>USDC</p>
          </div>
          <span>{balanceUSDC}</span>
        </div>

        <div className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
          <div className="flex items-center">
            <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
              <Image src={BUSD} alt="BUSD" className="" />
            </span>
            <p>BUSD</p>
          </div>
          <span>{balanceBUSD}</span>
        </div>


      </div>
    </div>
  );
}
