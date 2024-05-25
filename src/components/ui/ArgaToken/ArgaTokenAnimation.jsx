
export default function ArgaTokenAnimation() {

  return (
    <div className={`font-nats aspect-square rounded-full border-[clamp(15px,2.5vw,25px)] flex items-center text-center w-fit animate-[argatoken_2s_cubic-bezier(0.5,0,0.6,1)_infinite]`}>
      <p className="text-clamp-ultrabig uppercase leading-none px-[clamp(15px,3vw,45px)]">
        Arga
        <br />
        Token
      </p>
    </div>
  );
}
