"use client";

export default function MvpSection() {
  return (
    <section className="w-full flex justify-center px-4 pt-[94px] max-[767px]:pt-[76px] mobile:pt-[28px]">
      <div
        className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between"
        style={{ gap: "clamp(40px,8vw,113px)" }}
      >
        {/* Bloque Izquierdo: Textos */}
        <div className="flex flex-col items-start w-full md:w-[500px] flex-shrink-0">
          {/* Tag "El sistema" */}
          <div
            className="tag-resultados"
            style={{ margin: "0 0 22px 0" }}
          >
            <span className="text">El sistema</span>
          </div>

          {/* Título Principal */}
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px,6vw,58px)",
              fontWeight: 400,
              lineHeight: "1.1em",
              marginBottom: "18px"
            }}
          >
            El Sistema <span className="degrade">MVP</span>
          </h2>

          {/* Párrafos descriptivos */}
          <div className="flex flex-col gap-6 text-[#A1A1A1] text-[1.035rem] md:text-[18px]" style={{ fontFamily: "var(--font-body)", lineHeight: "1.6" }}>
            <p>
              El único método en Latinoamérica diseñado específicamente para que cualquier persona active un <strong className="text-white font-semibold">sistema que deposite $300 dólares al día</strong> directo a su cuenta de banco local todos los días desde cualquier lugar.
            </p>
            <p>
              Todo lo que necesitas es un celular o computador con internet para <strong className="degrade font-semibold">mejorar por completo tu vida financiera.</strong>
            </p>
          </div>
        </div>

        {/* Bloque Derecho: Imágenes y Blur */}
        <div className="relative w-full flex justify-center items-center">
          {/* Fondo de Brillo y Blur */}
          <img
            src="/assets/svg/gradient-light-blur.svg"
            alt=""
            className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto pointer-events-none"
            style={{ opacity: 0.88, filter: "blur(140px)" }}
          />

          {/* Imagen Principal SVG */}
          <img
            src="/assets/svg/ssdmvp.svg"
            alt="Sistema MVP"
            className="relative z-10 w-[85%] md:w-full h-auto max-w-[550px]"
          />
        </div>
      </div>
    </section>
  );
}
