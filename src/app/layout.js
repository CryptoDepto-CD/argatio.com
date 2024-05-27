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

          {/* Analiticas */}

          <Script strategy="afterInteractive" async>
            {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-ZEZMFFPQPF');

            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1001366404856784');
            fbq('track', 'PageView');
            `}
          </Script>
          <NavBar />
          {children}
          <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
