import { silver, fontDisplay, fontBody } from "./constants";
import { Tag } from "./ui";

const POINTS = ["10.000 USD", "20.000 USD", "30.000 USD", "50.000 USD"];

// Rising line chart rebuilt as inline SVG so it scales cleanly across breakpoints.
function Chart() {
  return (
    <div className="w-full max-w-[641px] order-2">
      <svg viewBox="0 0 641 175" className="w-full h-auto" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beyondArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff490b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ff490b" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* filled area under the curve */}
        <path d="M57 138 L234 97 L414 57 L630 9 L630 150 L57 150 Z" fill="url(#beyondArea)" />
        {/* the line itself */}
        <path d="M57 138 L234 97 L414 57 L630 9" stroke="#ff490b" strokeWidth="2" />
        {/* vertical dashed guides */}
        {[57, 234, 414, 630].map((x, i) => (
          <line key={i} x1={x} y1={[138, 97, 57, 9][i]} x2={x} y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 4" />
        ))}
        {/* data points */}
        {[
          [57, 138],
          [234, 97],
          [414, 57],
          [630, 9],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="#ff5f29" stroke="#050208" strokeWidth="3" />
        ))}
      </svg>
      <div className="grid grid-cols-4 mt-3">
        {POINTS.map((p) => (
          <span key={p} className="text-[#b0b0b0] text-[13px] md:text-[16px] lg:text-[19px] text-center" style={{ fontFamily: fontBody }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function NextLevelSection() {
  return (
    <section className="w-full pt-[80px] md:pt-[94px] pb-[80px] md:pb-[48px] min-[1140px]:pb-[94px] flex justify-center">
      <div className="max-w-[1242px] w-full flex flex-col min-[1140px]:flex-row gap-[48px] min-[1140px]:gap-[95px] items-center">
        <div className="order-1 flex flex-col gap-[24px] items-center text-center min-[1140px]:items-start min-[1140px]:text-left w-full max-w-[560px] min-[1140px]:max-w-[470px]">
          <Tag>La idea central</Tag>
          <h2 className="text-[clamp(30px,4.5vw,44px)] leading-[1.12]" style={{ fontFamily: fontDisplay, ...silver }}>
            El siguiente nivel nunca fue más ventas
          </h2>
          <p className="text-[#b0b0b0] text-[1.035rem] md:text-[18px] leading-[1.55]" style={{ fontFamily: fontBody }}>
            La mayoría cree que el objetivo es llegar a 10.000 USD al mes. Pero
            la realidad es que ese es apenas el inicio.
          </p>
          <p className="text-white text-[1.035rem] md:text-[18px] leading-[1.55] font-semibold" style={{ fontFamily: fontBody }}>
            El verdadero siguiente nivel es construir una empresa capaz de
            sostener ese crecimiento durante años.
          </p>
        </div>
        <Chart />
      </div>
    </section>
  );
}
