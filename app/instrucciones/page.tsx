import {
  A,
  cardStyle,
  silver,
  orangeText,
  fontDisplay,
  fontBody,
} from "../beyond-x1/components/constants";
import { Tag } from "../beyond-x1/components/ui";
import GradientBackground, {
  VIP_ORANGE_COLORS,
} from "../beyond-x1/components/GradientBackground";
import Footer from "../components/Footer";

const ADDRESS = "Carrera 23 #36a sur 95, Medellín, Antioquia, Colombia";
const MAPS_URL = "https://maps.app.goo.gl/fsARMqFkrAAFXZ1k9?g_st=ic";

// One labelled row inside an info card (calendar / location icon + text).
function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const text = (
    <span
      className="text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[0.18px]"
      style={{ fontFamily: fontBody }}
    >
      {value}
    </span>
  );
  return (
    <div className="flex gap-[12px] items-start">
      <img src={icon} alt="" className="w-[28px] h-[28px] shrink-0 mt-[2px]" />
      <div className="flex flex-col gap-[2px]">
        <span
          className="text-[#8a8a8a] text-[13px] uppercase tracking-[0.6px]"
          style={{ fontFamily: fontBody }}
        >
          {label}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-2 transition-opacity hover:opacity-80"
          >
            {text}
          </a>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

function InfoCard({
  tag,
  title,
  rows,
  vip,
}: {
  tag: string;
  title: string;
  rows: { icon: string; label: string; value: string; href?: string }[];
  vip?: boolean;
}) {
  return (
    <div
      className="relative w-full max-w-[522px] rounded-[18px] px-[26px] md:px-[34px] pt-[34px] pb-[38px] flex flex-col gap-[26px]"
      style={
        vip
          ? {
              border: "1px solid rgba(255,73,11,0.42)",
              background: "linear-gradient(241deg, #080a0e 1%, #0f0c0c 126%)",
              boxShadow: "inset 0 4px 70px 0 rgba(255,73,11,0.05)",
            }
          : cardStyle
      }
    >
      <div className="flex flex-col gap-[14px] items-start">
        <Tag>{tag}</Tag>
        <h2
          className="text-[clamp(30px,6vw,34px)] leading-[1.05]"
          style={{ fontFamily: fontDisplay, ...(vip ? orangeText : silver) }}
        >
          {title}
        </h2>
      </div>
      <div
        className="w-full h-px"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />
      <div className="flex flex-col gap-[20px]">
        {rows.map((r) => (
          <InfoRow key={r.label} {...r} />
        ))}
      </div>
    </div>
  );
}

export default function InstruccionesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050208] w-full overflow-x-clip">
      <section className="relative w-full overflow-hidden flex justify-center pt-[70px] md:pt-[110px] pb-[80px] md:pb-[120px] px-4">
        {/* Animated WebGL orange gradient — same effect as the VIP card. Masked
            from the top so it glows behind the title and fades into the page. */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 80% at 50% 0%, #000 0%, #000 35%, transparent 80%)",
            maskImage:
              "radial-gradient(120% 80% at 50% 0%, #000 0%, #000 35%, transparent 80%)",
          }}
        >
          <GradientBackground
            colors={VIP_ORANGE_COLORS}
            speed={0.6}
            scale={2.2}
            distortion={1.1}
            brightness={0.9}
            opacity={0.8}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1092px] flex flex-col items-center gap-[56px]">
          {/* Intro — title + subtitle only */}
          <div className="flex flex-col items-center gap-[12px] text-center">
            <h1
              className="text-[clamp(34px,6vw,50px)] leading-[1.08]"
              style={{ fontFamily: fontDisplay, textWrap: "balance" }}
            >
              <span style={silver}>Instrucciones del </span>
              <span style={orangeText}>evento</span>
            </h1>
            <p
              className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.55] max-w-[560px]"
              style={{ fontFamily: fontBody }}
            >
              Toda la información que necesitas para llegar. Revisa el horario
              según tu tipo de entrada.
            </p>
          </div>

          {/* Info cards */}
          <div className="w-full flex flex-col min-[1140px]:flex-row gap-[24px] md:gap-[32px] items-center min-[1140px]:items-stretch justify-center">
            <InfoCard
              tag="Acceso general"
              title="Entrada general"
              rows={[
                {
                  icon: A.iconCalendar,
                  label: "Entrada",
                  value: "06 de Julio · 4:00 PM",
                },
                {
                  icon: A.iconLocation,
                  label: "Dirección",
                  value: ADDRESS,
                  href: MAPS_URL,
                },
              ]}
            />
            <InfoCard
              tag="Acceso VIP"
              title="Entrada VIP"
              vip
              rows={[
                {
                  icon: A.iconCalendar,
                  label: "Llegada",
                  value: "06 de Julio · 3:30 PM",
                },
                {
                  icon: A.iconLocation,
                  label: "Dirección",
                  value: ADDRESS,
                  href: MAPS_URL,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
