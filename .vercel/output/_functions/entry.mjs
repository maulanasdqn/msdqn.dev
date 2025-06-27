import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B776w7p_.mjs';
import { manifest } from './manifest_Coi7PXFK.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/about.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/api/experience/_id_.astro.mjs');
const _page5 = () => import('./pages/api/experience.astro.mjs');
const _page6 = () => import('./pages/api/home.astro.mjs');
const _page7 = () => import('./pages/api/project/_id_.astro.mjs');
const _page8 = () => import('./pages/api/project.astro.mjs');
const _page9 = () => import('./pages/cms/experience.astro.mjs');
const _page10 = () => import('./pages/cms/projects.astro.mjs');
const _page11 = () => import('./pages/cms.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/about.ts", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/api/experience/[id].ts", _page4],
    ["src/pages/api/experience/index.ts", _page5],
    ["src/pages/api/home.ts", _page6],
    ["src/pages/api/project/[id].ts", _page7],
    ["src/pages/api/project/index.ts", _page8],
    ["src/pages/cms/experience/index.astro", _page9],
    ["src/pages/cms/projects/index.astro", _page10],
    ["src/pages/cms/index.astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0f36444f-4a95-4a32-a499-05e9678ae868",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
