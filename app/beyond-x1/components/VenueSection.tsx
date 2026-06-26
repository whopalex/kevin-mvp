import { A, silver, orangeText, fontDisplay } from "./constants";

export default function VenueSection() {
  return (
    <section className="section-edge-to-edge w-full pt-[40px] pb-[62px] flex flex-col gap-[56px] items-center overflow-hidden">
      <h2 className="text-[clamp(30px,4vw,42px)] leading-[1.12] text-center max-w-[1019px] px-4" style={{ fontFamily: fontDisplay }}>
        <span style={silver}>
          Preparate para pasar 2 días en este lugar, creando la próxima
          generación de{" "}
        </span>
        <span style={orangeText}>Big Player de X1</span>
      </h2>

      {/* Infinite marquee — two identical groups translated -50% for a seamless loop */}
      <div className="w-full overflow-hidden carousel-fade-mask">
        <div className="flex w-max animate-marquee-slow" style={{ animationDuration: "80s" }}>
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex gap-[16px] pr-[16px] md:gap-[28px] md:pr-[28px] shrink-0" aria-hidden={dup === 1}>
              {A.venue.map((src) => (
                <li key={src} className="shrink-0">
                  <img
                    src={src}
                    alt=""
                    className="w-[300px] h-[200px] md:w-[585px] md:h-[390px] rounded-[14px] md:rounded-[22px] object-cover"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
