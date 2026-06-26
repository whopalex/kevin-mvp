import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instrucciones — Beyond X1 | Kevin Usuga",
  description:
    "Dirección, horarios y detalles de llegada para el evento Beyond X1. 06 de Julio, Medellín.",
};

export default function InstruccionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
