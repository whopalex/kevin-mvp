import { A } from "./constants";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center gap-8 pt-16 md:pt-[88px] pb-[160px] px-4">
      <h2
        className="text-center max-w-[700px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(28px, 3.5vw, 46px)",
          lineHeight: "1.12",
          background:
            "linear-gradient(92deg, #ccc 0.37%, #eff0f5 22.72%, #fff 48.32%, #dfdce7 71.15%, #eceaf1 97.09%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        ¿Tienes preguntas antes de unirte a X1 Pro Max?
      </h2>

      {/* Outer glow container */}
      <div
        className="w-full max-w-[351px]"
        style={{
          padding: "3px",
          borderRadius: "12202.284px",
          border: "1.22px solid rgba(255,255,255,0.24)",
          background: "rgba(0,156,106,0.50)",
          boxShadow: "inset 0 0 13.797px 0 #34BB89, 9.701px 0 90.093px 0 rgba(42,181,146,0.76)",
        }}
      >
        {/* Inner button */}
        <button
          className="w-full flex items-center justify-center gap-2 h-[56px] md:h-[68px] cursor-pointer"
          style={{
            borderRadius: "107786.836px",
            border: "1.078px solid rgba(62,202,71,0.51)",
            background: "linear-gradient(180deg, #58FFCA 0%, #05DC98 100%)",
          }}
        >
          <img src={A.iconWhatsapp} alt="" className="w-6 h-6 shrink-0" />
          <span
            className="text-[#0d372a] text-[15px] md:text-[17.5px] font-semibold uppercase"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            ESCRÍBENOS
          </span>
        </button>
      </div>
    </section>
  );
}
