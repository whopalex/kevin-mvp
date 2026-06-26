import { A, CHECKOUT_URL, fontBody } from "./constants";

// Small pill label ("El problema...", "La idea central", etc.).
// Matches Figma "discover-button-instance" (node 1703:2880): thin dark border,
// blurred dark gradient fill, subtle inner highlight, white→orange text.
export function Tag({ children }: { children: string }) {
  return (
    <div className="tag-ring relative flex items-center justify-center px-[18px] py-[8px] rounded-[42.959px] w-fit">
      <span
        className="relative z-[1] text-[16px] tracking-[-0.16px] leading-[28px] whitespace-nowrap"
        style={{
          fontFamily: fontBody,
          background:
            "linear-gradient(97deg, #FFF -44.78%, #FF490B 54.67%, #FF7A4D 95.51%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// The orange glow CTA. `variant="dark"` renders the neutral version used by the
// "general" pricing card.
export function CtaButton({
  label,
  href = CHECKOUT_URL,
  variant = "orange",
  className = "",
}: {
  label: string;
  href?: string;
  variant?: "orange" | "dark";
  className?: string;
}) {
  const orange =
    "radial-gradient(195% 120% at 56% -61%, #FF946F 0%, #F74509 100%)";
  return (
    <div
      className={`group p-[3px] rounded-full w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02] ${className}`}
      style={{
        border: "1px solid #404040",
        background:
          variant === "orange"
            ? "linear-gradient(90deg, #151E22 0%, #3C4A4F 50%, #151E22 100%)"
            : "linear-gradient(90deg, #151E22 0%, #272E30 50%, #151E22 100%)",
      }}
    >
      <a
        href={href}
        className="w-full flex items-center justify-center gap-2 h-[60px] md:h-[64px] cursor-pointer rounded-full"
        style={{
          border:
            variant === "orange"
              ? "1.2px solid rgba(255,255,255,0.25)"
              : "1px solid rgba(219,219,219,0.16)",
          background: variant === "orange" ? orange : "#1a1a1a",
          boxShadow:
            variant === "orange"
              ? "0 30px 18px 0 rgba(213,105,58,0.15), 0 13px 13px 0 rgba(213,105,58,0.26), 0 3px 7px 0 rgba(213,105,58,0.30), inset 0 4px 6.2px 0 rgba(255,255,255,0.28)"
              : "inset 0 0 13.8px 0 #2f2f2f",
        }}
      >
        <span
          className="text-white text-[15px] md:text-[17.4px] font-semibold uppercase tracking-wide text-center"
          style={{ fontFamily: fontBody }}
        >
          {label}
        </span>
        <img
          src={A.arrow}
          alt=""
          className="w-[20px] h-[20px] shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-active:rotate-[45deg]"
        />
      </a>
    </div>
  );
}
