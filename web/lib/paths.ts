/** Build an encoded URL path under /media for Next/Image and anchors. */
export function mediaUrl(...segments: string[]): string {
  return ["/media", ...segments.map(encodeURIComponent)].join("/");
}
