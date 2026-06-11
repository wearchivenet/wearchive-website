globalThis.process ??= {}; globalThis.process.env ??= {};
import { q as decodeKey } from './chunks/astro/server_nDEPR3IS.mjs';
import './chunks/astro-designed-error-pages_teWe4pAl.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B5DW6hge.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/","cacheDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/.astro/","outDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/dist/","srcDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/","publicDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/public/","buildClientDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/dist/","buildServerDir":"file:///Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/donate","isIndex":false,"type":"page","pattern":"^\\/donate\\/?$","segments":[[{"content":"donate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/donate.astro","pathname":"/donate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DCp8QUFY.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DCp8QUFY.css"}],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/our-work","isIndex":false,"type":"page","pattern":"^\\/our-work\\/?$","segments":[[{"content":"our-work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-work.astro","pathname":"/our-work","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":false,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/who-we-are","isIndex":false,"type":"page","pattern":"^\\/who-we-are\\/?$","segments":[[{"content":"who-we-are","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/who-we-are.astro","pathname":"/who-we-are","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DCp8QUFY.css"}],"routeData":{"route":"/zh","isIndex":true,"type":"page","pattern":"^\\/zh\\/?$","segments":[[{"content":"zh","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/zh/index.astro","pathname":"/zh","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://we-archive.org","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/zh/index.astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/en/[section].astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/fr/[section].astro",{"propagation":"none","containsHead":true}],["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/pages/zh/[section].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/donate@_@astro":"pages/donate.astro.mjs","\u0000@astro-page:src/pages/en/[section]@_@astro":"pages/en/_section_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/fr/[section]@_@astro":"pages/fr/_section_.astro.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"pages/fr.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/news@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/our-work@_@astro":"pages/our-work.astro.mjs","\u0000@astro-page:src/pages/resources@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/who-we-are@_@astro":"pages/who-we-are.astro.mjs","\u0000@astro-page:src/pages/zh/[section]@_@astro":"pages/zh/_section_.astro.mjs","\u0000@astro-page:src/pages/zh/index@_@astro":"pages/zh.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C1uP2jnZ.mjs","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D1BJzdTk.mjs","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.COnUEKJc.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","@astrojs/react/client.js":"_astro/client.CVlo85wk.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.vD_NdOCj.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DbN95BOs.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.CmMRcY7E.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.q5O_TnO9.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.Be1OzTCP.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.TUbtAa9s.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Co0Di8_t.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CsFcao_S.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.rBZfu_QM.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DHEHkxJt.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.D35ywvy3.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.GUkSlUND.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.nUtgu4l5.js","/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.n8QD7EZ3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/arlositearlosite/Documents/Codex/2026-06-11/files-mentioned-by-the-user-logo/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-menu-toggle]\"),n=document.querySelector(\"[data-mobile-menu]\");e?.addEventListener(\"click\",()=>{const t=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",String(!t)),n?.classList.toggle(\"hidden\",t)});"]],"assets":["/_astro/index.DCp8QUFY.css","/_astro/VideoPlayer.CmMRcY7E.js","/_astro/ViteDevServerStopped.CsFcao_S.js","/_astro/browser.zLXic4-t.js","/_astro/client.CVlo85wk.js","/_astro/client.DStx4LJW.js","/_astro/index.GUkSlUND.js","/_astro/index2.nUtgu4l5.js","/_astro/index3.DHEHkxJt.js","/_astro/refractor.rBZfu_QM.js","/_astro/resources.Be1OzTCP.js","/_astro/resources2.DbN95BOs.js","/_astro/resources3.Co0Di8_t.js","/_astro/resources4.q5O_TnO9.js","/_astro/resources5.TUbtAa9s.js","/_astro/resources6.D35ywvy3.js","/_astro/stegaEncodeSourceMap.COnUEKJc.js","/_astro/studio-component.GWnzpVn7.js","/_astro/studio-component.n8QD7EZ3.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/images/logo.png","/_worker.js/_astro/index.DCp8QUFY.css","/_worker.js/chunks/BaseLayout_CtB8zaNg.mjs","/_worker.js/chunks/HomePage__5ldZs7n.mjs","/_worker.js/chunks/SectionPage_n7K4WA-e.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_krAxuGAx.mjs","/_worker.js/chunks/astro-designed-error-pages_teWe4pAl.mjs","/_worker.js/chunks/astro_DMEPHlMc.mjs","/_worker.js/chunks/browser_ZcgBU8B3.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_D60lgf0U.mjs","/_worker.js/chunks/noop-middleware_B5DW6hge.mjs","/_worker.js/chunks/page-ssr_upoAVHh1.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CVXTZJrr.mjs","/_worker.js/chunks/render-context_Bx7OrCFv.mjs","/_worker.js/chunks/sharp_D1BJzdTk.mjs","/_worker.js/chunks/stegaEncodeSourceMap_D8ple0Oh.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/donate.astro.mjs","/_worker.js/pages/en.astro.mjs","/_worker.js/pages/fr.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/news.astro.mjs","/_worker.js/pages/our-work.astro.mjs","/_worker.js/pages/resources.astro.mjs","/_worker.js/pages/who-we-are.astro.mjs","/_worker.js/pages/zh.astro.mjs","/_worker.js/chunks/astro/server_nDEPR3IS.mjs","/_worker.js/pages/fr/_section_.astro.mjs","/_worker.js/pages/en/_section_.astro.mjs","/_worker.js/pages/studio/_---params_.astro.mjs","/_worker.js/pages/zh/_section_.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"QqmaeufPU5eniubTqpinYVvXeMCfOyPCKG08o2MFQJQ=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
