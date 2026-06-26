"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface GradientBackgroundProps {
  speed?: number;
  scale?: number;
  distortion?: number;
  curve?: number;
  contrast?: number;
  colors?: string[];
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
  brightness?: number;
  opacity?: number;
  complexity?: number;
  frequency?: number;
  className?: string;
  style?: React.CSSProperties;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uDistortion;
  uniform float uCurve;
  uniform float uContrast;
  uniform float uRotation;
  uniform float uOffsetX;
  uniform float uOffsetY;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform float uComplexity;
  uniform float uFrequency;
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uC3;
  uniform vec3 uC4;
  uniform vec3 uC5;
  uniform vec3 uC6;
  uniform vec3 uC7;
  uniform vec3 uC8;

  varying vec2 vUv;

  vec2 rotate2D(vec2 p, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
  }

  void main() {
    vec2 pos = vUv * uScale;
    float aspect = uResolution.x / uResolution.y;
    pos.x *= aspect;

    pos.x += uOffsetX;
    pos.y += uOffsetY;

    vec2 center = vec2(aspect * 0.5 * uScale, 0.5 * uScale);
    pos = rotate2D(pos - center, uRotation) + center;

    float iterations = 10.0 + uComplexity * 10.0;

    for (float i = 1.0; i < 30.0; i++) {
      if (i > iterations) break;
      float timeOffset = uTime * uSpeed * 0.1 * i;
      float amp = 0.8 * uDistortion;
      float shift = 0.3 * uCurve;
      pos.x += amp / i * sin(i * pos.y + timeOffset + shift * i) + 1.6;
      pos.y += (amp * 2.0) / i * sin(pos.x + timeOffset + shift * i + 1.6) - 0.8;
    }

    float wave = cos((pos.x + pos.y) * uFrequency) * 0.5 + 0.5;

    vec3 finalColor = vec3(0.0);

    if (wave < 0.15) {
      finalColor = mix(uC1, uC2, wave * 6.667);
    } else if (wave < 0.35) {
      finalColor = mix(uC2, uC3, (wave - 0.15) * 5.0);
    } else if (wave < 0.55) {
      finalColor = mix(uC3, uC4, (wave - 0.35) * 5.0);
    } else if (wave < 0.7) {
      finalColor = mix(uC4, uC5, (wave - 0.55) * 6.667);
    } else if (wave < 0.82) {
      finalColor = mix(uC5, uC6, (wave - 0.7) * 8.333);
    } else if (wave < 0.92) {
      finalColor = mix(uC6, uC7, (wave - 0.82) * 10.0);
    } else {
      finalColor = mix(uC7, uC8, (wave - 0.92) * 12.5);
    }

    finalColor *= uBrightness;

    float alpha = smoothstep(0.01, 1.0, pow(wave, 2.5 * uContrast)) * uOpacity;
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

// Colores del plan Ultimate (purpuras)
export const ULTIMATE_COLORS = [
  "#1a0a1a",
  "#3d1a3d",
  "#6b2d6b",
  "#994099",
  "#cc66cc",
  "#e699e6",
  "#f2b8f2",
  "#ffd6ff",
];

// Paleta naranja para el plan VIP "Beyond X1" (oscuro → naranja marca → crema).
// Tonos corridos hacia el naranja puro (menos rojo) para un degrade más cálido.
export const VIP_ORANGE_COLORS = [
  "#140801",
  "#3a1604",
  "#7a2e06",
  "#cf4e0c",
  "#ff6014",
  "#ff7c22",
  "#ff6418",
  "#ff8a34",
];

export default function GradientBackground({
  speed = 1,
  scale = 2,
  distortion = 1,
  curve = 1,
  contrast = 1,
  colors = ULTIMATE_COLORS,
  rotation = 0,
  offsetX = 0,
  offsetY = 0,
  brightness = 1,
  opacity = 1,
  complexity = 1,
  frequency = 1,
  className,
  style,
}: GradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene & Camera (orthographic, full screen quad)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(w, h) },
        uSpeed:      { value: speed },
        uScale:      { value: scale },
        uDistortion: { value: distortion },
        uCurve:      { value: curve },
        uContrast:   { value: contrast },
        uRotation:   { value: rotation * Math.PI / 180 },
        uOffsetX:    { value: offsetX },
        uOffsetY:    { value: offsetY },
        uBrightness: { value: brightness },
        uOpacity:    { value: opacity },
        uComplexity: { value: complexity },
        uFrequency:  { value: frequency },
        uC1: { value: new THREE.Color(colors[0]) },
        uC2: { value: new THREE.Color(colors[1]) },
        uC3: { value: new THREE.Color(colors[2]) },
        uC4: { value: new THREE.Color(colors[3]) },
        uC5: { value: new THREE.Color(colors[4]) },
        uC6: { value: new THREE.Color(colors[5]) },
        uC7: { value: new THREE.Color(colors[6]) },
        uC8: { value: new THREE.Color(colors[7]) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      const ew = container.clientWidth;
      const eh = container.clientHeight;
      renderer.setSize(ew, eh);
      material.uniforms.uResolution.value.set(ew, eh);
    });
    resizeObserver.observe(container);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update uniforms reactively when props change
  useEffect(() => {
    const mat = materialRef.current;
    if (!mat) return;
    mat.uniforms.uSpeed.value      = speed;
    mat.uniforms.uScale.value      = scale;
    mat.uniforms.uDistortion.value = distortion;
    mat.uniforms.uCurve.value      = curve;
    mat.uniforms.uContrast.value   = contrast;
    mat.uniforms.uRotation.value   = rotation * Math.PI / 180;
    mat.uniforms.uOffsetX.value    = offsetX;
    mat.uniforms.uOffsetY.value    = offsetY;
    mat.uniforms.uBrightness.value = brightness;
    mat.uniforms.uOpacity.value    = opacity;
    mat.uniforms.uComplexity.value = complexity;
    mat.uniforms.uFrequency.value  = frequency;
    mat.uniforms.uC1.value.set(colors[0]);
    mat.uniforms.uC2.value.set(colors[1]);
    mat.uniforms.uC3.value.set(colors[2]);
    mat.uniforms.uC4.value.set(colors[3]);
    mat.uniforms.uC5.value.set(colors[4]);
    mat.uniforms.uC6.value.set(colors[5]);
    mat.uniforms.uC7.value.set(colors[6]);
    mat.uniforms.uC8.value.set(colors[7]);
  }, [speed, scale, distortion, curve, contrast, colors, rotation, offsetX, offsetY, brightness, opacity, complexity, frequency]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "transparent",
        ...style,
      }}
    />
  );
}
