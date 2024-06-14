"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import ExchangeDialog from "../Dialogs/ExchangeDialog";
import { useTranslations } from "next-intl";

export default function ExchangeButton() {
  const t = useTranslations("wallet.swap");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>
        {t("title")}
      </Button>
      <ExchangeDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  );
}
