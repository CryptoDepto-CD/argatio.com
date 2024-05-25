const wallets = [
  { name: "Nombre Wallet", logo: "LOGO" },
  { name: "Nombre Wallet", logo: "LOGO" },
  { name: "Nombre Wallet", logo: "LOGO" },
  { name: "Nombre Wallet", logo: "LOGO" },
  { name: "Nombre Wallet", logo: "LOGO" },
];

export default function ConnectWalletDialog({ open, handleClick }) {
  return (
    <dialog className="z-40" open={open}>
      <div
        onClick={handleClick}
        className="fixed top-0 bottom-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>
      <div
        className={`z-50 fixed bottom-[20%] left-[12%] lg:left-1/3 bg-white  rounded-2xl p-7  w-[clamp(300px,70vw,450px)] overflow-hidden flex flex-col gap-4`}
      >
        {wallets.map((wallet, index) => (
          <div key={index} className="flex justify-between gap-3 px-4 py-2 border border-black border-solid rounded-2xl">
            <p>{wallet.name}</p>
            <span>{wallet.logo}</span>
          </div>
        ))}
      </div>
    </dialog>
  );
}
