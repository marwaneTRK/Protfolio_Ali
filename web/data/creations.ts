import { mediaUrl } from "@/lib/paths";

export type Creation = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const creations: Creation[] = [
  {
    slug: "cicard",
    name: "CICARD",
    tagline: "Signature visual impact",
    description:
      "A signature visual effect designed for maximum impact in close-up performances.",
    image: mediaUrl("Creations product_", "Cicard by Abdelli Nour.png"),
    imageAlt: "CICARD — original close-up magic by Abdelali Nour",
  },
  {
    slug: "sawebwork",
    name: "Sawebwork",
    tagline: "Professional-grade utility",
    description:
      "A professional-grade gimmick built for modern magicians seeking powerful and practical routines.",
    image: mediaUrl("Creations product_", "Sawebwork by Abdelali Nour.png"),
    imageAlt: "Sawebwork — professional magic gimmick by Abdelali Nour",
  },
  {
    slug: "vision",
    name: "Vision",
    tagline: "Perception redefined",
    description:
      "An innovative concept pushing the boundaries of perception in close-up magic.",
    image: mediaUrl("Creations product_", "Vision By Abdelali Nour.jpeg"),
    imageAlt: "Vision — original close-up concept by Abdelali Nour",
  },
];
