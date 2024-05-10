import Image from "next/image";
import ThreeIconsCarousel from "./ThreeIconsCarousel";
import TitleCarousel from "./TitleCarousel";

export default function Slide({title, icons, buttons, bgImage}) {
  return (
    <div className="flex flex-col items-center object-cover w-full max-w-screen-lg min-h-[full] py-10 mx-auto my-auto bg-white justify-evenly lg:justify-between lg:flex-row rounded-3xl lg:py-0 py-">
      <div className="flex flex-col items-center w-full h-full gap-10 px-10 py-4 text-black ">
        <TitleCarousel {...title} />
        <ThreeIconsCarousel icons={icons} />
        <div className="flex flex-col gap-3 text-xs lg:text-lg lg:flex-row">
          {buttons()}
        </div>
        {/* <button className="px-10 py-2 mx-auto uppercase transition-all duration-300 border border-black border-solid rounded-full max-w-96 font-montserrat hover:bg-black hover:text-white">
          Quiero mi hogar
        </button> */}
      </div>
      <div className="w-full lg:w-7/12 h-max">
        <Image
          src={bgImage.src}
          alt={bgImage.alt}
          className="object-cover w-full aspect-[4/4] lg:aspect-[9/16] lg:rounded-3xl"
        />
      </div>
    </div>
  );
}
