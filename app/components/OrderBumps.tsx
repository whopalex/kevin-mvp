"use client";

import { useEffect, useState } from "react";

export interface OrderBump {
  planId: string;
  title: string;
  description: string;
  price: number;
  billingLabel: string;
  compareAtPrice: number;
  discountPercent: number;
}

export const ORDER_BUMP_STORAGE_KEY = "kevin_mvp_order_bumps";

interface OrderBumpsProps {
  bumps: OrderBump[];
  /** Price of the main product shown in the checkout embed below, so the running total is accurate. */
  basePrice: number;
  className?: string;
}

/**
 * Order bump ("buy together") selector shown on the initial checkout.
 * Selections are persisted to sessionStorage since Whop's checkout redirect
 * navigates away from this page; OrderBumpCharger reads them back on landing.
 *
 * The Whop checkout embed below only supports a single plan — it has no
 * concept of a multi-item cart, so it will always display just the base
 * price no matter what's selected here. The running total below is what
 * tells the buyer what they're actually agreeing to pay.
 */
export default function OrderBumps({ bumps, basePrice, className }: OrderBumpsProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    sessionStorage.setItem(ORDER_BUMP_STORAGE_KEY, JSON.stringify(Array.from(selected)));
  }, [selected]);

  const selectedBumps = bumps.filter((bump) => selected.has(bump.planId));
  const total = basePrice + selectedBumps.reduce((sum, bump) => sum + bump.price, 0);

  const toggle = (planId: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(planId)) {
        next.delete(planId);
      } else {
        next.add(planId);
      }
      return next;
    });
  };

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
                onChange={() => toggle(bump.planId)}
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
          Incluye {selectedBumps.map((bump) => `${bump.title} ($${bump.price.toFixed(2)}${bump.billingLabel}, se renueva automáticamente)`).join(" y ")}.
        </p>
      )}

      <p
        className="text-[#666] text-xs"
        style={{ fontFamily: "BDO Grotesk, sans-serif" }}
      >
        El formulario de pago de abajo mostrará solo el precio del Sistema MVP ($
        {basePrice.toFixed(2)}) — los extras que selecciones arriba se agregan
        automáticamente a la misma tarjeta justo después de tu compra.
      </p>
    </div>
  );
}
