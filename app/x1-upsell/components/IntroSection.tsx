import { A, silver, x1CardStyle } from "./constants";

export default function IntroSection() {
  return (
    <section className="w-full flex justify-center py-16 md:py-[65px] px-4 min-[1140px]:px-[5%]">
      <div
        className="w-full max-w-[550px] min-[1140px]:max-w-[1420px] rounded-[32px] relative pb-8 min-[1140px]:pb-0"
        style={x1CardStyle}
      >
        {/* Decorative line at top */}
        <img
          src={A.linearriba}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] pointer-events-none select-none"
        />

        {/* Desktop: image absolutely positioned right */}
        <img
          src={A.img1}
          alt="Kevin Usuga - X1 Pro Max"
          className="hidden min-[1140px]:block absolute object-contain pointer-events-none min-[1140px]:right-[-30px] min-[1272px]:right-[80px] top-[-65] min-[1140px]:w-[500px] min-[1245px]:w-[530px]"
        />

        {/* Mobile/Tablet: image above text */}
        <div className="min-[1140px]:hidden w-full flex justify-center pt-10 px-5 md:px-6 mb-[25px]">
          <img
            src={A.img1}
            alt="Kevin Usuga - X1 Pro Max"
            className="relative w-full max-w-[420px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center px-5 tablet:pl-[5%] tablet:pr-6 notebook:pl-[5%] notebook:pr-[93px] notebook:h-[470px] desktop:pl-[125px]">
          <div className="flex flex-col gap-6 w-full min-[1140px]:max-w-[578px] shrink-0">
            <h2
              style={{
                fontFamily: "Ragdit, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(34px, 4vw, 48px)",
                lineHeight: "0.95",
                ...silver,
              }}
            >
              Ya tienes el Sistema MVP...
            </h2>
            <p
              className="text-[#b0b0b0] text-[16px] md:text-[18px] leading-relaxed tracking-[0.18px]"
              style={{ fontFamily: "BDO Grotesk, sans-serif" }}
            >
              El bot, los productos, el marketplace y todo lo que necesitas para
              generar tus primeras transferencias. Pero hay un cambio simple que
              descubrí en un mastermind privado de $8.000 dólares al año que puede
              duplicar o triplicar lo que generas con el mismo esfuerzo.{" "}
              <span className="text-white font-semibold">
                Se llama el Método de Contribución. Y es lo que enseño dentro de{" "}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(116deg, #fff 0.73%, #ff490b 43%, #ff7a4d 96.56%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                X1 Pro Max.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
