import Link from "next/link";
import Image from "next/image";

import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function SocialMediaLinks() {
  const SocialMediaIcons = [
    {
      icon: <Youtube size={30} />,
      link: "https://www.youtube.com/@mtsclubnegocios",
      name: "Icono de youtube",
    },
    {
      icon: <Instagram size={30} />,
      link: "https://www.instagram.com/mtsclubdefi",
      name: "Icono de instagram",
    },
    { icon: <Linkedin size={30} />, link: "#", name: "Icono de linkedin" },
  ];

  return (
    <div className="flex items-center justify-between gap-5 sm:gap-10">
      {SocialMediaIcons.map((element, index) => (
        <Link
          key={index}
          href={element.link}
          target="_blank"
          className={`object-fill rounded-full w-14 h-14 bg-white flex items-center justify-center text-black `}
        >
          {element.icon}
        </Link>
      ))}
    </div>
  );
}
