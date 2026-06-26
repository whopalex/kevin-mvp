import { A, silver, orangeText, fontDisplay, fontBody } from "./constants";

export default function GuestsSection() {
  return (
    <section className="w-full pt-[48px] pb-[52px] md:pb-[80px] flex flex-col gap-[60px] md:gap-[86px] items-center overflow-hidden">
      <div className="flex flex-col gap-[24px] md:gap-[28px] items-center text-center max-w-[960px] px-4">
        <h2 className="text-[clamp(30px,5vw,50px)] leading-[0.98]" style={{ fontFamily: fontDisplay }}>
          <span style={silver}>Tendremos algunos invitados</span>
          <span style={orangeText}> especiales</span>
        </h2>
        <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
          <span className="text-white font-semibold">
            Todos lideres en sus areas y en esta industria:
          </span>{" "}
          Vamos a traerte a los mas grandes para que tu crecimiento sea
          EXPONENCIAL Asegura tu entrada al precio mas bajo posible
        </p>
      </div>

      {/* Infinite marquee — two identical groups translated -50% for a seamless loop */}
      <div className="w-full overflow-hidden carousel-fade-mask">
        <div className="flex w-max animate-marquee-slow" style={{ animationDuration: "60s" }}>
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex gap-[16px] pr-[16px] md:gap-[28px] md:pr-[28px] shrink-0" aria-hidden={dup === 1}>
              {A.ponentes.map((src) => (
                <li key={src} className="shrink-0">
                  <img
                    src={src}
                    alt=""
                    className="h-[300px] sm:h-[360px] md:h-[382px] w-[280px] sm:w-[440px] md:w-[500px] rounded-[12px] md:rounded-[16px] object-cover"
                    style={{ border: "1px solid #262626" }}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
