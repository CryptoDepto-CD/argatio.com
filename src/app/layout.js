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
  argatioWallet.meta.name = 'Argatio Wallet';
  argatioWallet.meta.iconURL = 'https://yt3.googleusercontent.com/DvS3Cj5RVUSarFMDRdCqim5EDTxrwKtiDuRbNnKkYti0JX2mtm7QO5xlNNfS6iy-mjQjcPXLb5Y=s900-c-k-c0x00ffffff-no-rj';

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
