import { A, silver, orangeText, fontDisplay, fontBody } from "./constants";
import { Tag } from "./ui";

function ProfileCard({
  label,
  title,
  desc,
  highlight,
}: {
  label: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex-1 flex flex-col gap-[14px] items-start px-[29px] py-[27px] rounded-[16px]"
      style={{
        background: "linear-gradient(216deg, #080a0e 1%, #0f0c0c 126%)",
        border: "1px solid #262626",
      }}
    >
      <p className="text-[#868686] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
        {label}
      </p>
      <p className="text-[clamp(30px,6vw,50px)] leading-[0.98]" style={{ fontFamily: fontDisplay, ...(highlight ? orangeText : silver) }}>
        {title}
      </p>
      <p className="text-[#868686] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
        {desc}
      </p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="w-full pt-[52px] pb-[63px]">
      <div
        className="relative max-w-[1272px] mx-auto rounded-[32px] overflow-hidden flex flex-col gap-[60px] md:gap-[74px] items-center pt-[64px] md:pt-[82px] pb-[64px] md:pb-[96px] px-5 md:px-10"
        style={{
          background: "linear-gradient(161deg, #0e0c0c 16%, #050607 102%)",
          border: "1.2px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* 3×3px white dot grid @ 7% opacity, 20px spacing */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* orange gradient line glowing across the top edge */}
        <img
          src={A.dsLinearTop}
          alt=""
          className="absolute top-[-220px] h-[440px] tablet:top-[-409px] tablet:h-[820px] left-1/2 -translate-x-1/2 w-[2px] max-w-full rotate-90 z-0 pointer-events-none select-none"
        />

        <div className="relative z-10 flex flex-col gap-[24px] items-center text-center max-w-[826px]">
          <Tag>El problema...</Tag>
          <h2 className="text-[clamp(30px,5vw,50px)] leading-[0.98]" style={{ fontFamily: fontDisplay, ...silver }}>
            La mayoría de personas nunca construye una empresa
          </h2>
          <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
            Construyen una máquina que depende completamente de ellos. Generan
            ventas. Facturan. Lanzan productos. Pero siguen atrapados en el mismo
            lugar. Cada decisión, Cada problema depende de ellos.
            <br className="md:hidden" />
            <br className="md:hidden" />
            <span className="text-white font-semibold">
              Cada resultado existe gracias a ellos.{" "}
            </span>
            Y tarde o temprano descubren que:{" "}
            <span className="text-white font-semibold">
              “No construyeron una empresa. Construyeron un empleo muy bien
              pagado.”
            </span>
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-[28px] items-stretch w-full max-w-[792px]">
          <ProfileCard
            label="HOY probablemente seas..."
            title="Operador"
            desc="Todo el peso del negocio descansa sobre tus hombros"
          />
          <ProfileCard
            label="Tu siguiente nivel es ser:"
            title="Empresario"
            desc="Tener estructura de crecimiento que no dependa de ti"
            highlight
          />
        </div>
      </div>
    </section>
  );
}
