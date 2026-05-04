import { socialEntries } from "@/data/social-urls";
import { brand, siteUrl } from "@/lib/site";

export function JsonLd() {
  const sameAs = socialEntries.map((s) => s.href);

  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.name,
    jobTitle:
      "Moroccan close-up magician, professional performer, and creator of original magic effects",
    description:
      "Moroccan close-up magician and creator of original magic effects (AliMagicShop). Based in Témara, serving Rabat and international stages.",
    nationality: {
      "@type": "Country",
      name: "Morocco",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Témara",
      addressRegion: "Rabat-Salé-Kénitra",
      addressCountry: "MA",
    },
    knowsAbout: [
      "Close-up magic",
      "Magic gimmicks",
      "Original magic effects",
      "Corporate magic",
      "Private events",
      "AliMagicShop",
      "Moroccan Magician",
      "Rabat",
      "Témara",
    ],
    sameAs,
    url: siteUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
