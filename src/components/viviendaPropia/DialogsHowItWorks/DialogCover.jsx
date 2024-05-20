import { MoveDown } from "lucide-react";

export default function DialogCover({ title, text }) {
  return (
    <div className="max-w-[60%] mx-auto w-fit m-10 text-center h-[90%] flex flex-col justify-between">
      <h2 className="font-normal leading-none text-center text-clamp-big font-nats ">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center mx-auto my-6 text-white bg-black rounded-full rounded-fill aspect-square w-[clamp(100px,15vw,200px)]">
        <span className="md:text-xl">SCROLL</span>
        <MoveDown />
      </div>
      <p className="leading-tight text-clamp-subtitle font-nats">{text}</p>
    </div>
  );
}
