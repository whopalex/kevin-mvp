import { A, silver, orangeText } from "./constants";
import VturbVideo from "@/app/components/VturbVideo";

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center py-16 md:py-[90px] gap-10 md:gap-[42px] overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      <img
        src={A.bgHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-4 w-full max-w-[680px]">
        <h1
          className="w-full"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(38px, 6vw, 58px)",
            lineHeight: "0.95",
          }}
        >
          <span style={orangeText}>Espera... </span>
          <span style={silver}>Tu compra aún no ha finalizado</span>
        </h1>
        <p
          className="text-white text-[18px] md:text-[20px] font-semibold tracking-[0.25px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Mira el vídeo de abajo
        </p>
      </div>

      {/* VSL video */}
      <div className="relative z-10 w-full px-4 flex justify-center">
        <div
          className="w-full max-w-[920px] rounded-[13px] border border-white/10 overflow-hidden"
          style={{
            background: "#181519",
            boxShadow: "0 4px 94px 0 rgba(166,0,255,0.08)",
          }}
        >
          <VturbVideo
            playerId="6a1e57b241c8995b1d746ce7"
            accountId="28aacb89-50b2-4581-bcda-1d88d1bb44fc"
            aspectRatio="920 / 517"
            className="w-full"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 px-4 w-full flex justify-center">
        {/* Outer glow container */}
        <div
          className="w-full max-w-[457px]"
          style={{
            padding: "3px",
            borderRadius: "8820px",
            border: "1px solid #404040",
            background: "linear-gradient(90deg, #151E22 0%, #3C4A4F 50.08%, #151E22 100%)",
            boxShadow: "inset 0 4px 6.2px 0 rgba(255,255,255,0.28)",
          }}
        >
          {/* Inner button → scrolls to the first Hotmart checkout widget */}
          <a
            href="#x1-checkout"
            className="w-full flex items-center justify-center h-[56px] md:h-[64px] cursor-pointer"
            style={{
              borderRadius: "8820px",
              border: "1.206px solid rgba(255,255,255,0.25)",
              background: "radial-gradient(195.48% 120.04% at 56.06% -61.7%, #FF946F 0%, #F74509 100%)",
              boxShadow:
                "0 83px 23px 0 rgba(213,105,58,0.01), 0 53px 21px 0 rgba(213,105,58,0.04), 0 30px 18px 0 rgba(213,105,58,0.15), 0 13px 13px 0 rgba(213,105,58,0.26), 0 3px 7px 0 rgba(213,105,58,0.30)",
            }}
          >
            <span
              className="text-white text-[15px] md:text-[17.4px] font-semibold uppercase tracking-wide"
              style={{ fontFamily: "BDO Grotesk, sans-serif" }}
            >
              Accede ahora a X1 Pro Max
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}