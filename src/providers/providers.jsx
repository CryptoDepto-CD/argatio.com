"use client";

import { useState, useEffect, ReactNode } from "react";
import {
    ThirdwebProvider,
    coinbaseWallet,
    embeddedWallet,
    metamaskWallet,
    smartWallet,
    walletConnect,
} from '@thirdweb-dev/react';

export function Providers({ children }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    const smartWalletConfig = {
        factoryAddress: process.env.NEXT_PUBLIC_FACTORY_ADDRESS,
        gasless: true,
    };
    const argatioWallet = smartWallet(
        embeddedWallet({ recommended: true }),
        smartWalletConfig
    );
    argatioWallet.meta.name = 'Google';
    argatioWallet.meta.iconURL = 'https://imgs.search.brave.com/sjPObxeNSprMYkkMbssLgSklyn2X6rF4UNp8sUX5rsQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzcy/OS9QTkcvOTYvZ29v/Z2xlX2ljb24taWNv/bnMuY29tXzYyNzM2/LnBuZw';


    return (
        <ThirdwebProvider
            activeChain={process.env.NEXT_PUBLIC_ACTIVE_CHAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            supportedWallets={[
                argatioWallet,
                metamaskWallet(),
                coinbaseWallet(),
                walletConnect(),
            ]}
        >
            {mounted && children}
        </ThirdwebProvider>
    )
}