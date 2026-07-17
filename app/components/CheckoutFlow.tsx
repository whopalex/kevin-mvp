"use client";

import { useMemo, useState } from "react";
import OrderBumps, { type OrderBump } from "./OrderBumps";
import WhopCheckout from "./WhopCheckout";

interface CheckoutFlowProps {
  basePlanId: string;
  basePrice: number;
  bumps: OrderBump[];
  /**
   * Maps a sorted, comma-joined list of selected bump planIds to the combo
   * plan that bills the base price plus those bumps as ONE Whop plan
   * (initial_price = base, renewal_price = sum of selected bumps). Whop only
   * ever renders a single plan in its checkout embed, so switching plans is
   * the only way the real embedded checkout can reflect a bump selection.
   */
  comboPlanMap: Record<string, string>;
  returnUrl: string;
  className?: string;
}

export default function CheckoutFlow({
  basePlanId,
  basePrice,
  bumps,
  comboPlanMap,
  returnUrl,
  className,
}: CheckoutFlowProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

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

  const activePlanId = useMemo(() => {
    if (selected.size === 0) return basePlanId;
    const key = bumps
      .map((bump) => bump.planId)
      .filter((planId) => selected.has(planId))
      .sort()
      .join(",");
    return comboPlanMap[key] ?? basePlanId;
  }, [selected, bumps, comboPlanMap, basePlanId]);

  return (
    <div className={`w-full flex flex-col items-center gap-8 ${className || ""}`}>
      <OrderBumps
        bumps={bumps}
        selected={selected}
        onToggle={toggle}
        basePrice={basePrice}
        className="max-w-[600px]"
      />
      {/* key forces a full remount so Whop's loader mounts a fresh iframe for the new plan */}
      <WhopCheckout key={activePlanId} planId={activePlanId} returnUrl={returnUrl} className="w-full max-w-[600px]" />
    </div>
  );
}
