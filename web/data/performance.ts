import { mediaUrl } from "@/lib/paths";

/** Optional: set `NEXT_PUBLIC_PERFORMANCE_YOUTUBE_IDS=id1,id2,id3` to show embeds (same order as reels). */
export type PerformanceReel = {
  title: string;
  subtitle: string;
  poster: string;
};

/** Posters for reels; pair with NEXT_PUBLIC_PERFORMANCE_YOUTUBE_IDS (comma-separated) in order. */
export const performanceReels: PerformanceReel[] = [
  {
    title: "Close-up — live energy",
    subtitle: "Audience-first moments",
    poster: mediaUrl("Evenements", "FB_IMG_1767657669687.jpg"),
  },
  {
    title: "Table magic",
    subtitle: "Intimate impossible",
    poster: mediaUrl("Evenements", "FB_IMG_1767657657440.jpg"),
  },
  {
    title: "Stage & social",
    subtitle: "Reactions in the room",
    poster: mediaUrl("Evenements", "Screenshot_20260106_005533_YouTube.jpg"),
  },
];
