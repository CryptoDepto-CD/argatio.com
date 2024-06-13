"use client";

import { useFormState } from "react-dom";

import { sendFeedback } from "@/lib/actions";
import ButtonTemplate from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function FeedbackForm() {

  const t = useTranslations('feedForm');

  const [state, formAction] = useFormState(sendFeedback, {
    message: null,
  });

  return (
    <form action={formAction} className="flex flex-col items-center w-full gap-5 px-2 lg:px-10">
      <input id="email" name="email" placeholder="Email" type="email" required className="px-4 md:px-6 py-2  text-black transition-all bg-white text-clamp-text rounded-2xl  outline-none border-2 focus:border-gray-500 placeholder:italic w-full font-montserrat" />
      <textarea name="feedback" id="feedback" className="w-full text-clamp-text p-5 border-2 outline-none resize-none h-32 lg:h-24 rounded-[30px]  placeholder:italic text-black font-montserrat focus:border-gray-500" placeholder={t('text')}required />
      {state.message && <p className="text-clamp-text text-red" >{state.message}</p>}
      <div className="flex justify-center w-full lg:justify-end">
        <button className="px-10 py-2 text-black uppercase bg-white border-2 border-black border-solid rounded-full font-montserrat hover:opacity-90 lg:text-xl"> {t('button')}</button>
      </div>
    </form>
  );
}
