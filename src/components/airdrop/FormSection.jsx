"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Button from "../ui/Button/Button";

export default function FormSection({disabled}) {
  
  const t = useTranslations("airdrop.form");

  const questions = ["question-1", "question-2", "question-3"];

  const formStyles = `max-w-screen-lg mx-auto font-montserrat ${disabled === "true" ? "opacity-60" : ""}`

  return (
    <section className="mx-10 my-20 md:mx-20">
      <form className={formStyles}>
        {questions.map((question, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 mb-8 text-clamp-text md:mb-12"
          >
            <p className="p-5 my-6 text-center bg-black border-2 border-white border-solid rounded-lg w-100 text-clamp-text">
              {t(`${question}.question`)}
            </p>
            <div className={`flex flex-row justify-start gap-2 align-baseline md:align-center ${disabled === "true" && "*:cursor-not-allowed"}`}>
              <input
                id={question + "-first"}
                name={question}
                type="radio"
                value="1"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
                disabled={disabled === "true"}
              />
              <label
                htmlFor={question + "-first"}
                className="my-auto leading-none h-fit"
              >
                {t(`${question}.answer-1`)}
              </label>
            </div>
            <div className={`flex flex-row justify-start gap-2 align-baseline md:align-center ${disabled === "true" && "*:cursor-not-allowed"}`}>
              <input
                id={question + "-second"}
                name={question}
                type="radio"
                value="2"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
                disabled={disabled === "true"}
              />
              <label
                htmlFor={question + "-second"}
                className="my-auto leading-none h-fit"
              >
                {t(`${question}.answer-2`)}
              </label>
            </div>
            <div className={`flex flex-row justify-start gap-2 align-baseline md:align-center ${disabled === "true" && "*:cursor-not-allowed"}`}>
              <input
                id={question + "-third"}
                name={question}
                type="radio"
                value="3"
                className="h-fit aspect-square min-w-7 w-7 bg-[#D9D9D9] checked:bg-black appearance-none rounded-full border-[6px] border-solid border-[#D9D9D9]"
                disabled={disabled === "true"}
              />
              <label
                htmlFor={question + "-third"}
                className="my-auto leading-none h-fit"
              >
                {t(`${question}.answer-3`)}
              </label>
            </div>
          </div>
        ))}
        <div className={`mx-auto w-fit ${disabled === "true" && "*:cursor-not-allowed"}`}>
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
