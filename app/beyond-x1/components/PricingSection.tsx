import { A, silver, orangeText, fontDisplay, fontBody } from "./constants";
import { CtaButton } from "./ui";
import GradientBackground, { VIP_ORANGE_COLORS } from "./GradientBackground";

const GENERAL = [
  "Acceso completo a los 2 días del evento",
  "Kit de bienvenida",
  "Catering durante el evento",
  "Cóctel de despedida",
  "Espacios de networking con asistentes y emprendedores",
];

const VIP = [
  "Todo lo de general",
  "Hospedaje dentro del Airbnb oficial durante los 2 días del evento",
  "Brunch VIP privado",
  "Regalo exclusivo para asistentes VIP",
  "Consultoría individual de cada operación",
];

function CheckRow({ text }: { text: string }) {
  return (
    <li className="flex gap-[11px] items-center">
      <img src={A.checkPricing} alt="" className="w-[32px] h-[27px] shrink-0" />
      <span className="text-[#bebebe] text-[16px] md:text-[18px] leading-[1.4] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
        {text}
      </span>
    </li>
  );
}

function PriceCard({
  label,
  price,
  features,
  cta,
  href,
  vip,
}: {
  label: string;
  price: string;
  features: string[];
  cta: string;
  href: string;
  vip?: boolean;
}) {
  return (
    <div
      className="relative w-full max-w-[522px] rounded-[18px] px-[10px] pt-[50px] pb-[58px] flex justify-center"
      style={
        vip
          ? {
              border: "1px solid rgba(255,73,11,0.42)",
              background: "linear-gradient(241deg, #080a0e 1%, #0f0c0c 126%)",
              boxShadow: "inset 0 4px 70px 0 rgba(255,73,11,0.05)",
            }
          : { border: "1px solid #333", background: "#020202" }
      }
    >
      {/* Animated WebGL gradient — VIP card only, behind content. Masked so the
          degrade stays biased toward the top-right corner while still moving. */}
      {vip && (
        <div
          className="absolute inset-0 z-0 rounded-[18px] overflow-hidden pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(150% 150% at 100% 0%, #000 0%, #000 45%, transparent 85%)",
            maskImage:
              "radial-gradient(150% 150% at 100% 0%, #000 0%, #000 45%, transparent 85%)",
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
      )}

      <div className="relative z-10 flex flex-col gap-[32px] md:gap-[36px] items-center w-full max-w-[408px] px-2">
        <p className="text-[44px] md:text-[50px] leading-[0.88]" style={{ fontFamily: fontDisplay }}>
          <span style={silver}>Beyond</span>
          <span style={orangeText}> X1</span>
        </p>
        <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="flex flex-col gap-[12px] items-center text-center">
          <p className="text-[#c3c3c3] text-[22px] md:text-[24px] leading-[1.5] tracking-[0.24px]" style={{ fontFamily: fontBody }}>
            {label}
          </p>
          <p className="w-full whitespace-nowrap text-center text-[68px] md:text-[84px] leading-[0.8] tracking-[-0.84px]" style={{ fontFamily: fontDisplay, ...silver }}>
            {price}
          </p>
        </div>
        <ul className="flex flex-col gap-[14px] w-full">
          {features.map((f) => (
            <CheckRow key={f} text={f} />
          ))}
        </ul>
        <CtaButton label={cta} href={href} variant={vip ? "orange" : "dark"} />
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="beyond-pricing" className="w-full pt-[48px] md:pt-[70px] pb-[24px] md:pb-[52px] flex justify-center scroll-mt-10">
      <div className="max-w-[1092px] w-full flex flex-col min-[1140px]:flex-row gap-[40px] md:gap-[48px] items-center min-[1140px]:items-stretch justify-center">
        <PriceCard
          label="Acceso general:"
          price="$347 USD"
          features={GENERAL}
          cta="¡Quiero entrada general!"
          href="https://pay.hotmart.com/F106394655T?off=is5uvkh6"
        />
        <PriceCard
          label="Acceso VIP:"
          price="$698 USD"
          features={VIP}
          cta="¡Quiero entrada VIP!"
          href="https://pay.hotmart.com/W106394754Y?off=st9bec1j"
          vip
        />
      </div>
    </section>
  );
}
