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
import TelegramButton from "@/components/layout/TelegramButton/TelegramButton";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="es">
        <Script id="google-tagmanager" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-JC2P5TSYWE" />
        <Script id="google-analytics" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JC2P5TSYWE');`
        }}></Script>
        <Script id="meta-analytics" dangerouslySetInnerHTML={{
          __html: `
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
          `
        }}></Script>
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
          <NavBar />
          {children}
          <Footer />
          <TelegramButton />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
