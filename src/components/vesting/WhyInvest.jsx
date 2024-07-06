'use client'

import Image from 'next/image'
import { useTranslations } from "next-intl";

import Blockchain from '@/../public/Vesting/Blockchain.png'
import Disponibility from '@/../public/Vesting/Disponibility.png'
import Properties from '@/../public/Vesting/Properties.png'


const WhyInvest = () => {

  const t = useTranslations("vesting.whyInvest");

  return (
    <div className="flex flex-col items-center justify-cente text-white py-16">
      <h1 className="text-3xl font-bold mb-12">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <Image src={Properties} alt="Propiedades" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">{t('prop')}</h2>
          <p className="text-center mt-2">{t('text1')}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Blockchain} alt="Blockchain" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">{t('block')}</h2>
          <p className="text-center mt-2">{t('text2')}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Disponibility} alt="Disponibilidad" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">{t('disp')}</h2>
          <p className="text-center mt-2">{t('text3')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;
