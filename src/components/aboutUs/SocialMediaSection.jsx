import React from "react";
import SocialMediaLinks from "../ui/SocialMediaLinks";

export default function SocialMediaSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 mb-40 my-28 md:flex-row">
      <p className="text-clamp-text w-fit font-montserrat lg:text-2xl">
        Seguinos en redes
      </p>
      <SocialMediaLinks textColor="white" bgColor="bluePrimary" />
    </div>
  );
}
