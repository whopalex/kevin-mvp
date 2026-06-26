"use client";

import { Suspense } from "react";
import { orangeGrad } from "./constants";
import WhopOneClickButton from "@/app/components/WhopOneClickButton";

// $97 downsell plan
const DOWNSELL_PLAN_ID = "plan_UvWaG80tNC77c";

function PriceContent() {
  return (
    <section className="w-full flex flex-col items-center gap-10 md:gap-[56px] py-8 md:py-[37px] px-4 overflow-hidden">
      {/* Pricing block */}
      <div className="flex flex-col items-center gap-4 md:gap-[20px] w-full max-w-[442px]">
        {/* Antes / AHORA row */}
        <div className="flex items-center gap-4 md:gap-[22px] justify-center flex-wrap">
          <p
            className="text-[20px] md:text-[24px] tracking-[0.24px] leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 500, color: "#ff4949" }}
          >
            Antes:{" "}
            <span style={{ textDecoration: "line-through" }}>147 USD</span>
          </p>
          {/* Vertical divider */}
          <div
            className="w-px h-[29px]"
            style={{ background: "rgba(255,255,255,0.32)" }}
          />
          <p
            className="text-[20px] md:text-[24px] tracking-[0.24px] leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 500, color: "#e6e6e6" }}
          >
            AHORA:
          </p>
        </div>

        {/* Price */}
        <p
          className="whitespace-nowrap"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(64px, 10vw, 90px)",
            lineHeight: "0.95",
            ...orangeGrad,
          }}
        >
          $97 USD
        </p>

        {/* CTA sub-text */}
        <p
          className="text-center text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px] w-full max-w-[439px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 600, color: "#fff" }}
        >
          Esta es tu última oportunidad, haz clic en el botón de abajo y accede
          con un increíble descuento.
        </p>
      </div>

      {/* One-click button */}
      <WhopOneClickButton
        planId={DOWNSELL_PLAN_ID}
        successUrl="/completa"
        buttonText="SÍ, QUIERO X1 PRO MAX POR $97"
        className="w-full max-w-[500px]"
      />

      {/* No thanks link */}
      <a
        href="/completa"
        className="text-[#888] text-sm hover:text-white transition-colors underline"
        style={{ fontFamily: "BDO Grotesk, sans-serif" }}
      >
        No gracias, continuar sin esta oferta
      </a>

      {/* Important notice */}
      <p
        className="text-center text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px] w-full max-w-[687px]"
        style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 600, color: "#fff" }}
      >
        <span style={{ color: "#ff2424" }}>IMPORTANTE: </span>
        Esta es la única y última oportunidad de acceder a X1 Pro Max a este
        precio. Una vez cierres esta página, no podrás volver a ver esta oferta.
      </p>
    </section>
  );
}

export default function PriceSection() {
  return (
    <Suspense fallback={
      <section className="w-full flex flex-col items-center gap-10 md:gap-[56px] py-8 md:py-[37px] px-4 overflow-hidden">
        <div className="text-white/50">Cargando...</div>
      </section>
    }>
      <PriceContent />
    </Suspense>
  );
}
