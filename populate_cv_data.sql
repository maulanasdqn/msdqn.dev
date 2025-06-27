CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS public.experiences;
DROP TABLE IF EXISTS public.projects;
DROP TABLE IF EXISTS public.about_content;
DROP TABLE IF EXISTS public.home_content;

CREATE TABLE public.home_content (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title text NOT NULL,
    subtitle text,
    description text,
    cta_text text,
    cta_url text,
    background_image_url text,
    avatar_url text,
    social_links jsonb DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.about_content (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title text NOT NULL,
    bio text NOT NULL,
    skills jsonb DEFAULT '[]',
    certifications jsonb DEFAULT '[]',
    education jsonb DEFAULT '[]',
    languages jsonb DEFAULT '[]',
    interests jsonb DEFAULT '[]',
    contact_info jsonb DEFAULT '{}',
    resume_url text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.experiences (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title text NOT NULL,
    company text NOT NULL,
    location text,
    employment_type text,
    start_date date NOT NULL,
    end_date date,
    is_current boolean DEFAULT false,
    description text,
    responsibilities jsonb DEFAULT '[]',
    achievements jsonb DEFAULT '[]',
    technologies jsonb DEFAULT '[]',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.projects (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title text NOT NULL,
    description text NOT NULL,
    long_description text,
    technologies jsonb DEFAULT '[]',
    features jsonb DEFAULT '[]',
    github_url text,
    live_url text,
    image_url text,
    gallery_urls jsonb DEFAULT '[]',
    status text DEFAULT 'completed',
    category text,
    start_date date,
    end_date date,
    is_featured boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE INDEX idx_experiences_start_date ON public.experiences(start_date DESC);
CREATE INDEX idx_experiences_is_current ON public.experiences(is_current);
CREATE INDEX idx_projects_is_featured ON public.projects(is_featured);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_category ON public.projects(category);

INSERT INTO public.home_content (
    title,
    subtitle,
    description,
    cta_text,
    cta_url,
    social_links
) VALUES (
    'Maulana Sodiqin',
    'Software Engineer',
    'Frontend-focused Software Engineer with 5+ years of experience building scalable and maintainable web applications using ReactJS, TypeScript, and TailwindCSS. Proficient in modular UI architecture, design systems, test-driven development, and modern state management with React Query and Jotai.',
    'View My Work',
    '/projects',
    '{
        "github": "https://github.com/maulanasdqn",
        "linkedin": "https://linkedin.com/in/maulana-sodiqin",
        "portfolio": "https://msdqn.dev",
        "email": "maulanasdqn@gmail.com"
    }'::jsonb
);

INSERT INTO public.about_content (
    title,
    bio,
    skills,
    certifications,
    education,
    languages,
    interests,
    contact_info,
    resume_url
) VALUES (
    'About Me',
    'Frontend-focused Software Engineer with 5+ years of experience building scalable and maintainable web applications using ReactJS, TypeScript, and TailwindCSS. Proficient in modular UI architecture, design systems, test-driven development, and modern state management with React Query and Jotai. Experienced in working with micro frontend structures and NX monorepos to support large-scale applications. Currently expanding full-stack skills with Rust and Axum to gain deeper backend architecture understanding.',
    '[
        {"category": "Frontend Technologies", "items": ["ReactJS", "NextJS", "TypeScript", "JavaScript (ES6+)", "Vue.js"]},
        {"category": "Styling & UI", "items": ["TailwindCSS", "Shadcn", "Ant Design", "HTML/CSS", "Responsive Design"]},
        {"category": "State Management", "items": ["Tanstack React Query", "Jotai", "Zustand", "Recoil", "Redux"]},
        {"category": "Testing", "items": ["React Testing Library", "Vitest", "Jest", "MSW", "Test-Driven Development"]},
        {"category": "Architecture", "items": ["NX Monorepo", "Module Federation", "Micro Frontend", "Component-Driven Development"]},
        {"category": "UI Tooling", "items": ["Storybook", "Design Systems", "Performance Optimization", "Accessibility"]},
        {"category": "Backend & Database", "items": ["Rust", "Axum", "SurrealDB", "PostgreSQL", "HonoJS", "NestJS", "ExpressJS"]},
        {"category": "ORM & Database Tools", "items": ["Drizzle", "Prisma", "TypeOrm"]},
        {"category": "Methodology", "items": ["Agile & Scrum Practices", "Collaboration and Leadership", "Cross-Browser Compatibility"]}
    ]'::jsonb,
    '[]'::jsonb,
    '[
        {"institution": "Universitas Islam Nusantara", "degree": "Bachelor of Engineering (S.T.)", "field": "Informatics Engineering", "start_year": 2020, "end_year": 2024, "gpa": null, "activities": ["Led the PSU Dev Team, managing development projects and fostering innovation", "Delivered presentations at the Informatika Coding Camp (ICC)", "Assisted students as a Practicum Assistant for programming courses"]}
    ]'::jsonb,
    '[
        {"language": "Indonesian", "proficiency": "Native"},
        {"language": "English", "proficiency": "Professional"}
    ]'::jsonb,
    '["Leadership & Mentorship", "Public Speaking", "Open Source Development", "Learning New Technologies", "Team Collaboration"]'::jsonb,
    '{
        "email": "maulanasdqn@gmail.com",
        "phone": "085156085579",
        "location": "Malang, East Java, Indonesia",
        "website": "https://msdqn.dev",
        "linkedin": "https://linkedin.com/in/maulana-sodiqin",
        "github": "https://github.com/maulanasdqn"
    }'::jsonb,
    '/resume.pdf'
);

