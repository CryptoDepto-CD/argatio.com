import PropTypes from "prop-types";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Card({ linkedin, image, name, role, birthday }) {
  return (
    <div className="relative p-5 h-full flex-col justify-between gap-3 flex shadow-[0px_4px_5px_rgba(255,255,255,0.16)_inset,0px_1px_4px_rgba(11,55,0,0.27)] backdrop-blur[7.5px] rounded-[19px] [background:linear-gradient(120.89deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.02))] text-center">
      <div className=" flex flex-col">
        <Link href={linkedin} className="w-10 h-10 p-2 -mb-8 bg-blue-700 rounded-lg aspect-square">
          <Linkedin size={24} />
        </Link>
        <div className="aspect-square border-[5px] border-solid border-white rounded-full mb-5">
          <Image src={image} alt={name} className="w-full aspect-square" width="100" height="100" />
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
