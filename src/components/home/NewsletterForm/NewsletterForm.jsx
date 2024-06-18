"use client";

import { useFormState } from "react-dom";

import { submitEmailOfNewsletter } from "@/lib/actions";

import { useTranslations } from "next-intl";

export default function NewsletterForm() {

  const t = useTranslations('home.newsForm');

  const [state, formAction] = useFormState(submitEmailOfNewsletter, {
    message: null,
  });

  return (
    <form action={formAction} className="flex flex-col items-center w-full font-montserrat">
      <div className="flex items-center justify-between w-full gap-5">
        <label htmlFor="email" className="hidden text-clamp-text sm:block lg:text-xl">
        {t('subs')}
        </label>
        <input
          type="email"
          id="email"
          name="id"
          required
          placeholder="name@argatio.com"
          className="w-full px-5 text-center bg-transparent bg-black border-b-2 outline-none border-b-white placeholder:italic text-clamp-text"
        />
        <div className="object-center w-10 h-10 overflow-hidden ">
          <button className="w-10 h-10 rotate-45 bg-white -translate-x-7"></button>
        </div>
      </div>
      {state.message && <p className="text-clamp-text text-redPrimary" >{state.message}</p>}
    </form>
  );
}