INSERT INTO public.experiences (
    title,
    company,
    location,
    employment_type,
    start_date,
    end_date,
    is_current,
    description,
    responsibilities,
    achievements,
    technologies
) VALUES 
(
    'Software Engineer',
    'DOT Indonesia',
    'Indonesia',
    'Full-time',
    '2022-08-01',
    NULL,
    true,
    'Building and maintaining scalable web components and implementing modular UI architecture for enterprise applications.',
    '[
        "Built and maintained scalable web components using ReactJS, TailwindCSS, and Ant Design",
        "Implemented modular UI architecture and design patterns",
        "Introduced React Query and Zustand for robust state management",
        "Collaborated with backend teams using Agile practices to deliver UX improvements"
    ]'::jsonb,
    '[
        "Reduced development time for new features by 35%",
        "Improved code reusability across 20+ modules", 
        "Enhanced frontend performance and developer experience",
        "Increased user retention by 18%"
    ]'::jsonb,
    '["ReactJS", "TailwindCSS", "Ant Design", "React Query", "Zustand", "TypeScript"]'::jsonb
),
(
    'Lead Software Engineer',
    'PT Indonusa Persada Teknologi',
    'Indonesia',
    'Freelance',
    '2025-01-01',
    '2025-05-31',
    false,
    'Leading a team to develop micro frontend-based agriculture backoffice application with module federation architecture.',
    '[
        "Led 4 engineers to develop a micro frontend-based agriculture backoffice app",
        "Implemented module federation and shared UI components",
        "Developed scalable CRUD workflows and reusable logic blocks",
        "Created integration and unit tests using React Testing Library, Vitest, and MSW"
    ]'::jsonb,
    '[
        "Reduced manual data processing by 70%",
        "Ensured frontend reliability through comprehensive testing",
        "Successfully delivered micro frontend architecture"
    ]'::jsonb,
    '["ReactJS", "Module Federation", "React Testing Library", "Vitest", "MSW", "TypeScript"]'::jsonb
),
(
    'Software Engineer',
    'Universitas Islam Nusantara',
    'Indonesia',
    'Freelance',
    '2023-07-01',
    '2023-12-31',
    false,
    'Developed learning management system and voting system for university with high performance and security requirements.',
    '[
        "Built an LMS used by 1,000+ students with modular routing and instructor dashboards",
        "Developed a robust token-secured voting system with 99.9% uptime during peak hours",
        "Implemented performance optimizations via code splitting, lazy loading, and preloading assets"
    ]'::jsonb,
    '[
        "Served 1,000+ students successfully",
        "Achieved 99.9% uptime during peak voting hours",
        "Boosted site performance by 60%"
    ]'::jsonb,
    '["ReactJS", "TailwindCSS", "Next.js", "PostgreSQL"]'::jsonb
),
(
    'Lead Software Engineer',
    'M-Knows Consulting',
    'Indonesia',
    'Internship',
    '2023-02-01',
    '2023-06-30',
    false,
    'Built modular financial dashboard components and spearheaded Nx-based monorepo architecture implementation.',
    '[
        "Built modular financial dashboard components using ReactJS and TypeScript",
        "Integrated 10+ APIs with robust error handling and fallback states",
        "Spearheaded Nx-based monorepo architecture to support shared tooling, versioned libs, and CI/CD pipelines"
    ]'::jsonb,
    '[
        "Reduced development time by 40%",
        "Reduced client-reported issues by 90%",
        "Reduced deployment time by 50%"
    ]'::jsonb,
    '["ReactJS", "TypeScript", "Nx Monorepo", "API Integration"]'::jsonb
),
(
    'Software Engineer',
    'Perjalanan Menembus Galaksi',
    'Indonesia',
    'Full-time',
    '2021-05-01',
    '2022-08-31',
    false,
    'Delivered high-performance Vue.js interfaces with excellent Lighthouse scores serving large user base.',
    '[
        "Delivered Vue.js interfaces with 99.5% Lighthouse performance score",
        "Optimized applications serving 50,000+ monthly users",
        "Implemented SSR optimization and async asset loading"
    ]'::jsonb,
    '[
        "Achieved 99.5% Lighthouse performance score",
        "Served 50,000+ monthly users",
        "Reduced average page load by 2.3s"
    ]'::jsonb,
    '["Vue.js", "SSR", "Performance Optimization"]'::jsonb
),
(
    'Software Engineer',
    'PT Telematric Integra',
    'Indonesia',
    'Full-time',
    '2019-05-01',
    '2021-05-31',
    false,
    'Modernized legacy systems and built internal tools to streamline logistics operations.',
    '[
        "Modernized legacy systems with responsive Bootstrap-based interfaces",
        "Built 10+ internal tools to streamline logistics operations",
        "Improved mobile usability and operational efficiency"
    ]'::jsonb,
    '[
        "Improved mobile usability by 80%",
        "Saved 100+ man-hours per month through automation",
        "Successfully modernized legacy systems"
    ]'::jsonb,
    '["Bootstrap", "JavaScript", "Legacy System Migration"]'::jsonb
);

