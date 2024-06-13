import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function ViviendaPropia() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-6 text-center px-7 font-monserrat">
      {/* Página temporal, es para redirigir al inicio. */}
      <h3 className="mb-4 text-4xl font-bold leading-none font-nats text-clamp-ultrabig">
        Página en construcción
      </h3>
      <p className="mb-4 text-clamp-text">
        Estamos creando esta página todavía, te avisaremos cuando esté lista.
      </p>
      <div className="mx-auto mb-16 w-fit">
        <Button type="link" href="/">
          Regresar al Inicio
        </Button>
      </div>
    </main>
  );
}
