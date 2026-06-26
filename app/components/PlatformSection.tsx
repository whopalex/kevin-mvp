"use client";

export default function PlatformSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center px-4 overflow-x-clip"
      style={{ marginTop: "clamp(32px,7vw,75px)", marginBottom: "clamp(50px,12vw,140px)" }}
    >
      {/* Title */}
      <h2
        className="relative text-center text-white leading-[1.1]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(30px,5.5vw,52px)",
          fontWeight: 400,
          maxWidth: "884px",
        }}
      >
        Toda una experiencia tipo Netflix que te hará llevar tu vida al{" "}
        <span className="degrade">siguiente nivel</span>
      </h2>

      {/* Wrapper — gradient outside overflow-hidden */}
      <div
        className="relative w-full"
        style={{ maxWidth: "1055px", marginTop: "clamp(36px, 5vw, 52px)" }}
      >
        {/* Gradient blob */}
        <div
          className="pointer-events-none absolute"
          style={{
            width: "1000px",
            height: "1000px",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-30deg)",
            filter: "blur(150px)",
            opacity: 0.88,
            zIndex: 0,
          }}
        >
          <img
            src="/assets/svg/gradient-light-blur.svg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Browser mockup with rounded border */}
        <div
          className="relative z-10 w-full overflow-hidden gap-[0]"
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src="/assets/svg/safarioIOS.svg"
            alt=""
            style={{ width: "100%", display: "block", position: "relative", zIndex: 1 }}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              aspectRatio: "1100 / 655",
              objectFit: "cover",
              display: "block",
              verticalAlign: "top",
              marginTop: "-3px",
              position: "relative",
              zIndex: 0,
            }}
          >
            <source src="https://r2.academiamvp.com/kevin-area.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
