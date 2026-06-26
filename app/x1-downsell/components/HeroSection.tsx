import { DS, silver, orangeGrad } from "./constants";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center gap-10 md:gap-[60px] pt-14 md:pt-[100px] pb-8 md:pb-[40px] px-4 overflow-hidden">
      {/* Title */}
      <h1
        className="text-center w-full max-w-[760px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          lineHeight: "1.08",
        }}
      >
        <span
          className="block"
          style={{
            ...silver,
            fontSize: "clamp(32px, 6vw, 58px)",
          }}
        >
          ACABAS DE GANAR
        </span>
        <span
          className="block"
          style={{
            ...orangeGrad,
            fontSize: "clamp(32px, 6vw, 58px)",
          }}
        >
          $50 DÓLARES
        </span>
      </h1>

      {/* Hero money image */}
      <div className="w-full max-w-[562px] mx-auto">
        <img
          src={DS.heroMoney}
          alt="$50 dólares de descuento"
          className="w-full h-auto object-contain"
          style={{ maxHeight: "368px" }}
        />
      </div>

      {/* Description */}
      <p
        className="text-center w-full max-w-[760px] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]"
        style={{ fontFamily: "BDO Grotesk, sans-serif", color: "#b0b0b0" }}
      >
        Mira, entiendo. $147 dólares puede ser mucho en este momento. Acabas de
        invertir en el Sistema MVP y quizás no tienes disponible ese dinero
        adicional ahora mismo.
        <br />
        <br />
        <span
          style={{ fontWeight: 600, color: "#fff" }}
        >
          No quiero que el precio sea una excusa para no aprovechar
        </span>{" "}
        esta increíble oportunidad para{" "}
        <span style={{ fontWeight: 600, color: "#fff" }}>
          acelerar tus resultados.
        </span>{" "}
        Por eso, solo ahora en esta página y por última vez reduciré el precio
        de{" "}
        <span style={{ fontWeight: 600, color: "#fff" }}>X1 PRO MAX con </span>
        <span
          style={{
            fontWeight: 600,
            background:
              "linear-gradient(123deg, #fff 50.75%, #ff490b 75.52%, #ff7a4d 96.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          50 dólares menos del precio original.
        </span>
      </p>
    </section>
  );
}
