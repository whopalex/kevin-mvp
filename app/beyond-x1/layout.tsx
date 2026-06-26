import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond X1 — El mastermind | Kevin Usuga",
  description:
    "El círculo donde dejamos de hablar de ventas y comenzamos a hablar de empresas. 6 y 7 de Julio, Medellín.",
};

export default function BeyondX1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
