import { silver, whyCardBg } from "./constants";

export default function WhySection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pb-16 md:pb-[170px] pt-8 md:pt-[40px] px-4 overflow-hidden">
      <div
        className="relative w-full max-w-[1000px] rounded-[24px] md:rounded-[32px] flex flex-col gap-5 md:gap-[24px] items-center pt-10 md:pt-[84px] pb-10 md:pb-[78px] px-5 md:px-[90px] overflow-hidden"
        style={whyCardBg}
      >
        {/* Top decorative light line */}
        <img
          src="/assets/x1/svg/linearriba.svg"
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] max-w-none pointer-events-none"
          aria-hidden
        />

        {/* Title */}
        <h2
          className="relative text-center w-full"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(28px, 4.5vw, 48px)",
            lineHeight: "0.95",
            ...silver,
          }}
        >
          ¿Por qué hago esto?
        </h2>

        {/* Body */}
        <div
          className="relative text-center text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px] w-full"
          style={{ fontFamily: "BDO Grotesk, sans-serif", color: "#b0b0b0" }}
        >
          <p>
            Porque prefiero que entres a $97 dólares{" "}
            <span style={{ fontWeight: 600, color: "#fff" }}>
              y tengas acceso al Método de Contribución desde el primer día
            </span>{" "}
            — que esperar a que lo descubras por tu cuenta meses después.
          </p>
          <br />
          <p>
            Y porque sé que una vez apliques el Método de Contribución, esos
            $97 lo recuperas en las primeras horas. Recuerda lo que viste con
            Camila — empezó con $4 dólares y en una semana tenía más de $275
            dólares. Con el Método de Contribución activo desde el primer día,{" "}
            <span style={{ fontWeight: 600, color: "#fff" }}>
              eso es exactamente lo que puede pasarte a ti.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
