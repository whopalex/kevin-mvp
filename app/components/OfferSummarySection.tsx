"use client";

const items = [
  "Sistema MVP con el paso a paso, testeado y probado",
  "Producto de Galletas con el que hice +$50.000 USD",
  "MarketPlace de Productos MVP",
  "Alizia Gratis por 14 días",
  "Caso de Estudio 1000 ventas en un día",
  "Producto Devocional (Con el que hice las 1000 ventas)",
  "Caja Rápida – recupera tu inversión en 24hrs",
  "Sesiones grupales en vivo todas las semanas",
  "Club Secreto con +4000 alumnos",
  "Garantía de 7 Días y 3 meses de devolución total del dinero",
];

import { useRef } from "react";
import { gsap } from "gsap";

export default function OfferSummarySection({
  checkoutUrl = "/checkout",
  price = "67",
}: {
  checkoutUrl?: string;
  price?: string;
}) {
  return (
    <section
      className="relative w-full px-4 flex justify-center"
      style={{ paddingTop: "50px", paddingBottom: "80px" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-[1140px]" style={{ gap: "clamp(40px,6vw,75px)" }}>
        {/* Left: summary list */}
        <div className="flex flex-col w-full max-w-[600px] lg:max-w-none lg:w-[540px]">
          <h2
            className="text-white w-full"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px,5vw,40px)",
              fontWeight: 400,
              lineHeight: "1.15em",
              textWrap: "pretty",
              maxWidth: "460px",
            }}
          >
            Aquí hay un <span className="degrade">resumen</span> de todo lo que obtendrás
          </h2>
          <p
            className="text-[#C3BFD6]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              marginTop: "12px",
            }}
          >
            Cuando accedas hoy mismo
          </p>

          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          />

          <ul className="flex flex-col" style={{ gap: "14px" }}>
            {items.map((text, i) => (
              <li key={i} className="flex flex-row items-center" style={{ gap: "14px" }}>
                <img
                  src="/assets/svg/check.svg"
                  alt=""
                  style={{ width: "32px", height: "27px", flexShrink: 0 }}
                />
                <span
                  className="text-white text-[1.045rem] md:text-[1.045rem] leading-[1.5em] md:leading-[1.4]"
                  style={{
                    fontFamily: "var(--font-body)",
                    textWrap: "pretty",
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: gradient card with pricing content */}
        <div
          className="relative flex flex-col items-center w-full max-w-[600px] lg:max-w-none lg:w-[522px]"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(180deg, #FFF 0%, #BFA9F7 100%)",
            padding: "clamp(40px,6vw,65px) clamp(24px,5vw,53px) clamp(56px,8vw,75px)",
            gap: "18px",
            marginTop: "20px", // Margin top for mobile stacking
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              div { margin-top: 0 !important; }
            }
          `}</style>
          <img
            src="/assets/svg/Detalle ui.svg"
            alt=""
            aria-hidden
            className="absolute pointer-events-none"
            style={{ top: "10px", left: "50%", transform: "translate(-50%, -50%)" }}
          />
          <img
            src="/assets/svg/Detalle ui.svg"
            alt=""
            aria-hidden
            className="absolute pointer-events-none"
            style={{ bottom: "10px", left: "50%", transform: "translate(-50%, 50%) rotate(180deg)" }}
          />
          {/* Title block */}
          <div className="flex flex-col items-center text-center w-full" style={{ gap: "8px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(44px,8vw,58px)",
                background: "linear-gradient(84.9deg, #5020ff 4.3%, #b06af6 60.1%, #edcaff 96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MVP
            </h3>
            <p className="text-[#ff4949] text-[22px] font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Antes: <span className="line-through">600 USD</span>
            </p>
            <p className="text-[22px] lg:text-[28px] font-medium" style={{ fontFamily: "var(--font-body)", color: "#000" }}>
              SOLO POR HOY
            </p>
          </div>

          {/* Price with new purple gradient */}
          <p
            className="leading-[0.8] tracking-[-1.8px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(70px,14vw,90px)",
              background: "linear-gradient(95deg, #7654FF -3.06%, #C96AF6 28.44%, #6619AA 94.53%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {`$${price} USD`}
          </p>

          <p
            className="text-[17.8px] text-center"
            style={{ fontFamily: "var(--font-body)", width: "284px", color: "#3D3759" }}
          >
            Clic en el botón de abajo para ver en su moneda local
          </p>

          {/* CTA button */}
          <div
            className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02] w-full"
            style={{
              borderRadius: "12202.284px",
              border: "1.22px solid #FFF",
              background: "#D9C8FF",
              padding: "3px",
              width: "100%",
            }}
          >
            <a
              href={checkoutUrl}
              className="relative w-full flex items-center justify-center gap-[6px] overflow-hidden"
              style={{
                borderRadius: "107786px",
                border: "1.078px solid rgba(197, 180, 255, 0.51)",
                background: "linear-gradient(89deg, #5020FF -8.65%, #B06AF6 85.33%, #EDCAFF 110.97%)",
                boxShadow: "0 0 13.797px 0 #D798FF inset, 9.701px 0 90.093px 0 rgba(140, 81, 230, 0.76)",
                height: "62px",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: '"BDO Grotesk", sans-serif',
                  fontSize: "clamp(0.98rem, 2vw, 1.0875rem)",
                  lineHeight: "1.125em",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                ACCEDER AL SISTEMA MVP
              </span>
              <img
                src="/assets/svg/arrow.svg"
                alt=""
                className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-active:rotate-[45deg]"
                style={{ width: "21.299px", height: "21.299px", verticalAlign: "middle" }}
              />
            </a>
          </div>

          {/* Payment methods */}
          <img
            src="/assets/svg/formas-de-pago.svg"
            alt="Métodos de pago"
            style={{ width: "371px", height: "auto", marginTop: "32px", filter: "brightness(0)" }}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
