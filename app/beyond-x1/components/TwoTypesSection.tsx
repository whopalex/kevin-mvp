import { A, silver, cardStyle, fontDisplay, fontBody } from "./constants";

const VENDEDORES = [
  "Qué producto lanzar",
  "Qué anuncio probar",
  "Cuánto vendieron este mes",
  "Qué tendencia seguir",
  "Que mejorar",
];

const EMPRESARIOS = [
  "Sistemas",
  "Equipos",
  "Distribución y Escalabilidad",
  "Ventajas competitivas",
  "Capital",
];

function List({
  title,
  items,
  icon,
  textColor,
}: {
  title: string;
  items: string[];
  icon: string;
  textColor: string;
}) {
  return (
    <div className="flex-1 flex flex-col gap-[28px] md:gap-[33px] items-start px-[32px] py-[36px] rounded-[16px]" style={cardStyle}>
      <h3 className="text-[28px] md:text-[32px] leading-[0.98]" style={{ fontFamily: fontDisplay, ...silver }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((it) => (
          <li key={it} className="flex gap-[8px] items-start">
            <img src={icon} alt="" className="w-[24px] h-[24px] shrink-0" />
            <span className="text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px]" style={{ fontFamily: fontBody, color: textColor }}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TwoTypesSection() {
  return (
    <section className="w-full pt-[60px] pb-[80px] flex flex-col gap-[56px] md:gap-[72px] items-center">
      <h2 className="text-[clamp(30px,5vw,50px)] leading-[0.98] text-center max-w-[968px]" style={{ fontFamily: fontDisplay, ...silver }}>
        Existen dos tipos de emprendedores
      </h2>

      <div className="flex flex-col md:flex-row gap-[32px] w-full max-w-[720px]">
        <List title="Los Vendedores piensan en:" items={VENDEDORES} icon={A.iconQ} textColor="#b0b0b0" />
        <List title="Los Empresarios piensan en:" items={EMPRESARIOS} icon={A.iconCheck} textColor="#f5f5f5" />
      </div>

      <p className="text-[clamp(30px,4.5vw,46px)] leading-[1.05] text-center max-w-[968px]" style={{ fontFamily: fontDisplay, ...silver }}>
        Mientras unos buscan la siguiente venta, los otros están construyendo la
        siguiente década.
      </p>
    </section>
  );
}