INSERT INTO public.projects (
    title,
    description,
    long_description,
    technologies,
    features,
    github_url,
    live_url,
    status,
    category,
    start_date,
    end_date,
    is_featured
) VALUES 
(
    'NAJM Course Frontend',
    'Computer-Assisted Test Platform frontend application built with modern React architecture.',
    'Developed a modular and high-performance frontend app using React 19, Vite, Ant Design, and TailwindCSS within an Nx Monorepo setup. Implemented protected routes, role-based access, and robust state management using React Query and Jotai. Applied test-driven development with Vitest, MSW, and React Testing Library.',
    '["React 19", "Vite", "Ant Design", "TailwindCSS", "Nx Monorepo", "React Query", "Jotai", "Vitest", "MSW", "React Testing Library"]'::jsonb,
    '[
        "Modular architecture with Nx Monorepo",
        "Protected routes and role-based access",
        "React Query state management",
        "Test-driven development",
        "High performance optimization",
        "Component-driven development"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2025-01-01',
    '2025-04-30',
    true
),
(
    'NAJM Course API',
    'Backend service for Computer-Assisted Test Platform with strong type-safety and modular architecture.',
    'Architected a backend service using Rust, Axum, and SurrealDB, with strong type-safety and modular service layers. Ensured system reliability through full integration test coverage and enforced validation + access control.',
    '["Rust", "Axum", "SurrealDB", "Integration Testing", "Type Safety"]'::jsonb,
    '[
        "Strong type-safety with Rust",
        "Modular service layers",
        "Full integration test coverage",
        "Validation and access control",
        "High performance backend",
        "Modern database with SurrealDB"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Backend Application',
    '2025-01-01',
    '2025-04-30',
    true
),
(
    'Kuncie Scholarship',
    'Scholarship Enrollment System with responsive design and dynamic workflows.',
    'Developed a responsive web-based enrollment system using Next.js and TailwindCSS, featuring dynamic forms, admin workflows, and role-based access. Applied atomic design and state handling with React Context.',
    '["Next.js", "TailwindCSS", "React Context", "Atomic Design"]'::jsonb,
    '[
        "Dynamic form handling",
        "Admin workflow management",
        "Role-based access control",
        "Responsive design",
        "Atomic design pattern",
        "State management with React Context"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2024-06-01',
    '2024-06-30',
    false
),
(
    'Sobat Bangun',
    'Property Building Platform with scalable modular architecture and shared design system.',
    'Engineered a scalable modular platform using Next.js, TailwindCSS, and Nx Monorepo. Contributed to shared design system, optimized build pipelines, and enabled cross-team collaboration across multiple products.',
    '["Next.js", "TailwindCSS", "Nx Monorepo", "Design System"]'::jsonb,
    '[
        "Scalable modular architecture",
        "Shared design system",
        "Optimized build pipelines",
        "Cross-team collaboration",
        "Monorepo management",
        "Component reusability"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2023-05-01',
    '2023-11-30',
    true
),
(
    'Kalla SuperApp',
    'Internal Business Dashboard with responsive UI components and design consistency.',
    'Implemented responsive and reusable UI components for a React-based SuperApp. Focused on design consistency using Ant Design and layout precision with TailwindCSS and Flexbox.',
    '["React", "Ant Design", "TailwindCSS", "Flexbox"]'::jsonb,
    '[
        "Responsive UI components",
        "Design consistency",
        "Reusable component library",
        "Flexbox layout system",
        "Ant Design integration",
        "Modern CSS techniques"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2023-10-01',
    '2023-12-31',
    false
),
(
    'Kalla Property Management System',
    'Multi-role property dashboard with dynamic interactions and complex form logic.',
    'Built a multi-role property dashboard with ReactJS and Ant Design. Delivered dynamic table views, modal interactions, and complex form logic to streamline operational tasks.',
    '["ReactJS", "Ant Design", "Dynamic Tables", "Modal Interactions"]'::jsonb,
    '[
        "Multi-role dashboard",
        "Dynamic table views",
        "Modal interactions",
        "Complex form logic",
        "Role-based permissions",
        "Operational task automation"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2023-07-01',
    '2023-11-30',
    false
),
(
    'Learning Management System (LMS)',
    'Complete LMS platform for 1,000+ users with atomic component structure and performance optimization.',
    'Developed a complete LMS platform for 1,000+ users using ReactJS, TailwindCSS, and atomic component structure. Focused on performance and maintainability with lazy loading and role-segmented access.',
    '["ReactJS", "TailwindCSS", "Atomic Design", "Lazy Loading"]'::jsonb,
    '[
        "Atomic component structure",
        "Performance optimization",
        "Lazy loading implementation",
        "Role-segmented access",
        "Scalable architecture",
        "User management system"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web Application',
    '2023-07-01',
    '2023-12-31',
    true
),
(
    'Votsu',
    'Decentralized Voting System with Web3 integration and blockchain security.',
    'Built a secure Web3-enabled voting system using Next.js, TailwindCSS, and Solana. Achieved 100% vote integrity and mobile-first UX for university presidential elections.',
    '["Next.js", "TailwindCSS", "Solana", "Web3", "Blockchain"]'::jsonb,
    '[
        "Web3 integration",
        "Blockchain security",
        "100% vote integrity",
        "Mobile-first UX",
        "Solana integration",
        "Decentralized architecture"
    ]'::jsonb,
    NULL,
    NULL,
    'completed',
    'Web3 Application',
    '2023-05-01',
    '2023-06-30',
    true
);

ALTER TABLE public.home_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON public.home_content FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.about_content FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.projects FOR SELECT USING (true);

-- Allow authenticated users to perform CRUD operations
CREATE POLICY "Allow authenticated users to insert" ON public.home_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.home_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.home_content FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert" ON public.about_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.about_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.about_content FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert" ON public.experiences FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.experiences FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.experiences FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert" ON public.projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.projects FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.projects FOR DELETE TO authenticated USING (true);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_home_content_updated_at 
    BEFORE UPDATE ON public.home_content 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_about_content_updated_at 
    BEFORE UPDATE ON public.about_content 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_experiences_updated_at 
    BEFORE UPDATE ON public.experiences 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON public.projects 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 