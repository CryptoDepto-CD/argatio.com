import React from "react";

export default function TitleCarousel({ title, description, icon }) {
  return (
    <div className="flex flex-col w-full gap-5 px-5 lg:gap-10">
      <div className="flex items-center justify-around">
        {/* <Image> */}
        <h4 className="text-4xl font-medium uppercase xl:text-6xl font-nats">
          {title}
        </h4>
      </div>
      <p className="text-center uppercase lg:text-left font-montserrat">
        {description}
      </p>
    </div>
  );
}
