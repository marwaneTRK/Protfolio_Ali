"use client";

import gsap from "gsap";
import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

import { CurtainTextureSvg } from "./CurtainTextureSvg";

import "./theater-intro.css";
const DUST_COUNT = 42;

function dustVars(i: number): CSSProperties {
  const sx = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  const sy = Math.cos(i * 4.898 + 23.452) * 23421.8765;
  const n1 = sx - Math.floor(sx);
  const n2 = sy - Math.floor(sy);

  const leftPct = `${14 + n1 * 72}%`;
  const sizePx = `${0.85 + n2 * 2.35}px`;
  const op = `${(0.12 + n1 * 0.32).toFixed(4)}`;
  const opEnd = `${(0.04 + n2 * 0.08).toFixed(4)}`;
  const durSec = 16 + Math.floor((n2 * 38) % 38);
  const delaySec = -(Math.floor((n1 * 22) % 22));
  const dxVw = `${(-20 + n2 * 40).toFixed(1)}vw`;

  const vars = {
    left: leftPct,
    top: `${-6 + ((i * 7) % 24)}vh`,
    "--dust-size": sizePx,
    "--dust-op": op,
    "--dust-op-end": opEnd,
    "--dust-dur": `${durSec}s`,
    "--dust-delay": `${delaySec}s`,
    "--dust-dx": dxVw,
  } as CSSProperties;
  return vars;
}

export function TheaterIntro({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const dimRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  const dustSlots = useMemo(() => [...Array(DUST_COUNT).keys()], []);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const curtain = curtainRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const dim = dimRef.current;

    if (!scene || !curtain || !left || !right || !dim) return undefined;

    const prefFast = window.matchMedia("(prefers-reduced-motion: reduce)");

    function applyRevealEndState() {
      gsap.killTweensOf([left, right, curtain, dim]);
      gsap.set(dim, { opacity: 0 });
      gsap.set(curtain, { autoAlpha: 0 });
    }

    function buildTimeline(): ReturnType<typeof gsap.timeline> {
      gsap.set(left, {
        force3D: true,
        willChange: "transform",
        transformOrigin: "100% 50%",
        xPercent: 0,
        rotation: 0,
      });
      gsap.set(right, {
        force3D: true,
        willChange: "transform",
        transformOrigin: "0% 50%",
        xPercent: 0,
        rotation: 0,
      });
      gsap.set(dim, { opacity: 0.48 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "sine.inOut" },
        onComplete: () => {
          gsap.set([left, right], {
            clearProps: "willChange",
          });
        },
      });

      tl.to(
        dim,
        {
          opacity: 0,
          duration: 1.8,
          ease: "sine.out",
        },
        0,
      );

      tl.to(
        left,
        {
          xPercent: -108,
          rotation: -2.4,
          duration: 2.05,
          ease: "power2.inOut",
          force3D: true,
        },
        0,
      );

      tl.to(
        right,
        {
          xPercent: 108,
          rotation: 2.4,
          duration: 2.05,
          ease: "power2.inOut",
          force3D: true,
        },
        0,
      );

      tl.to(curtain, { autoAlpha: 0, duration: 0.4, ease: "power2.out" }, "-=0.35");

      return tl;
    }

    if (prefFast.matches) {
      applyRevealEndState();
      return undefined;
    }

    timelineRef.current = buildTimeline();
    const starter = gsap.delayedCall(0.08, () => {
      timelineRef.current?.play(0);
    });

    return () => {
      starter.kill();
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, []);

  return (
    <div
      id="scene"
      ref={sceneRef}
      className="theater-intro__scene relative isolate"
      data-theater-intro="true"
    >
      <div className="theater-intro__backdrop" aria-hidden>
        <div className="theater-intro__ambient" aria-hidden>
          <div className="theater-intro__spotlight" />
          <div className="theater-intro__vignette" />
          <div className="theater-intro__velvet-wash" />
          <div className="theater-intro__gold-rim" />
        </div>
        <div ref={dimRef} className="theater-intro__dim" aria-hidden />
      </div>

      <div className="theater-intro__particles" aria-hidden>
        {dustSlots.map((i) => (
          <span key={i} className="theater-intro__dust" style={dustVars(i)} />
        ))}
      </div>

      <div className="theater-intro__content">{children}</div>

      <div id="curtain" ref={curtainRef} className="theater-intro__curtain" aria-hidden>
        <div ref={leftRef} className="theater-intro__panel theater-intro__panel--left left">
          <CurtainTextureSvg side="left" />
        </div>
        <div ref={rightRef} className="theater-intro__panel theater-intro__panel--right right">
          <CurtainTextureSvg side="right" />
        </div>
      </div>
    </div>
  );
}
