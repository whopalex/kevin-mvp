"use client";

import { useEffect, useRef } from "react";
import AIBeamCard from "@/app/components/AIBeamCard";

/**
 * Seamless infinite ticker with NO duplicated content.
 * Renders each source once; on every frame it shifts the track and, when an
 * item scrolls fully off the edge, moves that DOM node to the other end.
 * Layer stays small (8 imgs) so it composites on the GPU — no main-thread fallback.
 */
function NotifRow({
  srcs,
  direction = "left",
  speed = 61, // px per second — matches the original CSS speed
  gap = 19,
}: {
  srcs: string[];
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let step = 0; // measured lazily: 0 while the row is hidden (display:none → rect width 0)
    let tx = 0;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      // Cap dt so returning from a background tab resumes smoothly instead of leaping.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Measure once the row is actually visible; until then, idle without moving.
      if (!step) {
        const firstEl = track.firstElementChild as HTMLElement | null;
        const w = firstEl ? firstEl.getBoundingClientRect().width : 0;
        if (w <= 0) {
          raf = requestAnimationFrame(tick);
          return;
        }
        step = w + gap;
      }

      if (direction === "left") {
        tx -= speed * dt;
        if (tx <= -step) {
          tx += step;
          if (track.firstElementChild) track.appendChild(track.firstElementChild);
        }
      } else {
        tx += speed * dt;
        if (tx >= 0) {
          if (track.lastElementChild) track.insertBefore(track.lastElementChild, track.firstElementChild);
          tx -= step;
        }
      }

      track.style.transform = `translate3d(${tx}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed, gap]);

  return (
    <div ref={trackRef} className="flex gap-[19px] w-max" style={{ willChange: "transform" }}>
      {srcs.map((src, i) => (
        <img key={`${src}-${i}`} src={src} alt="" width={267} height={60} className="h-[60px] w-auto" />
      ))}
    </div>
  );
}

function FeatureCard({
  className,
  innerClassName,
  innerStyle,
  children,
  style,
}: {
  className?: string;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`card-border ${className ?? ""}`}
      style={style}
    >
      <div
        className={`card-inner overflow-hidden h-full w-full rounded-[19px] flex flex-col ${innerClassName ?? ""}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}

const notis1 = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `/assets/svg/notificaciones-ticker/noti0${n}.svg`);
const notis2 = [8, 7, 6, 5, 4, 3, 2, 1].map(n => `/assets/svg/notificaciones-ticker/noti0${n}.svg`);

