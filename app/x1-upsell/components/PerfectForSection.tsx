import { A, silver, orangeText, x1CardStyle } from "./constants";

const ITEMS = [
  {
    title: "Quieres que tu primera semana sea la más rentable posible",
    desc: "En lugar de arrancar con el sistema estándar y optimizar después, el Método de Contribución te da desde el día uno el mismo cambio que le permitió a Camila llegar a $275 dólares en su primera semana empezando con sólo $4 dólares.",
  },
  {
    title: "No quieres dejar dinero sobre la mesa mientras aprendes",
    desc: "Hay personas que van a llegar a tu WhatsApp desde el primer día — el Activador de Conversiones recupera automáticamente entre un 4% y un 8% de las que no compren de inmediato, sin que tengas que hacer nada.",
  },
  {
    title: "Quieres que cada transferencia que recibas sea la más alta posible.",
    desc: "Con el Método de Contribución las personas no pagan un precio fijo — expresan gratitud. Y eso casi siempre vale más que los $3 o $4 dólares del precio original… tengo estudiantes que han llegado a recibir hasta $30 dólares por el mismo producto.",
  },
];

export default function PerfectForSection() {
  return (
    <section className="w-full flex flex-col min-[1140px]:flex-row gap-14 min-[1140px]:gap-[80px] items-center min-[1140px]:items-start justify-center py-16 md:py-[80px] px-4 max-w-[1420px] mx-auto">
      <div className="w-full min-[1140px]:max-w-[507px] shrink-0 min-[1140px]:sticky min-[1140px]:top-24 text-center min-[1140px]:text-left">
        <h2
          style={{
            fontFamily: "Ragdit, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(34px, 4.5vw, 58px)",
            lineHeight: "1.01",
          }}
        >
          <span style={orangeText}>X1 Pro Max</span>
          <span style={silver}>{` es perfecto para ti si:`}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 items-center">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="relative rounded-[16px] p-5 md:px-[36px] md:py-[47px] overflow-hidden flex flex-col justify-center w-full max-w-[474px] min-[1140px]:w-[508px] min-[1140px]:max-w-none"
            style={x1CardStyle}
          >
            <img
              src={A.linearriba}
              alt=""
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[330px] pointer-events-none select-none"
            />
            <div className="flex flex-col gap-3 relative">
              <h3
                className="text-white text-[20px] md:text-[24px] font-semibold leading-[1.3]"
                style={{ fontFamily: "BDO Grotesk, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#b0b0b0] text-[16px] md:text-[18px] leading-relaxed tracking-[0.18px]"
                style={{ fontFamily: "BDO Grotesk, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

