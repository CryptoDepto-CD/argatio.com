import ApplyForm from "./ApplyForm/ApplyForm";

export default function ApplyAsBuyerSection() {
  return (
    <section className="max-w-[750px]">
      <h2 className="pb-10 mx-auto leading-tight text-center uppercase text-clamp-big font-nats">
        postulate como comprador
      </h2>
      <p className="max-w-[50ch] text-center text-clamp-text font-montserrat text-balance mx-auto min-h-[10ch]">
        Convertite en dueño, con un plan ajustado a tus posibilidades. <br />
        Completá el formulario y nos pondremos en contacto con vos para
        continuar con el proceso.
      </p>
      <ApplyForm type="buyer" />
    </section>
  );
}
