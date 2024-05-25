import Image from "next/image";

import Assignements from '@/../public/ArgaToken/assignements2.png'

export default function AssignmentsSection() {
  return (
    <section className="px-10 py-10">
      <h2 className="text-center uppercase font-nats text-clamp-title">Asignaciones</h2>
      <p className="text-sm text-center uppercase md:text-base">Distribución de Tokens</p>
      <Image src={Assignements} alt="Distribucion de tokens" className="mx-auto" />
    </section>
  )
}
