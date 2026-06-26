import { A, silver, x1CardStyle } from "./constants";

const CARDS = [
  {
    icon: A.iconEmbudos,
    title: "Embudos brasileños",
    desc: "El modelo de venta que Brasil lleva 5 años usando y Latam apenas está descubriendo.",
    w: 420,
  },
  {
    icon: A.iconContribucion,
    title: "Modelo de contribución",
    desc: "El cliente paga cuando recibe valor. Sin objeciones. Sin fricción.",
    w: 369,
  },
  {
    icon: A.iconLateralizacion,
    title: "Lateralización",
    desc: "El mismo producto, vendiendo en México, Colombia, Chile, Perú y Argentina al mismo tiempo.",
    w: 474,
  },
];

export default function ThreeThingsSection() {
  return (
    <section className="w-full flex flex-col items-center gap-10 md:gap-[60px] py-10 md:py-[40px] px-4 overflow-hidden">
      <h2
        className="text-center w-full max-w-[1445px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(30px, 4vw, 44px)",
          lineHeight: "0.95",
          ...silver,
        }}
      >
        Todo se reduce a tres cosas:
      </h2>

      <div className="flex flex-col min-[1140px]:flex-row min-[1140px]:flex-wrap gap-6 items-center min-[1140px]:justify-center w-full max-w-[1445px]">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="flex flex-col gap-4 p-5 md:px-6 md:py-[26px] rounded-[16px] w-full max-w-[474px] min-[1140px]:max-w-[var(--card-max)]"
            style={{ ...x1CardStyle, ["--card-max" as string]: `${c.w}px` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="relative flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  boxShadow:
                    "inset 0 1.1px 1.1px 0 #ff5f29, inset 1.1px 0 1.1px 0 #ff5f29",
                }}
              >
                <img src={c.icon} alt="" className="w-[22px] h-[22px]" />
              </div>
              <span
                className="text-[#fafafa] text-[22px] md:text-[24px]"
                style={{ fontFamily: "Ragdit, sans-serif", fontWeight: 400 }}
              >
                {c.title}
              </span>
            </div>
            <p
              className="text-[#a1a1a1] text-[16px] md:text-[17.6px] leading-relaxed"
              style={{ fontFamily: "BDO Grotesk, sans-serif" }}
            >
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-7">
        <p
          className="text-white text-[18px] md:text-[22px] font-semibold text-center tracking-[0.22px] max-w-[687px]"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Esto no es para todo el mundo y esta es la única oportunidad que vas a
          tener para entrar por este precio especial…
        </p>
        <span
          className="text-[72px] md:text-[90px] whitespace-nowrap"
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            lineHeight: "0.95",
            background:
              "linear-gradient(123deg, #fff 0.73%, #ff490b 34.86%, #ff7a4d 96.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          $147 USD
        </span>
      </div>
    </section>
  );
}
