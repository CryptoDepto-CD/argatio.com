"use client"

import InvestSection from "@/components/wallet/InvestSection";
import VestingPreventSection from "@/components/wallet/VestingPreventSection";
import WalletSection from "@/components/wallet/WalletSection";

import { ConnectWallet, useAddress, useDisconnect } from '@thirdweb-dev/react';
import { useContractRead } from '@thirdweb-dev/react';

export default function Wallet() {

  const address = useAddress();

  return (
    <main className="">

      {!address ? (
        <ConnectWallet
          btnTitle='Iniciar sesión'
          modalTitle='Welcome'
          hideTestnetFaucet={true}
          hideSwitchToPersonalWallet={true}
        />
      ) : (
        <span>{address}</span>
      )}

      <VestingPreventSection />
      <InvestSection />
      <WalletSection />

    </main >
  )
}
