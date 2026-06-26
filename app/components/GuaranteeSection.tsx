"use client";

export default function GuaranteeSection() {
  return (
    <section className="relative w-full px-4 flex justify-center" style={{ paddingTop: "clamp(50px,8vw,80px)", paddingBottom: "clamp(50px,8vw,75px)" }}>
      <div className="w-full max-w-[1218px] flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        {/* Left: 7 days visual */}
        <div className="flex-shrink-0 flex flex-col items-start">
          <img
            src="/assets/svg/Garantia.svg"
            alt="7 Días de Garantía"
            className="w-full max-w-[572px] h-auto"
          />
        </div>

        {/* Right: guarantee text */}
        <div className="flex-1 flex flex-col gap-5 max-w-[567px]">
          <div className="flex flex-col gap-2">
            <p
              className="text-white text-[17.6px] font-semibold"
              style={{ fontFamily: "BDO Grotesk, sans-serif" }}
            >
              Confío tanto en el poder del Sistema MVP que
            </p>
            <h2
              className="font-bold leading-[1.05]"
              style={{
                fontSize: "clamp(30px,4.5vw,40px)",
                fontFamily: "Ragdit, sans-serif", fontWeight: 400,
                textWrap: "auto",
                background: "linear-gradient(92.7deg, #cccccc 0.37%, #eff0f5 22.72%, #ffffff 48.32%, #dfdce7 71.15%, #eceaf1 97.09%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Quiero ofrecerte una doble garantía de máxima protección.
            </h2>
          </div>

          <div
            className="text-[#c3bfd6] text-[1.035rem] md:text-[18px] leading-[1.5] flex flex-col gap-4"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            <p>
              Tienes 7 días para entrar, ver las clases, configurar el bot y activar el sistema. Y si sientes que esto no es para ti — te devuelvo cada peso que pagaste. Sin preguntas ni reclamos.
            </p>
            <p>
              Y si le das una oportunidad real al programa, ves las clases, aplicas la metodología, participas en las sesiones en vivo — y en 3 meses no lograste recuperar ni lo que pagaste.{" "}
              <strong className="text-white font-semibold">
                Te devuelvo el 100% de tu dinero más $100 dólares adicionales
              </strong>{" "}
              por hacerte perder el tiempo. Y te quedas con el programa para siempre.
            </p>
            <p className="text-white font-semibold">El riesgo es completamente mío.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
