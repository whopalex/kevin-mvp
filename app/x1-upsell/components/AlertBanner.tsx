export default function AlertBanner() {
  return (
    <div className="w-full bg-[#232323] flex items-center justify-center py-4 md:py-[22px] px-4">
      <p
        className="text-white text-[14px] md:text-[19px] text-center leading-snug"
        style={{ fontFamily: "BDO Grotesk, sans-serif" }}
      >
        <span
          style={{
            background:
              "linear-gradient(166deg, #fff 0.73%, #ff490b 18%, #ff7a4d 96.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
          }}
        >
          IMPORTANTE:{" "}
        </span>
        Solo verás esta página una vez. Mira el video antes de continuar.
      </p>
    </div>
  );
}