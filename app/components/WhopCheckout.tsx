"use client";

import { useEffect, useRef } from "react";

const WHOP_SCRIPT = "https://js.whop.com/static/checkout/loader.js";

interface WhopCheckoutProps {
  planId: string;
  returnUrl: string;
  className?: string;
  theme?: "dark" | "light";
  locale?: string;
}

/**
 * Whop embedded checkout component.
 * Loads the Whop checkout script and mounts the checkout widget.
 */
export default function WhopCheckout({
  planId,
  returnUrl,
  className,
  theme = "dark",
  locale = "es"
}: WhopCheckoutProps) {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;

    // Check if script already exists
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WHOP_SCRIPT}"]`);

    if (existing) {
      mountedRef.current = true;
      return;
    }

    // Load Whop checkout script
    const script = document.createElement("script");
    script.src = WHOP_SCRIPT;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => {
      mountedRef.current = true;
    }, { once: true });
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className={className || ""}
      data-whop-checkout-plan-id={planId}
      data-whop-checkout-return-url={returnUrl}
      data-whop-checkout-theme={theme}
      data-whop-checkout-locale={locale}
    />
  );
}
