"use client";

import { useFormState } from "react-dom";

import { sendFeedback } from "@/lib/actions";
import ButtonTemplate from "@/components/ui/Button";

export default function FeedbackForm() {
  const [state, formAction] = useFormState(sendFeedback, {
    message: null,
  });

  return (
    <form action={formAction} className="flex flex-col items-center w-full gap-5 px-2 lg:px-10">
      <textarea name="feedback" id="feedback" className="w-full text-clamp-text p-5 border-2 outline-none resize-none h-32 lg:h-24 rounded-[30px]  placeholder:italic text-black font-montserrat focus:border-gray-500" placeholder="El proyecto me pareció..." required />
      {state.message && <p className="text-clamp-text text-red" >{state.message}</p>}
      <div className="flex justify-center w-full lg:justify-end">
        {/* <button className="px-16 py-2 text-lg font-semibold text-white uppercase rounded-full w-fit lg:w-6/12 bg-bluePrimary ">Enviar</button> */}
        {/* <ButtonTemplate title="Enviar" className="px-16 py-2 text-lg font-semibold uppercase rounded-full w-fit lg:w-6/12" textColor="white" bgColor="bluePrimary" /> */}
        <button className="px-10 py-2 text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90 lg:text-xl">Enviar</button>
      </div>
    </form>
  );
}
