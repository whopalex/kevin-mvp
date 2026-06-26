"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface WhopOneClickButtonProps {
  planId: string;
  successUrl: string;
  failureUrl?: string;
  buttonText?: string;
  className?: string;
}

/**
 * One-click upsell/downsell button.
 * Charges the customer's saved card from the initial checkout.
 */
export default function WhopOneClickButton({
  planId,
  successUrl,
  failureUrl,
  buttonText = "ACCEDER AHORA",
  className,
}: WhopOneClickButtonProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get payment_id from URL (Whop adds this after initial checkout)
  const paymentId = searchParams.get("payment_id");

  const handleClick = async () => {
    if (!paymentId) {
      setError("No se encontró el ID de pago. Por favor, regresa al checkout principal.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/whop/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_id: paymentId,
          plan_id: planId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Charge successful - redirect to success page
        router.push(successUrl);
      } else {
        // Charge failed - redirect to downsell or show error
        if (failureUrl) {
          // Pass payment_id to downsell so they can try again with lower price
          const downsellUrl = new URL(failureUrl, window.location.origin);
          downsellUrl.searchParams.set("payment_id", paymentId);
          router.push(downsellUrl.toString());
        } else {
          setError(data.error || "Error al procesar el pago. Intenta de nuevo.");
        }
      }
    } catch (err) {
      console.error("One-click charge error:", err);
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 w-full ${className || ""}`}>
      {/* CTA Button - matches existing purple gradient style */}
      <div
        className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[1.02] w-full"
        style={{
          borderRadius: "12202.284px",
          border: "1.22px solid #404040",
          background: "#35323E",
          padding: "3px",
          maxWidth: "426px",
        }}
      >
        <button
          onClick={handleClick}
          disabled={loading}
          className="relative w-full flex items-center justify-center gap-[6px] overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            borderRadius: "107786.836px",
            border: "1.078px solid rgba(197, 180, 255, 0.51)",
            background: "linear-gradient(89deg, #5020FF -8.65%, #B06AF6 85.33%, #EDCAFF 110.97%)",
            boxShadow: "0 0 13.797px 0 #D798FF inset, 9.701px 0 90.093px 0 rgba(140, 81, 230, 0.76)",
            height: "62px",
          }}
        >
          {loading ? (
            <span
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"BDO Grotesk", sans-serif',
                fontSize: "clamp(0.98rem, 2vw, 1.0875rem)",
                lineHeight: "1.125em",
                fontStyle: "normal",
                fontWeight: 600,
                marginTop: "2px",
              }}
            >
              PROCESANDO...
            </span>
          ) : (
            <>
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: '"BDO Grotesk", sans-serif',
                  fontSize: "clamp(0.98rem, 2vw, 1.0875rem)",
                  lineHeight: "1.125em",
                  fontStyle: "normal",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                {buttonText}
              </span>
              <img
                src="/assets/svg/arrow.svg"
                alt=""
                className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-active:rotate-[45deg]"
                style={{ width: "21.299px", height: "21.299px", verticalAlign: "middle" }}
              />
            </>
          )}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-400 text-sm text-center max-w-[400px]">{error}</p>
      )}

      {/* Payment methods */}
      <div className="w-full flex justify-center">
        <img
          src="/assets/svg/formas-de-pago.svg"
          alt="Métodos de pago"
          style={{ width: "371px", maxWidth: "100%", height: "auto" }}
          className="object-contain opacity-80"
        />
      </div>
    </div>
  );
}
