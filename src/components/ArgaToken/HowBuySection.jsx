"use client";

import { useTranslations } from "next-intl";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

export default function HowBuySection() {
  const t = useTranslations("argatoken.how-buy-section")
  
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://youtu.be/IwBW7gEbhSw?si=BJ3oQoBS6ryVkcBT",
        provider: "youtube"
      }
    ]
  };

  return (
    <section className="px-10 py-16">
      <h2 className="text-center uppercase font-nats text-clamp-title">{t("title")}</h2>
      <div className="max-w-screen-md mx-auto">
        <Plyr source={videoSrc}  />
      </div>
    </section>
  )
}


