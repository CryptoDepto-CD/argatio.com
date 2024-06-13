"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import DepositDialog from "../Dialogs/DepositDialog";
import { useTranslations } from "next-intl";

export default function DepositButton() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("wallet.recieve");

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>
        {t("title")}
      </Button>
      <DepositDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  );
}
