"use client";

import { useEffect, useId, useRef } from "react";

const HOTMART_SCRIPT = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";

type CheckoutElements = {
  init: (kind: string) => { mount: (selector: string) => void };
};

/**
 * Hotmart "Sales Funnel" checkout widget.
 * Loads the Hotmart elements script once (shared across instances) and mounts
 * the funnel into a per-instance container id, so the same widget can appear in
 * more than one place on the page without id collisions.
 */
export default function HotmartSalesFunnel({ className }: { className?: string }) {
  const reactId = useId();
  const domId = "hotmart-sales-funnel-" + reactId.replace(/:/g, "");
  const mountedRef = useRef(false);

  useEffect(() => {
    const mount = () => {
      if (mountedRef.current) return;
      const ce = (window as unknown as { checkoutElements?: CheckoutElements }).checkoutElements;
      if (!ce) return;
      try {
        ce.init("salesFunnel").mount("#" + domId);
        mountedRef.current = true;
      } catch (e) {
        console.warn("Hotmart salesFunnel mount failed: ", e);
      }
    };

    if ((window as unknown as { checkoutElements?: CheckoutElements }).checkoutElements) {
      mount();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HOTMART_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", mount, { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = HOTMART_SCRIPT;
    s.async = true;
    s.addEventListener("load", mount, { once: true });
    document.head.appendChild(s);
  }, [domId]);

  return <div id={domId} className={className} />;
}
