"use client";

import { A } from "./constants";

const tabBase =
  "flex flex-1 h-[50px] md:h-[60px] items-center justify-center gap-2 md:gap-3 relative overflow-hidden";

export default function ProgressTabs() {
  return (
    <nav className="w-full flex">
      {/* Tab 1: Sistema MVP */}
      <div className={tabBase} style={{ background: "#f9fafb" }}>
        <img
          src={A.badgeMvp}
          alt=""
          className="w-8 h-8 md:w-[38px] md:h-[38px] shrink-0"
        />
        <span
          className="hidden md:inline text-[#595e67] text-[12px] md:text-[16px] font-semibold uppercase tracking-[0.5px] whitespace-nowrap"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          SISTEMA MVP
        </span>
        <div
          className="absolute right-0 top-0 h-full w-0"
          style={{
            borderTop: "25px solid transparent",
            borderBottom: "25px solid transparent",
            borderLeft: "14px solid #f9fafb",
            transform: "translateX(100%)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Tab 2: X1 Pro Max (active) */}
      <div
        className={`${tabBase} z-10`}
        style={{
          background: "linear-gradient(90deg, #FE6936 -43.51%, #F74509 100%)",
        }}
      >
        <img src={A.arrw1} alt="" className="absolute left-0 top-0 h-full pointer-events-none" />
        <img
          src={A.badgeX1}
          alt=""
          className="w-8 h-8 md:w-[38px] md:h-[38px] shrink-0"
        />
        <span
          className="hidden md:inline text-white text-[12px] md:text-[16px] font-semibold uppercase tracking-[0.5px] whitespace-nowrap"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          X1 PRO MAX
        </span>
        <div
          className="absolute right-0 top-0 h-full w-0"
          style={{
            borderTop: "25px solid transparent",
            borderBottom: "25px solid transparent",
            borderLeft: "14px solid rgba(247,69,9,1)",
            transform: "translateX(100%)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Tab 3: Compra Finalizada */}
      <div className={tabBase} style={{ background: "#f9fafb" }}>
        <img src={A.arrw2} alt="" className="absolute left-0 top-0 h-full pointer-events-none" />
        <img
          src={A.badgeCompra}
          alt=""
          className="w-8 h-8 md:w-[38px] md:h-[38px] shrink-0"
        />
        <span
          className="hidden md:inline text-[#595e67] text-[12px] md:text-[16px] font-semibold uppercase tracking-[0.5px] whitespace-nowrap"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          COMPRA FINALIZADA
        </span>
      </div>
    </nav>
  );
}