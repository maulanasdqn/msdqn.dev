/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, m as maybeRenderHead, h as renderSlot, e as renderComponent, d as renderHead } from '../chunks/astro/server_Do_YPnBi.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$ProjectCard } from '../chunks/project-card_CJwP0rgH.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  const { currentPath = "" } = Astro2.props;
  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
      name: "About",
      href: "#about",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      name: "Projects",
      href: "#projects",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      name: "Experience",
      href: "#experience",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
    },
    {
      name: "Contact",
      href: "#contact",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="fixed top-8 left-4 z-50" data-astro-cid-4wt5et55> <button id="nav-toggle" class="flex items-center justify-center w-12 h-12 bg-rose-pine-base/30 backdrop-blur-2xl hover:bg-rose-pine-iris/20 transition-all duration-300 rounded-2xl hover:rounded-xl shadow-2xl group border border-rose-pine-highlight-med/10" data-astro-cid-4wt5et55> <span class="text-rose-pine-text group-hover:text-rose-pine-iris font-bold text-lg transition-colors duration-300" data-astro-cid-4wt5et55>M</span> </button> </div> <nav id="sidebar-nav" class="hidden md:flex fixed left-0 top-0 h-full w-20 bg-rose-pine-base/30 backdrop-blur-2xl border-r border-rose-pine-highlight-med/10 z-40 flex-col items-center py-6 animate-nav shadow-2xl hover:w-52 transition-all duration-300 group -translate-x-full opacity-0" data-astro-cid-4wt5et55> <div class="flex flex-col space-y-1 w-full px-2" data-astro-cid-4wt5et55> ', ' </div> </nav> <div class="fixed top-6 left-6 z-50 md:hidden" data-astro-cid-4wt5et55> <button id="mobile-nav-toggle" class="flex items-center justify-center w-12 h-12 bg-rose-pine-base/30 backdrop-blur-2xl hover:bg-rose-pine-iris/20 transition-all duration-300 rounded-2xl hover:rounded-xl shadow-2xl group border border-rose-pine-highlight-med/10" data-astro-cid-4wt5et55> <span class="text-rose-pine-text group-hover:text-rose-pine-iris font-bold text-lg transition-colors duration-300" data-astro-cid-4wt5et55>M</span> </button> </div> <nav id="mobile-nav" class="fixed inset-0 bg-rose-pine-base/95 backdrop-blur-2xl z-40 md:hidden transform translate-y-full transition-transform duration-300" data-astro-cid-4wt5et55> <div class="flex flex-col h-full pt-20 px-6" data-astro-cid-4wt5et55> <div class="flex flex-col space-y-4" data-astro-cid-4wt5et55> ', ` </div> </div> </nav>  <script>
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidebarNav = document.getElementById('sidebar-nav');
    const mobileNav = document.getElementById('mobile-nav');

    function smoothScrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        const offsetTop = element.offsetTop - 32;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }

    function handleAnchorClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href);

        if (mobileNav && mobileNav.classList.contains('show')) {
          mobileNav.classList.remove('show');
        }

        if (sidebarNav && sidebarNav.classList.contains('show')) {
          sidebarNav.classList.remove('show');
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    function updateActiveSection() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');

      let currentSection = '';
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = '#' + section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
          link.classList.add('active');
        }
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    updateActiveSection();

    if (navToggle && sidebarNav) {
      navToggle.addEventListener('click', function () {
        sidebarNav.classList.toggle('show');
      });

      document.addEventListener('click', function (e) {
        if (!sidebarNav.contains(e.target) && !navToggle.contains(e.target)) {
          sidebarNav.classList.remove('show');
        }
      });
    }

    if (mobileNavToggle && mobileNav) {
      mobileNavToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
      });

      document.addEventListener('click', function (e) {
        if (
          !mobileNav.contains(e.target) &&
          !mobileNavToggle.contains(e.target)
        ) {
          mobileNav.classList.remove('show');
        }
      });
    }
  });
