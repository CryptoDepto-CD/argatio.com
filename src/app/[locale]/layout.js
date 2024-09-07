import { Inter } from "next/font/google";
import Script from "next/script";
import NavBar from "@/components/layout/Navbar/NavBar";

import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import TelegramButton from "@/components/layout/TelegramButton/TelegramButton";
import { Providers } from "@/providers/providers";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {

  const messages = useMessages();

  return (
    <html lang={locale}>
      <Script
        id="google-tagmanager"
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JC2P5TSYWE"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JC2P5TSYWE');`,
        }}
      ></Script>
      <Script
        id="meta-analytics"
        dangerouslySetInnerHTML={{
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
          `,
        }}
      ></Script>
      <head>
        <meta name="facebook-domain-verification" content="y86xfzxbzb5dcyv82xskx9k80oxjom" />
      </head>
      <body className={inter.className + " text-white"}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NavBar />
            {children}
            <Footer />
            <TelegramButton />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
