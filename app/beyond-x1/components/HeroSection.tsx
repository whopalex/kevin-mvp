import { A, silver, orangeText, fontDisplay, fontBody } from "./constants";
import { CtaButton } from "./ui";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={A.heroBg}
        alt=""
        className="absolute top-0 inset-x-0 w-full h-[clamp(420px,68vw,520px)] object-cover object-top pointer-events-none select-none tablet:inset-0 tablet:bottom-auto tablet:h-[640px] notebook:bottom-0 notebook:h-full"
      />
      {/* Bottom fade into the page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050208] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 pt-[clamp(305px,52vw,425px)] tablet:pt-[420px] notebook:pt-[500px] pb-[90px] flex flex-col notebook:flex-row items-center notebook:items-start justify-between gap-[30px] notebook:gap-10">
        <h1
          className="text-center notebook:text-left leading-[0.88] whitespace-nowrap text-[clamp(40px,10vw,110px)] max-[530px]:text-[50px] tablet:text-[90px] notebook:text-[clamp(60px,9vw,110px)]"
          style={{ fontFamily: fontDisplay }}
        >
          <span style={silver}>Beyond</span>
          <span style={orangeText}> X1</span>
        </h1>

        <div className="w-full max-w-[432px] tablet:max-w-[620px] notebook:max-w-[432px] flex flex-col gap-[20px] notebook:gap-[30px] items-center notebook:items-start text-center notebook:text-left">
          <p
            className="text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]"
            style={{ fontFamily: fontBody, color: "rgba(255,255,255,0.75)" }}
          >
            El círculo donde dejamos de hablar de ventas y{" "}
            <span className="text-white font-semibold">
              comenzamos a hablar de empresas.
            </span>{" "}
            Si ya sabes vender, lanzar productos y generar resultados, la
            pregunta ya no es cómo ganar más dinero.
            <br />
            <br />
            <span className="font-semibold text-[#ff4c0f]">La pregunta es:</span>
            <span className="font-semibold text-white">
              {" "}
              ¿cómo construyes una empresa capaz de crecer durante los próximos
              años?
            </span>
          </p>
          <CtaButton
            label="Entrar al mastermind"
            href="#beyond-pricing"
            className="max-w-[390px]"
          />
        </div>
      </div>
    </section>
  );
}
