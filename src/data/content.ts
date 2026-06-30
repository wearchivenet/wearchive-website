import type { Language, SectionSlug } from "@/lib/i18n";

export type EditorialItem = {
  title: string;
  slug: string;
  language: Language;
  excerpt: string;
  meta: string;
  symbol: string;
  type: "astrology" | "tarot" | "journal";
};

type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryAction: string;
  secondaryAction: string;
  manifestoLabel: string;
  manifestoTitle: string;
  manifestoText: string;
  servicesTitle: string;
  servicesText: string;
  processTitle: string;
  processText: string;
  journalTitle: string;
  journalText: string;
  viewJournal: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

type PageContent = {
  title: string;
  eyebrow: string;
  excerpt: string;
  body: string[];
  highlights: string[];
};

export const homeContent: Record<Language, HomeContent> = {
  zh: {
    eyebrow: "占星 · 塔羅 · 自我探索",
    title: "在星辰與牌面之間，讀懂你正在經歷的生命章節",
    intro: "這裡不替你預言一個固定的未來。我們以占星與塔羅整理當下的線索，讓選擇重新回到你的手上。",
    primaryAction: "預約一場解讀",
    secondaryAction: "探索服務",
    manifestoLabel: "A quiet place for clarity",
    manifestoTitle: "答案不一定藏在遠方，有時只是需要一種新的觀看方式。",
    manifestoText: "星圖描述你的內在節奏，塔羅回應此刻正在成形的故事。解讀不是判決，而是一場精準、誠實又保有餘地的對話。",
    servicesTitle: "三種進入內在的路徑",
    servicesText: "依照你此刻的問題，選擇適合的深度與觀看尺度。",
    processTitle: "解讀如何發生",
    processText: "你帶著問題前來；我們整理象徵、時間與情緒脈絡，最後把洞見轉化為可以帶回生活的行動。",
    journalTitle: "星象札記",
    journalText: "關於行運、關係、牌義與日常選擇的短篇觀察。",
    viewJournal: "閱讀全部札記",
    ctaTitle: "如果你正站在一個轉折點",
    ctaText: "帶著你的問題來。不需要先整理得很完整，我們可以從混沌裡一起找到第一條線。",
    ctaButton: "查看預約方式"
  },
  en: {
    eyebrow: "Astrology · Tarot · Self-inquiry",
    title: "Read the chapter you are living, between the stars and the cards",
    intro: "This is not about predicting a fixed future. Astrology and tarot help us gather the signals of the present, so choice can return to your hands.",
    primaryAction: "Book a reading",
    secondaryAction: "Explore sessions",
    manifestoLabel: "A quiet place for clarity",
    manifestoTitle: "The answer is not always far away. Sometimes it asks for a different way of seeing.",
    manifestoText: "A birth chart describes your inner rhythm; tarot responds to the story taking shape now. A reading is not a verdict, but a precise and spacious conversation.",
    servicesTitle: "Three paths into the inner landscape",
    servicesText: "Choose the depth and perspective that meet the question you are holding.",
    processTitle: "How a reading unfolds",
    processText: "You bring the question. Together we trace symbols, timing, and emotional context, then translate insight into something you can carry into daily life.",
    journalTitle: "Celestial journal",
    journalText: "Brief observations on transits, relationships, tarot archetypes, and everyday choices.",
    viewJournal: "Read the journal",
    ctaTitle: "If you are standing at a threshold",
    ctaText: "Bring the question as it is. It does not need to be perfectly formed; we can find the first clear thread together.",
    ctaButton: "View booking"
  },
  fr: {
    eyebrow: "Astrologie · Tarot · Exploration de soi",
    title: "Lire le chapitre que vous traversez, entre les astres et les cartes",
    intro: "Il ne s'agit pas de prédire un avenir figé. L'astrologie et le tarot rassemblent les signes du présent afin que le choix vous revienne.",
    primaryAction: "Réserver une lecture",
    secondaryAction: "Explorer les séances",
    manifestoLabel: "A quiet place for clarity",
    manifestoTitle: "La réponse n'est pas toujours au loin. Elle demande parfois une autre manière de regarder.",
    manifestoText: "Le thème natal décrit votre rythme intérieur; le tarot répond à l'histoire qui prend forme maintenant. Une lecture n'est pas un verdict, mais une conversation précise et ouverte.",
    servicesTitle: "Trois chemins vers le paysage intérieur",
    servicesText: "Choisissez la profondeur et la perspective qui correspondent à votre question.",
    processTitle: "Le déroulement d'une lecture",
    processText: "Vous apportez la question. Ensemble, nous relions symboles, temporalité et contexte émotionnel, puis transformons l'intuition en repères concrets.",
    journalTitle: "Journal céleste",
    journalText: "Notes brèves sur les transits, les relations, les archétypes du tarot et les choix quotidiens.",
    viewJournal: "Lire le journal",
    ctaTitle: "Si vous êtes à un seuil",
    ctaText: "Venez avec votre question telle qu'elle est. Elle n'a pas besoin d'être parfaitement formulée; nous trouverons ensemble le premier fil clair.",
    ctaButton: "Voir les réservations"
  }
};

