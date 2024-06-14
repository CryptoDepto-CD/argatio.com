"use client";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import WithdrawDialog from "../Dialogs/WithdrawDialog";
import { useTranslations } from "next-intl";

export default function WithdrawButton() {
  const t = useTranslations("wallet.send")

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Button type="button" onclick={() => setIsOpen(true)}>{t("title")}</Button>
      <WithdrawDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
