"use client";

import { gsap } from "gsap";

const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default function SistemaMVPSection() {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(118,84,255,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-6 max-w-[518px]">
          <div className="flex flex-col gap-4">
            <span
              className="text-[13px] font-semibold tracking-[2px] uppercase px-4 py-1.5 rounded-full border border-purple-500/40 text-purple-300 w-fit"
              style={{ background: "rgba(118,84,255,0.1)" }}
            >
              El Sistema
            </span>
            <h2
              className="text-[clamp(36px,4vw,52px)] font-bold leading-[1.1]"
              style={{
                fontFamily: "Ragdit, sans-serif", fontWeight: 400,
                background: "linear-gradient(93.5deg, #cccccc 0.37%, #ffffff 48.32%, #eceaf1 97.09%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              El Sistema MVP
            </h2>
          </div>

          <p
            className="text-[1.05rem] md:text-[18px] text-[#c3bfd6] leading-[1.5em] md:leading-[1.7]"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            El único método en Latinoamérica diseñado específicamente para que cualquier persona active un sistema que deposite{" "}
            <span className="text-white font-semibold">$300 dólares al día</span> directo a su cuenta de banco local todos los días desde cualquier lugar.
          </p>

          <p
            className="text-[1.05rem] md:text-[18px] text-[#c3bfd6] leading-[1.5em] md:leading-[1.7]"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            Todo lo que necesitas es un celular o computador con internet para mejorar por completo tu vida financiera.
          </p>

          <button
            className="relative w-fit mt-4 px-8 rounded-full text-white font-bold flex items-center gap-3 overflow-hidden border border-[rgba(197,180,255,0.51)] transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02]"
            style={{
              fontFamily: "BDO Grotesk, sans-serif",
              background: "linear-gradient(80.8deg, #5020ff 8.6%, #b06af6 85.3%, #edcaff 111%)",
              boxShadow: "0 0 45px rgba(140,81,230,0.5), inset 0px 0px 14px 0px #d798ff",
              height: "62px",
              fontSize: "clamp(0.98rem, 2vw, 1.0625rem)",
              lineHeight: "1.125em",
            }}
          >
            ACCEDER AL SISTEMA MVP
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right: MVP mockup / 3D cards */}
        <div className="flex-1 flex items-center justify-center relative min-h-[360px]">
          {/* Stacked card effect */}
          <div className="relative w-[473px] h-[356px]">
            {/* Shadow cards */}
            <div
              className="absolute rounded-2xl border border-purple-500/20"
              style={{
                width: "100%",
                height: "100%",
                top: "36px",
                left: "0px",
                background: "linear-gradient(135deg, rgba(30,19,54,0.6) 0%, rgba(12,5,18,0.6) 100%)",
                filter: "blur(1px)",
              }}
            />
            <div
              className="absolute rounded-2xl border border-purple-500/20"
              style={{
                width: "100%",
                height: "100%",
                top: "18px",
                left: "0px",
                background: "linear-gradient(135deg, rgba(30,19,54,0.8) 0%, rgba(12,5,18,0.8) 100%)",
              }}
            />
            {/* Main card */}
            <div
              className="absolute rounded-2xl border border-purple-500/30 flex items-center justify-center overflow-hidden"
              style={{
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                background: "linear-gradient(135deg, rgba(30,19,54,1) 0%, rgba(12,5,18,1) 100%)",
              }}
            >
              {/* MVP text logo */}
              <span
                className="text-[90px] font-black tracking-tight select-none"
                style={{
                  fontFamily: "Ragdit, sans-serif", fontWeight: 400,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(118,84,255,0.3) 50%, rgba(255,255,255,0.05) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                }}
              >
                MVP
              </span>

              {/* Decorative dots */}
              {[
                { x: "22%", y: "18%" },
                { x: "8%", y: "62%" },
                { x: "37%", y: "80%" },
                { x: "22%", y: "92%" },
                { x: "68%", y: "62%" },
                { x: "55%", y: "42%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-[18px] h-[11px] rounded-full border border-purple-400/30"
                  style={{ left: pos.x, top: pos.y }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