export const pages: Record<Language, Record<SectionSlug, PageContent>> = {
  zh: {
    astrology: {
      eyebrow: "Natal chart & transits",
      title: "占星諮詢",
      excerpt: "從本命盤理解你的核心結構，從行運看見此刻的時間品質。",
      body: [
        "占星不是替人生貼標籤，而是辨認你如何感受、選擇、建立關係，以及在壓力之中如何回到自己的節奏。",
        "諮詢前會收集出生日期、準確時間與地點。你也可以帶著關係、工作、創作、遷移或生命轉折等具體主題前來。"
      ],
      highlights: ["90 分鐘線上諮詢", "本命盤與當期行運", "會後重點摘要"]
    },
    tarot: {
      eyebrow: "Cards as a living mirror",
      title: "塔羅解讀",
      excerpt: "當問題仍在變動，牌面能映出目前的力量、盲點與可能路徑。",
      body: [
        "塔羅適合處理正在發生、需要釐清的問題。它不替你做決定，而是把情勢中的關係、慾望、恐懼與資源放到桌面上。",
        "你可以詢問關係互動、工作選擇、創作阻塞或一段難以命名的感受。我們會一起把問題問得更準確。"
      ],
      highlights: ["45 或 75 分鐘", "單一主題深度展開", "不使用宿命式恐嚇語言"]
    },
    journal: {
      eyebrow: "Notes from the sky",
      title: "星象札記",
      excerpt: "把宏大的天象，翻譯成可以在日常辨認的心理氣候。",
      body: [
        "這裡記錄行運觀察、牌義研究、關係占星與諮詢室裡反覆出現的人類問題。",
        "文章不提供萬用答案，而是邀請你在閱讀時，發現自己真正有反應的那一句。"
      ],
      highlights: ["每月星象觀察", "塔羅原型筆記", "關係與界線"]
    },
    library: {
      eyebrow: "A library for seekers",
      title: "靈感資料庫",
      excerpt: "為剛開始接觸占星與塔羅的人，整理可靠、可反覆使用的學習入口。",
      body: [
        "資料庫將收錄星體、宮位、相位與塔羅大牌的基礎說明，也會整理閱讀清單與練習提問。",
        "內容會逐步與 Sanity CMS 串接，方便持續發布多語文章與主題集合。"
      ],
      highlights: ["占星基礎", "塔羅牌義", "閱讀與練習清單"]
    },
    book: {
      eyebrow: "Begin with your question",
      title: "預約解讀",
      excerpt: "選擇適合的形式，留下你希望被好好觀看的問題。",
      body: [
        "目前提供線上占星與塔羅諮詢。預約後你會收到準備說明、視訊連結與改期規則。",
        "占星與塔羅屬於自我探索工具，不能替代醫療、法律、財務或心理治療等專業意見。"
      ],
      highlights: ["巴黎時間彈性預約", "繁中／English／Français", "保密且尊重個人界線"]
    },
    about: {
      eyebrow: "About the reader",
      title: "關於",
      excerpt: "以心理占星、象徵閱讀與不帶評判的對話，陪你靠近自己的答案。",
      body: [
        "我的閱讀方式重視脈絡、自由意志與人的複雜性。比起給出一句漂亮的結論，我更在意你是否能在解讀中辨認自己的經驗。",
        "這個網站也會成為一座持續生長的研究筆記庫，連結占星、塔羅、神話、心理學與關係實踐。"
      ],
      highlights: ["心理取向", "創傷知情語言", "跨文化與多語視角"]
    }
  },
  en: {
    astrology: {
      eyebrow: "Natal chart & transits",
      title: "Astrology readings",
      excerpt: "Understand your core pattern through the natal chart and the quality of the present moment through transits.",
      body: [
        "Astrology is not a label. It is a language for how you feel, choose, relate, and return to your own timing under pressure.",
        "Before the session, you will provide your birth date, exact time, and place. You may bring themes of relationship, work, creativity, relocation, or transition."
      ],
      highlights: ["90-minute online session", "Natal chart and current transits", "Post-session key notes"]
    },
    tarot: {
      eyebrow: "Cards as a living mirror",
      title: "Tarot readings",
      excerpt: "When a question is still moving, the cards reveal the forces, blind spots, and possible paths present now.",
      body: [
        "Tarot is suited to questions that are unfolding and need clarity. It does not decide for you; it brings the relationships, desires, fears, and resources within a situation into view.",
        "Bring a relationship dynamic, a work decision, a creative block, or a feeling that has been difficult to name."
      ],
      highlights: ["45 or 75 minutes", "One theme in depth", "No fatalistic or fear-based language"]
    },
    journal: {
      eyebrow: "Notes from the sky",
      title: "Celestial journal",
      excerpt: "Translating large celestial movements into psychological weather you can recognize in ordinary life.",
      body: [
        "The journal gathers transit notes, tarot archetypes, relationship astrology, and human questions that return again and again.",
        "These essays do not promise universal answers. They invite you to notice the line that truly resonates."
      ],
      highlights: ["Monthly sky notes", "Tarot archetypes", "Relationships and boundaries"]
    },
    library: {
      eyebrow: "A library for seekers",
      title: "Inspiration library",
      excerpt: "Reliable, reusable entry points for those beginning with astrology and tarot.",
      body: [
        "The library will include foundations on planets, houses, aspects, and the Major Arcana, alongside reading lists and reflective exercises.",
        "Content will progressively connect to Sanity CMS for multilingual essays and collections."
      ],
      highlights: ["Astrology foundations", "Tarot meanings", "Reading and practice lists"]
    },
    book: {
      eyebrow: "Begin with your question",
      title: "Book a reading",
      excerpt: "Choose the format that meets you, then share the question that deserves careful attention.",
      body: [
        "Online astrology and tarot consultations are currently available. After booking, you will receive preparation notes, a video link, and rescheduling terms.",
        "Astrology and tarot are tools for reflection and do not replace medical, legal, financial, or therapeutic advice."
      ],
      highlights: ["Flexible Paris-time scheduling", "中文 / English / Français", "Confidential and boundary-conscious"]
    },
    about: {
      eyebrow: "About the reader",
      title: "About",
      excerpt: "Psychological astrology, symbolic reading, and non-judgmental conversation in service of your own knowing.",
      body: [
        "My approach values context, free will, and human complexity. More than a polished conclusion, I care whether you can recognize your own experience in the reading.",
        "This site is also a growing notebook connecting astrology, tarot, myth, psychology, and relationship practice."
      ],
      highlights: ["Psychological approach", "Trauma-aware language", "Cross-cultural perspective"]
    }
  },
  fr: {
    astrology: {
      eyebrow: "Thème natal & transits",
      title: "Consultations astrologiques",
      excerpt: "Comprendre votre structure fondamentale par le thème natal et la qualité du moment par les transits.",
      body: [
        "L'astrologie n'est pas une étiquette. C'est un langage pour comprendre votre manière de ressentir, choisir, entrer en relation et retrouver votre rythme.",
        "Avant la séance, vous transmettrez date, heure exacte et lieu de naissance. Vous pouvez apporter un thème de relation, travail, création, déplacement ou transition."
      ],
      highlights: ["Séance en ligne de 90 minutes", "Thème natal et transits actuels", "Notes essentielles après la séance"]
    },
    tarot: {
      eyebrow: "Les cartes comme miroir vivant",
      title: "Lectures de tarot",
      excerpt: "Lorsqu'une question évolue encore, les cartes révèlent les forces, angles morts et chemins possibles du présent.",
      body: [
        "Le tarot convient aux questions en mouvement qui demandent de la clarté. Il ne décide pas à votre place; il rend visibles les désirs, peurs, ressources et relations d'une situation.",
        "Apportez une dynamique relationnelle, un choix professionnel, un blocage créatif ou un sentiment difficile à nommer."
      ],
      highlights: ["45 ou 75 minutes", "Un thème exploré en profondeur", "Aucun langage fataliste ou anxiogène"]
    },
    journal: {
      eyebrow: "Notes du ciel",
      title: "Journal céleste",
      excerpt: "Traduire les grands mouvements célestes en climat psychologique reconnaissable au quotidien.",
      body: [
        "Le journal rassemble transits, archétypes du tarot, astrologie relationnelle et questions humaines récurrentes.",
        "Ces textes ne promettent pas de réponse universelle; ils vous invitent à remarquer la phrase qui résonne vraiment."
      ],
      highlights: ["Notes mensuelles", "Archétypes du tarot", "Relations et limites"]
    },
    library: {
      eyebrow: "Une bibliothèque pour chercher",
      title: "Bibliothèque d'inspiration",
      excerpt: "Des points d'entrée fiables et réutilisables pour commencer l'astrologie et le tarot.",
      body: [
        "La bibliothèque réunira les bases sur planètes, maisons, aspects et arcanes majeurs, ainsi que des lectures et exercices.",
        "Le contenu sera progressivement relié à Sanity CMS pour publier des collections multilingues."
      ],
      highlights: ["Fondements astrologiques", "Sens des cartes", "Lectures et exercices"]
    },
    book: {
      eyebrow: "Commencer par votre question",
      title: "Réserver une lecture",
      excerpt: "Choisissez le format qui vous convient et partagez la question qui mérite une attention réelle.",
      body: [
        "Des consultations en ligne d'astrologie et de tarot sont disponibles. Après réservation, vous recevrez les consignes, le lien vidéo et les modalités.",
        "L'astrologie et le tarot sont des outils de réflexion et ne remplacent aucun avis médical, juridique, financier ou thérapeutique."
      ],
      highlights: ["Horaires flexibles, heure de Paris", "中文 / English / Français", "Confidentialité et respect des limites"]
    },
    about: {
      eyebrow: "À propos de la praticienne",
      title: "À propos",
      excerpt: "Astrologie psychologique, lecture symbolique et conversation sans jugement au service de votre propre compréhension.",
      body: [
        "Mon approche valorise le contexte, le libre arbitre et la complexité humaine. Plus qu'une conclusion élégante, je souhaite que vous reconnaissiez votre expérience dans la lecture.",
        "Ce site est aussi un carnet en croissance reliant astrologie, tarot, mythes, psychologie et pratiques relationnelles."
      ],
      highlights: ["Approche psychologique", "Langage sensible au trauma", "Perspective interculturelle"]
    }
  }
};

