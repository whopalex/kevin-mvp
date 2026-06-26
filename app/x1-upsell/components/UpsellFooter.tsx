import { A } from "./constants";

export default function UpsellFooter() {
  return (
    <footer className="w-full bg-[#0a0a0a] py-8 md:py-[36px] px-4">
      <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-[52px] items-center justify-center max-w-[1420px] mx-auto">
        <span
          className="text-[#999] text-[14px] md:text-[16.4px] leading-7"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          Kevin Usuga 2026
        </span>
        <span
          className="text-[#999] text-[14px] md:text-[16.4px] leading-7"
          style={{ fontFamily: "BDO Grotesk, sans-serif" }}
        >
          © Todos los derechos reservados
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-[#999] text-[14px] md:text-[16.4px] leading-7"
            style={{ fontFamily: "BDO Grotesk, sans-serif" }}
          >
            Diseñado por:
          </span>
          <a
            href="https://josedsg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={A.iconJoseDiaz} alt="" className="h-[25px] w-auto" />
            <span
              className="text-[#999] text-[14px] md:text-[16.4px] leading-7"
              style={{ fontFamily: "BDO Grotesk, sans-serif" }}
            >
              Jose Diaz
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
