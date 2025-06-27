/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderHead, r as renderTemplate } from '../chunks/astro/server_Do_YPnBi.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../chunks/supabase_DZJUbGNb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/login");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      return redirect("/login");
    }
  } catch {
    return redirect("/login");
  }
  const email = session.data.user?.email;
  return renderTemplate`<html lang="en" data-astro-cid-66ygibxk> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>CMS Dashboard</title><meta name="description" content="Content management system dashboard">${renderHead()}</head> <body class="min-h-screen" data-astro-cid-66ygibxk> <nav class="nav-bg shadow-lg" data-astro-cid-66ygibxk> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-66ygibxk> <div class="flex justify-between h-16" data-astro-cid-66ygibxk> <div class="flex items-center" data-astro-cid-66ygibxk> <h1 class="text-xl font-bold" data-astro-cid-66ygibxk>🌹 CMS Dashboard</h1> </div> <div class="flex items-center space-x-4" data-astro-cid-66ygibxk> <span class="text-sm text-subtle" data-astro-cid-66ygibxk>${email}</span> <form action="/api/auth/signout" method="post" data-astro-cid-66ygibxk> <button class="btn-signout text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" data-astro-cid-66ygibxk>
Sign Out
</button> </form> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" data-astro-cid-66ygibxk> <div class="px-4 py-6 sm:px-0" data-astro-cid-66ygibxk> <div class="mb-8" data-astro-cid-66ygibxk> <h2 class="text-2xl font-bold" data-astro-cid-66ygibxk>Welcome to your CMS</h2> <p class="mt-2 text-subtle" data-astro-cid-66ygibxk>
Manage your portfolio content from here.
</p> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-astro-cid-66ygibxk> <div class="card-bg overflow-hidden shadow-lg rounded-lg transition-colors" data-astro-cid-66ygibxk> <div class="p-5" data-astro-cid-66ygibxk> <div class="flex items-center" data-astro-cid-66ygibxk> <div class="flex-shrink-0" data-astro-cid-66ygibxk> <div class="w-8 h-8 icon-iris rounded-md flex items-center justify-center" data-astro-cid-66ygibxk> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-66ygibxk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6" data-astro-cid-66ygibxk></path> </svg> </div> </div> <div class="ml-5 w-0 flex-1" data-astro-cid-66ygibxk> <dt class="text-sm font-medium text-muted truncate" data-astro-cid-66ygibxk>
Experience
</dt> <dd class="text-lg font-medium" data-astro-cid-66ygibxk>Work History</dd> </div> </div> <div class="mt-3" data-astro-cid-66ygibxk> <a href="/cms/experience" class="text-sm font-medium link-pine transition-colors" data-astro-cid-66ygibxk>
Manage experiences →
</a> </div> </div> </div> <div class="card-bg overflow-hidden shadow-lg rounded-lg transition-colors" data-astro-cid-66ygibxk> <div class="p-5" data-astro-cid-66ygibxk> <div class="flex items-center" data-astro-cid-66ygibxk> <div class="flex-shrink-0" data-astro-cid-66ygibxk> <div class="w-8 h-8 icon-pine rounded-md flex items-center justify-center" data-astro-cid-66ygibxk> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-66ygibxk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-66ygibxk></path> </svg> </div> </div> <div class="ml-5 w-0 flex-1" data-astro-cid-66ygibxk> <dt class="text-sm font-medium text-muted truncate" data-astro-cid-66ygibxk>
Projects
</dt> <dd class="text-lg font-medium" data-astro-cid-66ygibxk>Portfolio</dd> </div> </div> <div class="mt-3" data-astro-cid-66ygibxk> <a href="/cms/projects" class="text-sm font-medium link-pine transition-colors" data-astro-cid-66ygibxk>
Manage projects →
</a> </div> </div> </div> <div class="card-bg overflow-hidden shadow-lg rounded-lg transition-colors" data-astro-cid-66ygibxk> <div class="p-5" data-astro-cid-66ygibxk> <div class="flex items-center" data-astro-cid-66ygibxk> <div class="flex-shrink-0" data-astro-cid-66ygibxk> <div class="w-8 h-8 icon-love rounded-md flex items-center justify-center" data-astro-cid-66ygibxk> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-66ygibxk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-66ygibxk></path> </svg> </div> </div> <div class="ml-5 w-0 flex-1" data-astro-cid-66ygibxk> <dt class="text-sm font-medium text-muted truncate" data-astro-cid-66ygibxk>About</dt> <dd class="text-lg font-medium" data-astro-cid-66ygibxk>Personal Info</dd> </div> </div> <div class="mt-3" data-astro-cid-66ygibxk> <a href="/cms/about" class="text-sm font-medium link-pine transition-colors" data-astro-cid-66ygibxk>
Edit about page →
</a> </div> </div> </div> <div class="card-bg overflow-hidden shadow-lg rounded-lg transition-colors" data-astro-cid-66ygibxk> <div class="p-5" data-astro-cid-66ygibxk> <div class="flex items-center" data-astro-cid-66ygibxk> <div class="flex-shrink-0" data-astro-cid-66ygibxk> <div class="w-8 h-8 icon-gold rounded-md flex items-center justify-center" data-astro-cid-66ygibxk> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-66ygibxk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-66ygibxk></path> </svg> </div> </div> <div class="ml-5 w-0 flex-1" data-astro-cid-66ygibxk> <dt class="text-sm font-medium text-muted truncate" data-astro-cid-66ygibxk>Home</dt> <dd class="text-lg font-medium" data-astro-cid-66ygibxk>Homepage</dd> </div> </div> <div class="mt-3" data-astro-cid-66ygibxk> <a href="/cms/home" class="text-sm font-medium link-pine transition-colors" data-astro-cid-66ygibxk>
Edit homepage →
</a> </div> </div> </div> </div> </div> </main> </body></html>`;
}, "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/index.astro", void 0);

const $$file = "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/index.astro";
const $$url = "/cms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
