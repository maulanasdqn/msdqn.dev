# Maulana Sodiqin - Personal Website

A modern, professional personal website built with Astro and styled with Rose Pine theme. This website showcases my experience, projects, and skills as a Fullstack Software Engineer with integrated CMS functionality.

## 🚀 Live Website

Visit: [msdqn.dev](https://msdqn.dev)

## 🎨 Design & Features

- **Modern Design**: Clean, professional layout with Rose Pine color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Astro for optimal performance and SEO
- **Accessible**: WCAG compliant with proper semantic HTML
- **Professional**: Designed specifically for HR recruiters and potential employers
- **CMS Integration**: Dynamic content management with Supabase backend
- **Server-Side Rendering**: Hybrid static/server rendering for optimal performance

## 📋 Pages

### Public Pages

- **Home**: Hero section with professional introduction and call-to-actions
- **About**: Personal story, skills, and professional background
- **Experience**: Complete work history with detailed responsibilities and achievements
- **Projects**: Portfolio of key projects and technical work
- **Contact**: Multiple ways to get in touch with downloadable resume

### CMS Admin Pages

- **Login**: Authentication portal for content management
- **CMS Dashboard**: Admin interface for managing content
- **Experience Management**: CRUD operations for work experience
- **Project Management**: CRUD operations for portfolio projects

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Astro](https://astro.build/) - Full-stack web framework
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with Rose Pine theme
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) for consistent visual elements
- **Animations**: Custom CSS animations and transitions

### Backend & Database

- **Database**: [Supabase](https://supabase.com/) - PostgreSQL with real-time capabilities
- **Authentication**: Supabase Auth with cookie-based sessions
- **API Routes**: Astro API endpoints for CRUD operations

### Deployment & DevOps

- **Hosting**: [Vercel](https://vercel.com/) with serverless functions
- **Adapter**: @astrojs/vercel for optimal Vercel integration
- **Analytics**: Vercel Web Analytics enabled
- **CI/CD**: Automated deployment from Git repository

### Development Tools

- **TypeScript**: Full type safety across the application
- **ESLint**: Code linting with Astro-specific rules
- **Prettier**: Code formatting with Astro plugin
- **Package Manager**: npm with lock file for consistent installs

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── animation-wrapper.astro
│   │       ├── contact-form.astro
│   │       ├── experience-item.astro
│   │       ├── footer-section.astro
│   │       ├── hero-section.astro
│   │       ├── navigation-bar.astro
│   │       └── project-card.astro
│   ├── libs/
│   │   └── supabase.ts
│   ├── pages/
│   │   ├── api/
│   │   │   ├── about.ts
│   │   │   ├── auth/
│   │   │   │   ├── signin.ts
│   │   │   │   └── signout.ts
│   │   │   ├── experience/
│   │   │   │   ├── [id].ts
│   │   │   │   └── index.ts
│   │   │   ├── home.ts
│   │   │   └── project/
│   │   │       ├── [id].ts
│   │   │       └── index.ts
│   │   ├── cms/
│   │   │   ├── experience/
│   │   │   │   └── index.astro
│   │   │   ├── index.astro
│   │   │   └── projects/
│   │   │       └── index.astro
│   │   ├── index.astro
│   │   └── login.astro
│   └── styles/
│       └── global.css
├── astro.config.ts
├── tailwind.config.ts
├── vercel.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run format`       | Format code with Prettier                        |
| `npm run format:check` | Check code formatting                            |
| `npm run lint`         | Lint code with ESLint                            |
| `npm run lint:fix`     | Fix linting issues automatically                 |
| `npm run check`        | Run format and lint checks                       |

## 🗄️ Database Schema

The application uses Supabase PostgreSQL with the following main tables:

- **about_content**: Stores about page content
- **experiences**: Work experience entries with details
- **projects**: Portfolio project information
- **auth.users**: User authentication (Supabase managed)

## 🔐 Authentication & Security

- **Supabase Auth**: Row Level Security (RLS) enabled
- **Cookie-based Sessions**: Secure authentication flow
- **Protected Routes**: CMS pages require authentication
- **API Security**: All write operations require valid tokens

## 🎯 Professional Highlights

- **5+ Years Experience** in Fullstack Development
- **Technical Expertise**: ReactJS, NextJS, TypeScript, TailwindCSS, Rust, Axum
- **Leadership**: Led teams of 4+ engineers in complex projects
- **Performance Focus**: Delivered applications serving 1,000+ users
- **Modern Technologies**: Micro Frontends, NX Monorepo, SurrealDB

## 📧 Contact Information

- **Email**: maulanasdqn@gmail.com
- **Location**: Malang, East Java, Indonesia
- **LinkedIn**: [linkedin.com/in/maulana-sodiqin](https://www.linkedin.com/in/maulana-sodiqin/)
- **GitHub**: [github.com/maulanasdqn](https://github.com/maulanasdqn)

## 🌈 Rose Pine Theme

This website uses the beautiful Rose Pine color palette:

- **Base**: Dark background for excellent readability
- **Surface**: Subtle contrast for cards and sections
- **Text**: High contrast for accessibility
- **Accent Colors**: Iris, Love, Foam, Rose, Pine, Gold for highlights and CTAs

## 📄 Resume

The latest resume is available for download directly from the website:

- [Download Resume (PDF)](https://msdqn.dev/resume.pdf)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account and project

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables for Supabase
4. Start development server: `npm run dev`
5. Open `http://localhost:4321` in your browser

### Deployment

The project is configured for Vercel deployment:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Maulana Sodiqin](https://msdqn.dev) - Fullstack Software Engineer
