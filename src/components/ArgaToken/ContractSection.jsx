import Image from "next/image";

import BgContract from "@/../public/ViviendaPropia/forms_bg.svg"

export default function ContractSection() {
  return (
    <section className='px-10 py-10 sm:py-32 relative flex items-center w-full flex-col justify-center'>
      <div className='w-full bg-[linear-gradient(120.89deg,rgba(255,255,255,0.063)_5.96%,rgba(255,255,255,0.012)_68.72%)] rounded-2xl drop-shadow-[0px_1px_4px_0px_#0B370045] shadow-[0px_4px_5px_0px_#FFFFFF29_inset] px-10 py-20 flex flex-col gap-12 items-center text-clamp-text backdrop-blur-sm'>
        <div className="flex items-center gap-[1.5rem_3rem] flex-row flex-wrap justify-center">
          <p className='uppercase shrink-0 font-semibold'>CONTRATO ARGA TOKEN</p>
          <p className="font-monserrat break-all">0xe49A8863cb86f962100767dfD7Dee165E187A571</p>
        </div>
        <div className="flex justify-center flex-wrap *:flex-1 max-w-screen-md gap-[1.5rem_2.5rem] *:max-w-[300px]">
          <button className="px-12 min-w-fit py-2 rounded-full border border-solid border-white">Auditoria</button>
          <button className="px-12 min-w-fit py-2 rounded-full border border-solid border-white">White Paper</button>
          <button className="px-12 min-w-fit py-2 rounded-full border border-solid border-white">Opinión Legal</button>
        </div>
      </div>
      <Image src={BgContract} alt="background" className="absolute px-5  -z-10 w-full  max-w-[850px]" />
    </section>
  )
}
