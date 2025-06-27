# CV Data Population Script - Maulana Sodiqin

This SQL script (`populate_cv_data.sql`) creates and populates the database tables for Maulana Sodiqin's personal portfolio website with his actual CV data from [his Google Docs CV](https://docs.google.com/document/d/e/2PACX-1vTHkRUmVPBPM3KbhU6Mvs2f82r4agtnrYOlIbO-lk2nm7cWxjwBuarXfBvmba8vz54eL6d-bL81noKV/pub).

## Personal Information

- **Name**: Maulana Sodiqin
- **Title**: Software Engineer (Frontend-focused)
- **Location**: Malang, East Java, Indonesia
- **Email**: maulanasdqn@gmail.com
- **Phone**: 085156085579
- **LinkedIn**: [linkedin.com/in/maulana-sodiqin](https://linkedin.com/in/maulana-sodiqin)
- **GitHub**: [github.com/maulanasdqn](https://github.com/maulanasdqn)
- **Portfolio**: [msdqn.dev](https://msdqn.dev)

## Professional Summary

Frontend-focused Software Engineer with 5+ years of experience building scalable and maintainable web applications using ReactJS, TypeScript, and TailwindCSS. Proficient in modular UI architecture, design systems, test-driven development, and modern state management with React Query and Jotai.

## Database Schema

The script creates four main tables with Maulana's actual data:

### 1. `home_content`

- Professional title and description
- Contact information and social links
- Call-to-action for portfolio

### 2. `about_content`

- Comprehensive professional bio
- Skills organized by categories (Frontend, Styling, State Management, Testing, etc.)
- Education at Universitas Islam Nusantara (Informatics Engineering)
- Languages (Indonesian Native, English Professional)
- Leadership and mentorship interests

### 3. `experiences`

Work history spanning 6+ years (2019-Present):

1. **Software Engineer** - DOT Indonesia (Aug 2022 - Present)
2. **Lead Software Engineer** - PT Indonusa Persada Teknologi (Jan 2025 - May 2025)
3. **Software Engineer** - Universitas Islam Nusantara (Jul 2023 - Dec 2023)
4. **Lead Software Engineer** - M-Knows Consulting (Feb 2023 - Jun 2023)
5. **Software Engineer** - Perjalanan Menembus Galaksi (May 2021 - Aug 2022)
6. **Software Engineer** - PT Telematric Integra (May 2019 - May 2021)

### 4. `projects`

8 real projects showcasing diverse skills:

1. **NAJM Course Frontend** - Computer-Assisted Test Platform (React 19, Nx Monorepo)
2. **NAJM Course API** - Backend service (Rust, Axum, SurrealDB)
3. **Kuncie Scholarship** - Enrollment System (Next.js, TailwindCSS)
4. **Sobat Bangun** - Property Platform (Next.js, Nx Monorepo)
5. **Kalla SuperApp** - Business Dashboard (React, Ant Design)
6. **Kalla Property Management** - Multi-role Dashboard (ReactJS, Ant Design)
7. **Learning Management System** - LMS for 1,000+ users (ReactJS, TailwindCSS)
8. **Votsu** - Decentralized Voting System (Next.js, Solana, Web3)

## Technical Skills

### Frontend Technologies

- ReactJS, NextJS, TypeScript, JavaScript (ES6+), Vue.js

### Styling & UI

- TailwindCSS, Shadcn, Ant Design, HTML/CSS, Responsive Design

### State Management

- Tanstack React Query, Jotai, Zustand, Recoil, Redux

### Testing

- React Testing Library, Vitest, Jest, MSW, Test-Driven Development

### Architecture

- NX Monorepo, Module Federation, Micro Frontend, Component-Driven Development

### Backend & Database

- Rust, Axum, SurrealDB, PostgreSQL, HonoJS, NestJS, ExpressJS

## Key Achievements

- Built applications serving **50,000+ monthly users**
- Achieved **99.5% Lighthouse performance scores**
- Reduced development time by **35-40%** through optimization
- Led teams of **4+ engineers** on complex projects
- Delivered **100% vote integrity** in blockchain voting systems
- Improved user retention by **18%**

## Education

**Universitas Islam Nusantara** (2020-2024)

- Bachelor of Engineering (S.T.) in Informatics Engineering
- Leadership: Led PSU Dev Team
- Public Speaking: Delivered presentations at Informatika Coding Camp (ICC)
- Mentorship: Practicum Assistant for programming courses

## Usage Instructions

### 1. Using Supabase CLI

```bash
# Apply to local database
supabase db reset

# Or run directly
psql -d "your_connection_string" -f populate_cv_data.sql
```

### 2. Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the SQL script
4. Execute the script

### 3. Using Migration

```bash
# Create migration
supabase migration new populate_maulana_cv_data

# Copy SQL content to migration file
# Apply migration
supabase db push
```

## Features

- **Authentic Data**: All information sourced from Maulana's actual CV
- **Production-Ready**: Includes RLS policies, indexes, and triggers
- **Supabase-Optimized**: Uses UUID, JSONB, and best practices
- **API-Compatible**: Works with existing API endpoints
- **Performance-Focused**: Strategic indexing and optimization

## Security & Performance

- Row Level Security (RLS) enabled with public read access
- UUID primary keys for security
- JSONB columns for flexible data structures
- Strategic indexes on frequently queried columns
- Automatic timestamp updates with triggers

## Data Validation

All data has been validated against the [original CV document](https://docs.google.com/document/d/e/2PACX-1vTHkRUmVPBPM3KbhU6Mvs2f82r4agtnrYOlIbO-lk2nm7cWxjwBuarXfBvmba8vz54eL6d-bL81noKV/pub) to ensure accuracy and completeness.

## Notes

- All project URLs are set to NULL (can be updated when available)
- Resume PDF path points to `/resume.pdf` (existing file)
- Future-dated experience (PT Indonusa Persada Teknologi) is correctly handled
- All dates and descriptions match the original CV exactly
