import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "Sistema MVP - Gana $300 USD al día con WhatsApp",
  description:
    "El único método en Latinoamérica diseñado para que cualquier persona active un sistema que deposite $300 dólares al día directo a su cuenta de banco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="antialiased">
      <body className="min-h-screen flex flex-col bg-[#050208] text-white" suppressHydrationWarning>
        <Script id="ms-clarity" strategy="beforeInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x0lu3k4kls");`}
        </Script>
        <Script id="whop-utm-forward" strategy="afterInteractive">
          {`document.addEventListener('click', function(event) {
            const link = event.target.closest('a[href*="whop.com"]');
            if (!link) return;

            const currentParams = new URLSearchParams(window.location.search);
            const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

            const utmValues = utmKeys.map(key => currentParams.get(key) || '');
            const hasAnyUtm = utmValues.some(v => v !== '');
            if (!hasAnyUtm) return;

            const url = new URL(link.href);

            utmKeys.forEach(function(key) {
              const value = currentParams.get(key);
              if (value) url.searchParams.set(key, value);
            });

            link.href = url.toString();
          }, true);`}
        </Script>
        <LenisProvider>{children}</LenisProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
