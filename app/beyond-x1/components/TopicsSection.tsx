import { silver, orangeText, cardStyle, fontDisplay, fontBody } from "./constants";
import { Tag } from "./ui";

const TOPICS = [
  {
    n: "1",
    title: "Embudo de X1 Pro Max",
    desc: "Muchos aún no conocen esto. Voy a mostrar el ecosistema y embudo que nos permite mantener una operación estable y escalable.",
  },
  {
    n: "2",
    title: "La visión 2026",
    desc: "Hacia dónde veo que se mueve el mercado y dónde estará la mayor oportunidad.",
  },
  {
    n: "3",
    title: "Construcción de equipos",
    desc: "Cómo dejar de ser el cuello de botella de tu crecimiento.",
  },
  {
    n: "4",
    title: "Sistemas y escalabilidad",
    desc: "Cómo construir una empresa que funcione más allá de tu presencia.",
  },
  {
    n: "5",
    title: "Ecosistemas de negocio",
    desc: "Cómo crear múltiples fuentes de crecimiento dentro de una misma operación.",
  },
  {
    n: "6",
    title: "Capital y patrimonio",
    desc: "Cómo transformar ingresos en riqueza de largo plazo.",
  },
];

export default function TopicsSection() {
  return (
    <section className="w-full pt-[72px] pb-[48px] flex flex-col gap-[56px] md:gap-[72px] items-center">
      <div className="flex flex-col gap-[24px] items-center text-center max-w-[690px] px-4">
        <Tag>¿Qué vamos a trabajar?</Tag>
        <h2 className="text-[clamp(30px,4.5vw,44px)] leading-[1.12]" style={{ fontFamily: fontDisplay, ...silver }}>
          Las conversaciones que cambian la trayectoria de una empresa
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] w-full max-w-[1380px]">
        {TOPICS.map((t) => (
          <div key={t.n} className="flex flex-col gap-[16px] items-start px-[24px] py-[26px] rounded-[16px]" style={cardStyle}>
            <div className="flex gap-[12px] items-center">
              <span
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                style={{ boxShadow: "inset 0 1.1px 1.1px 0 #ff5f29, inset 1.1px 0 1.1px 0 #ff5f29" }}
              >
                <span className="text-[24px] leading-none" style={{ fontFamily: fontDisplay, ...orangeText }}>
                  {t.n}
                </span>
              </span>
              <h3 className="text-[#fafafa] text-[22px] md:text-[24px] leading-[1.15]" style={{ fontFamily: fontDisplay }}>
                {t.title}
              </h3>
            </div>
            <p className="text-[#a1a1a1] text-[1.035rem] md:text-[18px] leading-[1.5]" style={{ fontFamily: fontBody }}>
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
