import Button from "../ui/Button/Button";


export default function KnowTheTeamSection() {
  return (
    <section className="px-10 py-10">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-title">Conoce el equipo</h2>
      <p className="max-w-screen-lg mx-auto text-center text-balance text-clamp-text ">El equipo de Argatio está dedicado a revolucionar el mercado inmobiliario mediante la integración de tecnología avanzada y un enfoque centrado en el usuario. Juntos, trabajamos para ofrecer soluciones accesibles, seguras y transparentes que beneficien tanto a inversores como a inquilinos y propietarios.</p>
      <div className="my-16 text-center">
        <Button type="link" href="/UnderConstruction">
          Quienes Somos
        </Button>
      </div>
    </section>
  )
}
