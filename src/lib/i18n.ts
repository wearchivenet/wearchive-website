export const languages = {
  zh: {
    code: "zh",
    label: "繁體中文",
    htmlLang: "zh-Hant",
    home: "/zh/"
  },
  en: {
    code: "en",
    label: "English",
    htmlLang: "en",
    home: "/en/"
  },
  fr: {
    code: "fr",
    label: "Français",
    htmlLang: "fr",
    home: "/fr/"
  }
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "zh";

export const sections = [
  {
    slug: "astrology",
    labels: { zh: "占星諮詢", en: "Astrology", fr: "Astrologie" }
  },
  {
    slug: "tarot",
    labels: { zh: "塔羅解讀", en: "Tarot", fr: "Tarot" }
  },
  {
    slug: "journal",
    labels: { zh: "星象札記", en: "Journal", fr: "Journal" }
  },
  {
    slug: "library",
    labels: { zh: "靈感資料庫", en: "Library", fr: "Bibliothèque" }
  },
  {
    slug: "book",
    labels: { zh: "預約", en: "Book", fr: "Réserver" }
  },
  {
    slug: "about",
    labels: { zh: "關於", en: "About", fr: "À propos" }
  }
] as const;

export type SectionSlug = (typeof sections)[number]["slug"];

export const sectionSlugs = sections.map((section) => section.slug);

export function sectionLabel(language: Language, slug: SectionSlug) {
  return sections.find((section) => section.slug === slug)?.labels[language] ?? slug;
}

export function isLanguage(value: string | undefined): value is Language {
  return Boolean(value && value in languages);
}

export function isSection(value: string | undefined): value is SectionSlug {
  return Boolean(value && sectionSlugs.includes(value as SectionSlug));
}

export function localizedPath(language: Language, slug = "") {
  return `/${language}/${slug}`.replace(/\/$/, "/");
}
