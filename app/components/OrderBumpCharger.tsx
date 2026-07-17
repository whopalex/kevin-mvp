"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ORDER_BUMP_STORAGE_KEY } from "./OrderBumps";

/**
 * Fires off-session charges for any order bumps the customer selected on
 * /checkout. Mounted on the page Whop redirects to after the main payment
 * succeeds (returnUrl), since the embed only supports a single plan and
 * can't charge bump items as part of the same checkout.
 */
function OrderBumpChargerContent() {
  const searchParams = useSearchParams();
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    const paymentId = searchParams.get("payment_id");
    const raw = sessionStorage.getItem(ORDER_BUMP_STORAGE_KEY);
    sessionStorage.removeItem(ORDER_BUMP_STORAGE_KEY);

    if (!paymentId || !raw) return;

    let bumpPlanIds: string[] = [];
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) bumpPlanIds = parsed;
    } catch {
      return;
    }

    if (bumpPlanIds.length === 0) return;

    (async () => {
      for (const planId of bumpPlanIds) {
        try {
          const response = await fetch("/api/whop/charge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payment_id: paymentId, plan_id: planId }),
          });
          if (!response.ok) {
            console.error("Order bump charge declined:", planId, await response.text());
          }
        } catch (err) {
          console.error("Order bump charge failed:", planId, err);
        }
      }
    })();
  }, [searchParams]);

  return null;
}

export default function OrderBumpCharger() {
  return (
    <Suspense fallback={null}>
      <OrderBumpChargerContent />
    </Suspense>
  );
}
