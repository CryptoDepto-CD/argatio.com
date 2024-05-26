"use client";

import Link from "next/link";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import { useContractRead } from "@thirdweb-dev/react";
export default function ButtonBlockchain({ children, type, href, btnTitle }) {
  const address = useAddress();

  if (type === "button") {
    return (
      <div>
        {!address ? (
          <ConnectWallet
            btnTitle={btnTitle}
            modalTitle="Welcome"
            hideTestnetFaucet={true}
            hideSwitchToPersonalWallet={true}
            showThirdwebBranding={false}
            className=" !w-full !rounded-full !px-10 !py-1 !font-semibold !containertext-center !text-black !transition-colors !bg-white !hover:bg-black !outline !grow !font-montserrat !hover:text-white"
          />
        ) : (
          <div>{children}</div>
        )}
      </div>
    );
  } else if (type === "link") {
    return (
      <div>
        {!address ? (
          <li className={``}>
            <ConnectWallet
              btnTitle={btnTitle}
              modalTitle="Welcome"
              hideTestnetFaucet={true}
              hideSwitchToPersonalWallet={true}
              showThirdwebBranding={false}
              className="!rounded-full !bg-transparent !text-white !font-montserrat !font-regular"
            />
          </li>
        ) : (
          <li
            className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
          >
            <Link href={href}>{children}</Link>
          </li>
        )}
      </div>
    );
  }
}
