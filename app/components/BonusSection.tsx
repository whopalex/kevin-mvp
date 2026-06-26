"use client";

type BonusCardProps = {
  number: number;
  title: string;
  paragraphs: string[];
  imageReversed?: boolean;
};

function BonusCard({ number, title, paragraphs, imageReversed }: BonusCardProps) {
  return (
    <div
      className="w-full flex flex-col lg:flex-row items-center justify-center gap-[90px] max-[767px]:gap-[12px]"
      style={{
        maxWidth: "1240px",
        marginTop: number === 1 ? "72px" : "50px",
        marginBottom: number === 1 ? "-16px" : undefined,
      }}
    >
      {/* Image side */}
      <div
        className={`flex items-center justify-center shrink-0 max-w-[360px] lg:max-w-none ${imageReversed ? "lg:order-2" : ""}`}
        style={{ width: "min(506px, 100%)" }}
      >
        <img
          src={`/assets/images/recurso0${number}_1x.webp`}
          alt={`Recurso ${number}`}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text side */}
      <div
        className={`flex flex-col justify-center gap-5 shrink-0 -mt-4 lg:mt-0 ${imageReversed ? "lg:order-1" : ""}`}
        style={{ width: "min(573px, 100%)" }}
      >
        <div className="tag-resultados" style={{ margin: 0 }}>
          <span className="text degrade">Recurso {number}</span>
        </div>

        <h3
          className="text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px,3.5vw,2rem)",
            fontWeight: 400,
            lineHeight: "1.12em",
          }}
        >
          {title}
        </h3>

        <div
          className="flex flex-col gap-4 text-[#C3BFD6]"
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.05rem, 2vw, 1.1125rem)", lineHeight: "1.5em" }}
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BonusSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-4 pt-[70px] pb-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center text-center w-full" style={{ gap: "18px" }}>
        <h2
          className="text-white max-w-full md:max-w-[803px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(30px,5.5vw,52px)",
            lineHeight: "1.1em",
          }}
        >
          Y eso no es todo, también recibes estos recursos adicionales gratis
        </h2>
        <p
          className="text-[#C3BFD6]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.05rem, 2vw, 22px)",
            lineHeight: "1.5em",
          }}
        >
          (Valorados en más de $1000 dólares)...
        </p>
      </div>

      <BonusCard
        number={1}
        title="14 días gratis de Alizia"
        paragraphs={[
          "Alizia es el bot que usamos para generar los pagos directos a tu cuenta de banco de manera 100% automática... para que no tengas que responder ni un solo mensaje.",
          "Solo sigues un paso a paso simple, configuras tus datos de banco local al que quieres recibir los pagos y listo. Esta es la misma herramienta que yo uso para hacer $200, $300 y $500 dólares al día.",
        ]}
      />

      <BonusCard
        number={2}
        title="Caso de Estudio: 1.000 ventas en 1 día"
        imageReversed
        paragraphs={[
          "Es el registro completo de un día en el que un solo producto, generó más de 1.000 ventas en 24 horas... allí te muestro cómo lo hice paso a paso.",
          "Y una vez lo veas, vas a tener el mapa exacto de cómo pasar de tus primeras ventas a tu primer día de $300, $500 dólares o más",
        ]}
      />

      <BonusCard
        number={3}
        title="Producto Devocional listo"
        paragraphs={[
          "Sé que no es suficiente con el caso de estudio, vas a querer replicarlo también. Es por eso que te voy a entregar el mismo producto para que puedas replicarlo hoy mismo y comenzar a recibir tus primeras transferencias. Tan solo imagina lo que pasaría si lograras más de 1000 ventas en un solo día... 1000 transferencias de $3 dólares, son más de $3000 dólares en un día!!!",
        ]}
      />

      <BonusCard
        number={4}
        title="Caja Rápida (afiliados MVP)"
        imageReversed
        paragraphs={[
          "Afíliate al Sistema MVP y gana el 50% de comisión por cada venta... Te entregaré el embudo ya armado, los anuncios listos para descargar y pautar e incluso secuencias de historias para que publiques en tu Instagram y ganes desde el primer día. Con solo 2 ventas ya recuperarás el 100% de lo que pagas hoy.",
        ]}
      />
    </section>
  );
}
