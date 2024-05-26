'use client';

import { Inter } from "next/font/google";
import Script from "next/script";
import NavBar from "@/components/layout/Navbar/NavBar";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  metamaskWallet,
  smartWallet,
  walletConnect,
} from '@thirdweb-dev/react';

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Argatio",
  description: "",
};

export default function RootLayout({ children }) {

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
    <html lang="en">
      <body className={inter.className + " text-white"}>
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
          <Script src="/analytics.js" strategy="afterInteractive"></Script>
          <NavBar />
          {children}
          <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
