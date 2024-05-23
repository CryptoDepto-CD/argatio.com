"use client"

import { ConnectWallet, useAddress, useDisconnect } from '@thirdweb-dev/react';
import { useContractRead } from '@thirdweb-dev/react';

export default function Wallet() {

  const address = useAddress();

  return (
    <main className="font-monserrat min-h-screen flex flex-col gap-5 items-center justify-center">

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

    </main >
  )
}
