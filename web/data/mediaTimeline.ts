export type MediaEntry = {
  year: string;
  title: string;
  detail: string;
  kind: "festival" | "tv" | "radio" | "press";
};

export const mediaTimeline: MediaEntry[] = [
  {
    year: "2016",
    title: "Great Magic Show & Festival M.I.A.M",
    detail: "Featured performer — Toulouse, France",
    kind: "festival",
  },
  {
    year: "2013",
    title: "100% Shabab",
    detail: "Al Aoula",
    kind: "tv",
  },
  {
    year: "2019",
    title: "Barq Ma Tqsha’",
    detail: "Chada TV",
    kind: "tv",
  },
  {
    year: "2015",
    title: "Hit Radio with Momo",
    detail: "Hit Radio",
    kind: "radio",
  },
  {
    year: "2021",
    title: "Moroccan National Radio",
    detail: "SNRT Radio",
    kind: "radio",
  },
  {
    year: "2022",
    title: "Newsplus interview",
    detail: "Press",
    kind: "press",
  },
];
