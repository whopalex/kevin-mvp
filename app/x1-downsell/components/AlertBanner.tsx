export default function AlertBanner() {
  return (
    <div
      className="w-full flex items-center justify-center py-4 md:py-[24px] px-4"
      style={{ background: "#7c0000", minHeight: "56px" }}
    >
      <p
        className="text-center text-[1.035rem] md:text-[20px] leading-snug font-semibold tracking-[0.25px] text-balance"
        style={{ fontFamily: "BDO Grotesk, sans-serif" }}
      >
        <span style={{ color: "#fff34c" }}>⚠️ PRECAUCIÓN: </span>
        <span className="text-white">NO CIERRE ESTA PAGINA TODAVIA</span>
      </p>
    </div>
  );
}
