import LogoArgatio from "@/../public/logo_footer.svg";
import Image from "next/image";
import Link from "next/link";

import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {

  const SocialMediaIcons = [
    {
      icon: <Youtube size={30} />,
      link: "https://youtube.com/@argatio_?si=HMFB2Xic9E_9jU71",
      name: "Icono de youtube",
    },
    {
      icon: <Instagram size={30} />,
      link: "https://www.instagram.com/argatio__?igsh=MXZkZjYzNXkxNzFweA==",
      name: "Icono de instagram",
    },
    { icon: <Linkedin size={30} />, link: "https://www.linkedin.com/company/crypto-depto/", name: "Icono de linkedin" },
  ];

  return (
    <footer className="w-full bg-black">
      <div className="flex flex-row flex-wrap items-start justify-between px-10 py-10 text-sm gap-7 md:justify-evenly md:text-base">
        <Link href="/" className="w-[48%] max-w-60 shrink">
          <Image src={LogoArgatio} alt="Logo Argatio" className="w-[90%]" />
        </Link>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">Invertí en Argatio</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link href="/UnderConstruction" className="transition-all hover:underline">
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link href="https://whitepaper.argatio.com/" className="transition-all hover:underline">
                White paper
              </Link>
            </li>
            <li>
              <Link href="https://whitepaper.argatio.com/10.-hoja-de-ruta-roadmap" className="transition-all hover:underline">
                Road map
              </Link>
            </li>
            <li>
              <Link href="https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento" className="transition-all hover:underline">
                Información Legal
              </Link>
            </li>
          </ol>
        </div>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">Nuestros servicios</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link
                href="/ViviendaPropia"
                className="transition-all hover:underline"
              >
                Vivienda propia
              </Link>
            </li>
            <li>
              <Link href="/UnderConstruction" className="transition-all hover:underline">
                Negocio propio
              </Link>
            </li>
            <li>
              <Link href="/UnderConstruction" className="transition-all hover:underline">
                Invertir
              </Link>
            </li>
            <li>
              <Link href="/UnderConstruction" className="transition-all hover:underline">
                Comprar
              </Link>
            </li>
            <li>
              <Link href="/UnderConstruction" className="transition-all hover:underline">
                Vender
              </Link>
            </li>
          </ol>
        </div>
        <div className="min-w-[15ch] flex flex-col gap-2">
          <p className="font-bold">¿Te ayudamos?</p>
          <ol className="flex flex-col gap-2">
            <li>
              <Link href="https://t.me/+RHYVHbF6iPMwZTgx" className="transition-all hover:underline">
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link href="https://t.me/+RHYVHbF6iPMwZTgx" className="transition-all hover:underline">
                Contacto
              </Link>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-5 px-4 py-5 border-t border-solid md:px-10">
        <div className="flex gap-1 text-[10px]">
          <p>© 2024 Argatio. All right reserved.</p>
          <Link href="https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento/politicas-de-privacidad-y-seguridad" className="transition-all hover:underline">
            Privacy Policy
          </Link>
          <Link href="https://whitepaper.argatio.com/12.-aspectos-legales-y-de-cumplimiento" className="transition-all hover:underline">
            Terms of Service
          </Link>
        </div>
        <div className="flex gap-5 mx-auto max-w-40">
          {SocialMediaIcons.map((element, index) => (
            <Link
              key={index}
              href={element.link}
              target="_blank"
              className={`object-fill rounded-full w-5 h-5 flex items-center justify-center text-white `}
            >
              {element.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
