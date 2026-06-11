globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_upoAVHh1.mjs';
import { e as createAstro, f as createComponent } from '../chunks/astro/server_nDEPR3IS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://we-archive.org");
const $$News = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$News;
  return Astro2.redirect("/zh/news");
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/news.astro", void 0);

const $$file = "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$News,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
