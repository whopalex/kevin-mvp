import { A } from "./constants";

export default function GuaranteeSection() {
  return (
    <section className="w-full py-16 md:py-[72px] px-4 max-w-[1420px] mx-auto overflow-hidden">
      <hr className="w-full max-w-[1207px] mx-auto border-0 h-px bg-white/20 mb-[120px]" />

      <div className="flex flex-col min-[1140px]:flex-row items-center gap-[80px] w-full max-w-[1207px] mx-auto">
        <div className="w-full max-w-[571px] shrink-0">
          <img
            src={A.img7}
            alt="7 días de garantía"
            className="w-full max-w-[571px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-5 w-full max-w-[507px] min-[1140px]:w-[507px] shrink-0">
          <h2
            style={{
              fontFamily: "Ragdit, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 46px)",
              lineHeight: "1.12",
              background:
                "linear-gradient(94deg, #ccc 0.37%, #eff0f5 22.72%, #fff 48.32%, #dfdce7 71.15%, #eceaf1 97.09%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ¿Aún tienes dudas?
          </h2>
          <div
            className="text-[#B0B0B0] text-[16px] md:text-[18px] leading-relaxed tracking-[0.18px] flex flex-col gap-4"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            <p>
              Déjame asumir todo el riesgo por ti… Te daré 7 días para que lo
              pruebes sin ningún riesgo. Y si después de acceder al contenido
              sientes que no es para ti, o simplemente no estás satisfecho por
              cualquier motivo… No pasa nada.
            </p>
            <p>
              Te devolveré cada centavo de tu inversión sin preguntas, ni
              molestias. Solo tendrás que enviarme un mensaje y listo, recibirás
              en tu cuenta el monto total por el que pagaste…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
