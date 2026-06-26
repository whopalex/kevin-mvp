"use client";

import { gsap } from "gsap";

export default function PricingSection({
  checkoutUrl = "/checkout",
  price = "67",
}: {
  checkoutUrl?: string;
  price?: string;
}) {
  return (
    <section className="relative w-full px-4 flex justify-center pb-[70px] max-[767px]:pb-[26px]">
      <div className="w-full max-w-[540px] lg:max-w-[1063px]">
        {/* Card wrapper — overflow-visible so MacBook can stick out to the right on desktop */}
        <div
          className="relative w-full overflow-visible"
          style={{
            borderRadius: "24px",
            border: "1px solid #1E273E",
            backgroundImage: "url('/assets/images/pricing.avif')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Inner layout: stack on mobile, row on desktop */}
          <div
            className="relative z-10 flex flex-col lg:flex-row lg:items-start"
            style={{ padding: "clamp(36px,5vw,65px) clamp(20px,4vw,73px)" }}
          >
            {/* LEFT COLUMN — content */}
            <div className="flex flex-col gap-[20px] items-center w-full lg:w-[432px] shrink-0">
              {/* Title block */}
              <div className="flex flex-col gap-[8px] items-center text-center w-full">
                <h3
                  style={{
                    fontSize: "clamp(44px,8vw,58px)",
                    fontFamily: "var(--font-display)", fontWeight: 400,
                    background: "linear-gradient(84.9deg, #5020ff 4.3%, #b06af6 60.1%, #edcaff 96%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  MVP
                </h3>
                <p className="text-[#ff4949] text-[22px] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Antes: <span className="line-through">600 USD</span>
                </p>
                <p className="text-white text-[22px] lg:text-[28px] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  SOLO POR HOY
                </p>
              </div>

              {/* Price */}
              <p
                className="font-black leading-[0.8] tracking-[-1.8px] whitespace-nowrap"
                style={{
                  fontSize: "clamp(70px,14vw,95px)",
                  fontFamily: "var(--font-display)", fontWeight: 400,
                  background: "linear-gradient(114deg, #7654ff 3%, #c96af6 28.4%, #ffffff 94.5%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {`$${price} USD`}
              </p>

              <p className="text-[#c3bfd6] text-[17.8px] text-center" style={{ fontFamily: "var(--font-body)", maxWidth: "284px" }}>
                Clic en el botón de abajo para ver en su moneda local
              </p>

              {/* CTA button */}
              <div
                className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02] flex justify-center"
                style={{
                  borderRadius: "12202px",
                  border: "1.22px solid #404040",
                  background: "#35323E",
                  padding: "3px",
                  width: "min(432px, 100%)",
                }}
              >
                <a
                  href={checkoutUrl}
                  className="relative w-full flex items-center justify-center gap-[6px] overflow-hidden"
                  style={{
                    borderRadius: "107786px",
                    border: "1.078px solid rgba(197, 180, 255, 0.51)",
                    background: "linear-gradient(89deg, #5020FF -8.65%, #B06AF6 85.33%, #EDCAFF 110.97%)",
                    boxShadow: "0 0 13.797px 0 #D798FF inset, 9.701px 0 90.093px 0 rgba(140, 81, 230, 0.76)",
                    height: "62px",
                  }}
                >
                  <span style={{
                    color: "#FFF",
                    fontFamily: '"BDO Grotesk", sans-serif',
                    fontSize: "clamp(0.98rem, 2vw, 1.0875rem)",
                    lineHeight: "1.125em",
                    fontWeight: 600,
                    marginTop: "2px",
                  }}>
                    ACCEDER AL SISTEMA MVP
                  </span>
                  <img
                    src="/assets/svg/arrow.svg"
                    alt=""
                    className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-active:rotate-[45deg]"
                    style={{ width: "21.299px", height: "21.299px", verticalAlign: "middle" }}
                  />
                </a>
              </div>

              {/* Payment methods */}
              <img
                src="/assets/svg/formas-de-pago.svg"
                alt="Métodos de pago"
                style={{ width: "371px", height: "auto", marginTop: "14px" }}
                className="object-contain opacity-80 max-w-full"
              />
            </div>
          </div>

          {/* MacBook image */}
          <div
            className="relative lg:absolute lg:top-[72px] lg:-right-[60px] lg:w-[586px] lg:pointer-events-none w-full flex justify-center"
            style={{
              marginTop: "30px",
              paddingBottom: "40px",
            }}
          >
            <img
              src="/assets/images/macbook-noti.webp"
              alt="MacBook notificaciones"
              className="w-full h-auto pointer-events-none max-w-[500px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
