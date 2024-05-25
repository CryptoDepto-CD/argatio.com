
import InvestSection from "@/components/wallet/InvestSection";
import VestingPreventSection from "@/components/wallet/VestingPreventSection";
import WalletSection from "@/components/wallet/WalletSection";


export default function BuyArgaToken() {
  return (
    <main>
      <VestingPreventSection />
      <InvestSection />
      <WalletSection />
    </main>
  )
}