export default function FeaturesSection() {

  return (
    <section className="relative w-full px-4 flex flex-col items-center" style={{ marginTop: "clamp(80px,18vw,196px)", marginBottom: "clamp(40px,8vw,75px)" }}>
      {/* Title Container */}
      <div className="w-full flex justify-center" style={{ marginBottom: "clamp(50px,8vw,92px)" }}>
        <h2
          className="relative text-white text-center max-w-[630px] md:max-w-[750px] mx-auto"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,6vw,3.25rem)", fontWeight: 400, lineHeight: "1.1em" }}
        >
          {/* Left SVG (Now Normal) */}
          <img
            src="/assets/svg/divisor-2.svg"
            alt=""
            className="hidden md:block absolute top-1/2 -translate-y-1/2"
            style={{ right: "calc(100% + 46px)", width: "clamp(120px, 22vw, 331px)", height: "auto" }}
          />

          Esto es lo <span className="degrade">que vas a lograr</span> <br className="hidden md:block" /> con el sistema MVP

          {/* Right SVG (Now Flipped) */}
          <img
            src="/assets/svg/divisor-2.svg"
            alt=""
            className="hidden md:block absolute top-1/2 -translate-y-1/2 transform scale-x-[-1]"
            style={{ left: "calc(100% + 46px)", width: "clamp(120px, 22vw, 331px)", height: "auto" }}
          />
        </h2>
      </div>

      {/* Grid Container (1224px max-w) */}
      <div className="w-full max-w-[540px] min-[1140px]:max-w-[1224px] mx-auto flex flex-col gap-[28px]">
        {/* Row 1 */}
        <div className="flex flex-col min-[1140px]:flex-row gap-[28px]">
          {/* Card 1: Transferencias */}
          <FeatureCard className="w-full min-[1140px]:w-[650px] shrink-0">
            <div className="flex flex-col gap-3" style={{ padding: "43px 25px 0" }}>
              <h3
                className="text-white text-[1.27rem] md:text-[1.5rem] font-semibold"
                style={{ fontFamily: "var(--font-body)", lineHeight: "1.33em" }}
              >
                Transferencias todos los días
              </h3>
              <p className="text-[#C3BFD6] text-[1.035rem] md:text-[1.125rem] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>
                Recibe pagos en tu cuenta de banco mientras duermes, comes o estás con tu familia. El sistema trabaja por ti las 24 horas
              </p>
            </div>
            {/* Notification scroll (Tickers) */}
            <div
              className="relative overflow-hidden w-full pointer-events-none mt-[38px]"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
              }}
            >
              <div className="flex flex-col gap-[16px]">
                {/* Row 1: scrolls left */}
                <NotifRow srcs={notis1} direction="left" />
                {/* Row 2: scrolls right */}
                <NotifRow srcs={notis2} direction="right" />
              </div>
            </div>
            {/* Extra padding space at the bottom to respect original design */}
            <div className="h-8" />
          </FeatureCard>

          {/* Card 2: Ingresos adicionales */}
          <FeatureCard className="w-full min-w-[85%] min-[1140px]:w-[542px] min-[1140px]:min-w-0 shrink-0 flex flex-col justify-between" innerClassName="relative">
            <div className="flex flex-col gap-3" style={{ padding: "43px 23px clamp(140px, 45vw, 200px)" }}>
              <h3
                className="text-white text-[1.2rem] md:text-[1.5rem] font-semibold"
                style={{ fontFamily: "var(--font-body)", lineHeight: "1.3em" }}
              >
                Ingresos adicionales de $300 | $500/mes
              </h3>
              <p className="text-[#C3BFD6] text-[1.035rem] md:text-[1.125rem] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>
                Genera una segunda fuente de ingresos sin depender de un jefe, un horario fijo o un negocio físico.
              </p>
            </div>
            {/* Chart SVG */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none">
              <img src="/assets/svg/chart.svg" alt="Ingresos" className="w-full h-auto object-contain" />
            </div>
          </FeatureCard>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col min-[1140px]:flex-row gap-[28px]">
          {/* Left Block (Column of 2 cards) */}
          <div className="flex flex-col gap-[28px] w-full min-[1140px]:w-[543px] shrink-0">
            <FeatureCard className="flex-1">
              <div className="flex flex-col gap-3" style={{ padding: "43px 23px" }}>
                <h3
                  className="text-white text-[1.2rem] md:text-[1.5rem] font-semibold"
                  style={{ fontFamily: "var(--font-body)", lineHeight: "1.3em" }}
                >
                  Cobrar sin comisiones o retención
                </h3>
                <p className="text-[#C3BFD6] text-[1.035rem] md:text-[1.125rem] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>
                  Recibir pagos directos a tu cuenta de banco local sin intermediarios, sin plataformas que te retengan el dinero ni te cobren comisión.
                </p>
              </div>
            </FeatureCard>

            <FeatureCard className="flex-1">
              <div className="flex flex-col gap-3" style={{ padding: "43px 23px" }}>
                <h3
                  className="text-white text-[1.2rem] md:text-[1.5rem] font-semibold"
                  style={{ fontFamily: "var(--font-body)", lineHeight: "1.3em" }}
                >
                  Tener un negocio 100% anónimo
                </h3>
                <p className="text-[#C3BFD6] text-[1.035rem] md:text-[1.125rem] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>
                  Que funciona sin que nadie sepa que eres tú sin contenido en redes, sin aparecer en cámara, sin venderle a tus amigos.
                </p>
              </div>
            </FeatureCard>
          </div>

          {/* Right Block: AI products card */}
          <FeatureCard className="w-full min-[1140px]:w-[653px] shrink-0" innerClassName="justify-between items-center" innerStyle={{ paddingBottom: "50px" }}>
            <div className="flex flex-col gap-3 w-full md:max-w-[600px]" style={{ padding: "43px 23px" }}>
              <h3
                className="text-white text-[1.2rem] md:text-[1.5rem] font-semibold"
                style={{ fontFamily: "var(--font-body)", lineHeight: "1.3em" }}
              >
                Vender productos digitales con IA
              </h3>
              <p className="text-[#C3BFD6] text-[1.035rem] md:text-[1.125rem] leading-[1.5]" style={{ fontFamily: "var(--font-body)" }}>
                Vende productos creados por inteligencia artificial a un mercado de más de 500 millones de personas que nadie está atendiendo.
              </p>
            </div>

            {/* AI Animated Beam */}
            <AIBeamCard />
          </FeatureCard>
        </div>
      </div>

      {/* Bottom text */}
      <p
        className="max-w-[906px] mx-auto text-center text-[1.375rem] text-white font-semibold leading-[1.35em] max-[768px]:text-[1.1rem]"
        style={{ fontFamily: "var(--font-body)", marginTop: "72px" }}
      >
        Y lo mejor de todo es que puedes <span className="degrade">empezar desde cero</span> aunque nunca hayas vendido nada en internet — el sistema está diseñado para personas sin experiencia.
      </p>
    </section>
  );
}
