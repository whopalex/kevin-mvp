"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, useGSAP);
}

const VIDEOS = [
  { name: "tania", url: "https://youtube.com/shorts/vyCddayQls4", thumb: "/assets/images/testimonios/thumbs/tania_1x.webp" },
  { name: "jaime", url: "https://youtube.com/shorts/ulOa3urkiH4", thumb: "/assets/images/testimonios/thumbs/jaime_1x.webp" },
  { name: "juanse", url: "https://youtube.com/shorts/jgJwPW2TFPk", thumb: "/assets/images/testimonios/thumbs/juanse_1x.webp" },
  { name: "jorge", url: "https://youtube.com/shorts/T-bqNAkPZ-U", thumb: "/assets/images/testimonios/thumbs/jorge_1x.webp" },
  { name: "camila", url: "https://youtube.com/shorts/V_tE_hGUisw", thumb: "/assets/images/testimonios/thumbs/camila_1x.webp" },
  { name: "fabian", url: "https://www.youtube.com/shorts/e_USputh6Q4", thumb: "/assets/images/testimonios/thumbs/fabian_1x.webp" },
  { name: "alejandro", url: "https://www.youtube.com/shorts/CmQ5lNLbqb4", thumb: "/assets/images/testimonios/thumbs/alejandro_1x.webp" },
  { name: "sebastian", url: "https://youtube.com/shorts/e-3Zr7gUV7Q", thumb: "/assets/images/testimonios/thumbs/sebastian_1x.webp" }
];

