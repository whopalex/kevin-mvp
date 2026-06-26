import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X1 Pro Max — Oferta especial $97 | Kevin Usuga",
  description:
    "Solo verás esta página una vez. Accede ahora a X1 Pro Max con un increíble descuento de $50.",
};

export default function DownsellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
