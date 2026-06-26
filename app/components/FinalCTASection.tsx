"use client";


export default function FinalCTASection() {
  return (
    <section
      className="relative w-full px-4 flex justify-center"
      style={{
        paddingTop: "clamp(80px,10vw,160px)",
        paddingBottom: "clamp(70px,22vw,140px)",
        backgroundImage: "url('/assets/images/BG-CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[906px] mx-auto flex flex-col items-center text-center gap-3">
        <h2
          className="text-white text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px,5.5vw,52px)",
            fontWeight: 400,
            lineHeight: "1.12em",
            textWrap: "balance",
          }}
        >
          Si llevas tiempo buscando una forma real de{" "}
          <span className="degrade">generar dinero...</span>
        </h2>
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem,2.5vw,1.375rem)",
            fontWeight: 600,
          }}
        >
          Esto puede ser el punto de quiebre.
        </p>
      </div>
    </section>
  );
}
