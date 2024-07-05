'use client'

import Image from 'next/image'

import Blockchain from '@/../public/Vesting/Blockchain.png'
import Disponibility from '@/../public/Vesting/Disponibility.png'
import Properties from '@/../public/Vesting/Properties.png'


const WhyInvest = () => {
  return (
    <div className="flex flex-col items-center justify-cente text-white py-16">
      <h1 className="text-3xl font-bold mb-12">¿Por qué invertir con Argatio?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <Image src={Properties} alt="Propiedades" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">PROPIEDADES</h2>
          <p className="text-center mt-2">Se escogen estratégicamente los inmuebles con mayor rentabilidad</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Blockchain} alt="Blockchain" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">BLOCKCHAIN</h2>
          <p className="text-center mt-2">Garantía de seguridad, la transparencia y la trazabilidad de los datos</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Disponibility} alt="Disponibilidad" width={64} height={64} />
          <h2 className="mt-4 text-xl font-semibold">DISPONIBILIDAD</h2>
          <p className="text-center mt-2">Puedes retirar tus ganancias mensualmente</p>
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;
