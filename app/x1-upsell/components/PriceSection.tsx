"use client";

import { Suspense } from "react";
import WhopOneClickButton from "@/app/components/WhopOneClickButton";

// $147 upsell plan
const UPSELL_PLAN_ID = "plan_P2MddUH7lq3hh";

function PriceContent() {
  return (
    <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-12 md:py-[51px] px-4">
      <div className="flex flex-col items-center gap-6 md:gap-7">
        <p
          className="text-white text-[18px] md:text-[22px] font-semibold text-center tracking-[0.22px] max-w-[687px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Accede ahora por solo:
        </p>
        <span
          className="text-[72px] md:text-[90px] whitespace-nowrap"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            lineHeight: "0.95",
            background:
              "linear-gradient(123deg, #fff 0.73%, #ff490b 34.86%, #ff7a4d 96.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          $147 USD
        </span>
      </div>

      <WhopOneClickButton
        planId={UPSELL_PLAN_ID}
        successUrl="/completa"
        failureUrl="/x1-downsell"
        buttonText="SÍ, QUIERO ACCEDER A X1 PRO MAX"
        className="w-full max-w-[500px]"
      />

      {/* No thanks link */}
      <a
        href="/x1-downsell"
        className="text-[#888] text-sm hover:text-white transition-colors underline"
        style={{ fontFamily: "BDO Grotesk, sans-serif" }}
      >
        No gracias, no quiero esta oferta
      </a>
    </section>
  );
}

export default function PriceSection() {
  return (
    <Suspense fallback={
      <section className="w-full flex flex-col items-center gap-8 md:gap-10 py-12 md:py-[51px] px-4">
        <div className="text-white/50">Cargando...</div>
      </section>
    }>
      <PriceContent />
    </Suspense>
  );
}
