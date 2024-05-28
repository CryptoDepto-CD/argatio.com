import Link from "next/link";
import {Send} from "lucide-react"


export default function TelegramButton() {
  return (
    <div className="z-30 fixed flex items-center justify-center px-3 text-white rounded-full bg-sky-500 bottom-[clamp(2rem,4vw,5rem)] shadow-2xl aspect-square right-[clamp(2rem,4vw,5rem)] animate-bounce">
      <Link href="https://t.me/+RHYVHbF6iPMwZTgx" target="_blank">
        <Send className="w-[clamp(24px,15vw,40px)] mr-1" size={30} />
      </Link>
    </div>
  )
}
