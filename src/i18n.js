import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: {
      ...(await import(`../locales/${locale}/home.json`)).default,
      ...(await import(`../locales/${locale}/common.json`)).default,
      ...(await import(`../locales/${locale}/viviendaPropia.json`)),
      // ...(await import(`../locales/${locale}/about.json`)).default,
    },
  };
});