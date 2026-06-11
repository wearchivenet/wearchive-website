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
  { label: "我們是誰", slug: "who-we-are" },
  { label: "我們的工作", slug: "our-work" },
  { label: "新聞資訊", slug: "news" },
  { label: "資源", slug: "resources" },
  { label: "捐贈", slug: "donate" },
  { label: "關於我們", slug: "about" }
] as const;

export type SectionSlug = (typeof sections)[number]["slug"];

export const sectionSlugs = sections.map((section) => section.slug);

export function isLanguage(value: string | undefined): value is Language {
  return Boolean(value && value in languages);
}

export function isSection(value: string | undefined): value is SectionSlug {
  return Boolean(value && sectionSlugs.includes(value as SectionSlug));
}

export function localizedPath(language: Language, slug = "") {
  return `/${language}/${slug}`.replace(/\/$/, "/");
}
