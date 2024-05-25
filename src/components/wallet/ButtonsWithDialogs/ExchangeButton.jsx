"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import ExchangeDialog from "../Dialogs/ExchangeDialog";

export default function ExchangeButton() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>Intercambiar</Button>
      <ExchangeDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
