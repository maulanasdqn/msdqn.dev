import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as addAttribute } from './astro/server_Do_YPnBi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title,
    description,
    technologies,
    period,
    category,
    highlights = [],
    demoLink,
    githubLink
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-rose-pine-overlay/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med hover:border-rose-pine-iris/50 transition-all duration-300 group"> <div class="flex justify-between items-start mb-4"> <div class="flex-1"> <h3 class="text-xl font-semibold text-rose-pine-text mb-2 group-hover:text-rose-pine-iris transition-colors duration-200"> ${title} </h3> ${period && renderTemplate`<p class="text-sm text-rose-pine-muted mb-1">${period}</p>`} ${category && renderTemplate`<span class="inline-block bg-rose-pine-iris/20 text-rose-pine-iris px-3 py-1 rounded-full text-xs font-medium"> ${category} </span>`} </div> </div> <p class="text-rose-pine-subtle text-sm leading-relaxed mb-4"> ${description} </p> ${highlights.length > 0 && renderTemplate`<div class="mb-4"> <div class="flex flex-wrap gap-2"> ${highlights.map((highlight) => renderTemplate`<span class="bg-rose-pine-love/20 text-rose-pine-love px-2 py-1 rounded text-xs font-medium"> ${highlight} </span>`)} </div> </div>`} <div class="mb-6"> <div class="flex flex-wrap gap-2"> ${technologies.map((tech) => renderTemplate`<span class="bg-rose-pine-surface text-rose-pine-text px-2 py-1 rounded text-xs font-medium border border-rose-pine-highlight-med"> ${tech} </span>`)} </div> </div> ${(demoLink || githubLink) && renderTemplate`<div class="flex gap-3"> ${demoLink && renderTemplate`<a${addAttribute(demoLink, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 bg-rose-pine-iris hover:bg-rose-pine-iris/80 text-rose-pine-base text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
Live Demo
</a>`} ${githubLink && renderTemplate`<a${addAttribute(githubLink, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 bg-rose-pine-overlay hover:bg-rose-pine-highlight-med text-rose-pine-text text-center py-2 px-4 rounded-lg text-sm font-medium border border-rose-pine-highlight-med transition-all duration-200 inline-flex items-center justify-center gap-2"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg>
Code
</a>`} </div>`} </div>`;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/project-card.astro", void 0);

export { $$ProjectCard as $ };
