# Personal Website - Development Guide

## Project Overview

This is Maulana Sodiqin's professional portfolio website built with Astro, featuring a content management system, authentication, and dynamic content delivery. The site showcases professional experience, projects, and skills with a focus on attracting HR recruiters and potential employers.

## Agent OS Integration

This project uses Agent OS for structured development workflows. When working on new features, follow the Agent OS process for planning and implementation.

### Product Documentation

- **Mission & Vision:** @.agent-os/product/mission.md
- **Technical Architecture:** @.agent-os/product/tech-stack.md
- **Development Roadmap:** @.agent-os/product/roadmap.md
- **Decision History:** @.agent-os/product/decisions.md

### Development Standards

- **Global Code Style:** @~/.agent-os/standards/code-style.md
- **Best Practices:** @~/.agent-os/standards/best-practices.md
- **Tech Stack Defaults:** @~/.agent-os/standards/tech-stack.md

## Project-Specific Development Rules

### Code Standards (Cursor Rules)

- **NEVER ADD COMMENTS** - The codebase must remain comment-free
- **Always use context7 MCP** for enhanced development workflow
- **Components**: All UI components must be Astro files in `src/components/ui/` with kebab-case naming (e.g., `hero-section.astro`)
- **Pages**: All pages must be Astro files in `src/pages/` with complete HTML5 structure, viewport meta tags, and SEO optimization

### Tech Stack

- **Framework**: Astro 5.10.1 with server-side rendering
- **Styling**: TailwindCSS with Rose Pine theme
- **Database**: Supabase PostgreSQL with authentication
- **Deployment**: Vercel with web analytics
- **Development**: TypeScript, ESLint, Prettier

### Rose Pine Theme

The site uses a custom Rose Pine color palette defined in `tailwind.config.ts`:

- Base colors: `rose-pine-base`, `rose-pine-surface`, `rose-pine-overlay`
- Text colors: `rose-pine-text`, `rose-pine-subtle`, `rose-pine-muted`
- Accent colors: `rose-pine-iris`, `rose-pine-love`, `rose-pine-foam`, `rose-pine-pine`, `rose-pine-rose`, `rose-pine-gold`

### File Structure Conventions

```
src/
├── components/ui/          # All Astro UI components
├── pages/                  # Astro pages with full HTML structure
├── pages/api/             # API endpoints for CRUD operations
├── pages/cms/             # Admin interface pages
├── libs/                  # Utility libraries (supabase, analytics)
└── styles/                # Global CSS
```

### Database Schema

Key Supabase tables:

- `about_content` - About page content
- `experiences` - Work experience entries
- `projects` - Portfolio projects
- `case_studies` - Case study entries
- `testimonials` - Client testimonials
- `auth.users` - User authentication (Supabase managed)

## Development Workflows

### For New Features

1. **Planning**: Use `@~/.agent-os/instructions/create-spec.md` to create feature specifications
2. **Implementation**: Use `@~/.agent-os/instructions/execute-tasks.md` for structured development
3. **Standards**: Follow all project-specific rules (no comments, Astro components, Rose Pine theme)

### For Existing Code Analysis

- Use `@~/.agent-os/instructions/analyze-product.md` when adding Agent OS to new areas

## Available Commands

| Command           | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start development server at localhost:4321 |
| `npm run build`   | Build production site                      |
| `npm run preview` | Preview build locally                      |
| `npm run format`  | Format code with Prettier                  |
| `npm run lint`    | Lint code with ESLint                      |
| `npm run check`   | Run format and lint checks                 |

## Important Notes

- **Authentication**: CMS pages require Supabase authentication
- **SEO**: All pages must include proper meta tags and structured data
- **Performance**: Code splitting and CSS minification are configured
- **Accessibility**: Follow WCAG guidelines for all new components
- **Responsive Design**: All components must work across device sizes

## Deployment

The site deploys automatically to Vercel on push to the main branch. Environment variables for Supabase must be configured in the Vercel dashboard.

---

_This project follows Agent OS structured development practices while maintaining project-specific code standards and cursor rules compliance._
