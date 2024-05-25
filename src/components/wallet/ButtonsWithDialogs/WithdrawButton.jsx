"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import WithdrawDialog from "../Dialogs/WithdrawDialog";

export default function WithdrawButton() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>Retirar</Button>
      <WithdrawDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
