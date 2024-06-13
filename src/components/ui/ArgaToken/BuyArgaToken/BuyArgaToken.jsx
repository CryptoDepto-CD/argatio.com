"use client";

import LogInDialog from "@/components/ArgaToken/Dialogs/LogInDialog";
import Button from "../../Button/Button";
import { useState } from "react";

import ButtonBlockchain from "../../ButtonBlockchain/ButtonBlockchain";
import { useTranslations } from "next-intl";

export default function BuyArgaToken() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("argatoken")

  return (
    <div className="w-full">
      <ButtonBlockchain type="button" btnTitle={t("buy-argatoken")}>
        <Button type="link" href="/wallet">
          {t("buy-argatoken")}
        </Button>
      </ButtonBlockchain>
      {/* <Button type="button" onclick={() => setIsOpen(true)}>Comprar Arga Token</Button>
      <LogInDialog open={isOpen} handleClick={() => setIsOpen(false)} /> */}
    </div>
  );
}
