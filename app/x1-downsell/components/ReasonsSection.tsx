import { silver, cardBg } from "./constants";

function ReasonCard({
  title,
  titleHighlight,
  body,
}: {
  title: string;
  titleHighlight: string;
  body: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col gap-4 rounded-[16px] pt-[30px] md:pt-[38px] pb-[28px] md:pb-[32px] px-5 md:px-[28px] w-full max-w-[526px]"
      style={cardBg}
    >
      <h3
        className="text-[24px] md:text-[30px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          lineHeight: "1.02",
          color: "#fafafa",
        }}
      >
        {title}{" "}
        <span
          style={{
            display: "inline-block",
            background:
              "linear-gradient(130deg, #fff 12.89%, #ff490b 52.15%, #ff7a4d 96.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {titleHighlight}
        </span>
      </h3>
      <p
        className="text-[1.035rem] md:text-[17.8px] leading-[1.5]"
        style={{ fontFamily: "BDO Grotesk, sans-serif", color: "#a1a1a1" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function ReasonsSection() {
  return (
    <section className="w-full flex flex-col items-center gap-8 md:gap-[72px] py-10 md:py-[53px] px-4 overflow-hidden">
      {/* Section heading */}
      <h2
        className="text-center w-full max-w-[936px]"
        style={{
          fontFamily: "Ragdit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(28px, 4.5vw, 48px)",
          lineHeight: "1.04",
          ...silver,
        }}
      >
        Dos razones principales por las que deberías aprovechar esta
        oportunidad:
      </h2>

      {/* Cards */}
      <div className="flex flex-col notebook:flex-row gap-6 md:gap-8 items-start justify-center w-full flex-wrap">
        <ReasonCard
          title="Esta es una"
          titleHighlight='oferta "ÚNICA"'
          body={
            <>
              Lo que significa que tu nunca tendrás otra oportunidad de comprar
              esto por un precio tan bajo en ningún otro lugar. De hecho, si me
              envías un correo electrónico más tarde, aunque me gustaría darte
              otra oportunidad, no me sería posible volver a hacerte esta
              oferta, porque esta oferta{" "}
              <span
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: "BDO Grotesk, sans-serif",
                }}
              >
                solo está disponible en esta página.
              </span>
            </>
          }
        />
        <ReasonCard
          title="Tienes 7 días"
          titleHighlight="para probarlo"
          body={
            <>
              Asumiré todos los riesgos por ti,{" "}
              <span
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: "BDO Grotesk, sans-serif",
                }}
              >
                puedes probarlo durante 7 días completos
              </span>{" "}
              y si no estás satisfecho con los resultados, con mi garantía de
              máxima satisfacción te devolveré cada centavo que pagaste. Si lo
              piensas, básicamente no tienes ninguna desventaja con esta oferta,
              todo el riesgo lo asumiré yo...
            </>
          }
        />
      </div>

      {/* Bottom text */}
      <p
        className="text-center text-[1.035rem] md:text-[18px] leading-[1.5] tracking-[0.18px] w-full max-w-[802px]"
        style={{ fontFamily: "BDO Grotesk, sans-serif", color: "#b0b0b0" }}
      >
        Las ventajas de adquirir esto ahora literalmente te cambiarán la vida,
        así que de nuevo, puedes tener acceso a X1 Pro Max por un precio
        extremadamente bajo, de solo $97 USD.
      </p>
    </section>
  );
}
