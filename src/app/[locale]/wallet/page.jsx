"use client";

import InvestSection from "@/components/wallet/InvestSection";
import VestingPreventSection from "@/components/wallet/VestingPreventSection";
import WalletSection from "@/components/wallet/WalletSection";
import ButtonBlockchain from "@/components/ui/ButtonBlockchain/ButtonBlockchain";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import AdminSection from "@/components/wallet/AdminSection";
import { useTranslations } from "next-intl";

export default function Wallet() {
  const t = useTranslations("wallet");

  const address = useAddress()
  const disconnect = useDisconnect();

  return (
    <main>

      {!address ? (
        <div className="flex items-center justify-center w-full min-h-screen">
          <div>
            <ConnectWallet
              btnTitle={t("login")}
              modalTitle="Welcome"
              hideTestnetFaucet={true}
              hideSwitchToPersonalWallet={true}
              showThirdwebBranding={false}
              className="!rounded-full !px-10 !py-1 !font-semibold !containertext-center !text-black !transition-colors !bg-white !hover:bg-black !outline !grow !font-montserrat !hover:text-white"
            />
          </div>

        </div>

      ) : (
        <>
          <div className="flex justify-end w-full mr-16">
            <div>
              <button
                className="px-10 py-1 mx-12 font-semibold text-black transition-colors bg-white rounded-full containertext-center hover:bg-black outline grow font-montserrat hover:text-white"
                onClick={disconnect}
              >
                {t("disconnect")}
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
