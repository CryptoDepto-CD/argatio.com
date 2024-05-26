import Image from "next/image";
import Link from "next/link";

export default function ViviendaPropia() {
  return (
    <main className="font-monserrat h-screen flex flex-col items-center justify-center text-center">
      {/* Página temporal, es para redirigir al inicio. */}
      <h3 className="font-bold text-4xl mb-4">Página en construcción</h3>
      <p className="mb-4">
        Estamos creando esta página todavía, te avisaremos cuando esté lista.
      </p>
      <Link href="/" className="bg-white text-black font-bold p-4 rounded-lg">
        Volver al inicio
      </Link>
    </main>
  );
}
