-- Migration script to add missing RLS policies for authenticated users
-- Run this in your Supabase SQL Editor

-- Allow authenticated users to perform CRUD operations on home_content
CREATE POLICY "Allow authenticated users to insert" ON public.home_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.home_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.home_content FOR DELETE TO authenticated USING (true);

-- Allow authenticated users to perform CRUD operations on about_content
CREATE POLICY "Allow authenticated users to insert" ON public.about_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.about_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.about_content FOR DELETE TO authenticated USING (true);

-- Allow authenticated users to perform CRUD operations on experiences
CREATE POLICY "Allow authenticated users to insert" ON public.experiences FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.experiences FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.experiences FOR DELETE TO authenticated USING (true);

-- Allow authenticated users to perform CRUD operations on projects
CREATE POLICY "Allow authenticated users to insert" ON public.projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated users to update" ON public.projects FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated users to delete" ON public.projects FOR DELETE TO authenticated USING (true); 