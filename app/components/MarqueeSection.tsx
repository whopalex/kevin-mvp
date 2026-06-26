"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, useGSAP);
}

// Generamos los paths de las 21 imágenes del ticker 1
const TICKER_IMAGES = Array.from({ length: 21 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, "0");
  return `/assets/images/testimonios/testimonios_ticker1_${num}_1x.webp`;
});

// Duplicamos el array para lograr el efecto infinito sin saltos
const DUP_IMAGES = [...TICKER_IMAGES, ...TICKER_IMAGES];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let singleWidth = 0;
    let isDragging = false;
    let xPos = 0;

    // Velocidad adaptable: más rápida en móvil (pantalla angosta) que en escritorio.
    // Ajusta estos dos números para afinar el "feel".
    const SPEED_MOBILE = 0.9;   // px por frame @60fps en móvil
    const SPEED_DESKTOP = 0.6; // px por frame @60fps en escritorio
    let speed = SPEED_DESKTOP;

    const mql = window.matchMedia("(max-width: 767px)");
    const applySpeed = () => {
      speed = mql.matches ? SPEED_MOBILE : SPEED_DESKTOP;
    };
    applySpeed();
    mql.addEventListener("change", applySpeed);

    // Usamos ResizeObserver para detectar cuándo cargan las imágenes y recalcular
    const observer = new ResizeObserver(() => {
      singleWidth = slider.scrollWidth / 2;
    });
    observer.observe(slider);

    // Ticker manual para mover el carrusel en cada frame de forma continua
    const updateTicker = () => {
      if (isDragging || singleWidth === 0) return;

      xPos -= speed * gsap.ticker.deltaRatio();

      // Bucle infinito
      if (xPos <= -singleWidth) {
        xPos += singleWidth;
      } else if (xPos > 0) {
        xPos -= singleWidth;
      }

      gsap.set(slider, { x: xPos });
    };

    gsap.ticker.add(updateTicker);

    Draggable.create(slider, {
      type: "x",
      allowNativeTouchScrolling: true,
      onPress() {
        isDragging = true;
      },
      onDrag() {
        if (singleWidth === 0) return;
        let x = this.x;

        // Mantener dentro de los límites del loop fluidamente
        if (x > 0) {
          x -= singleWidth;
          gsap.set(slider, { x: x });
          this.update();
        } else if (x <= -singleWidth) {
          x += singleWidth;
          gsap.set(slider, { x: x });
          this.update();
        }

        // Sincronizar la posición actual arrastrada con nuestra variable del ticker
        xPos = this.x;
      },
      onRelease() {
        isDragging = false;
      }
    });

    return () => {
      observer.disconnect();
      gsap.ticker.remove(updateTicker);
      mql.removeEventListener("change", applySpeed);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="section-edge-to-edge relative w-full flex flex-col items-center pb-20 overflow-hidden"
      style={{ paddingTop: "clamp(90px,12vw,140px)" }}
    >
      {/* Divisor */}
      <img
        src="/assets/svg/divisor.svg"
        alt=""
        className="absolute top-0 pointer-events-none"
        style={{ left: "50%", transform: "translateX(-50%)", width: "1490px" }}
      />

      {/* Heading Block */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        {/* Tag Resultados */}
        <div className="tag-resultados">
          <span className="text">Resultados</span>
        </div>

        {/* Title */}
        <h2
          className="text-white text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,5.5vw,3.25rem)",
            fontWeight: 400,
            lineHeight: "1.1em",
            marginBottom: "clamp(40px,7vw,68px)"
          }}
        >
          Estos son los <span className="degrade">resultados</span> de <br className="hidden md:block" /> nuestros estudiantes
        </h2>
      </div>

      {/* GSAP Ticker */}
      <div className="w-full relative overflow-hidden cursor-grab active:cursor-grabbing carousel-fade-mask">
        <div ref={sliderRef} className="flex gap-[20px] md:gap-[28px] w-max" style={{ touchAction: "pan-y" }}>
          {DUP_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 pointer-events-none select-none"
              style={{
                width: "310px",
                height: "auto",
                borderRadius: "20.56px",
                border: "0.979px solid rgba(255, 255, 255, 0.20)",
                boxShadow: "0 3.916px 16.938px 0 rgba(255, 255, 255, 0.12) inset",
                overflow: "hidden" // To ensure the image corners match the border radius
              }}
            >
              <img
                src={src}
                alt={`Testimonio ${i}`}
                className="w-full h-auto object-contain pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