const DUP_VIDEOS = [...VIDEOS, ...VIDEOS, ...VIDEOS];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const getYoutubeId = (url: string) => {
    const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const xPosRef = useRef(0);
  const singleWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const animatingRef = useRef(false);

  // Mobile infinite loop via native scroll teleport
  useEffect(() => {
    const scroller = scrollContainerRef.current;
    if (!scroller) return;

    const mql = window.matchMedia("(max-width: 767px)");
    if (!mql.matches) return;

    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let initialized = false;

    const init = () => {
      const singleWidth = scroller.scrollWidth / 3;
      if (singleWidth === 0) return;
      // Jump to middle copy without smooth so user can scroll both directions
      scroller.scrollLeft = singleWidth;
      initialized = true;
    };

    const tryInit = () => {
      if (initialized) return;
      init();
      if (!initialized) requestAnimationFrame(tryInit);
    };
    requestAnimationFrame(tryInit);

    const onScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const singleWidth = scroller.scrollWidth / 3;
        if (singleWidth === 0) return;
        if (scroller.scrollLeft < singleWidth * 0.5) {
          scroller.scrollLeft = scroller.scrollLeft + singleWidth;
        } else if (scroller.scrollLeft > singleWidth * 2.5) {
          scroller.scrollLeft = scroller.scrollLeft - singleWidth;
        }
      }, 120);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const observer = new ResizeObserver(() => {
        singleWidthRef.current = slider.scrollWidth / 3;
      });
      observer.observe(slider);

      const [draggable] = Draggable.create(slider, {
        type: "x",
        allowNativeTouchScrolling: true,
        onPress() {
          isDraggingRef.current = true;
        },
        onDrag() {
          if (singleWidthRef.current === 0) return;
          let x = this.x;

          if (x > 0) {
            x -= singleWidthRef.current;
            gsap.set(slider, { x: x });
            this.update();
          } else if (x <= -singleWidthRef.current) {
            x += singleWidthRef.current;
            gsap.set(slider, { x: x });
            this.update();
          }

          xPosRef.current = this.x;
        },
        onRelease() {
          isDraggingRef.current = false;
        }
      });

      return () => {
        observer.disconnect();
        draggable.kill();
        gsap.set(slider, { x: 0 });
      };
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const scrollDir = (dir: 1 | -1) => {
    if (animatingRef.current) return;
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      const scroller = scrollContainerRef.current;
      if (!scroller) return;
      const card = scroller.querySelector<HTMLElement>(".video-snap-card");
      const cardWidth = card ? card.offsetWidth : 260;
      const gap = 20;
      animatingRef.current = true;
      scroller.scrollBy({ left: -dir * (cardWidth + gap), behavior: "smooth" });
      setTimeout(() => {
        animatingRef.current = false;
      }, 450);
      return;
    }

    animatingRef.current = true;
    const obj = { x: 0, _lastX: 0 };
    gsap.to(obj, {
      x: 350 * dir,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (singleWidthRef.current === 0) return;
        const delta = obj.x - obj._lastX;
        obj._lastX = obj.x;

        xPosRef.current += delta;

        let x = xPosRef.current;
        if (x > 0) x -= singleWidthRef.current;
        else if (x <= -singleWidthRef.current) x += singleWidthRef.current;

        xPosRef.current = x;
        gsap.set(sliderRef.current, { x: xPosRef.current });
      },
      onComplete: () => {
        animatingRef.current = false;
      }
    });
  };

  return (
    <section
      ref={containerRef}
      className="section-edge-to-edge relative w-full flex flex-col items-center pb-20 overflow-hidden"
    >
      <div
        className="relative z-10 flex flex-col items-center text-center w-full pt-[40px] max-[767px]:pt-[20px]">
        <h2
          className="text-white text-center mx-auto w-full max-w-[600px] md:max-w-[750px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(31px,5.5vw,3.25rem)",
            fontWeight: 400,
            lineHeight: "1.1em",
            marginBottom: "38px",
          }}
        >
          Hasta ahora suman más de <br className="hidden md:block" /> <span className="degrade">$1.000.000 USD</span> en facturación
        </h2>

        <div className="flex gap-[15px]" style={{ marginBottom: "54px" }}>
          <button onClick={() => scrollDir(1)} className="hover:scale-105 transition-transform cursor-pointer">
            <img src="/assets/svg/left-arrow.svg" alt="Anterior" className="w-[42px] h-[42px]" />
          </button>
          <button onClick={() => scrollDir(-1)} className="hover:scale-105 transition-transform cursor-pointer">
            <img src="/assets/svg/right-arrow.svg" alt="Siguiente" className="w-[42px] h-[42px]" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full relative overflow-x-auto md:overflow-hidden md:cursor-grab md:active:cursor-grabbing video-snap-scroll carousel-fade-mask"
      >
        <div
          ref={sliderRef}
          className="flex gap-[20px] md:gap-[28px] w-max video-snap-track md:touch-pan-y"
        >
          {DUP_VIDEOS.map((video, i) => {
            const isActive = activeVideo === i;
            const videoId = getYoutubeId(video.url);

            return (
              <div
                key={i}
                className="relative flex-shrink-0 bg-[#0A0710] video-snap-card w-[260px] h-[465px] md:w-[290px] md:h-[515px]"
                style={{
                  borderRadius: "20.56px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.05)"
                }}
              >
                {isActive && videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (isDraggingRef.current) return;
                      setActiveVideo(i);
                    }}
                    className="block w-full h-full relative group cursor-pointer bg-transparent border-0 p-0"
                  >
                    <img
                      src={video.thumb}
                      alt={`Testimonio de ${video.name}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      onDragStart={(e) => e.preventDefault()}
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="flex justify-center items-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "45px",
                          border: "1px solid rgba(238, 202, 255, 0.22)",
                          background: "radial-gradient(97.18% 107.14% at 30.79% 81.79%, rgba(66, 65, 88, 0.75) 0%, rgba(50, 43, 58, 0.75) 100%)",
                          boxShadow: "0 4.589px 4.589px 0 rgba(255, 255, 255, 0.25) inset",
                          backdropFilter: "blur(7.11px)",
                          WebkitBackdropFilter: "blur(7.11px)"
                        }}
                      >
                        <img src="/assets/svg/play.svg" alt="Play" style={{ width: "29px" }} />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
