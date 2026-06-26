import { A, silver, fontDisplay, fontBody } from "./constants";
import { CtaButton } from "./ui";

export default function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden pt-[44px] tablet:pt-[68px] pb-[120px] md:pb-[150px] flex justify-center">
      <img
        src={A.finalBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="relative z-10 w-full max-w-[720px] px-4 flex flex-col gap-[32px] items-center text-center">
        <div className="flex flex-col gap-[20px] items-center">
          <h2 className="text-[clamp(30px,5vw,50px)] leading-[1.15]" style={{ fontFamily: fontDisplay, ...silver }}>
            La pregunta es simple
          </h2>
          <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.55]" style={{ fontFamily: fontBody }}>
            ¿Quieres seguir operando un negocio? ¿O quieres construir una
            empresa? Si llegaste hasta aquí, probablemente ya sabes cuál es la
            respuesta.
          </p>
        </div>
        <CtaButton
          label="Entrar al mastermind"
          href="#beyond-pricing"
          className="max-w-[404px]"
        />
      </div>
    </section>
  );
}
