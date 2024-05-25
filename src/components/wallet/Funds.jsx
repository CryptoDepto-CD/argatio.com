import Matic from "@/../public/wallet/icon_matic.svg"
import USDT from "@/../public/wallet/icon_usdt.svg"
import USDC from "@/../public/wallet/icon_usdc.svg"
import Image from "next/image";

const elements = [
  { logo: Matic, token: "MATIC", value: "00.00" },
  { logo: USDT, token: "USDT", value: "00.00" },
  { logo: USDC, token: "USDC", value: "00.00" },
  // { logo: "", token: "TOKEN", value: "00.00" },
];

export default function Funds() {
  return (
    <div>
      <h3 className="my-5 text-center uppercase text-clamp-title font-nats">
        Fondos
      </h3>
      <div className="">
        {elements.map((element, index) => (
          <div key={index} className="flex items-center justify-between gap-10 py-5 border-b-2 border-white border-solid last:border-b-0">
            <div className="flex items-center">
              <span className="w-10 h-10 mr-4 bg-white rounded-full aspect-square">
                <Image src={element.logo} alt={element.token} className="" />
              </span>
              <p>{element.token}</p>
            </div>
            <span>{element.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
