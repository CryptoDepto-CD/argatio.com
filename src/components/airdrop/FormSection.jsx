"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Button from "../ui/Button/Button";

export default function FormSection() {
  const t = useTranslations("airdrop.form");

  const questions = ["question-1", "question-2", "question-3"];

  return (
    <section className="my-20 mx-10 md:mx-20">
      <form className="font-montserrat max-w-screen-lg mx-auto">
        {questions.map((question, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 text-clamp-text md:mb-12 mb-8"
          >
            <p className="w-100 text-center p-5 text-clamp-text  border-2 border-white border-solid my-6 bg-black rounded-lg">
              {t(`${question}.question`)}
            </p>
            <div className="flex flex-row gap-2 align-baseline justify-start md:align-center">
              <input
                id={question + "-first"}
                name={question}
                type="radio"
                value="1"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
              />
              <label
                htmlFor={question + "-first"}
                className="leading-none h-fit my-auto"
              >
                {t(`${question}.answer-1`)}
              </label>
            </div>
            <div className="flex flex-row gap-2 align-baseline justify-start md:align-center">
              <input
                id={question + "-second"}
                name={question}
                type="radio"
                value="2"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
              />
              <label
                htmlFor={question + "-second"}
                className="leading-none h-fit my-auto"
              >
                {t(`${question}.answer-2`)}
              </label>
            </div>
            <div className="flex flex-row gap-2 align-baseline justify-start md:align-center">
              <input
                id={question + "-third"}
                name={question}
                type="radio"
                value="3"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
              />
              <label
                htmlFor={question + "-third"}
                className="leading-none h-fit my-auto"
              >
                {t(`${question}.answer-3`)}
              </label>
            </div>
          </div>
        ))}
        <div className="w-fit mx-auto">
          <Button
            type="button"
            onclick={(e) => {
              e.preventDefault();
            }}
          >
            {t("btn-submit")}
          </Button>
        </div>
      </form>
    </section>
  );
}
