globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_upoAVHh1.mjs';
import { e as createAstro, f as createComponent } from '../chunks/astro/server_nDEPR3IS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://we-archive.org");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return Astro2.redirect("/zh/about");
}, "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/about.astro", void 0);

const $$file = "/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
