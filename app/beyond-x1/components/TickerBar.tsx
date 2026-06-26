import { A, fontDisplay } from "./constants";

const ITEMS = [
  { icon: A.iconCalendar, text: "6 y 7 de Julio" },
  { icon: A.iconLocation, text: "Medellín" },
];

export default function TickerBar() {
  // Repeat enough times to overflow, then duplicate the whole track for a
  // seamless -50% marquee loop.
  const row = Array.from({ length: 6 }).flatMap(() => ITEMS);
  return (
    <section
      className="section-edge-to-edge w-full h-[75px] flex items-center overflow-hidden border-y"
      style={{
        background: "rgba(54,54,54,0.2)",
        borderColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(58.7px)",
        WebkitBackdropFilter: "blur(58.7px)",
      }}
    >
      <div className="flex w-max animate-marquee" style={{ animationDuration: "48s" }}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
            {row.map((it, i) => (
              <div key={i} className="flex gap-[6px] items-center px-[19px]">
                <img src={it.icon} alt="" className="w-[28px] h-[28px] shrink-0" />
                <span className="text-[#f4f4f4] text-[21px] md:text-[23px] tracking-[-0.21px] whitespace-nowrap" style={{ fontFamily: fontDisplay }}>
                  {it.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
