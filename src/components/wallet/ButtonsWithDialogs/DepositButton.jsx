"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import DepositDialog from "../Dialogs/DepositDialog";

export default function DepositButton() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>Ingresar</Button>
      <DepositDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
