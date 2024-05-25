"use client";
import Button from "../ui/Button/Button";

export default function NewsletterSection() {
  return (
    <section className="flex flex-col items-center px-10 text-center py-14">
      <h3 className="text-2xl font-semibold uppercase">
        Te invitamos a registrarte
      </h3>
      <p className="text-clamp-text">
        podrás recibir actualizaciones y promociones
      </p>
      <form className="flex flex-col w-full md:w-2/4 max-w-xl gap-16 p-8 py-12 mx-auto rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.063)_5.96%,rgba(255,255,255,0.012)_68.72%)] my-10 drop-shadow-[0px_1px_4px_0px_#0B370045] shadow-[0px_4px_5px_0px_#FFFFFF29_inset]">
        <div className="text-sm text-black md:text-lg">
          {/* <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre y Apellido"
            className="w-full px-6 py-2 mb-5 border border-black border-solid rounded-lg outline-none placeholder:italic"
          /> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Mail"
            className="w-full px-6 py-2 border border-black border-solid rounded-lg outline-none placeholder:italic "
          />
        </div>
        <div className="mx-auto my-5 max-w-fit">
          <Button
            type="button"
            onclick={(e) => {
              e.preventDefault();
            }}
          >
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
}
