"use client";

import { useId } from "react";

/**
 * Velvet drapery folds — unique gradient/pattern IDs per instance (SSR-safe).
 */

export function CurtainTextureSvg({ side }: { side: "left" | "right" }) {
  const u = useId().replace(/:/g, "");

  const velvetId = side === "left" ? `velvet_l_${u}` : `velvet_r_${u}`;
  const foldId = side === "left" ? `fold_left_${u}` : `fold_right_${u}`;
  const goldId = side === "left" ? `gold_inner_l_${u}` : `gold_inner_r_${u}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 960"
      preserveAspectRatio="none"
      aria-hidden
      focusable={false}
    >
      <defs>
        <linearGradient id={`velvet_l_${u}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a070c" />
          <stop offset="18%" stopColor="#4f0c18" />
          <stop offset="32%" stopColor="#2a0710" />
          <stop offset="48%" stopColor="#5f1122" />
          <stop offset="62%" stopColor="#26080e" />
          <stop offset="78%" stopColor="#4c0e1a" />
          <stop offset="100%" stopColor="#140406" />
        </linearGradient>
        <linearGradient id={`velvet_r_${u}`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1a070c" />
          <stop offset="18%" stopColor="#4f0c18" />
          <stop offset="32%" stopColor="#2a0710" />
          <stop offset="48%" stopColor="#5f1122" />
          <stop offset="62%" stopColor="#26080e" />
          <stop offset="78%" stopColor="#4c0e1a" />
          <stop offset="100%" stopColor="#140406" />
        </linearGradient>
        <linearGradient id={`gold_inner_l_${u}`} x1="100%" x2="62%">
          <stop offset="0%" stopColor="rgba(201,164,92,0.45)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id={`gold_inner_r_${u}`} x1="0%" x2="38%">
          <stop offset="0%" stopColor="rgba(201,164,92,0.45)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <pattern id={`fold_left_${u}`} patternUnits="userSpaceOnUse" width={22} height={960}>
          <rect width="22" height="960" fill="rgba(255,245,235,0.03)" />
          <path d="M0 0 Q11 480 22 960" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2.2" />
          <path d="M0 0 Q6 520 22 940" fill="none" stroke="rgba(255,218,165,0.06)" strokeWidth="1" />
          <path d="M0 960 Q13 420 22 0" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" />
        </pattern>
        <pattern id={`fold_right_${u}`} patternUnits="userSpaceOnUse" width={22} height={960}>
          <rect width="22" height="960" fill="rgba(255,245,235,0.03)" />
          <path d="M22 0 Q11 480 0 960" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2.2" />
          <path d="M22 0 Q16 520 0 940" fill="none" stroke="rgba(255,218,165,0.06)" strokeWidth="1" />
          <path d="M22 960 Q9 420 0 0" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="200" height="960" fill={`url(#${velvetId})`} />
      <rect width="200" height="960" fill={`url(#${foldId})`} opacity={0.9} />
      <rect width="200" height="960" fill="rgba(201,164,92,0.085)" opacity={0.35} style={{ mixBlendMode: "soft-light" }} />
      <rect width="200" height="960" fill={`url(#${goldId})`} />
    </svg>
  );
}
