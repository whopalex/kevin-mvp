"use client";

import { Suspense } from "react";
import WhopOneClickButton from "@/app/components/WhopOneClickButton";

// $147 upsell plan
const UPSELL_PLAN_ID = "plan_P2MddUH7lq3hh";

function CheckoutContent() {
  return (
    <section id="x1-checkout" className="w-full flex flex-col items-center py-10 md:pt-[32px] pb-[69px] px-4 scroll-mt-6 gap-6">
      <WhopOneClickButton
        planId={UPSELL_PLAN_ID}
        successUrl="/completa"
        failureUrl="/x1-downsell"
        buttonText="SÍ, QUIERO ACCEDER A X1 PRO MAX"
        className="w-full max-w-[500px]"
      />

      {/* No thanks link - goes to downsell */}
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

export default function CheckoutPlaceholder() {
  return (
    <Suspense fallback={
      <section id="x1-checkout" className="w-full flex justify-center py-10 md:pt-[32px] pb-[69px] px-4 scroll-mt-6">
        <div className="text-white/50">Cargando...</div>
      </section>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