export const editorialItems: Record<Language, EditorialItem[]> = {
  zh: [
    {
      title: "本命盤深度解讀",
      slug: "natal-chart",
      language: "zh",
      excerpt: "理解性格結構、關係模式、天賦與反覆出現的人生課題。",
      meta: "90 min · Online",
      symbol: "☉",
      type: "astrology"
    },
    {
      title: "當下問題塔羅",
      slug: "tarot-focus",
      language: "zh",
      excerpt: "為一個正在發展的問題，整理局勢、內在拉扯與下一步。",
      meta: "45 / 75 min · Online",
      symbol: "✦",
      type: "tarot"
    },
    {
      title: "關係合盤與對話",
      slug: "relationship",
      language: "zh",
      excerpt: "看見彼此如何靠近、誤解、投射，也看見關係可以如何成長。",
      meta: "90 min · Online",
      symbol: "☾",
      type: "astrology"
    }
  ],
  en: [
    {
      title: "Natal chart deep dive",
      slug: "natal-chart",
      language: "en",
      excerpt: "Understand core patterns, relational habits, gifts, and the themes that keep returning.",
      meta: "90 min · Online",
      symbol: "☉",
      type: "astrology"
    },
    {
      title: "Focused tarot reading",
      slug: "tarot-focus",
      language: "en",
      excerpt: "Clarify the forces, inner tensions, and next step within one unfolding question.",
      meta: "45 / 75 min · Online",
      symbol: "✦",
      type: "tarot"
    },
    {
      title: "Relationship astrology",
      slug: "relationship",
      language: "en",
      excerpt: "See how you meet, misunderstand, project, and where the relationship can grow.",
      meta: "90 min · Online",
      symbol: "☾",
      type: "astrology"
    }
  ],
  fr: [
    {
      title: "Lecture approfondie du thème natal",
      slug: "natal-chart",
      language: "fr",
      excerpt: "Comprendre vos structures, habitudes relationnelles, ressources et thèmes récurrents.",
      meta: "90 min · En ligne",
      symbol: "☉",
      type: "astrology"
    },
    {
      title: "Lecture ciblée du tarot",
      slug: "tarot-focus",
      language: "fr",
      excerpt: "Clarifier les forces, tensions intérieures et prochains pas d'une question en mouvement.",
      meta: "45 / 75 min · En ligne",
      symbol: "✦",
      type: "tarot"
    },
    {
      title: "Astrologie relationnelle",
      slug: "relationship",
      language: "fr",
      excerpt: "Voir comment vous vous rencontrez, vous projetez et comment le lien peut évoluer.",
      meta: "90 min · En ligne",
      symbol: "☾",
      type: "astrology"
    }
  ]
};
