"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    let ro: ResizeObserver | null = null;
    let prevRestoration: ScrollRestoration = "auto";

    function init() {
      // Clean up any previous instance first (important on bfcache restore).
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (ro) {
        ro.disconnect();
        ro = null;
      }

      // Own scroll restoration: the browser restoring a non-zero scroll
      // position on back/forward desyncs Lenis (its animated scroll stays at 0),
      // which makes the wheel feel dead until you force-scroll. Start every page
      // at the top and let Lenis be the single source of truth.
      prevRestoration = history.scrollRestoration;
      history.scrollRestoration = "manual";

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });
      lenis.scrollTo(0, { immediate: true });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Content height changes after init (lazy images, vTurb embeds, `.esconder`
      // sections revealed by VturbReveal) leave Lenis with a stale scroll limit,
      // so you can't scroll into the new content. Recompute on every height change.
      lenis.resize();
      const onLoad = () => lenis?.resize();
      window.addEventListener("load", onLoad);
      ro = new ResizeObserver(() => lenis?.resize());
      ro.observe(document.documentElement);

      // Smooth-scroll for in-page anchor links (<a href="#id">) via Lenis.
      const onAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        lenis?.scrollTo(target as HTMLElement, { offset: 0 });
      };
      document.addEventListener("click", onAnchorClick);

      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        document.removeEventListener("click", onAnchorClick);
        window.removeEventListener("load", onLoad);
        ro?.disconnect();
        history.scrollRestoration = prevRestoration;
        lenis?.destroy();
      };
    }

    // Run on initial mount.
    const cleanup = init();

    // Re-init when the page is restored from bfcache after navigating to an
    // external checkout and clicking back. Without this, Lenis stays destroyed
    // because React's effect cleanup ran on navigation but the effect itself
    // does not re-run on a cached restore.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        cleanup?.();
        init();
      }
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
