import Image from "next/image";

export default function ThreeIconsCarousel({ icons }) {
  return (
    <div className=" hidden sm:flex items-center justify-between gap-1 lg:gap-[2vw] max-w-fit ">
      <div className="flex flex-col items-center gap-3 max-w-24">
        <Image src={icons[0].src} alt={icons[0].alt} className="w-2/4" />
        <p className="text-xs font-bold text-center uppercase lg:text-sm font-montserrat text-balance">
          {icons[0].text}
        </p>
      </div>
      <div className="border border-black border-solid min-w-8"></div>
      <div className="flex flex-col items-center gap-3 max-w-24">
        <Image src={icons[1].src} alt={icons[1].alt} className="w-2/4" />
        <p className="text-xs font-bold text-center uppercase lg:text-sm font-montserrat text-balance">
          {icons[1].text}
        </p>
      </div>
      <div className="border border-black border-solid min-w-8"></div>
      <div className="flex flex-col items-center gap-3 max-w-24">
        <Image src={icons[2].src} alt={icons[2].alt} className="w-2/4" />
        <p className="text-xs font-bold text-center uppercase lg:text-sm font-montserrat text-balance">
          {icons[2].text}
        </p>
      </div>
    </div>
  );
}
