"use client";

import { useEffect } from "react";

type SmartPlayerInstance = {
  on: (event: string, cb: () => void) => void;
  smartAutoPlay?: boolean;
  video: { currentTime: number };
};
type SmartPlayer = { instances?: SmartPlayerInstance[] };

/**
 * Reveals all `.esconder` elements once the VSL reaches `seconds`.
 * Mirrors the vendor (vTurb) snippet, but reveals by removing the class so each
 * section keeps its natural layout (the vendor forced display:flex).
 * Persists in localStorage: a viewer who already passed the mark sees everything
 * immediately on reload.
 */
export default function VturbReveal({ seconds = 1380 }: { seconds?: number }) {
  useEffect(() => {
    const CLASS = "esconder";
    const key = "alreadyElsDisplayed" + seconds;

    let revealed = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      document.querySelectorAll("." + CLASS).forEach((el) => el.classList.remove(CLASS));
      try {
        localStorage.setItem(key, "true");
      } catch (e) {
        console.warn("Failed to save data in localStorage: ", e);
      }
    };

    let already: string | null = null;
    try {
      already = localStorage.getItem(key);
    } catch (e) {
      console.warn("Failed to read data from localStorage: ", e);
    }

    if (already === "true") {
      timer = setTimeout(reveal, 100);
      return () => timer && clearTimeout(timer);
    }

    // On slow connections the player script can take well over 10s to load;
    // if the watcher gives up too early the CTA never appears. Poll for up to
    // 3 minutes: 1s intervals for the first 15s, then every 3s.
    let attempts = 0;
    const watch = () => {
      const sp = (window as unknown as { smartplayer?: SmartPlayer }).smartplayer;
      if (!sp || !(sp.instances && sp.instances.length)) {
        if (attempts >= 70) return;
        attempts += 1;
        timer = setTimeout(watch, attempts < 15 ? 1000 : 3000);
        return;
      }
      const inst = sp.instances[0];
      inst.on("timeupdate", () => {
        if (revealed || inst.smartAutoPlay) return;
        if (inst.video.currentTime < seconds) return;
        reveal();
      });
    };
    watch();

    return () => timer && clearTimeout(timer);
  }, [seconds]);

  return null;
}
