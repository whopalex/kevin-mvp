import type { CSSProperties } from "react";

// Asset paths for the Beyond X1 mastermind page.
export const A = {
  heroBg: "/assets/x1/beyond/hero-bg.avif",
  finalBg: "/assets/x1/beyond/final-bg.avif",
  mastermind: "/assets/x1/beyond/mastermind.png",
  mockupCelular: "/assets/x1/beyond/mockup-celular.webp",
  arrow: "/assets/x1/beyond/arrow.svg",
  iconQ: "/assets/x1/beyond/icon-q.svg",
  iconCheck: "/assets/x1/beyond/icon-check.svg",
  iconCalendar: "/assets/x1/beyond/icon-calendar.svg",
  iconLocation: "/assets/x1/beyond/icon-location.svg",
  iconXRed: "/assets/x1/beyond/icon-x-red.svg",
  iconCheckGreen: "/assets/x1/beyond/icon-check-green.svg",
  iconCheckWhite: "/assets/x1/beyond/icon-check-white.svg",
  checkPricing: "/assets/x1/beyond/check-pricing.svg",
  dsLinearTop: "/assets/x1/svg/ds-linear-top.svg",
  // Special guest photos for the looping carousel.
  ponentes: [
    "/assets/x1/beyond/ponente01_1x.webp",
    "/assets/x1/beyond/ponente02_1x.webp",
    "/assets/x1/beyond/ponente03_1x.webp",
    "/assets/x1/beyond/ponente04_1x.webp",
    "/assets/x1/beyond/ponente05_1x.webp",
  ],
  // Event venue photos for the infinite marquee.
  venue: [
    "/assets/x1/beyond/lugar-evento/img1.webp",
    "/assets/x1/beyond/lugar-evento/img2.webp",
    "/assets/x1/beyond/lugar-evento/img3.webp",
    "/assets/x1/beyond/lugar-evento/img4.webp",
    "/assets/x1/beyond/lugar-evento/img5.webp",
    "/assets/x1/beyond/lugar-evento/img6.webp",
  ],
};

// Where every CTA points. Update once the real checkout exists.
export const CHECKOUT_URL = "#beyond-pricing";

// ===== Shared gradient text styles (clip-to-text) =====
const clip: CSSProperties = {
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  WebkitBoxDecorationBreak: "clone",
  boxDecorationBreak: "clone",
};

export const silver: CSSProperties = {
  background:
    "linear-gradient(93deg, #a4a4a4 0.37%, #e5e5e5 22.72%, #fff 48.32%, #ddd 71.15%, #999 97.09%)",
  ...clip,
};

export const orangeText: CSSProperties = {
  background: "linear-gradient(120deg, #fff 7%, #ff490b 65%, #ff0509 101%)",
  ...clip,
};

export const redText: CSSProperties = {
  background: "linear-gradient(95deg, #e5e5e5 18%, #da2b2b 69%, #b90202 114%)",
  ...clip,
};

export const greenText: CSSProperties = {
  background: "linear-gradient(93deg, #e5e5e5 16%, #2bda80 67%)",
  ...clip,
};

// Dark card surface used across the page.
export const cardStyle: CSSProperties = {
  background: "linear-gradient(216deg, #080a0e 1%, #0f0c0c 126%)",
  border: "1px solid #262626",
};

export const fontDisplay = "Ragdit, sans-serif";
export const fontBody = "BDO Grotesk, sans-serif";
