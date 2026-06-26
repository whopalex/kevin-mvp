"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-main relative w-full bg-[#0a0a0a] border-t border-white/5 flex items-center justify-center px-4">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-center">
        <span className="text-[#999] text-[16.4px]" style={{ fontFamily: "BDO Grotesk, sans-serif" }}>
          Kevin Usuga {year}
        </span>
        <span className="text-[#999] text-[16.4px]" style={{ fontFamily: "BDO Grotesk, sans-serif" }}>
          © Todos los derechos reservados
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[#999] text-[16.4px]" style={{ fontFamily: "BDO Grotesk, sans-serif" }}>
            Diseñado por:
          </span>
          <a href="https://josedsg.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/assets/svg/JD Logo.svg"
              alt="Jose Diaz"
              className="h-[25px] w-auto object-contain"
            />
            <span className="text-[#999] text-[16.4px]" style={{ fontFamily: "BDO Grotesk, sans-serif" }}>
              Jose Diaz
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