<\/script>`])), maybeRenderHead(), navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center w-full px-2 py-2 transition-all duration-300 rounded-xl group relative ${currentPath === item.href ? "bg-rose-pine-iris/30 text-rose-pine-iris" : "hover:bg-rose-pine-iris/20 text-rose-pine-text hover:text-rose-pine-iris"}`, "class")} data-astro-cid-4wt5et55> <div${addAttribute(`flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-2xl hover:rounded-xl flex-shrink-0 ${currentPath === item.href ? "bg-rose-pine-iris text-rose-pine-base" : "bg-rose-pine-surface hover:bg-rose-pine-iris text-rose-pine-text hover:text-rose-pine-base"}`, "class")} data-astro-cid-4wt5et55> <svg class="w-5 h-5 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4wt5et55> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(item.icon, "d")} data-astro-cid-4wt5et55></path> </svg> </div> <span class="ml-3 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden" data-astro-cid-4wt5et55> ${item.name} </span> ${currentPath === item.href && renderTemplate`<div class="absolute -left-1 w-1 h-8 bg-rose-pine-iris rounded-r-full" data-astro-cid-4wt5et55></div>`} </a>`), navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center space-x-4 py-4 px-4 transition-all duration-300 rounded-xl ${currentPath === item.href ? "bg-rose-pine-iris/30 text-rose-pine-iris" : "hover:bg-rose-pine-iris/20 text-rose-pine-text hover:text-rose-pine-iris"}`, "class")} data-astro-cid-4wt5et55> <div${addAttribute(`flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-2xl ${currentPath === item.href ? "bg-rose-pine-iris text-rose-pine-base" : "bg-rose-pine-surface hover:bg-rose-pine-iris text-rose-pine-text hover:text-rose-pine-base"}`, "class")} data-astro-cid-4wt5et55> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4wt5et55> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(item.icon, "d")} data-astro-cid-4wt5et55></path> </svg> </div> <span class="text-lg font-medium" data-astro-cid-4wt5et55>${item.name}</span> </a>`));
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/navigation-bar.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { ctaText, ctaLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen bg-gradient-to-br from-rose-pine-base via-rose-pine-surface to-rose-pine-overlay flex items-center justify-center overflow-hidden animate-hero" data-astro-cid-ltdikdbd> <div class="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block" data-astro-cid-ltdikdbd> <div class="grid grid-cols-5 gap-2" data-astro-cid-ltdikdbd> ${Array.from({ length: 25 }).map(() => renderTemplate`<div class="w-1 h-1 bg-rose-pine-muted rounded-full opacity-60" data-astro-cid-ltdikdbd></div>`)} </div> </div> <div class="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block" data-astro-cid-ltdikdbd> <div class="grid grid-cols-5 gap-2" data-astro-cid-ltdikdbd> ${Array.from({ length: 25 }).map(() => renderTemplate`<div class="w-1 h-1 bg-rose-pine-muted rounded-full opacity-60" data-astro-cid-ltdikdbd></div>`)} </div> </div> <div class="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-40 floating-social" data-astro-cid-ltdikdbd> <div class="w-px h-16 bg-rose-pine-muted mx-auto" data-astro-cid-ltdikdbd></div> <a href="https://www.linkedin.com/in/maulana-sodiqin/" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="LinkedIn" data-astro-cid-ltdikdbd> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-ltdikdbd></path> </svg> </a> <a href="https://github.com/maulanasdqn" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="GitHub" data-astro-cid-ltdikdbd> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-ltdikdbd></path> </svg> </a> <a href="https://msdqn.dev" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="Portfolio" data-astro-cid-ltdikdbd> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-astro-cid-ltdikdbd></path> </svg> </a> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-ltdikdbd> <div class="mb-6 sm:mb-8" data-astro-cid-ltdikdbd> <p class="text-rose-pine-subtle text-base sm:text-lg mb-2" data-astro-cid-ltdikdbd>
Hi, I'm Maulana Sodiqin!
</p> <div class="flex items-center justify-center space-x-2" data-astro-cid-ltdikdbd> <div class="flex space-x-1" data-astro-cid-ltdikdbd> <div class="w-2 h-2 bg-rose-pine-iris rounded-full" data-astro-cid-ltdikdbd></div> <div class="w-2 h-2 bg-rose-pine-love rounded-full" data-astro-cid-ltdikdbd></div> <div class="w-2 h-2 bg-rose-pine-foam rounded-full" data-astro-cid-ltdikdbd></div> </div> <div class="w-12 sm:w-16 h-px bg-rose-pine-muted" data-astro-cid-ltdikdbd></div> </div> </div> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-rose-pine-text mb-6 sm:mb-8 leading-tight px-2" data-astro-cid-ltdikdbd> <span class="block sm:inline" data-astro-cid-ltdikdbd>Innovative Software Solutions</span> <span class="block sm:inline" data-astro-cid-ltdikdbd> to Build a Connected </span> <span class="text-rose-pine-iris block sm:inline" data-astro-cid-ltdikdbd>&#123;World&#125;</span> </h1> <p class="text-rose-pine-subtle text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2" data-astro-cid-ltdikdbd>
Fullstack Developer with 5+ years building modern web applications.
      Passionate about React, TypeScript, Rust, and creating exceptional user
      experiences.
</p> <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4" data-astro-cid-ltdikdbd> <a href="/resume.pdf" download="Maulana_Sodiqin_Resume.pdf" class="w-full sm:w-auto bg-rose-pine-love hover:bg-rose-pine-love/80 text-rose-pine-base px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-pine-love/20 inline-flex items-center justify-center gap-2 animate-slide-up stagger-1" data-astro-cid-ltdikdbd> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ltdikdbd></path> </svg>
Hire Me
</a> <a href="#about" class="w-full sm:w-auto bg-rose-pine-iris hover:bg-rose-pine-iris/80 text-rose-pine-base px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-pine-iris/20 inline-flex items-center justify-center animate-slide-up stagger-2" data-astro-cid-ltdikdbd>
About me
</a> <a${addAttribute(ctaLink, "href")} class="w-full sm:w-auto border border-rose-pine-muted hover:border-rose-pine-iris text-rose-pine-text hover:text-rose-pine-iris px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-pine-iris/10 inline-flex items-center justify-center gap-2 animate-slide-up stagger-3" data-astro-cid-ltdikdbd> ${ctaText} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-ltdikdbd></path> </svg> </a> </div> <div class="flex lg:hidden justify-center items-center space-x-6 mt-8 pt-8 border-t border-rose-pine-highlight-med" data-astro-cid-ltdikdbd> <a href="https://www.linkedin.com/in/maulana-sodiqin/" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="LinkedIn" data-astro-cid-ltdikdbd> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-ltdikdbd></path> </svg> </a> <a href="https://github.com/maulanasdqn" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="GitHub" data-astro-cid-ltdikdbd> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-ltdikdbd></path> </svg> </a> <a href="https://msdqn.dev" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="Portfolio" data-astro-cid-ltdikdbd> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ltdikdbd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-astro-cid-ltdikdbd></path> </svg> </a> </div> </div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-astro-cid-ltdikdbd> <div class="w-px h-12 bg-rose-pine-muted" data-astro-cid-ltdikdbd></div> </div> </section> `;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/hero-section.astro", void 0);

const $$Astro$1 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const {
    title,
    company,
    duration,
    description,
    responsibilities,
    type = "work"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-rose-pine-surface/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 hover:bg-rose-pine-surface/70 hover:scale-[1.02] hover:shadow-lg hover:shadow-rose-pine-overlay/20 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4"> <div class="mb-3 lg:mb-0"> <h3 class="text-lg sm:text-xl font-bold text-rose-pine-text mb-1"> ${title} </h3> <h4 class="text-base sm:text-lg text-rose-pine-iris font-semibold"> ${company} </h4> </div> <div class="flex items-center text-rose-pine-muted lg:flex-shrink-0"> <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path> </svg> <span class="font-medium text-sm sm:text-base">${duration}</span> </div> </div> <p class="text-rose-pine-subtle mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"> ${description} </p> ${responsibilities && responsibilities.length > 0 && renderTemplate`<div> <h5 class="font-semibold text-rose-pine-text mb-2 text-sm sm:text-base"> ${type === "work" ? "Key Responsibilities:" : "Key Achievements:"} </h5> <ul class="list-disc list-inside text-rose-pine-subtle space-y-1 sm:space-y-2"> ${responsibilities.map((item) => renderTemplate`<li class="leading-relaxed text-sm sm:text-base pl-1">${item}</li>`)} </ul> </div>`} </div>`;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/experience-item.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-rose-pine-surface/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto border border-rose-pine-highlight-med"> <h2 class="text-xl sm:text-2xl font-bold text-rose-pine-text mb-4 sm:mb-6 text-center">
Get In Touch
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6"> <div> <label for="name" class="block text-sm font-medium text-rose-pine-subtle mb-2">
Full Name
</label> <input type="text" id="name" name="name" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-pine-overlay/50 border border-rose-pine-highlight-med rounded-lg sm:rounded-xl text-rose-pine-text placeholder-rose-pine-muted focus:ring-2 focus:ring-rose-pine-iris focus:border-transparent transition-all text-sm sm:text-base" placeholder="Your full name"> </div> <div> <label for="email" class="block text-sm font-medium text-rose-pine-subtle mb-2">
Email Address
</label> <input type="email" id="email" name="email" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-pine-overlay/50 border border-rose-pine-highlight-med rounded-lg sm:rounded-xl text-rose-pine-text placeholder-rose-pine-muted focus:ring-2 focus:ring-rose-pine-iris focus:border-transparent transition-all text-sm sm:text-base" placeholder="your.email@example.com"> </div> </div> <div class="mb-4 sm:mb-6"> <label for="subject" class="block text-sm font-medium text-rose-pine-subtle mb-2">
Subject
</label> <input type="text" id="subject" name="subject" class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-pine-overlay/50 border border-rose-pine-highlight-med rounded-lg sm:rounded-xl text-rose-pine-text placeholder-rose-pine-muted focus:ring-2 focus:ring-rose-pine-iris focus:border-transparent transition-all text-sm sm:text-base" placeholder="What's this about?"> </div> <div class="mb-4 sm:mb-6"> <label for="message" class="block text-sm font-medium text-rose-pine-subtle mb-2">
Message
</label> <textarea id="message" name="message" rows="4" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-pine-overlay/50 border border-rose-pine-highlight-med rounded-lg sm:rounded-xl text-rose-pine-text placeholder-rose-pine-muted focus:ring-2 focus:ring-rose-pine-iris focus:border-transparent transition-all resize-vertical text-sm sm:text-base" placeholder="Tell me about your project or opportunity..."></textarea> </div> <div class="text-center"> <button type="submit" class="w-full sm:w-auto bg-rose-pine-iris hover:bg-rose-pine-iris/80 text-rose-pine-base px-6 sm:px-8 py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg>
Send Message
</button> </div> <p class="text-xs sm:text-sm text-rose-pine-muted mt-3 sm:mt-4 text-center">
I'll get back to you within 24 hours.
</p> </form>`;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/contact-form.astro", void 0);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-rose-pine-surface border-t border-rose-pine-highlight-med py-12"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="space-y-4"> <h3 class="text-xl font-bold text-rose-pine-text">MSDQN.</h3> <p class="text-rose-pine-subtle text-sm leading-relaxed">
Frontend-focused Software Engineer building scalable and maintainable
          web applications with modern technologies.
</p> </div> <div class="space-y-4"> <h4 class="text-sm font-semibold text-rose-pine-text uppercase tracking-wider">
Quick Links
</h4> <nav class="flex flex-col space-y-2"> <a href="/about" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm">About</a> <a href="/projects" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm">Projects</a> <a href="/experience" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm">Experience</a> <a href="/contact" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm">Contact</a> </nav> </div> <div class="space-y-4"> <h4 class="text-sm font-semibold text-rose-pine-text uppercase tracking-wider">
Connect
</h4> <div class="space-y-3"> <a href="mailto:maulanasdqn@gmail.com" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm block">
maulanasdqn@gmail.com
</a> <a href="tel:+62085156085579" class="text-rose-pine-subtle hover:text-rose-pine-iris transition-colors duration-200 text-sm block">
+62 851-5608-5579
</a> <p class="text-rose-pine-muted text-sm">
Malang, East Java, Indonesia
</p> <div class="flex space-x-4 pt-2"> <a href="https://www.linkedin.com/in/maulana-sodiqin/" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="LinkedIn"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="https://github.com/maulanasdqn" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="GitHub"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a> <a href="https://msdqn.dev" target="_blank" rel="noopener noreferrer" class="text-rose-pine-muted hover:text-rose-pine-iris transition-colors duration-200" aria-label="Portfolio"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path> </svg> </a> </div> </div> </div> </div> <div class="mt-8 pt-8 border-t border-rose-pine-highlight-med"> <p class="text-center text-rose-pine-muted text-sm">
© 2024 Maulana Sodiqin. All rights reserved.
</p> </div> </div> </footer>`;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/footer-section.astro", void 0);

const $$Astro = createAstro();
const $$AnimationWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimationWrapper;
  const {
    animation = "fade-up",
    delay = 0,
    duration = 600,
    distance = 30,
    class: className = "",
    once = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`scroll-animate ${className}`, "class")}${addAttribute(animation, "data-animation")}${addAttribute(delay, "data-delay")}${addAttribute(duration, "data-duration")}${addAttribute(distance, "data-distance")}${addAttribute(once, "data-once")} data-astro-cid-5sgice43> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/msdqn/Development/personal/personal-website/src/components/ui/animation-wrapper.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Maulana Sodiqin - Fullstack Developer & Software Engineer</title><meta name="description" content="Fullstack Developer with 5+ years experience in ReactJS, TypeScript, Rust, and modern web technologies. Based in Malang, Indonesia."><meta name="keywords" content="software engineer, fullstack developer, react developer, typescript, rust, frontend developer, maulana sodiqin, web developer"><meta property="og:title" content="Maulana Sodiqin - Fullstack Developer & Software Engineer"><meta property="og:description" content="Fullstack Developer with 5+ years experience building scalable web applications"><meta property="og:type" content="website"><link rel="canonical" href="https://msdqn.dev">', '</head> <body class="bg-rose-pine-base text-rose-pine-text"> ', ' <main> <section id="home"> ', ' </section> <section id="about" class="py-16 px-6 bg-rose-pine-surface"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-rose-pine-text text-center">\nAbout Me\n</h2> <div class="bg-rose-pine-overlay/50 backdrop-blur-sm p-8 rounded-xl border border-rose-pine-highlight-med"> <p class="text-rose-pine-subtle text-lg leading-relaxed mb-6">\nI am proficient in modular UI architecture, design systems,\n              test-driven development, and modern state management with React\n              Query and Jotai. I have extensive experience working with micro\n              frontend structures and NX monorepos to support large-scale\n              applications.\n</p> <p class="text-rose-pine-subtle text-lg leading-relaxed">\nCurrently expanding my full-stack skills with <span class="text-rose-pine-iris font-semibold">Rust and Axum</span> to gain deeper backend architecture understanding, while maintaining\n              my expertise in modern frontend technologies.\n</p> </div> <div class="mt-16"> <h3 class="text-2xl font-bold mb-8 text-rose-pine-text text-center">\nTechnical Skills\n</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-iris" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nFrontend Development\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 ReactJS, NextJS, TypeScript</li> <li>\u2022 JavaScript (ES6+)</li> <li>\u2022 TailwindCSS, Shadcn, Ant Design</li> <li>\u2022 HTML/CSS, Responsive Design</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-love/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-love" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nState Management\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Tanstack React Query</li> <li>\u2022 Jotai, Zustand, Recoil</li> <li>\u2022 Redux</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-foam/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-foam" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nTesting & Quality\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 React Testing Library</li> <li>\u2022 Vitest, Jest, MSW</li> <li>\u2022 Test-Driven Development</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-pine/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-pine" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nFrontend Architecture\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 NX Monorepo</li> <li>\u2022 Module Federation</li> <li>\u2022 Micro Frontend</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-gold/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-gold" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nBackend & Database\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Rust, Axum, SurrealDB</li> <li>\u2022 PostgreSQL</li> <li>\u2022 HonoJS, NestJS, ExpressJS</li> <li>\u2022 Drizzle, Prisma, TypeORM</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-rose/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-rose" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nUI Tooling & Design\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Storybook, Design Systems</li> <li>\u2022 Component-Driven Development</li> <li>\u2022 Performance Optimization</li> <li>\u2022 Accessibility, Cross-Browser</li> </ul> </div> </div> </div> </div> </section> <section id="experience" class="py-16 bg-rose-pine-base"> <div class="max-w-4xl mx-auto px-6"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-rose-pine-text mb-6">\nExperience & Skills\n</h2> <p class="text-lg text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed mb-8">\nFullstack Developer with 5+ years building scalable web\n              applications and leading development teams. Rust enthusiast\n              exploring modern backend technologies.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/resume.pdf" download="Maulana_Sodiqin_Resume.pdf" class="bg-rose-pine-love hover:bg-rose-pine-love/80 text-rose-pine-base px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>\nDownload Resume\n</a> <a href="mailto:maulanasdqn@gmail.com" class="bg-rose-pine-iris hover:bg-rose-pine-iris/80 text-rose-pine-base px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>\nContact Me\n</a> </div> </div> <div class="mb-20"> <h3 class="text-3xl font-bold text-rose-pine-text mb-12 flex items-center"> <svg class="w-8 h-8 mr-4 text-rose-pine-iris" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path> </svg>\nWork Experience\n</h3> ', " ", " ", ` </div> <div class="mb-16"> <div class="bg-rose-pine-surface/50 rounded-2xl p-8 border border-rose-pine-highlight-med"> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"> <div> <div class="text-3xl font-bold text-rose-pine-iris mb-2">
