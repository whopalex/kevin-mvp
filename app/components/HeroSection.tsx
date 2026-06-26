"use client";

import { gsap } from "gsap";
import VturbVideo, { type VturbConfig } from "@/app/components/VturbVideo";

const DEFAULT_VIDEO: VturbConfig = {
  playerId: "6a1e56b7b8947adf2bcd629a",
  accountId: "28aacb89-50b2-4581-bcda-1d88d1bb44fc",
  m3u8Url:
    "https://cdn.converteai.net/28aacb89-50b2-4581-bcda-1d88d1bb44fc/6a1e513995fb63e6fa0735ef/main.m3u8",
};

export default function HeroSection({
  checkoutUrl = "/checkout",
  video = DEFAULT_VIDEO,
  revealAll = false,
}: {
  checkoutUrl?: string;
  video?: VturbConfig;
  // Cuando es true, el bloque de CTA/pagos se muestra desde el inicio (sin la
  // clase `esconder`), para páginas que no usan la sincronización con vTurb.
  revealAll?: boolean;
}) {
  return (
    <section
      className="relative w-full flex flex-col items-center px-4 overflow-hidden bg-[url('/assets/images/Bgg.avif')] bg-cover bg-center bg-no-repeat"
      style={{ paddingTop: "clamp(60px,8vw,90px)", gap: "clamp(28px,4vw,42px)", paddingBottom: "clamp(70px,12vw,145px)" }}
    >
      {/* Text block */}
      <div className="relative z-10 flex flex-col items-center gap-4 max-w-[944px] w-full text-center">
        <p
          className="text-white text-[16px] md:text-[22px] font-semibold tracking-[0.22px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          ¿Tienes WhatsApp y 30 minutos al día?
        </p>

        <h1
          className="max-w-[944px]"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(30px,5.2vw,54px)",
            fontStyle: "normal",
            lineHeight: "105%",
            textAlign: "center",
            textWrap: "pretty",
            wordBreak: "normal",
            overflowWrap: "break-word",
          }}
        >
          <span className="degrade-light">Esto podría hacerte </span>
          <span className="degrade">ganar $300 USD</span>
          <span className="degrade-light"> al día directo a tu cuenta de banco</span>
        </h1>

        <p
          className="text-white md:text-[22px] font-semibold tracking-[0.22px] max-w-[710px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif", fontSize: "clamp(1.05rem, 2.5vw, 22px)", lineHeight: "1.5em" }}
        >
          Sin mostrar tu cara y sin hablar con nadie.
        </p>
      </div>

      {/* Video player */}
      <div className="relative z-10 w-full max-w-[920px] rounded-[14px] border border-white/10 overflow-hidden shadow-[0px_4px_94px_0px_rgba(166,0,255,0.08)] bg-[#181519]">
        <VturbVideo
          playerId={video.playerId}
          accountId={video.accountId}
          m3u8Url={video.m3u8Url}
          className="w-full"
        />
      </div>

      {/* CTA and Payments Container — hidden until the VSL reveal time (unless revealAll) */}
      <div className={`${revealAll ? "" : "esconder "}relative z-10 flex flex-col items-center w-full px-4`} style={{ gap: "clamp(36px,5vw,36px)" }}>
        {/* CTA button */}
        <div
          className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02] w-full"
          style={{
            borderRadius: "12202.284px",
            border: "1.22px solid #404040",
            background: "#35323E",
            padding: "3px",
            maxWidth: "426px",
          }}
        >

          <a
            href={checkoutUrl}
            className="relative w-full flex items-center justify-center gap-[6px] overflow-hidden"
            style={{
              borderRadius: "107786.836px",
              border: "1.078px solid rgba(197, 180, 255, 0.51)",
              background: "linear-gradient(89deg, #5020FF -8.65%, #B06AF6 85.33%, #EDCAFF 110.97%)",
              boxShadow: "0 0 13.797px 0 #D798FF inset, 9.701px 0 90.093px 0 rgba(140, 81, 230, 0.76)",
              height: "62px",
            }}
          >
            <span
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"BDO Grotesk", sans-serif',
                fontSize: "clamp(0.98rem, 2vw, 1.0875rem)",
                lineHeight: "1.125em",
                fontStyle: "normal",
                fontWeight: 600,
                marginTop: "2px",
              }}
            >
              ACCEDER AL SISTEMA MVP
            </span>
            <img
              src="/assets/svg/arrow.svg"
              alt=""
              className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-active:rotate-[45deg]"
              style={{ width: "21.299px", height: "21.299px", verticalAlign: "middle" }}
            />
          </a>
        </div>

        {/* Payment methods */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/svg/formas-de-pago.svg"
            alt="Métodos de pago"
            style={{ width: "371px", maxWidth: "100%", height: "auto" }}
            className="object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
