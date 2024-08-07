import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: {
      ...(await import(`../locales/${locale}/home.json`)).default,
      ...(await import(`../locales/${locale}/common.json`)).default,
      ...(await import(`../locales/${locale}/argatoken.json`)).default,
      ...(await import(`../locales/${locale}/viviendaPropia.json`)).default,
      ...(await import(`../locales/${locale}/aboutUs.json`)).default,
      ...(await import(`../locales/${locale}/wallet.json`)).default,
      ...(await import(`../locales/${locale}/airdrop.json`)).default,
      ...(await import(`../locales/${locale}/vesting.json`)).default,
    },
  };
});