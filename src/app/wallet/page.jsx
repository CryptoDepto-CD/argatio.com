"use client";

import InvestSection from "@/components/wallet/InvestSection";
import VestingPreventSection from "@/components/wallet/VestingPreventSection";
import WalletSection from "@/components/wallet/WalletSection";
import ButtonBlockchain from "@/components/ui/ButtonBlockchain/ButtonBlockchain";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import AdminSection from "@/components/wallet/AdminSection";

export default function Wallet() {

  const address = useAddress()
  const disconnect = useDisconnect();

  return (
    <main>

      {!address ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <div>
            <ConnectWallet
              btnTitle={'Iniciar sesión'}
              modalTitle="Welcome"
              hideTestnetFaucet={true}
              hideSwitchToPersonalWallet={true}
              showThirdwebBranding={false}
              className=" !rounded-full !px-10 !py-1 !font-semibold !containertext-center !text-black !transition-colors !bg-white !hover:bg-black !outline !grow !font-montserrat !hover:text-white"
            />
          </div>

        </div>

      ) : (
        <>
          <div className="w-full flex justify-end mr-16">
            <div>
              <button
                className=" mx-12 rounded-full px-10 py-1 font-semibold containertext-center text-black transition-colors bg-white hover:bg-black outline grow font-montserrat hover:text-white"
                onClick={disconnect}
              >
                Desconectar
              </button>
            </div>
          </div>

          <VestingPreventSection />
          <InvestSection />
          <WalletSection />
          <AdminSection />
        </>
      )}


    </main>
  );
}
