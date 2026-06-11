globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as renderScript, k as renderHead, o as renderSlot } from './astro/server_nDEPR3IS.mjs';
/* empty css                         */

const $$Astro$6 = createAstro("https://we-archive.org");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { title, text, button, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-archive-pale"> <div class="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"> <div class="editorial-rule"> <h2 class="text-4xl leading-tight text-archive-navy">${title}</h2> <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">${text}</p> </div> <a${addAttribute(href, "href")} class="inline-flex min-h-12 items-center justify-center border border-archive-blue bg-archive-blue px-7 py-4 text-white transition hover:bg-archive-navy"> ${button} </a> </div> </section>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/CallToAction.astro", void 0);

const $$Astro$5 = createAstro("https://we-archive.org");
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { eyebrow, title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="editorial-rule max-w-3xl"> ${eyebrow && renderTemplate`<p class="text-sm uppercase tracking-[0.18em] text-archive-blue">${eyebrow}</p>`} <h2 class="mt-3 text-3xl leading-tight text-archive-navy md:text-5xl">${title}</h2> ${text && renderTemplate`<p class="mt-5 text-lg leading-8 text-slate-700">${text}</p>`} </div>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/SectionHeading.astro", void 0);

const $$Astro$4 = createAstro("https://we-archive.org");
const $$StoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StoryCard;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group border border-slate-200 bg-white"> <div class="aspect-[4/3] overflow-hidden bg-archive-mist"> <img${addAttribute(item.image, "src")} alt="" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"> </div> <div class="p-6"> <p class="text-xs uppercase tracking-[0.18em] text-archive-blue">${item.type} · ${item.date}</p> <h3 class="mt-3 text-2xl leading-tight text-archive-navy">${item.title}</h3> <p class="mt-4 leading-7 text-slate-700">${item.excerpt}</p> </div> </article>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/StoryCard.astro", void 0);

const homeContent = {
  zh: {
    eyebrow: "保存・連結・啟發",
    title: "為文化記憶建立可信賴的公共檔案",
    intro: "We Archive 致力於保存多語、多地、多世代的文化材料，讓研究者、社群與教育工作者能以尊重而開放的方式重新連結歷史。",
    primaryAction: "探索我們的工作",
    secondaryAction: "支持保存計畫",
    missionTitle: "基金會使命",
    mission: "我們相信檔案不只是過去的證據，也是未來公共理解的基礎。We Archive 透過數位保存、社群協作、教育資源與國際研究網絡，守護容易消失的文化知識。",
    missionNoteOne: "We Archive 與文化保存者、學術夥伴及教育工作者合作，以謹慎、脈絡化且具長期公共價值的方式保存原始材料。",
    missionNoteTwo: "基金會支持多語近用、倫理數位化與編輯型公共計畫，使檔案能跨世代持續被理解與使用。",
    featuredTitle: "重點工作",
    featuredText: "推動文化保存的計畫、合作關係與公共項目。",
    newsTitle: "最新消息",
    newsText: "機構更新、田野筆記與公告。",
    resourcesTitle: "資源與出版",
    resourcesText: "為研究者、教育工作者與社群建立的出版品與學習材料。",
    publicationLabel: "出版品",
    viewResources: "查看資源",
    donateTitle: "支持長期保存",
    donateText: "您的捐助將協助保存脆弱資料、建立開放資源，並支持跨文化教育。",
    donateButton: "立即捐贈"
  },
  en: {
    eyebrow: "Preserve. Connect. Inspire.",
    title: "A trusted public archive for cultural memory",
    intro: "We Archive preserves multilingual, intergenerational cultural materials so researchers, communities, and educators can reconnect with history in respectful and open ways.",
    primaryAction: "Explore our work",
    secondaryAction: "Support preservation",
    missionTitle: "Foundation Mission",
    mission: "Archives are more than records of the past; they are foundations for public understanding. We Archive protects vulnerable cultural knowledge through digital preservation, community collaboration, educational resources, and international research networks.",
    missionNoteOne: "We Archive works with cultural custodians, academic partners, and educators to preserve source materials with care, context, and long-term public value.",
    missionNoteTwo: "The foundation supports multilingual access, ethical digitization, and editorial programs that help archival records remain useful across generations.",
    featuredTitle: "Featured Work",
    featuredText: "Projects, partnerships, and public programs advancing cultural preservation.",
    newsTitle: "Latest News",
    newsText: "Institutional updates, field notes, and announcements.",
    resourcesTitle: "Resources and Publications",
    resourcesText: "Publications and learning materials for researchers, educators, and communities.",
    publicationLabel: "Publication",
    viewResources: "View resources",
    donateTitle: "Support long-term preservation",
    donateText: "Your contribution helps preserve fragile records, create open resources, and support cross-cultural education.",
    donateButton: "Donate now"
  },
  fr: {
    eyebrow: "Préserver. Relier. Inspirer.",
    title: "Une archive publique de confiance pour la mémoire culturelle",
    intro: "We Archive préserve des matériaux culturels multilingues et intergénérationnels afin que chercheurs, communautés et éducateurs puissent renouer avec l'histoire de manière respectueuse et ouverte.",
    primaryAction: "Découvrir notre travail",
    secondaryAction: "Soutenir la préservation",
    missionTitle: "Mission de la fondation",
    mission: "Les archives sont plus que des traces du passé; elles fondent la compréhension publique. We Archive protège les savoirs culturels fragiles grâce à la préservation numérique, la collaboration communautaire, les ressources éducatives et les réseaux de recherche internationaux.",
    missionNoteOne: "We Archive travaille avec des gardiens culturels, des partenaires académiques et des éducateurs pour préserver les sources avec soin, contexte et valeur publique durable.",
    missionNoteTwo: "La fondation soutient l'accès multilingue, la numérisation éthique et des programmes éditoriaux qui maintiennent les archives utiles au fil des générations.",
    featuredTitle: "Travaux phares",
    featuredText: "Projets, partenariats et programmes publics au service de la préservation culturelle.",
    newsTitle: "Actualités",
    newsText: "Nouvelles institutionnelles, notes de terrain et annonces.",
    resourcesTitle: "Ressources et publications",
    resourcesText: "Publications et supports d'apprentissage pour chercheurs, éducateurs et communautés.",
    publicationLabel: "Publication",
    viewResources: "Voir les ressources",
    donateTitle: "Soutenir la préservation à long terme",
    donateText: "Votre contribution aide à préserver des archives fragiles, créer des ressources ouvertes et soutenir l'éducation interculturelle.",
    donateButton: "Faire un don"
  }
};
const pages = {
  zh: {
    "who-we-are": {
      eyebrow: "機構身份",
      title: "我們是誰",
      excerpt: "We Archive 是一個面向公共利益的文化保存平台，連結社群、學術與教育。",
      body: ["我們以謹慎的檔案倫理與多語文化視野工作，重視來源脈絡、社群同意與長期可近用性。", "我們的團隊結合研究者、典藏工作者、設計師與教育合作夥伴，建立適合公共使用的文化記憶基礎設施。"]
    },
    "our-work": {
      eyebrow: "保存實踐",
      title: "我們的工作",
      excerpt: "從數位保存到教育資源，我們以協作方式守護文化材料。",
      body: ["我們支持檔案數位化、口述歷史、出版計畫、展覽研究與跨地合作。", "每一項計畫都以可持續維護、清楚授權與公共教育價值作為核心。"]
    },
    news: {
      eyebrow: "新聞資訊",
      title: "新聞資訊",
      excerpt: "掌握 We Archive 的最新研究、活動與機構公告。",
      body: ["本頁彙整新聞稿、活動消息、研究更新與合作公告。正式上線後，編輯可透過 Sanity CMS 發布多語內容。"]
    },
    resources: {
      eyebrow: "開放知識",
      title: "資源",
      excerpt: "出版品、研究指南、影片與教學材料集中於此。",
      body: ["我們提供可引用的出版品、教育工具、影像資源與保存方法指南，協助不同背景的使用者進入檔案工作。"]
    },
    donate: {
      eyebrow: "共同支持",
      title: "捐贈",
      excerpt: "支持文化記憶的長期保存與公共近用。",
      body: ["您的捐款將投入資料保存、社群工作坊、學生研究支持與多語資源製作。", "We Archive 將以透明方式說明捐款使用方向與年度成果。"]
    },
    about: {
      eyebrow: "關於機構",
      title: "關於我們",
      excerpt: "了解 We Archive 的治理、合作網絡與聯絡方式。",
      body: ["我們與文化機構、大學、地方社群、研究者與教育工作者合作，推動可信賴且可持續的檔案實踐。"]
    }
  },
  en: {
    "who-we-are": {
      eyebrow: "Institutional Identity",
      title: "Who We Are",
      excerpt: "We Archive is a public-interest cultural preservation platform connecting communities, scholarship, and education.",
      body: ["We work with careful archival ethics and a multilingual cultural perspective, centering provenance, community consent, and long-term access.", "Our team brings together researchers, archivists, designers, and educational partners to build cultural memory infrastructure for public use."]
    },
    "our-work": {
      eyebrow: "Preservation Practice",
      title: "Our Work",
      excerpt: "From digital preservation to educational resources, we protect cultural materials through collaboration.",
      body: ["We support digitization, oral history, publication, exhibition research, and international partnerships.", "Every project is shaped around sustainable maintenance, clear permissions, and public educational value."]
    },
    news: {
      eyebrow: "News",
      title: "News",
      excerpt: "Follow the latest research, events, and institutional announcements from We Archive.",
      body: ["This page gathers press releases, events, research updates, and partnership announcements. Editors will publish multilingual content through Sanity CMS."]
    },
    resources: {
      eyebrow: "Open Knowledge",
      title: "Resources",
      excerpt: "Publications, research guides, videos, and teaching materials are collected here.",
      body: ["We provide citable publications, educational tools, visual resources, and preservation guides to help different audiences engage with archival practice."]
    },
    donate: {
      eyebrow: "Shared Support",
      title: "Donate",
      excerpt: "Support the long-term preservation and public access of cultural memory.",
      body: ["Your gift supports record preservation, community workshops, student research, and multilingual resource production.", "We Archive will communicate donation priorities and annual outcomes transparently."]
    },
    about: {
      eyebrow: "About the Institution",
      title: "About Us",
      excerpt: "Learn about We Archive's governance, partnership network, and contact channels.",
      body: ["We partner with cultural institutions, universities, local communities, researchers, and educators to advance trusted and sustainable archival practice."]
    }
  },
  fr: {
    "who-we-are": {
      eyebrow: "Identité institutionnelle",
      title: "Qui nous sommes",
      excerpt: "We Archive est une plateforme de préservation culturelle d'intérêt public reliant communautés, recherche et éducation.",
      body: ["Nous travaillons avec une éthique archivistique exigeante et une perspective culturelle multilingue, en plaçant la provenance, le consentement communautaire et l'accès durable au centre.", "Notre équipe rassemble chercheurs, archivistes, designers et partenaires éducatifs pour construire une infrastructure de mémoire culturelle au service du public."]
    },
    "our-work": {
      eyebrow: "Pratique de préservation",
      title: "Notre travail",
      excerpt: "De la préservation numérique aux ressources éducatives, nous protégeons les matériaux culturels par la collaboration.",
      body: ["Nous soutenons la numérisation, l'histoire orale, les publications, la recherche d'exposition et les partenariats internationaux.", "Chaque projet s'appuie sur une maintenance durable, des autorisations claires et une valeur éducative publique."]
    },
    news: {
      eyebrow: "Actualités",
      title: "Actualités",
      excerpt: "Suivez les recherches, événements et annonces institutionnelles de We Archive.",
      body: ["Cette page rassemble communiqués, événements, mises à jour de recherche et annonces de partenariat. Les éditeurs publieront le contenu multilingue avec Sanity CMS."]
    },
    resources: {
      eyebrow: "Savoirs ouverts",
      title: "Ressources",
      excerpt: "Publications, guides de recherche, vidéos et supports pédagogiques sont réunis ici.",
      body: ["Nous proposons des publications citables, outils éducatifs, ressources visuelles et guides de préservation pour aider différents publics à comprendre la pratique archivistique."]
    },
    donate: {
      eyebrow: "Soutien partagé",
      title: "Don",
      excerpt: "Soutenez la préservation durable et l'accès public à la mémoire culturelle.",
      body: ["Votre don soutient la préservation des documents, les ateliers communautaires, la recherche étudiante et la production de ressources multilingues.", "We Archive communiquera de manière transparente les priorités de financement et les résultats annuels."]
    },
    about: {
      eyebrow: "À propos de l'institution",
      title: "À propos",
      excerpt: "Découvrez la gouvernance, le réseau de partenaires et les contacts de We Archive.",
      body: ["Nous collaborons avec institutions culturelles, universités, communautés locales, chercheurs et éducateurs pour promouvoir une pratique archivistique fiable et durable."]
    }
  }
};
const sharedImages = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=1400&q=80"
];
const editorialItems = {
  zh: [
    {
      title: "社群檔案實驗室",
      slug: "community-archive-lab",
      language: "zh",
      excerpt: "協助地方夥伴保存脆弱文化紀錄的協作型計畫。",
      image: sharedImages[0],
      date: "2026-04-18",
      type: "project"
    },
    {
      title: "數位保存手冊",
      slug: "digital-preservation-handbook",
      language: "zh",
      excerpt: "為小型機構與社群組織建立長期數位保存工作的開放指南。",
      image: sharedImages[1],
      date: "2026-03-08",
      type: "publication"
    },
    {
      title: "口述歷史論壇",
      slug: "oral-history-forum",
      language: "zh",
      excerpt: "研究者與社群保存者討論記憶、同意與公共近用。",
      image: sharedImages[2],
      date: "2026-02-24",
      type: "news"
    }
  ],
  en: [
    {
      title: "Community Archive Lab",
      slug: "community-archive-lab",
      language: "en",
      excerpt: "A collaborative program helping local partners preserve fragile cultural records.",
      image: sharedImages[0],
      date: "2026-04-18",
      type: "project"
    },
    {
      title: "Digital Preservation Handbook",
      slug: "digital-preservation-handbook",
      language: "en",
      excerpt: "An open guide for small institutions beginning long-term digital preservation.",
      image: sharedImages[1],
      date: "2026-03-08",
      type: "publication"
    },
    {
      title: "Oral History Forum",
      slug: "oral-history-forum",
      language: "en",
      excerpt: "Researchers and community stewards discuss memory, consent, and access.",
      image: sharedImages[2],
      date: "2026-02-24",
      type: "news"
    }
  ],
  fr: [
    {
      title: "Laboratoire d'archives communautaires",
      slug: "community-archive-lab",
      language: "fr",
      excerpt: "Un programme collaboratif aidant les partenaires locaux à préserver des documents culturels fragiles.",
      image: sharedImages[0],
      date: "2026-04-18",
      type: "project"
    },
    {
      title: "Manuel de préservation numérique",
      slug: "digital-preservation-handbook",
      language: "fr",
      excerpt: "Un guide ouvert pour les petites institutions qui amorcent une préservation numérique durable.",
      image: sharedImages[1],
      date: "2026-03-08",
      type: "publication"
    },
    {
      title: "Forum d'histoire orale",
      slug: "oral-history-forum",
      language: "fr",
      excerpt: "Chercheurs et gardiens communautaires échangent sur la mémoire, le consentement et l'accès.",
      image: sharedImages[2],
      date: "2026-02-24",
      type: "news"
    }
  ]
};

const languages = {
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
};
const sections = [
  { label: "我們是誰", slug: "who-we-are" },
  { label: "我們的工作", slug: "our-work" },
  { label: "新聞資訊", slug: "news" },
  { label: "資源", slug: "resources" },
  { label: "捐贈", slug: "donate" },
  { label: "關於我們", slug: "about" }
];
const sectionSlugs = sections.map((section) => section.slug);
function localizedPath(language, slug = "") {
  return `/${language}/${slug}`.replace(/\/$/, "/");
}

const $$Astro$3 = createAstro("https://we-archive.org");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { language, section = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Language selector" class="flex items-center gap-2 text-sm"> ${Object.values(languages).map((item) => renderTemplate`<a${addAttribute(localizedPath(item.code, section), "href")}${addAttribute([
    "border px-3 py-2 transition",
    item.code === language ? "border-archive-blue bg-archive-blue text-white" : "border-slate-300 text-archive-blue hover:border-archive-gold hover:bg-archive-pale"
  ], "class:list")}${addAttribute(item.code === language ? "page" : void 0, "aria-current")}> ${item.label} </a>`)} </nav>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/LanguageSwitcher.astro", void 0);

const $$Astro$2 = createAstro("https://we-archive.org");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { language, section = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-slate-200 bg-white"> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">
Skip to content
</a> <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8"> <a${addAttribute(localizedPath(language), "href")} class="flex items-center gap-4" aria-label="We Archive home"> <img src="/images/logo.png" alt="We Archive" class="h-10 w-auto object-contain sm:h-12"> </a> <nav aria-label="Primary navigation" class="hidden items-center gap-7 lg:flex"> ${sections.map((item) => renderTemplate`<a${addAttribute(localizedPath(language, item.slug), "href")}${addAttribute([
    "font-kai text-base text-archive-blue transition hover:text-archive-gold",
    section === item.slug && "border-b-2 border-archive-gold"
  ], "class:list")}${addAttribute(section === item.slug ? "page" : void 0, "aria-current")}> ${item.label} </a>`)} </nav> <div class="hidden lg:block"> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "language": language, "section": section })} </div> <button type="button" class="inline-flex min-h-11 min-w-11 items-center justify-center border border-archive-blue text-archive-blue lg:hidden" aria-controls="mobile-menu" aria-expanded="false" data-menu-toggle> <span class="sr-only">Open menu</span> <span aria-hidden="true" class="block h-4 w-5 border-y-2 border-current"></span> </button> </div> <div id="mobile-menu" class="hidden border-t border-slate-200 bg-white px-5 py-5 lg:hidden" data-mobile-menu> <nav aria-label="Mobile primary navigation" class="grid gap-3"> ${sections.map((item) => renderTemplate`<a${addAttribute(localizedPath(language, item.slug), "href")} class="font-kai text-lg text-archive-blue"> ${item.label} </a>`)} </nav> <div class="mt-5"> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "language": language, "section": section })} </div> </div> </header> ${renderScript($$result, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://we-archive.org");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { language } = Astro2.props;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-archive-navy text-white"> <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8"> <div> <img src="/images/logo.png" alt="We Archive" class="h-12 w-auto bg-white p-2"> <p class="mt-6 max-w-md text-lg leading-8 text-slate-200">
Preserve. Connect. Inspire.
</p> <p class="mt-4 max-w-md text-sm leading-7 text-slate-300">
International cultural preservation, public archives, and educational resources.
</p> </div> <nav aria-label="Footer navigation" class="grid gap-3"> <h2 class="text-sm uppercase tracking-[0.18em] text-archive-gold">Navigation</h2> ${sections.map((item) => renderTemplate`<a${addAttribute(localizedPath(language, item.slug), "href")} class="font-kai text-slate-100 hover:text-archive-gold"> ${item.label} </a>`)} </nav> <div> <h2 class="text-sm uppercase tracking-[0.18em] text-archive-gold">Contact</h2> <address class="mt-4 not-italic leading-7 text-slate-200">
We Archive Foundation<br>
contact@we-archive.org<br>
Paris · Taipei · Online
</address> <div class="mt-6 flex gap-4 text-sm uppercase tracking-[0.16em]"> <a href="https://www.instagram.com/" class="hover:text-archive-gold">Instagram</a> <a href="https://www.linkedin.com/" class="hover:text-archive-gold">LinkedIn</a> </div> </div> </div> <div class="border-t border-white/15 px-5 py-5 text-center text-sm text-slate-300">
© ${year} We Archive. All rights reserved.
</div> </footer>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://we-archive.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, language, section = "" } = Astro2.props;
  const htmlLang = languages[language].htmlLang;
  return renderTemplate`<html${addAttribute(htmlLang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "language": language, "section": section })} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "language": language })} </body></html>`;
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$SectionHeading as a, $$StoryCard as b, $$CallToAction as c, editorialItems as e, homeContent as h, localizedPath as l, pages as p, sectionSlugs as s };
