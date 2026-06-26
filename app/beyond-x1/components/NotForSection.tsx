import { A, silver, redText, greenText, fontDisplay, fontBody } from "./constants";

const NOT_FOR = [
  "Personas que buscan su primera venta",
  "Personas que aún no saben qué vender",
  "Personas buscando fórmulas mágicas",
  "Personas que no ejecutan",
];

const FOR = [
  "Emprendedores que ya generan resultados",
  "Dueños de negocios digitales",
  "Personas con ambición de construir algo grande",
  "Quienes quieren convertirse en empresarios",
];

function Column({
  title,
  items,
  icon,
  titleStyle,
  cardStyle,
}: {
  title: string;
  items: string[];
  icon: string;
  titleStyle: React.CSSProperties;
  cardStyle: React.CSSProperties;
}) {
  return (
    <div className="flex-1 flex flex-col gap-[28px] md:gap-[34px] items-start px-[33px] py-[37px] rounded-[16px]" style={cardStyle}>
      <h3 className="text-[clamp(30px,4.5vw,44px)] leading-[1.12]" style={{ fontFamily: fontDisplay, ...titleStyle }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((it) => (
          <li key={it} className="flex gap-[8px] items-start">
            <img src={icon} alt="" className="w-[24px] h-[24px] shrink-0" />
            <span className="text-[#f5f5f5] text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody }}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NotForSection() {
  return (
    <section className="w-full pt-[78px] pb-[52px] flex flex-col gap-[48px] md:gap-[62px] items-center">
      <h2 className="text-[clamp(30px,4.5vw,44px)] leading-[1.12] text-center" style={{ fontFamily: fontDisplay, ...silver }}>
        Este mastermind no es para todos
      </h2>

      <div className="flex flex-col md:flex-row gap-[32px] w-full max-w-[1112px]">
        <Column
          title="No es para..."
          items={NOT_FOR}
          icon={A.iconXRed}
          titleStyle={redText}
          cardStyle={{ background: "#020202", border: "1px solid rgba(255,255,255,0.1)" }}
        />
        <Column
          title="Si es para..."
          items={FOR}
          icon={A.iconCheckGreen}
          titleStyle={greenText}
          cardStyle={{ background: "linear-gradient(219deg, #080a0e 1%, #0f0c0c 126%)", border: "1px solid #262626" }}
        />
      </div>
    </section>
  );
}
