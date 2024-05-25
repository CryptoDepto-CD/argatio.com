import Link from "next/link";

export default function MediaSection() {
  const elements = [
    { text: "TEV", url: "https://youtu.be/bAHGan9dDOQ?si=XUacyTmp6SMK8isJ" },
    {
      text: (<>Frecuencia<br />Money</>),
      url: "https://noticias.mobilemoneylatam.com/2024/05/19/tokenizacion-de-propiedades/",
    },
    {
      text: "Iproup",
      url: "https://www.iproup.com/economia-digital/47460-criptomonedas-hipotecario-vivienda-credito-tokenizacion",
    },
  ];

  return (
    <section className="px-10 py-10">
      <h2 className="py-10 text-center uppercase font-nats text-clamp-title">
        Medios
      </h2>
      <div className="flex flex-wrap items-center justify-center h-full gap-[3.5rem_8vw]">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex items-center px-10 justify-center  bg-black rounded-full h-[clamp(20ch,30vw,28ch)] aspect-square"
          >
            <Link
              href={element.url}
              target="_blank"
              className="w-full text-center text-[clamp(2rem,5vw,2.8rem)] font-nats"
            >
              {element.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
