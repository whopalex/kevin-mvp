"use client";

import { useState } from "react";

const faqs = [
  "¿Necesito experiencia previa para aplicar esto?",
  "¿En cuánto tiempo puedo ver mis primeras ventas?",
  "¿Necesito invertir dinero en publicidad para empezar?",
  "¿Esto funciona desde mi país?",
  "¿Tengo que mostrar mi cara o hacer contenido en redes?",
  "¿Es un pago único?",
  "¿Cómo recibo el acceso?",
];

const faqAnswers: Record<number, string> = {
  0: "No. El Sistema MVP está diseñado para que cualquier persona — sin importar su edad, nivel de conocimiento o el país en el que se encuentre — tenga todo lo que necesita para lograr desde su primera transferencia hasta los $300 dólares al día o más.",
  1: "La mayoría de estudiantes que siguen el paso a paso tienen sus primeras ventas en menos de 7 días. Algunos en las primeras 24-48 horas. El sistema funciona, la velocidad de tus resultados depende de qué tan rápido lo actives.",
  2: "Puedes arrancar con muy poco — hay estudiantes que empezaron con solo $4 dólares y en una semana ya tenían más de $275 dólares en su cuenta. El sistema está diseñado para que reinviertas lo que ganas…\n\nY si en este momento no tienes ni eso disponible, tampoco es un problema. Con el recurso Caja Rápida te entregamos una secuencia de historias lista para publicar en tu Instagram. A cada persona que te responda le envías tu enlace, y si compra, la comisión llega directo a tu cuenta. Funciona incluso si tienes menos de 100 seguidores.",
  3: "Sí. El Sistema MVP funciona en cualquier país de Latinoamérica — Colombia, México, Argentina, Chile, Perú, Ecuador, Venezuela, Bolivia, Paraguay y más. Recibes el dinero directo a la cuenta de banco de tu país.",
  4: "No. El sistema es 100% anónimo. No necesitas aparecer en cámara, hacer contenido ni venderle nada a tus amigos o familiares.",
  5: "Sí. Es un pago único: pagas una sola vez y tienes acceso de por vida al programa y todas sus actualizaciones.",
  6: "Inmediatamente después de tu compra recibirás un correo electrónico con tus datos de acceso al área de miembros donde están todas las clases y recursos.",
};

function SupportCard() {
  return (
    <div
      className="rounded-[22px] flex flex-col gap-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF 0%, #BFA9F7 100%)",
        padding: "clamp(32px,5vw,48px) clamp(24px,4vw,41px) clamp(28px,5vw,43px) clamp(24px,4vw,31px)",
      }}
    >
      <div className="flex flex-col gap-3">
        <h3
          style={{
            fontSize: "clamp(28px,4vw,37px)",
            fontFamily: "Ragdit, sans-serif", fontWeight: 400,
            color: "#1a1040",
          }}
        >
          ¿Tienes más dudas?
        </h3>
        <p
          className="text-[1.035rem] md:text-[18px] leading-[1.45]"
          style={{ fontFamily: "BDO Grotesk, sans-serif", color: "rgba(0,0,0,0.75)" }}
        >
          ¿O necesitas que te ayudemos con algo? Contacta a nuestro equipo de soporte, estamos para ayudarte.
        </p>
      </div>
      <div
        className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        style={{
          borderRadius: "12202.284px",
          border: "1.22px solid rgba(255,255,255,0.6)",
          background: "rgba(255,255,255,0.35)",
          padding: "3px",
          width: "100%",
        }}
      >
        <a
          href="https://wa.link/q8dgnj"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full flex items-center justify-center gap-2 overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02]"
          style={{
            borderRadius: "107786px",
            border: "1.078px solid rgba(255,255,255,0.6)",
            background: "linear-gradient(to bottom, #58ffca, #05dc98)",
            boxShadow: "inset 0px 0px 14px 0px #34bb89",
            height: "62px",
            fontFamily: "BDO Grotesk, sans-serif",
            color: "#0d372a",
            fontWeight: 700,
            fontSize: "clamp(0.98rem, 2vw, 1.09rem)",
            lineHeight: "1.125em",
          }}
        >
          <img src="/assets/svg/WP.svg" alt="" className="w-6 h-6 object-contain" />
          ESCRÍBENOS
        </a>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full px-4 flex justify-center" style={{ paddingTop: "clamp(60px,8vw,90px)", paddingBottom: "60px" }}>
      <div className="w-full max-w-[1186px] grid grid-cols-1 lg:grid-cols-[414px_1fr] gap-14 lg:gap-x-16 items-start">
        {/* Left column: heading + support card fixed at top, independent of FAQ height */}
        <div className="flex flex-col gap-10 lg:self-start">
          {/* Heading block */}
          <div className="flex flex-col items-center lg:items-start" style={{ gap: "24px" }}>
            <div className="tag-resultados" style={{ margin: 0 }}>
              <span className="text">F.A.Q</span>
            </div>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h2
                className="font-bold leading-[1.04] text-center lg:text-left"
                style={{
                  fontSize: "clamp(36px,5.5vw,52px)",
                  fontFamily: "Ragdit, sans-serif", fontWeight: 400,
                  background: "linear-gradient(91.6deg, #cccccc 0.37%, #eff0f5 22.72%, #ffffff 48.32%, #dfdce7 71.15%, #eceaf1 97.09%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ¿Aún no tomas una{" "}
                <span className="degrade">decisión?</span>
              </h2>
              <p className="text-[#c3bfd6] text-[1.05rem] md:text-[18px] text-center lg:text-left" style={{ fontFamily: "BDO Grotesk, sans-serif" }}>
                Estas son las preguntas más frecuentes
              </p>
            </div>
          </div>

          {/* Support card — desktop only */}
          <div className="hidden min-[1024px]:block">
            <SupportCard />
          </div>
        </div>

        {/* Right: FAQ list */}
        <div className="flex flex-col gap-4">
          {faqs.map((question, i) => (
            <div
              key={i}
              className="rounded-[11px] border border-[#242424] overflow-hidden"
              style={{
                background: "radial-gradient(73.26% 84.81% at 5% -5.88%, #1E1336 0%, #181324 100%)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="faq-question-btn w-full flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent border-0"
              >
                <span
                  className="text-white font-normal"
                  style={{
                    fontFamily: "BDO Grotesk, sans-serif",
                    fontSize: "clamp(1.035rem, 2vw, 1.1125rem)",
                    lineHeight: "1.45em",
                    letterSpacing: "0.178px",
                  }}
                >
                  {question}
                </span>
                <img
                  src="/assets/svg/Chev.svg"
                  alt=""
                  className={`shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ width: "22px", height: "22px" }}
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div style={{ padding: "0 clamp(18px,4vw,30px) 20px" }}>
                    <p
                      className="text-[#c3bfd6]"
                      style={{
                        fontFamily: "BDO Grotesk, sans-serif",
                        fontSize: "clamp(1.038rem, 2vw, 1.1125rem)",
                        lineHeight: "1.5em",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {faqAnswers[i]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support card — mobile/tablet only, after FAQ list */}
        <div className="min-[1024px]:hidden">
          <SupportCard />
        </div>

      </div>
    </section>
  );
}
