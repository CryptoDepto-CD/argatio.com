'use client';

import { useRouter, usePathname } from '@/navigation';
import Image from 'next/image';
import SpainFlag from '@/../public/icons/SPAIN-flag.svg'
import USAFlag from '@/../public/icons/USA-flag.svg'
import { useParams } from 'next/navigation';

export default function LanguageChanger() {
    const router = useRouter();
    const pathname = usePathname();
    const { locale } = useParams();
  
    const handleChange = () => {
      const newLocale = locale === 'en' ? 'es' : 'en';
      router.push(pathname, { locale: newLocale });
    };
  
    const isSpanish = locale === 'es';
    const flagSrc = isSpanish ? USAFlag  : SpainFlag;
    const flagAlt = isSpanish ? 'English' : 'Español';
    const buttonText = isSpanish ? 'EN' : 'ES';
  return (
    <button
      className="flex items-center gap-1 md:gap-2 hover:bg-white/20 duration-500 rounded-md px-1"
      onClick={handleChange}
    >
      <Image className="w-full" src={flagSrc} alt={flagAlt} width={50} height={50} />
      <p className="font-semibold text-sm md:text-base text-white">{buttonText}</p>
    </button>
  );
}
