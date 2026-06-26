import { A, silver, x1CardStyle } from "./constants";

const MODULES = [
  {
    title: "El Método de Contribución completo",
    desc: (
      <>
        El mismo cambio que usó Leo para pasar de $13.000 al mes{" "}
        <strong className="text-white">
          a más de $60.000 al mes con la misma metodología.
        </strong>{" "}
        Configuración paso a paso, el mensaje exacto que activa la reciprocidad y
        cómo estructurar la contribución para que las personas transfieran el
        máximo de forma voluntaria.
      </>
    ),
    img: A.img2,
    h: 407,
    imgStyle: { width: "398.74px", right: "118.26px", top: "-21px" } as React.CSSProperties,
  },
  {
    title: "Lateralización de Escala",
    desc: "Cómo pasar de $4 dólares de inversión a $300 dólares al día sin poner en riesgo tu dinero. El mismo sistema que Camila usó para llegar a más de $275 dólares en su primera semana empezando con solo $4 dólares.",
    img: A.img3,
    h: 386,
    imgStyle: { width: "483px", right: "73px", bottom: "-2px" } as React.CSSProperties,
  },
  {
    title: "Activador de Conversiones",
    desc: (
      <>
        Una automatización simple que configuras en menos de 15 minutos y{" "}
        <strong className="text-white">
          que recupera entre un 4% y un 8% adicional
        </strong>{" "}
        de las personas que llegaron a tu WhatsApp pero no transfirieron ese día.
        Con 900 conversaciones diarias eso son entre $144 y $288 dólares
        adicionales — sin hacer nada extra.
      </>
    ),
    img: A.img4,
    h: 386,
    imgStyle: { width: "318.78px", right: "143.22px", bottom: "21.839px" } as React.CSSProperties,
  },
  {
    title: "El Multiplicador de Ganancias",
    desc: "La estrategia para pasar de recibir $3 o $4 dólares por transferencia a $5 o $6. Dos dólares más por venta multiplicados por 90 ventas al día son $180 dólares adicionales. Con el mismo producto, el mismo bot y el mismo esfuerzo.",
    img: A.img5,
    h: 386,
    imgStyle: { width: "431px", right: "105px", bottom: "-35px" } as React.CSSProperties,
  },
  {
    title: "Sesiones en vivo semanales exclusivas",
    desc: "Una vez a la semana me conecto con los miembros para revisar qué está funcionando, qué ajustar y cómo escalar más rápido. Completamente aparte de las sesiones del Sistema MVP.",
    img: A.img6,
    h: 391,
    imgStyle: { width: "412px", right: "126px", bottom: "-16px" } as React.CSSProperties,
  },
];

export default function ModulesSection() {
  return (
    <section className="w-full flex flex-col items-center gap-14 md:gap-[99px] py-16 md:py-[72px] px-4">
      <h2
        className="text-center max-w-[768px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(34px, 5vw, 58px)",
          lineHeight: "1.01",
          ...silver,
        }}
      >
        Esto es todo lo que recibes dentro de X1 Pro Max:
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-[550px] min-[1140px]:max-w-[1207px] items-center min-[1140px]:items-stretch">
        {MODULES.map((m, i) => {
          const textBlock = (
            <>
              <h3
                style={{
                  fontFamily: "Ragdit, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: "0.95",
                  ...silver,
                }}
              >
                {m.title}
              </h3>
              <p
                className="text-[#b0b0b0] text-[16px] md:text-[18px] leading-relaxed tracking-[0.18px]"
                style={{ fontFamily: "BDO Grotesk, sans-serif" }}
              >
                {m.desc}
              </p>
            </>
          );

          return (
            <div
              key={m.title}
              className="relative rounded-[32px] overflow-hidden"
              style={x1CardStyle}
            >
              {/* Desktop (≥1440px): imagen absoluta */}
              <img
                src={m.img}
                alt={m.title}
                className="hidden min-[1140px]:block absolute object-contain pointer-events-none"
                style={m.imgStyle}
              />

              {/* Desktop (≥1440px): altura fija, texto centrado verticalmente */}
              <div
                className="hidden min-[1140px]:flex flex-col justify-center px-[73px]"
                style={{ height: m.h }}
              >
                <div className="flex flex-col gap-5 w-full max-w-[560px] shrink-0">
                  {textBlock}
                </div>
              </div>

              {/* Notebook / Tablet / Mobile (<1440px): columna, imagen arriba */}
              <div className={`min-[1140px]:hidden flex flex-col items-center gap-6 px-5 md:px-6 pb-10 ${i === 0 ? "pt-0" : "pt-10"}`}>
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full max-w-[260px] md:max-w-[340px] min-[1140px]:max-w-[420px] object-contain"
                />
                <div className="flex flex-col gap-5 w-full">
                  {textBlock}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
