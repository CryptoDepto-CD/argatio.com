"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react';

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-12 py-4 uppercase">
            <Image src="/logotipo.svg" height={160} width={160} alt="Logo" priority={true} className="pr-4 mr-3"/>

            <div className="z-50 md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <ul className={`fixed md:static bg-zinc-950 md:bg-transparent px-20 md:px-0 w-full md:w-auto md:flex top-0 left-0 h-full md:h-auto pt-20 md:pt-0 items-center justify-center ${isOpen ? 'block' : 'hidden'} md:flex z-20 *:md:text-center lg:gap-5`}>
                <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Servicios</Link></li>
                <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">ARGA Token</Link></li>
                <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Preventa</Link></li>
                <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Quienes Somos</Link></li>
                <li className={`mr-2 md:mt-0 mt-3 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Contacto</Link></li>
                <li className={`mr-2 md:mt-0 mt-12 text-white text-xs lg:text-sm font-montserrat hover:drop-shadow-[0px_1px_4px_white] transition-colors`}><Link href="https://app.argatio.com/">Iniciar Sesión</Link></li>
                <li className={`mr-2 text-xs lg:text-sm font-semibold align-middle flex items-center font-montserrat py-2 px-5 cursor-pointer bg-white rounded-full md:mt-0 mt-3 text-black w-fit min-w-fit hover:shadow-[0px_0px_9px_0px_white]`}><Link href="#">Empezá Hoy</Link></li>
            </ul>
        </nav>
    )
}
