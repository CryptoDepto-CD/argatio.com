"use client";

import Plyr from "plyr-react"
import "plyr-react/plyr.css"

export default function HowBuySection() {
  
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
      <h2 className="text-center uppercase font-nats text-clamp-title">¿Cómo comprar?</h2>
      <div className="max-w-xl mx-auto">
        <Plyr source={videoSrc}  />
      </div>
    </section>
  )
}


