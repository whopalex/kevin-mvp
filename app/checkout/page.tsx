import WhopCheckout from "@/app/components/WhopCheckout";

// Main product plan ($69)
const MAIN_PLAN_ID = "plan_mwjvL0BtULG5P";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050208] flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8 max-w-[600px]">
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 400,
            lineHeight: "1.1",
          }}
        >
          Completa tu compra
        </h1>
        <p
          className="text-[#C3BFD6] text-lg"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Accede al Sistema MVP por solo <span className="text-white font-bold">$69 USD</span>
        </p>
      </div>

      {/* Whop Embedded Checkout */}
      <WhopCheckout
        planId={MAIN_PLAN_ID}
        returnUrl="/x1-upsell"
        className="w-full max-w-[600px]"
      />

      {/* Trust badges */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <img
          src="/assets/svg/formas-de-pago.svg"
          alt="Métodos de pago"
          style={{ width: "371px", maxWidth: "100%", height: "auto" }}
          className="object-contain opacity-80"
        />
        <p
          className="text-[#888] text-sm text-center max-w-[400px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Pago 100% seguro. Garantía de 7 días.
        </p>
      </div>
    </main>
  );
}
