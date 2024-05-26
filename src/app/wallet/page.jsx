"use client";

import InvestSection from "@/components/wallet/InvestSection";
import VestingPreventSection from "@/components/wallet/VestingPreventSection";
import WalletSection from "@/components/wallet/WalletSection";
import ButtonBlockchain from "@/components/ui/ButtonBlockchain/ButtonBlockchain";

export default function Wallet() {
  return (
    <main>
      <VestingPreventSection />
      <InvestSection />
      <WalletSection />
    </main>
  );
}
