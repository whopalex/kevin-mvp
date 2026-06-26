"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/app/components/magicui/animated-beam";

const Icon = forwardRef<
  HTMLDivElement,
  { src: string; w?: number; h?: number; className?: string }
>(({ src, w, h, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 inline-flex items-center justify-center ${className ?? ""}`}
      style={w && h ? { width: w, height: h } : undefined}
    >
      <img src={src} alt="" className="w-full h-full object-contain" />
    </div>
  );
});
Icon.displayName = "Icon";

const DUR = 3;
const beamProps = {
  duration: DUR,
  delay: 0,
  repeatDelay: DUR,
  gradientStartColor: "#EAAEFF",
  gradientStopColor: "#7654FF",
};

function DesktopBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden mx-auto"
      style={{ height: "clamp(180px, 40vw, 212px)", width: "100%", maxWidth: "542px" }}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Icon ref={div1Ref} src="/assets/svg/beam-icons02.svg" w={50} h={50} />
          <Icon ref={div5Ref} src="/assets/svg/beam-icons01.svg" w={50} h={50} />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Icon ref={div2Ref} src="/assets/svg/beam-icons05.svg" w={50} h={50} />
          <Icon ref={div4Ref} src="/assets/svg/beam-icons04.svg" w={87} h={109} />
          <Icon ref={div6Ref} src="/assets/svg/beam-icons03.svg" w={50} h={50} />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Icon ref={div3Ref} src="/assets/svg/beam-icons07.svg" w={50} h={50} />
          <Icon ref={div7Ref} src="/assets/svg/beam-icons06.svg" w={50} h={50} />
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} {...beamProps} />
    </div>
  );
}

function MobileBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden mx-auto"
      style={{ height: "230px", paddingLeft: "23px", paddingRight: "23px", maxWidth: "540px" }}
    >
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex flex-col items-center justify-between h-full py-2">
          <Icon ref={div1Ref} src="/assets/svg/beam-icons02.svg" w={48} h={48} />
          <Icon ref={div2Ref} src="/assets/svg/beam-icons05.svg" w={48} h={48} />
          <Icon ref={div3Ref} src="/assets/svg/beam-icons07.svg" w={48} h={48} />
        </div>

        <Icon ref={div4Ref} src="/assets/svg/beam-icons04.svg" w={90} h={112} />

        <div className="flex flex-col items-center justify-between h-full py-2">
          <Icon ref={div5Ref} src="/assets/svg/beam-icons01.svg" w={48} h={48} />
          <Icon ref={div6Ref} src="/assets/svg/beam-icons03.svg" w={48} h={48} />
          <Icon ref={div7Ref} src="/assets/svg/beam-icons06.svg" w={48} h={48} />
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-110} endYOffset={-10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={110} endYOffset={10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-110} endYOffset={-10} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} {...beamProps} />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={110} endYOffset={10} {...beamProps} />
    </div>
  );
}

export default function AIBeamCard() {
  return (
    <>
      <div className="hidden min-[1140px]:flex w-full" style={{ justifyContent: "center" }}>
        <DesktopBeam />
      </div>
      <div className="block min-[1140px]:hidden w-full flex justify-center">
        <MobileBeam />
      </div>
    </>
  );
}
