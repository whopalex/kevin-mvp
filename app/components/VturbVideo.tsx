"use client";

import { useEffect, useRef } from "react";

export type VturbConfig = {
  /** Player id, e.g. "6a1e56b7b8947adf2bcd629a" (without the "vid-" prefix). */
  playerId: string;
  /** Account/workspace id, e.g. "28aacb89-50b2-4581-bcda-1d88d1bb44fc". */
  accountId: string;
  /** HLS manifest URL for this specific video, used for the <link rel=preload as=fetch>. Optional. */
  m3u8Url?: string;
};

const SMARTPLAYER_LIB =
  "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";

/**
 * Renders a ConverteAI / vTurb SmartPlayer.
 * - Resource hints (preload + dns-prefetch) are emitted via React 19 APIs, so
 *   they land in <head> and are scoped/deduped per page (each video differs).
 * - The custom element + loader script are injected on mount, mirroring the
 *   vendor snippet, with guards against StrictMode/HMR double-injection.
 */
export default function VturbVideo({
  playerId,
  accountId,
  m3u8Url,
  className,
  style,
  aspectRatio = "16 / 9",
}: VturbConfig & {
  className?: string;
  style?: React.CSSProperties;
  /** Reserves the box size so it never collapses to 0 height while the player loads. */
  aspectRatio?: string;
}) {
  const playerJs = `https://scripts.converteai.net/${accountId}/players/${playerId}/v4/player.js`;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // _plt timing baseline read by the player.
    const w = window as unknown as { _plt?: number };
    w._plt =
      w._plt ||
      (performance.timeOrigin
        ? performance.timeOrigin + performance.now()
        : Date.now());

    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector("vturb-smartplayer")) return; // guard double-inject

    const player = document.createElement("vturb-smartplayer");
    player.id = `vid-${playerId}`;
    player.style.display = "block";
    player.style.position = "absolute";
    player.style.inset = "0";
    player.style.width = "100%";
    player.style.height = "100%";
    container.appendChild(player);

    const loaderId = `vturb-loader-${playerId}`;
    if (!document.getElementById(loaderId)) {
      const s = document.createElement("script");
      s.id = loaderId;
      s.src = playerJs;
      s.async = true;
      document.head.appendChild(s);
    }
  }, [playerId, playerJs]);

  return (
    <>
      {/* Resource hints — React 19 hoists these <link> tags into <head>, scoped per page. */}
      <link rel="preload" href={playerJs} as="script" />
      <link rel="preload" href={SMARTPLAYER_LIB} as="script" />
      {m3u8Url ? <link rel="preload" href={m3u8Url} as="fetch" /> : null}
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://license.vturb.com" />

      <div
        ref={containerRef}
        className={`relative w-full ${className ?? ""}`}
        style={{ aspectRatio, ...style }}
      />
    </>
  );
}
