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
      const leftFolds = left.querySelectorAll<HTMLElement>(".theater-intro__fold");
      const rightFolds = right.querySelectorAll<HTMLElement>(".theater-intro__fold");
      const leftShell = left.querySelector<HTMLElement>(".theater-intro__panel-shell");
      const rightShell = right.querySelector<HTMLElement>(".theater-intro__panel-shell");
      const leftFabric = left.querySelector<HTMLElement>(".theater-intro__fabric");
      const rightFabric = right.querySelector<HTMLElement>(".theater-intro__fabric");
      const leftShadow = left.querySelector<HTMLElement>(".theater-intro__fabric-shadow");
      const rightShadow = right.querySelector<HTMLElement>(".theater-intro__fabric-shadow");
      const leftLight = left.querySelector<HTMLElement>(".theater-intro__fabric-light");
      const rightLight = right.querySelector<HTMLElement>(".theater-intro__fabric-light");

      gsap.set(left, {
        force3D: true,
        willChange: "transform",
        transformOrigin: "100% 48%",
        xPercent: 0,
        rotation: 0,
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
      });
      gsap.set(right, {
        force3D: true,
        willChange: "transform",
        transformOrigin: "0% 48%",
        xPercent: 0,
        rotation: 0,
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
      });
      gsap.set([leftShell, rightShell], {
        force3D: true,
        transformPerspective: 760,
        yPercent: 0,
      });
      gsap.set([leftFabric, rightFabric], {
        scaleX: 1,
        xPercent: 0,
        transformOrigin: "50% 50%",
      });
      gsap.set([leftShadow, rightShadow], { opacity: 0.66, xPercent: 0 });
      gsap.set([leftLight, rightLight], { opacity: 0.2, xPercent: 0 });
      gsap.set([leftFolds, rightFolds], {
        scaleX: 1,
        xPercent: 0,
        skewY: 0,
        rotation: 0,
      });
      gsap.set(dim, { opacity: 0.48 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "none" },
        onComplete: () => {
          gsap.set([left, right, leftFolds, rightFolds], {
            clearProps: "willChange",
          });
        },
      });

      tl.to(
        dim,
        {
          opacity: 0,
          duration: 2.45,
          ease: "power2.out",
        },
        0,
      );

      // Main panel masses with tension, acceleration, and weighted stop.
      tl.to(
        left,
        {
          xPercent: -92,
          scaleX: 0.84,
          scaleY: 1.045,
          skewY: -2.9,
          rotation: -1.8,
          duration: 2.15,
          ease: "expo.inOut",
          force3D: true,
        },
        0,
      );

      tl.to(
        right,
        {
          xPercent: 94.5,
          scaleX: 0.82,
          scaleY: 1.05,
          skewY: 3.15,
          rotation: 1.95,
          duration: 2.22,
          ease: "expo.inOut",
          force3D: true,
        },
        0.06,
      );

      // Rail drag: top leads slightly, lower body follows.
      tl.to(
        [leftShell, rightShell],
        {
          yPercent: -1.35,
          skewY: (i) => (i === 0 ? -1.25 : 1.25),
          duration: 0.68,
          ease: "power2.out",
        },
        0.04,
      ).to(
        [leftShell, rightShell],
        {
          yPercent: 0.55,
          duration: 0.94,
          ease: "sine.inOut",
        },
        0.42,
      );

      // Fabric gathers progressively into compressed folds.
      tl.to(
        leftFolds,
        {
          scaleX: (i) => 0.62 - i * 0.033,
          xPercent: (i) => -15 - i * 3.6,
          skewY: (i) => -1.2 + i * 0.42,
          rotation: (i) => -0.42 + i * 0.14,
          duration: 2.02,
          ease: "expo.inOut",
          stagger: { each: 0.055, from: "end" },
        },
        0.09,
      );
      tl.to(
        rightFolds,
        {
          scaleX: (i) => 0.6 - i * 0.034,
          xPercent: (i) => 15 + i * 3.8,
          skewY: (i) => 1.2 - i * 0.38,
          rotation: (i) => 0.4 - i * 0.14,
          duration: 2.1,
          ease: "expo.inOut",
          stagger: { each: 0.06, from: "start" },
        },
        0.14,
      );

      // Cloth texture and lighting shift as fabric bunches.
      tl.to(
        [leftFabric, rightFabric],
        {
          scaleX: 1.14,
          xPercent: (i) => (i === 0 ? -6 : 6),
          duration: 1.96,
          ease: "power3.inOut",
        },
        0.14,
      );
      tl.to(
        [leftShadow, rightShadow],
        {
          opacity: 0.46,
          xPercent: (i) => (i === 0 ? -15 : 15),
          duration: 1.72,
          ease: "power2.inOut",
        },
        0.34,
      );
      tl.to(
        [leftLight, rightLight],
        {
          opacity: 0.37,
          xPercent: (i) => (i === 0 ? -8 : 8),
          duration: 1.58,
          ease: "sine.inOut",
        },
        0.46,
      );

      // End swing: slight overshoot and soft secondary settle.
      tl.to(
        left,
        {
          xPercent: -97.5,
          skewY: -3.7,
          rotation: -2.25,
          duration: 0.34,
          ease: "power2.out",
        },
        2.02,
      ).to(
        left,
        {
          xPercent: -95.1,
          skewY: -2.5,
          rotation: -1.86,
          duration: 0.6,
          ease: "elastic.out(1, 0.64)",
        },
        2.36,
      );
      tl.to(
        right,
        {
          xPercent: 99.5,
          skewY: 4.05,
          rotation: 2.4,
          duration: 0.34,
          ease: "power2.out",
        },
        2.05,
      ).to(
        right,
        {
          xPercent: 96.95,
          skewY: 2.95,
          rotation: 2.03,
          duration: 0.62,
          ease: "elastic.out(1, 0.62)",
        },
        2.39,
      );

      tl.to(curtain, { autoAlpha: 0, duration: 0.38, ease: "power2.out" }, 2.95);

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
          <div className="theater-intro__accent-rim" />
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
          <div className="theater-intro__panel-shell">
            <div className="theater-intro__folds" aria-hidden>
              {[...Array(6)].map((_, i) => (
                <span key={`left-fold-${i}`} className="theater-intro__fold" />
              ))}
            </div>
            <div className="theater-intro__fabric">
              <CurtainTextureSvg side="left" />
            </div>
            <span className="theater-intro__fabric-shadow" />
            <span className="theater-intro__fabric-light" />
          </div>
        </div>
        <div ref={rightRef} className="theater-intro__panel theater-intro__panel--right right">
          <div className="theater-intro__panel-shell">
            <div className="theater-intro__folds" aria-hidden>
              {[...Array(6)].map((_, i) => (
                <span key={`right-fold-${i}`} className="theater-intro__fold" />
              ))}
            </div>
            <div className="theater-intro__fabric">
              <CurtainTextureSvg side="right" />
            </div>
            <span className="theater-intro__fabric-shadow" />
            <span className="theater-intro__fabric-light" />
          </div>
        </div>
      </div>
    </div>
  );
}
