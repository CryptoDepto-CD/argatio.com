"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAddress, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import Matic from "@/../public/wallet/icon_matic.svg"

import ButtonBlockchain from "@/components/ui/ButtonBlockchain/ButtonBlockchain";
import { useTranslations } from "next-intl";
import LanguageChanger from "@/components/ui/ChangerLanguage/ChangerLanguage";

export default function NavBar() {
  const address = useAddress()
  const isMismatched = useNetworkMismatch();
  const switchChain = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("common.navbar")

  return (
    <nav className="relative flex items-center justify-between px-12 py-4 uppercase">
      <Link href="/">
        <Image
          src="/logotipo.svg"
          height={160}
          width={160}
          alt="Logo"
          priority={true}
          className="pr-4 mr-3"
        />
      </Link>

      <div className="z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul
        className={`fixed md:static bg-zinc-950 md:bg-transparent px-20 md:px-0 w-full md:w-auto md:flex top-0 left-0 h-full md:h-auto pt-20 md:pt-0 items-center justify-center ${isOpen ? "block" : "hidden"} md:flex z-20 *:md:text-center lg:gap-5`}
      >
        {/* <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Servicios</Link></li> */}
        <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="https://whitepaper.argatio.com/" onClick={() => setIsOpen(false)}>White Paper</Link>
        </li>
        <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="/ArgaToken" onClick={() => setIsOpen(false)}>ARGA Token</Link>
        </li>

        <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="/ViviendaPropia" onClick={() => setIsOpen(false)}>{t("own-home")}</Link>
        </li>
        {/* <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="https://app.argatio.com/">Preventa</Link>
        </li> */}
        <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="/UnderConstruction" onClick={() => setIsOpen(false)}>{t("aboutus")}</Link>
        </li>

        <li>
          <LanguageChanger />
        </li>
        {/* <li
          className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}
        >
          <Link href="https://app.argatio.com/">Contacto</Link>
        </li> */}
        <ButtonBlockchain type="link" href="/wallet" btnTitle={t("button-blockchain.btn-title")}>
          {t("button-blockchain.children")}
        </ButtonBlockchain>
        {/* <li
          className={`mr-2 text-xs lg:text-sm font-semibold align-middle flex items-center font-montserrat py-2 px-5 cursor-pointer bg-white rounded-full md:mt-0 mt-3 text-black w-fit min-w-fit hover:shadow-[0px_0px_9px_0px_white]`}
        >
          <Link href="#">Empezá Hoy</Link>
        </li> */}
      </ul>


      {isMismatched && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-zinc-800 w-11/12 h-1/3 md:w-9/12 md:h-4/6 flex flex-col items-center justify-center z-10
                    rounded-[10px] '>
          <Image src={Matic} alt={'Matic'} className="w-20" />
          <span className='text-lg font-bold text-[var(--light-blue)] md:text-2xl my-5 px-4 text-center'>
            {t("mismatched.text")}
          </span>
          <button className=' text-sm mx-2 rounded-[10px] border-2 border-white bg-transparent px-3 py-1 text-white font-semibold hover:bg-[var(--dark-blue)] md:text-xl'
            onClick={() => switchChain(process.env.NEXT_PUBLIC_ACTIVE_CHAIN_ID)}>
            {t("mismatched.button")}
          </button>
        </div>
      )}

    </nav>
  );
}
