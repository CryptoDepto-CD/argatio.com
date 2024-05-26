"use client";

import LogInDialog from "@/components/ArgaToken/Dialogs/LogInDialog";
import Button from "../../Button/Button";
import { useState } from "react";

import ButtonBlockchain from "../../ButtonBlockchain/ButtonBlockchain";

export default function BuyArgaToken() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <ButtonBlockchain type="button" btnTitle="Comprar Arga Token">
        <Button type="link" href="/wallet">
          Comprar Arga Token
        </Button>
      </ButtonBlockchain>
      {/* <Button type="button" onclick={() => setIsOpen(true)}>Comprar Arga Token</Button>
      <LogInDialog open={isOpen} handleClick={() => setIsOpen(false)} /> */}
    </div>
  );
}
