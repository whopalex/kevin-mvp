import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X1 Pro Max — Oferta exclusiva | Kevin Usuga",
  description:
    "Solo verás esta página una vez. Accede ahora a X1 Pro Max y descubre el Método de Contribución.",
};

export default function UpsellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}