5+
</div> <div class="text-rose-pine-subtle font-medium">
Years Experience
</div> </div> <div> <div class="text-3xl font-bold text-rose-pine-foam mb-2">
10+
</div> <div class="text-rose-pine-subtle font-medium">
Projects Delivered
</div> </div> <div> <div class="text-3xl font-bold text-rose-pine-rose mb-2">
1000+
</div> <div class="text-rose-pine-subtle font-medium">
Users Served
</div> </div> </div> </div> </div> </div> </section> <section id="projects" class="py-16 px-6 bg-rose-pine-surface"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-6 text-rose-pine-text">
My Projects
</h2> <p class="text-xl text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed">
A showcase of innovative software solutions I've built over the
              years, from enterprise applications to specialized platforms
              serving thousands of users.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" data-stagger="150"> `, " ", " ", " ", " ", " ", ` </div> </div> </section> <section id="contact" class="py-20 bg-rose-pine-base"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-20"> <h2 class="text-5xl font-bold text-rose-pine-text mb-8">
Let's Connect
</h2> <p class="text-xl text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed">
I'm always interested in discussing new opportunities,
              collaborations, or just having a chat about technology. Feel free
              to reach out!
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16"> <div> `, ` </div> <div class="space-y-8"> <div> <h3 class="text-3xl font-bold text-rose-pine-text mb-8">
Other Ways to Reach Me
</h3> <div class="space-y-6"> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">Email</h4> <a href="mailto:maulanasdqn@gmail.com" class="text-rose-pine-iris hover:text-rose-pine-iris/80 transition-colors">
maulanasdqn@gmail.com
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">
LinkedIn
</h4> <a href="https://www.linkedin.com/in/maulana-sodiqin/" target="_blank" rel="noopener noreferrer" class="text-rose-pine-iris hover:text-rose-pine-iris/80 transition-colors">
linkedin.com/in/maulana-sodiqin
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-muted rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">GitHub</h4> <a href="https://github.com/maulanasdqn" target="_blank" rel="noopener noreferrer" class="text-rose-pine-subtle hover:text-rose-pine-text transition-colors">
github.com/maulanasdqn
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-foam rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">Phone</h4> <a href="tel:+6285156085579" class="text-rose-pine-foam hover:text-rose-pine-foam/80 transition-colors">
+62 851-5608-5579
</a> </div> </div> </div> </div> <div class="bg-gradient-to-br from-rose-pine-surface/50 to-rose-pine-overlay/50 backdrop-blur-sm p-8 rounded-2xl border border-rose-pine-highlight-med"> <h4 class="text-2xl font-bold text-rose-pine-text mb-6">
What I'm Looking For
</h4> <ul class="space-y-4 text-rose-pine-subtle"> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Full-time software development opportunities
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Freelance and contract projects
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Technical collaboration and consulting
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Open source project contributions
</li> </ul> </div> <div class="text-center"> <p class="text-rose-pine-muted mb-6">
Located in Malang, East Java, Indonesia
</p> <p class="text-rose-pine-subtle text-sm">
Open to remote work opportunities worldwide
</p> </div> </div> </div> </div> </section> </main> `, " <script>\n      document.addEventListener('DOMContentLoaded', function () {\n        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {\n          const allElements = document.querySelectorAll('.scroll-animate');\n          allElements.forEach(el => {\n            el.style.opacity = '1';\n            el.style.transform = 'none';\n          });\n          return;\n        }\n\n        const elements = document.querySelectorAll('.scroll-animate');\n\n        if (!elements.length) {\n          return;\n        }\n\n        elements.forEach(element => {\n          const duration = parseInt(element.dataset.duration) || 600;\n          const distance = parseInt(element.dataset.distance) || 30;\n\n          element.style.setProperty('--distance', `${distance}px`);\n          element.style.transitionDuration = `${duration}ms`;\n          element.style.transitionTimingFunction =\n            'cubic-bezier(0.4, 0, 0.2, 1)';\n        });\n\n        const staggerContainers = document.querySelectorAll('[data-stagger]');\n        staggerContainers.forEach(container => {\n          const children = container.querySelectorAll('.scroll-animate');\n          const staggerDelay = parseInt(container.dataset.stagger) || 100;\n\n          children.forEach((child, index) => {\n            const currentDelay = parseInt(child.dataset.delay) || 0;\n            child.dataset.delay = (\n              currentDelay +\n              index * staggerDelay\n            ).toString();\n          });\n        });\n\n        const observer = new IntersectionObserver(\n          entries => {\n            entries.forEach(entry => {\n              if (entry.isIntersecting) {\n                const element = entry.target;\n                const delay = parseInt(element.dataset.delay) || 0;\n\n                if (delay > 0) {\n                  setTimeout(() => {\n                    element.classList.add('animate-in');\n                  }, delay);\n                } else {\n                  element.classList.add('animate-in');\n                }\n\n                const once = element.dataset.once !== 'false';\n                if (once) {\n                  observer.unobserve(element);\n                }\n              }\n            });\n          },\n          {\n            threshold: 0.1,\n            rootMargin: '0px 0px -100px 0px',\n          }\n        );\n\n        elements.forEach(element => {\n          observer.observe(element);\n        });\n\n        setTimeout(() => {\n          const hiddenElements = document.querySelectorAll(\n            '.scroll-animate:not(.animate-in)'\n          );\n          if (hiddenElements.length > 0) {\n            hiddenElements.forEach(el => {\n              el.classList.add('animate-in');\n            });\n          }\n        }, 3000);\n      });\n    <\/script> </body> </html>"], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Maulana Sodiqin - Fullstack Developer & Software Engineer</title><meta name="description" content="Fullstack Developer with 5+ years experience in ReactJS, TypeScript, Rust, and modern web technologies. Based in Malang, Indonesia."><meta name="keywords" content="software engineer, fullstack developer, react developer, typescript, rust, frontend developer, maulana sodiqin, web developer"><meta property="og:title" content="Maulana Sodiqin - Fullstack Developer & Software Engineer"><meta property="og:description" content="Fullstack Developer with 5+ years experience building scalable web applications"><meta property="og:type" content="website"><link rel="canonical" href="https://msdqn.dev">', '</head> <body class="bg-rose-pine-base text-rose-pine-text"> ', ' <main> <section id="home"> ', ' </section> <section id="about" class="py-16 px-6 bg-rose-pine-surface"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-rose-pine-text text-center">\nAbout Me\n</h2> <div class="bg-rose-pine-overlay/50 backdrop-blur-sm p-8 rounded-xl border border-rose-pine-highlight-med"> <p class="text-rose-pine-subtle text-lg leading-relaxed mb-6">\nI am proficient in modular UI architecture, design systems,\n              test-driven development, and modern state management with React\n              Query and Jotai. I have extensive experience working with micro\n              frontend structures and NX monorepos to support large-scale\n              applications.\n</p> <p class="text-rose-pine-subtle text-lg leading-relaxed">\nCurrently expanding my full-stack skills with <span class="text-rose-pine-iris font-semibold">Rust and Axum</span> to gain deeper backend architecture understanding, while maintaining\n              my expertise in modern frontend technologies.\n</p> </div> <div class="mt-16"> <h3 class="text-2xl font-bold mb-8 text-rose-pine-text text-center">\nTechnical Skills\n</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-iris" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nFrontend Development\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 ReactJS, NextJS, TypeScript</li> <li>\u2022 JavaScript (ES6+)</li> <li>\u2022 TailwindCSS, Shadcn, Ant Design</li> <li>\u2022 HTML/CSS, Responsive Design</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-love/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-love" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nState Management\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Tanstack React Query</li> <li>\u2022 Jotai, Zustand, Recoil</li> <li>\u2022 Redux</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-foam/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-foam" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nTesting & Quality\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 React Testing Library</li> <li>\u2022 Vitest, Jest, MSW</li> <li>\u2022 Test-Driven Development</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-pine/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-pine" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nFrontend Architecture\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 NX Monorepo</li> <li>\u2022 Module Federation</li> <li>\u2022 Micro Frontend</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-gold/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-gold" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nBackend & Database\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Rust, Axum, SurrealDB</li> <li>\u2022 PostgreSQL</li> <li>\u2022 HonoJS, NestJS, ExpressJS</li> <li>\u2022 Drizzle, Prisma, TypeORM</li> </ul> </div> <div class="bg-rose-pine-surface/50 backdrop-blur-sm p-6 rounded-xl border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-rose/20 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-rose-pine-rose" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"></path> </svg> </div> <h4 class="text-xl font-semibold mb-3 text-rose-pine-text">\nUI Tooling & Design\n</h4> <ul class="text-rose-pine-subtle space-y-1 text-sm"> <li>\u2022 Storybook, Design Systems</li> <li>\u2022 Component-Driven Development</li> <li>\u2022 Performance Optimization</li> <li>\u2022 Accessibility, Cross-Browser</li> </ul> </div> </div> </div> </div> </section> <section id="experience" class="py-16 bg-rose-pine-base"> <div class="max-w-4xl mx-auto px-6"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-rose-pine-text mb-6">\nExperience & Skills\n</h2> <p class="text-lg text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed mb-8">\nFullstack Developer with 5+ years building scalable web\n              applications and leading development teams. Rust enthusiast\n              exploring modern backend technologies.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/resume.pdf" download="Maulana_Sodiqin_Resume.pdf" class="bg-rose-pine-love hover:bg-rose-pine-love/80 text-rose-pine-base px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>\nDownload Resume\n</a> <a href="mailto:maulanasdqn@gmail.com" class="bg-rose-pine-iris hover:bg-rose-pine-iris/80 text-rose-pine-base px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>\nContact Me\n</a> </div> </div> <div class="mb-20"> <h3 class="text-3xl font-bold text-rose-pine-text mb-12 flex items-center"> <svg class="w-8 h-8 mr-4 text-rose-pine-iris" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path> </svg>\nWork Experience\n</h3> ', " ", " ", ` </div> <div class="mb-16"> <div class="bg-rose-pine-surface/50 rounded-2xl p-8 border border-rose-pine-highlight-med"> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"> <div> <div class="text-3xl font-bold text-rose-pine-iris mb-2">
5+
</div> <div class="text-rose-pine-subtle font-medium">
Years Experience
</div> </div> <div> <div class="text-3xl font-bold text-rose-pine-foam mb-2">
10+
</div> <div class="text-rose-pine-subtle font-medium">
Projects Delivered
</div> </div> <div> <div class="text-3xl font-bold text-rose-pine-rose mb-2">
1000+
</div> <div class="text-rose-pine-subtle font-medium">
Users Served
</div> </div> </div> </div> </div> </div> </section> <section id="projects" class="py-16 px-6 bg-rose-pine-surface"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-6 text-rose-pine-text">
My Projects
</h2> <p class="text-xl text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed">
A showcase of innovative software solutions I've built over the
              years, from enterprise applications to specialized platforms
              serving thousands of users.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" data-stagger="150"> `, " ", " ", " ", " ", " ", ` </div> </div> </section> <section id="contact" class="py-20 bg-rose-pine-base"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-20"> <h2 class="text-5xl font-bold text-rose-pine-text mb-8">
