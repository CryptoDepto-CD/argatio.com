import PropTypes from "prop-types";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Gorrito from "@/../public/AboutUs/gorrito.png"

function Card({ linkedin, image, name, role, birthday }) {
  function isBirthday(fecha) {
    const fechaActual = new Date();

    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1;

    const [dia, mes] = fecha.split("/").slice(0, 2).map(Number);
    return dia === diaActual && mes === mesActual;
  }

  return (
    <div className="relative p-5 h-full flex-col justify-between gap-3 flex shadow-[0px_4px_5px_rgba(255,255,255,0.16)_inset,0px_1px_4px_rgba(11,55,0,0.27)] backdrop-blur[7.5px] rounded-[19px] [background:linear-gradient(120.89deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.02))] text-center">
      <div className="flex flex-col ">
        <Link href={linkedin} className="w-10 h-10 p-2 -mb-8 bg-blue-700 rounded-lg aspect-square">
          <Linkedin size={24} />
        </Link>
        <div className="aspect-square border-[5px] border-solid border-white rounded-full mb-5">
          {isBirthday(birthday) && <Image src={Gorrito} alt="Gorro" className="absolute top-0 right-0 w-[clamp(100px,12vw,130px)] rotate-45 translate-x-1/3 -translate-y-1/3" />}
          <Image src={image} alt={name} className="w-full aspect-square" width={1000} height={1000} quality={100} />
        </div>
      </div>
      <div>
        <p className="leading-none uppercase font-nats text-clamp-subtitle">{name}</p>
        <p className="font-semibold font-montserrat text-clamp-text">{role}</p>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
