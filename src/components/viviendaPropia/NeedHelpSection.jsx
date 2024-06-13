import { useTranslations } from "next-intl";
import Button from "../ui/Button/Button";
import Details from "./DetailsComponent/Details";

export default function NeedHelpSection() {

  const t = useTranslations("vivienda-propia.need-help-section")

  const elements = [
    {
      title: t("questions.n-1.question"),
      children: (
        <>
          <p>
            {t("questions.n-1.answer-1")}
          </p>
          <p>
            {t("questions.n-1.answer-2")}
          </p>
        </>
      ),
    },
    {
      title: t("questions.n-2.question"),
      children: (
        <>
          <p>
            {t("questions.n-2.answer-1")}
          </p>
          <p>
            <strong>{t("questions.n-2.answer-2.strong")}</strong>{t("questions.n-2.answer-2.text")}
          </p>
          <p>
            <strong>{t("questions.n-2.answer-3.strong")}</strong> {t("questions.n-2.answer-3.text")}
          </p>
          <p>
            <strong>{t("questions.n-2.answer-4.strong")}</strong> {t("questions.n-2.answer-4.text")}
          </p>
          <p>
            <strong>{t("questions.n-2.answer-5.strong")}</strong> {t("questions.n-2.answer-5.text")}
          </p>
          <p>
            <strong>{t("questions.n-2.answer-6.strong")}</strong> {t("questions.n-2.answer-6.text")}
          </p>
          <p>
            {t("questions.n-2.answer-7")}
          </p>
        </>
      ),
    },
    {
      title: t("questions.n-3.question"),
      children: (
        <>
          <p>
          {t("questions.n-3.answer-1")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-2.strong")}</strong> {t("questions.n-3.answer-2.text")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-3.strong")}</strong> {t("questions.n-3.answer-3.text")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-4.strong")}</strong> {t("questions.n-3.answer-4.text")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-5.strong")}</strong> {t("questions.n-3.answer-5.text")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-6.strong")}</strong> {t("questions.n-3.answer-6.text")}
          </p>
          <p>
            <strong>{t("questions.n-3.answer-7.strong")}</strong> {t("questions.n-3.answer-7.text")}
          </p>
          <p>
            {t("questions.n-3.answer-8")}
          </p>
        </>
      ),
    },
    {
      title: t("questions.n-4.question"),
      children: (
        <>
          <p>
            {t("questions.n-4.answer-1")}
          </p>
          <p>
            <strong>{t("questions.n-4.answer-2.strong")}</strong> {t("questions.n-4.answer-2.text")}
          </p>
          <p>
            <strong>{t("questions.n-4.answer-3.strong")}</strong> {t("questions.n-4.answer-3.text")}
          </p>
          <p>
            <strong>{t("questions.n-4.answer-4.strong")}</strong> {t("questions.n-4.answer-4.text")}
          </p>
          <p>
            <strong>{t("questions.n-4.answer-5.strong")}</strong> {t("questions.n-4.answer-5.text")}
          </p>
          <p>
            {t("questions.n-4.answer-6")}
          </p>
        </>
      ),
    },
    {
      title: t("questions.n-5.question"),
      children: (
        <>
          <p>
            {t("questions.n-5.answer-1")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-2.strong")}</strong> {t("questions.n-5.answer-2.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-3.strong")}</strong> {t("questions.n-5.answer-3.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-4.strong")}</strong> {t("questions.n-5.answer-4.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-5.strong")}</strong> {t("questions.n-5.answer-5.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-6.strong")}</strong> {t("questions.n-5.answer-6.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-7.strong")}</strong> {t("questions.n-5.answer-7.text")}
          </p>
          <p>
            <strong>{t("questions.n-5.answer-8.strong")}</strong> {t("questions.n-5.answer-8.text")}
          </p>
          <p>
            {t("questions.n-5.answer-9")}
          </p>
        </>
      ),
    },
    {
      title: t("questions.n-6.question"),
      children: (
        <>
          <p>{t("questions.n-6.answer-1")}</p>
          <p>
            <strong>{t("questions.n-6.answer-2.strong")}</strong> {t("questions.n-6.answer-2.text")}
          </p>
          <p>
            <strong>{t("questions.n-6.answer-3.strong")}</strong> {t("questions.n-6.answer-3.text")}
          </p>
          <p>
            <strong>{t("questions.n-6.answer-4.strong")}</strong> {t("questions.n-6.answer-4.text")}
          </p>
          <p>
            <strong>{t("questions.n-6.answer-5.strong")}</strong> {t("questions.n-6.answer-5.text")}
          </p>
          <p>
            <strong>{t("questions.n-6.answer-6.strong")}</strong> {t("questions.n-6.answer-6.text")}
          </p>
          <p>
            {t("questions.n-6.answer-7")}
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full px-10 py-20 font-montserrat">
      <h2 className="pb-10 mx-auto leading-tight text-center uppercase text-clamp-big font-nats">
        {t("title")}
      </h2>
      <div className="max-w-[1050px] mx-auto px-5 text-black flex flex-col gap-5 ">
        {elements.map((element, index) => (
          <Details key={index} title={element.title}>{element.children}</Details>
        ))}
      </div>
      <div className="flex items-center p-5 mx-auto max-w-52 my-9">
        <Button type="link" href="https://t.me/+RHYVHbF6iPMwZTgx">{t("button")}</Button>
      </div>
    </section>
  );
}
