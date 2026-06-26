import { A, orangeText, fontDisplay, fontBody } from "./constants";

export default function NotFormationSection() {
  return (
    <section className="w-full pt-[80px] md:pt-[120px] pb-[56px] md:pb-[72px] flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col notebook:flex-row gap-[64px] notebook:gap-[110px] items-center">
        <img
          src={A.mockupCelular}
          alt=""
          className="w-full max-w-[340px] tablet:max-w-[440px] notebook:w-[430px] mx-auto shrink-0 rounded-[20px] object-cover"
        />
        <div className="flex flex-col gap-[18px] items-start max-w-[630px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[18px] leading-[1.6]" style={{ fontFamily: fontBody }}>
              ¿Qué es este mastermind?
            </p>
            <h2 className="text-[clamp(30px,5vw,48px)] leading-[1.05]" style={{ fontFamily: fontDisplay, ...orangeText }}>
              No es una formación
            </h2>
          </div>
          <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.62]" style={{ fontFamily: fontBody }}>
            No voy a enseñarte cómo crear un PDF. No voy a enseñarte cómo lanzar
            anuncios. No voy a enseñarte cómo conseguir tus primeras ventas.
          </p>
          <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.62]" style={{ fontFamily: fontBody }}>
            Para eso existe MVP. Para eso existe X1. Este espacio existe para
            algo diferente. Aquí vamos a hablar de visión. De liderazgo. De
            escalabilidad. De construcción empresarial. De cómo veo internet en
            2026 y dónde creo que estarán las{" "}
            <span className="text-white font-semibold">
              mayores oportunidades durante los próximos años.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