Let's Connect
</h2> <p class="text-xl text-rose-pine-subtle max-w-3xl mx-auto leading-relaxed">
I'm always interested in discussing new opportunities,
              collaborations, or just having a chat about technology. Feel free
              to reach out!
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16"> <div> `, ` </div> <div class="space-y-8"> <div> <h3 class="text-3xl font-bold text-rose-pine-text mb-8">
Other Ways to Reach Me
</h3> <div class="space-y-6"> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">Email</h4> <a href="mailto:maulanasdqn@gmail.com" class="text-rose-pine-iris hover:text-rose-pine-iris/80 transition-colors">
maulanasdqn@gmail.com
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-iris rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">
LinkedIn
</h4> <a href="https://www.linkedin.com/in/maulana-sodiqin/" target="_blank" rel="noopener noreferrer" class="text-rose-pine-iris hover:text-rose-pine-iris/80 transition-colors">
linkedin.com/in/maulana-sodiqin
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-muted rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">GitHub</h4> <a href="https://github.com/maulanasdqn" target="_blank" rel="noopener noreferrer" class="text-rose-pine-subtle hover:text-rose-pine-text transition-colors">
github.com/maulanasdqn
</a> </div> </div> <div class="flex items-center p-6 bg-rose-pine-surface/50 backdrop-blur-sm rounded-2xl hover:bg-rose-pine-surface/70 transition-all duration-300 border border-rose-pine-highlight-med"> <div class="w-12 h-12 bg-rose-pine-foam rounded-xl flex items-center justify-center mr-4"> <svg class="w-6 h-6 text-rose-pine-base" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-semibold text-rose-pine-text">Phone</h4> <a href="tel:+6285156085579" class="text-rose-pine-foam hover:text-rose-pine-foam/80 transition-colors">
+62 851-5608-5579
</a> </div> </div> </div> </div> <div class="bg-gradient-to-br from-rose-pine-surface/50 to-rose-pine-overlay/50 backdrop-blur-sm p-8 rounded-2xl border border-rose-pine-highlight-med"> <h4 class="text-2xl font-bold text-rose-pine-text mb-6">
What I'm Looking For
</h4> <ul class="space-y-4 text-rose-pine-subtle"> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Full-time software development opportunities
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Freelance and contract projects
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Technical collaboration and consulting
</li> <li class="flex items-start"> <svg class="w-5 h-5 text-rose-pine-foam mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Open source project contributions
</li> </ul> </div> <div class="text-center"> <p class="text-rose-pine-muted mb-6">
Located in Malang, East Java, Indonesia
</p> <p class="text-rose-pine-subtle text-sm">
Open to remote work opportunities worldwide
</p> </div> </div> </div> </div> </section> </main> `, " <script>\n      document.addEventListener('DOMContentLoaded', function () {\n        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {\n          const allElements = document.querySelectorAll('.scroll-animate');\n          allElements.forEach(el => {\n            el.style.opacity = '1';\n            el.style.transform = 'none';\n          });\n          return;\n        }\n\n        const elements = document.querySelectorAll('.scroll-animate');\n\n        if (!elements.length) {\n          return;\n        }\n\n        elements.forEach(element => {\n          const duration = parseInt(element.dataset.duration) || 600;\n          const distance = parseInt(element.dataset.distance) || 30;\n\n          element.style.setProperty('--distance', \\`\\${distance}px\\`);\n          element.style.transitionDuration = \\`\\${duration}ms\\`;\n          element.style.transitionTimingFunction =\n            'cubic-bezier(0.4, 0, 0.2, 1)';\n        });\n\n        const staggerContainers = document.querySelectorAll('[data-stagger]');\n        staggerContainers.forEach(container => {\n          const children = container.querySelectorAll('.scroll-animate');\n          const staggerDelay = parseInt(container.dataset.stagger) || 100;\n\n          children.forEach((child, index) => {\n            const currentDelay = parseInt(child.dataset.delay) || 0;\n            child.dataset.delay = (\n              currentDelay +\n              index * staggerDelay\n            ).toString();\n          });\n        });\n\n        const observer = new IntersectionObserver(\n          entries => {\n            entries.forEach(entry => {\n              if (entry.isIntersecting) {\n                const element = entry.target;\n                const delay = parseInt(element.dataset.delay) || 0;\n\n                if (delay > 0) {\n                  setTimeout(() => {\n                    element.classList.add('animate-in');\n                  }, delay);\n                } else {\n                  element.classList.add('animate-in');\n                }\n\n                const once = element.dataset.once !== 'false';\n                if (once) {\n                  observer.unobserve(element);\n                }\n              }\n            });\n          },\n          {\n            threshold: 0.1,\n            rootMargin: '0px 0px -100px 0px',\n          }\n        );\n\n        elements.forEach(element => {\n          observer.observe(element);\n        });\n\n        setTimeout(() => {\n          const hiddenElements = document.querySelectorAll(\n            '.scroll-animate:not(.animate-in)'\n          );\n          if (hiddenElements.length > 0) {\n            hiddenElements.forEach(el => {\n              el.classList.add('animate-in');\n            });\n          }\n        }, 3000);\n      });\n    <\/script> </body> </html>"])), renderHead(), renderComponent($$result, "NavigationBar", $$NavigationBar, {}), renderComponent($$result, "HeroSection", $$HeroSection, { "ctaText": "Let's talk", "ctaLink": "#contact" }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "slide-left", "distance": 80 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": "Software Engineer", "company": "DOT Indonesia", "duration": "Aug 2022 - Present", "description": "Full-time position developing scalable web applications using modern React ecosystem and improving development workflows for enhanced team productivity.", "responsibilities": [
    "Built and maintained scalable web components using ReactJS, TailwindCSS, and Ant Design, reducing development time for new features by 35%",
    "Implemented modular UI architecture and design patterns, improving code reusability across 20+ modules",
    "Introduced React Query and Zustand for robust state management, enhancing frontend performance and developer experience",
    "Collaborated with backend teams using Agile practices to deliver UX improvements, increasing user retention by 18%"
  ], "type": "work" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "slide-right", "distance": 80 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": "Lead Software Engineer", "company": "PT Indonusa Persada Teknologi", "duration": "Jan 2025 - May 2025", "description": "Freelance leadership role managing a team of engineers to develop micro frontend-based agriculture backoffice application with advanced architecture and testing practices.", "responsibilities": [
    "Led 4 engineers to develop a micro frontend-based agriculture backoffice app with module federation and shared UI components",
    "Reduced manual data processing by 70% through scalable CRUD workflows and reusable logic blocks",
    "Developed integration and unit tests using React Testing Library, Vitest, and MSW, ensuring frontend reliability"
  ], "type": "work" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "rotate-in", "distance": 80 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": "Lead Software Engineer", "company": "M-Knows Consulting", "duration": "Feb 2023 - Jun 2023", "description": "Internship role leading development of modular financial dashboard components with focus on performance optimization and robust API integration.", "responsibilities": [
    "Built modular financial dashboard components using ReactJS and TypeScript, reducing dev time by 40%",
    "Integrated 10+ APIs with robust error handling and fallback states, reducing client-reported issues by 90%",
    "Spearheaded Nx-based monorepo architecture to support shared tooling, versioned libs, and CI/CD pipelines, reducing deployment time by 50%"
  ], "type": "work" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "fade-up", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "NAJM Course Frontend", "description": "Computer-Assisted Test Platform built with React 19, Vite, Ant Design, and TailwindCSS within an Nx Monorepo setup. Features protected routes, role-based access, and robust state management.", "technologies": [
    "React 19",
    "Vite",
    "Ant Design",
    "TailwindCSS",
    "Nx Monorepo",
    "React Query",
    "Jotai",
    "Vitest",
    "MSW"
  ], "period": "Jan 2025 \u2013 Apr 2025", "category": "Frontend Development" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "scale-up", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "NAJM Course API", "description": "Backend service architected with Rust, Axum, and SurrealDB. Features strong type-safety, modular service layers, full integration test coverage, and enforced validation with access control.", "technologies": [
    "Rust",
    "Axum",
    "SurrealDB",
    "Integration Testing",
    "Type Safety"
  ], "period": "Jan 2025 \u2013 Apr 2025", "category": "Backend Development" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "fade-right", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Kuncie Scholarship System", "description": "Responsive web-based enrollment system for scholarship management. Features dynamic forms, admin workflows, role-based access, and atomic design principles.", "technologies": [
    "Next.js",
    "TailwindCSS",
    "React Context",
    "Atomic Design",
    "Responsive Design"
  ], "period": "Jun 2024", "category": "Web Application" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "zoom-in", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Sobat Bangun Platform", "description": "Scalable modular property building platform engineered with Next.js, TailwindCSS, and Nx Monorepo. Contributed to shared design system and optimized build pipelines for cross-team collaboration.", "technologies": [
    "Next.js",
    "TailwindCSS",
    "Nx Monorepo",
    "Design System",
    "Build Optimization"
  ], "period": "May 2023 \u2013 Nov 2023", "category": "Platform Development" })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "flip-up", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Learning Management System", "description": "Complete LMS platform serving 1,000+ users built with ReactJS, TailwindCSS, and atomic component structure. Optimized for performance with lazy loading and role-segmented access.", "technologies": [
    "ReactJS",
    "TailwindCSS",
    "Atomic Components",
    "Lazy Loading",
    "Role Management"
  ], "period": "Jul 2023 \u2013 Dec 2023", "category": "Educational Platform", "highlights": ["1,000+ Users", "High Performance"] })} ` }), renderComponent($$result, "AnimationWrapper", $$AnimationWrapper, { "animation": "bounce-in", "distance": 50 }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": "Votsu - Voting System", "description": "Secure Web3-enabled decentralized voting system built with Next.js, TailwindCSS, and Solana blockchain. Achieved 100% vote integrity with mobile-first UX for university elections.", "technologies": [
    "Next.js",
    "TailwindCSS",
    "Solana",
    "Web3",
    "Blockchain",
    "Mobile-First"
  ], "period": "May 2023 \u2013 Jun 2023", "category": "Blockchain Application", "highlights": ["100% Vote Integrity", "Web3 Integration"] })} ` }), renderComponent($$result, "ContactForm", $$ContactForm, {}), renderComponent($$result, "FooterSection", $$FooterSection, {}));
}, "C:/Users/msdqn/Development/personal/personal-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/msdqn/Development/personal/personal-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
