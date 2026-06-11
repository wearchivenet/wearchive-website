globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_krAxuGAx.mjs';
import { manifest } from './manifest_C1uP2jnZ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/donate.astro.mjs');
const _page3 = () => import('./pages/en/_section_.astro.mjs');
const _page4 = () => import('./pages/en.astro.mjs');
const _page5 = () => import('./pages/fr/_section_.astro.mjs');
const _page6 = () => import('./pages/fr.astro.mjs');
const _page7 = () => import('./pages/news.astro.mjs');
const _page8 = () => import('./pages/our-work.astro.mjs');
const _page9 = () => import('./pages/resources.astro.mjs');
const _page10 = () => import('./pages/studio/_---params_.astro.mjs');
const _page11 = () => import('./pages/who-we-are.astro.mjs');
const _page12 = () => import('./pages/zh/_section_.astro.mjs');
const _page13 = () => import('./pages/zh.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/donate.astro", _page2],
    ["src/pages/en/[section].astro", _page3],
    ["src/pages/en/index.astro", _page4],
    ["src/pages/fr/[section].astro", _page5],
    ["src/pages/fr/index.astro", _page6],
    ["src/pages/news.astro", _page7],
    ["src/pages/our-work.astro", _page8],
    ["src/pages/resources.astro", _page9],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page10],
    ["src/pages/who-we-are.astro", _page11],
    ["src/pages/zh/[section].astro", _page12],
    ["src/pages/zh/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
