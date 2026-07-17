import CheckoutFlow from "@/app/components/CheckoutFlow";
import type { OrderBump } from "@/app/components/OrderBumps";

// Main product plan ($69, one-time)
const MAIN_PLAN_ID = "plan_mwjvL0BtULG5P";
const MAIN_PRICE = 69;

// Identity keys for the two bumps (not charged directly — see COMBO_PLAN_MAP)
const SOPORTE_ID = "plan_WvEVPJaZfVRtb";
const OFERTAS_ID = "plan_Dv1alCXkMLPUs";

// Order bumps offered alongside the main checkout
const ORDER_BUMPS: OrderBump[] = [
  {
    planId: SOPORTE_ID,
    title: "Soporte prioritario",
    description:
      "9 de cada 10 personas agregan este producto a su compra. Este soporte es un canal exclusivo via Whatsapp, que es un soporte prioritario directo con nuestro equipo. Este canal permite que tus dudas sean despejadas en un menor tiempo posible y que puedas seguir viendo el programa y aplicando la metodología sin tener ningún tipo de obstáculo en el camino.",
    price: 8,
    billingLabel: "/ mes",
    compareAtPrice: 37,
    discountPercent: 78,
  },
  {
    planId: OFERTAS_ID,
    title: "AGREGA ESTO: Ofertas Ganadoras",
    description:
      "No pierdas tiempo buscando productos para empezar a vender. En esta plataforma te vamos a entregar los productos mas escalados de Brasil y Latam para que puedas modelarlos en simples clics y arrancar a vender desde el día uno. Sin ningún tipo de complicación ni perder tiempo pensando que productos crear.",
    price: 5,
    billingLabel: "/ mes",
    compareAtPrice: 23,
    discountPercent: 78,
  },
];

// Combo plans: base $69 + selected bump(s) billed together as ONE Whop plan
// (initial_price = 69, renewal_price = sum of selected bumps' monthly price).
// This is what lets the real embedded checkout show the combined total.
const COMBO_PLAN_MAP: Record<string, string> = {
  [SOPORTE_ID]: "plan_qD7E61Rl8m0o8", // +Soporte prioritario ($77 today, $8/mo after)
  [OFERTAS_ID]: "plan_V4EjXcZUlzshP", // +Ofertas Ganadoras ($74 today, $5/mo after)
  [[SOPORTE_ID, OFERTAS_ID].sort().join(",")]: "plan_vGcFHBT45zQe4", // both ($82 today, $13/mo after)
};

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
          Accede al Sistema MVP por solo <span className="text-white font-bold">${MAIN_PRICE} USD</span>
        </p>
      </div>

      <CheckoutFlow
        basePlanId={MAIN_PLAN_ID}
        basePrice={MAIN_PRICE}
        bumps={ORDER_BUMPS}
        comboPlanMap={COMBO_PLAN_MAP}
        returnUrl="/x1-upsell"
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
