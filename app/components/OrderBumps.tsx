"use client";

export interface OrderBump {
  /** Combo plan id to check out with when this bump is the ONLY one selected. Not used directly when combined with others — see CheckoutFlow's plan map. */
  planId: string;
  title: string;
  description: string;
  price: number;
  billingLabel: string;
  compareAtPrice: number;
  discountPercent: number;
}

interface OrderBumpsProps {
  bumps: OrderBump[];
  selected: Set<string>;
  onToggle: (planId: string) => void;
  /** Price of the main product, so the running total is accurate. */
  basePrice: number;
  className?: string;
}

/**
 * Order bump ("buy together") selector shown on the initial checkout.
 * Selection is controlled by the parent (CheckoutFlow), which remounts the
 * Whop checkout embed against a combo plan matching the current selection —
 * so the real embedded checkout reflects the bump, not just this summary.
 */
export default function OrderBumps({ bumps, selected, onToggle, basePrice, className }: OrderBumpsProps) {
  const selectedBumps = bumps.filter((bump) => selected.has(bump.planId));
  const total = basePrice + selectedBumps.reduce((sum, bump) => sum + bump.price, 0);

  return (
    <div className={`w-full flex flex-col gap-3 ${className || ""}`}>
      <h3
        className="text-white text-lg"
        style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 600 }}
      >
        Mejora tu compra
      </h3>

      {bumps.map((bump) => {
        const isChecked = selected.has(bump.planId);
        return (
          <label
            key={bump.planId}
            className="flex flex-col gap-3 rounded-xl border p-4 cursor-pointer transition-colors"
            style={{
              borderColor: isChecked ? "#22c55e" : "#333038",
              background: isChecked ? "rgba(34,197,94,0.08)" : "#0d0d12",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p
                  className="text-white"
                  style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 600 }}
                >
                  {bump.title}
                </p>
                <p
                  className="text-[#a0a0a0] text-sm"
                  style={{ fontFamily: "BDO Grotesk, sans-serif" }}
                >
                  {bump.description}
                </p>
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(bump.planId)}
                className="w-5 h-5 mt-1 shrink-0 accent-green-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#ff6b6b] line-through text-sm">
                ${bump.compareAtPrice.toFixed(2)}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-600 text-white font-semibold">
                ↓ {bump.discountPercent}%
              </span>
              <span
                className="text-white"
                style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 700 }}
              >
                ${bump.price.toFixed(2)} {bump.billingLabel}
              </span>
            </div>
          </label>
        );
      })}

      <div className="flex items-center justify-between rounded-xl border border-[#333038] bg-[#0d0d12] px-4 py-3">
        <span
          className="text-[#a0a0a0] text-sm"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Total a pagar hoy
        </span>
        <span
          className="text-white"
          style={{ fontFamily: "BDO Grotesk, sans-serif", fontWeight: 700, fontSize: "20px" }}
        >
          ${total.toFixed(2)} USD
        </span>
      </div>

      {selectedBumps.length > 0 && (
        <p
          className="text-[#a0a0a0] text-xs"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Incluye {selectedBumps.map((bump) => `${bump.title} ($${bump.price.toFixed(2)}${bump.billingLabel}, se renueva automáticamente)`).join(" y ")}. El pago de abajo ya refleja este total.
        </p>
      )}
    </div>
  );
}
