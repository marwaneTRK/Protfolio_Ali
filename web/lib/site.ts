export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.abdelalinour.com";

export const brand = {
  name: "Abdelali Nour",
  tagline: "Magician & Creator of Impossible Moments",
  region: "Témara & Rabat, Morocco",
  shopName: "AliMagicShop",
};

export const seoKeywords = [
  "Abdelali Nour",
  "Moroccan Magician",
  "Close-up Magician Rabat",
  "Gimmick Inventor",
  "Professional Magician Morocco",
  "AliMagicShop",
  "Magic Creator for Magicians",
  "Original Magic Effects",
  "Close-up Magic Performance",
  "Event Magician Morocco",
  "Temara Rabat Magician",
] as const;
