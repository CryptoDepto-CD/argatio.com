"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import BuyDialog from "../Dialogs/BuyDialog";


export default function BuyButton() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 bg-[linear-gradient(120.89deg,rgba(255,255,255,0.063)_5.96%,rgba(255,255,255,0.012)_68.72%)] rounded-[70px] drop-shadow-[0px_1px_4px_0px_#0B370045] shadow-[0px_4px_5px_0px_#FFFFFF29_inset] ">
      <p className="mb-4 font-medium text-center uppercase font-monserrat">Arga Token</p>
      <Button type="button" onclick={() => setIsOpen(true)}>Comprar</Button>
      <BuyDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
