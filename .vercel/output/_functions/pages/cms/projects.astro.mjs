/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate, e as renderComponent, b as addAttribute, d as renderHead } from '../../chunks/astro/server_Do_YPnBi.mjs';
import 'kleur/colors';
import { s as supabase } from '../../chunks/supabase_DZJUbGNb.mjs';
import { $ as $$ProjectCard } from '../../chunks/project-card_CJwP0rgH.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
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
  const { data: projects, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
  const email = session.data.user?.email;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-mrkad4lx> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Projects Management - CMS</title><meta name="description" content="Manage portfolio projects">', '</head> <body data-astro-cid-mrkad4lx> <nav class="nav-bg" data-astro-cid-mrkad4lx> <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;" data-astro-cid-mrkad4lx> <div style="display: flex; justify-content: space-between; height: 64px;" data-astro-cid-mrkad4lx> <div style="display: flex;" data-astro-cid-mrkad4lx> <div style="display: flex; align-items: center;" data-astro-cid-mrkad4lx> <a href="/cms" style="text-decoration: none; color: var(--rp-text); font-size: 20px; font-weight: bold;" data-astro-cid-mrkad4lx>\u{1F339} CMS</a> </div> <div style="display: flex; margin-left: 24px; gap: 32px; align-items: center;" data-astro-cid-mrkad4lx> <a href="/cms" class="nav-link" data-astro-cid-mrkad4lx>Dashboard</a> <a href="/cms/experience" class="nav-link" data-astro-cid-mrkad4lx>Experience</a> <a href="/cms/projects" class="nav-link active" data-astro-cid-mrkad4lx>Projects</a> </div> </div> <div style="display: flex; align-items: center; gap: 16px;" data-astro-cid-mrkad4lx> <span style="font-size: 14px;" class="text-subtle" data-astro-cid-mrkad4lx>', '</span> <form action="/api/auth/signout" method="post" data-astro-cid-mrkad4lx> <button type="submit" class="btn-signout" data-astro-cid-mrkad4lx>Sign out</button> </form> </div> </div> </div> </nav> <main style="max-width: 1200px; margin: 0 auto; padding: 24px 16px;" data-astro-cid-mrkad4lx> <div style="border-bottom: 1px solid var(--rp-overlay); padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;" data-astro-cid-mrkad4lx> <h1 style="font-size: 24px; font-weight: bold; margin: 0;" data-astro-cid-mrkad4lx>\nProjects Management\n</h1> <button onclick="showCreateForm()" class="btn-primary" data-astro-cid-mrkad4lx>+ Add Project</button> </div> ', " ", " ", ` </main> <!-- Modal --> <div id="projectModal" class="modal hidden" data-astro-cid-mrkad4lx> <div class="modal-content" data-astro-cid-mrkad4lx> <h2 id="modalTitle" style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;" data-astro-cid-mrkad4lx>
Add Project
</h2> <form id="projectForm" data-astro-cid-mrkad4lx> <input type="hidden" id="projectId" data-astro-cid-mrkad4lx> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Project Title</label> <input type="text" id="title" required class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Description</label> <textarea id="description" rows="4" class="form-input" data-astro-cid-mrkad4lx></textarea> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Technologies (comma-separated)</label> <input type="text" id="technologies" placeholder="React, TypeScript, Node.js" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>GitHub URL</label> <input type="url" id="githubUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Live Demo URL</label> <input type="url" id="liveUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Image URL</label> <input type="url" id="imageUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 24px;" data-astro-cid-mrkad4lx> <label style="display: flex; align-items: center; gap: 8px;" data-astro-cid-mrkad4lx> <input type="checkbox" id="featured" style="accent-color: var(--rp-pine);" data-astro-cid-mrkad4lx> <span style="font-size: 14px; font-weight: 500;" data-astro-cid-mrkad4lx>Featured Project</span> </label> </div> <div style="display: flex; justify-content: flex-end; gap: 12px;" data-astro-cid-mrkad4lx> <button type="button" onclick="closeModal()" style="background: none; border: 1px solid var(--rp-muted); color: var(--rp-subtle); padding: 8px 16px; border-radius: 4px; cursor: pointer;" data-astro-cid-mrkad4lx>Cancel</button> <button type="submit" class="btn-primary" data-astro-cid-mrkad4lx>Save Project</button> </div> </form> </div> </div> <script>
      let currentProjectId = null;

      // Make functions globally accessible
      window.showCreateForm = function () {
        document.getElementById('modalTitle').textContent = 'Add Project';
        document.getElementById('projectForm').reset();
        document.getElementById('projectId').value = '';
        currentProjectId = null;
        document.getElementById('projectModal').classList.remove('hidden');
      };

      window.editProject = async function (id) {
        try {
          const response = await fetch(\`/api/project/\${id}\`);
          const project = await response.json();

          document.getElementById('modalTitle').textContent = 'Edit Project';
          document.getElementById('projectId').value = project.id;
          document.getElementById('title').value = project.title;
          document.getElementById('description').value =
            project.description || '';
          document.getElementById('technologies').value = project.technologies
            ? project.technologies.join(', ')
            : '';
          document.getElementById('githubUrl').value = project.github_url || '';
          document.getElementById('liveUrl').value = project.live_url || '';
          document.getElementById('imageUrl').value = project.image_url || '';
          document.getElementById('featured').checked =
            project.is_featured || false;

          currentProjectId = id;
          document.getElementById('projectModal').classList.remove('hidden');
        } catch (error) {
          alert('Error loading project: ' + error.message);
        }
      };

      window.deleteProject = async function (id) {
        if (!confirm('Are you sure you want to delete this project?')) {
          return;
        }

        try {
          const response = await fetch(\`/api/project/\${id}\`, {
            method: 'DELETE',
          });

          if (response.ok) {
            window.location.reload();
          } else {
            const error = await response.json();
            alert('Error deleting project: ' + error.error);
          }
        } catch (error) {
          alert('Error deleting project: ' + error.message);
        }
      };

      window.closeModal = function () {
        document.getElementById('projectModal').classList.add('hidden');
      };

      document
        .getElementById('projectForm')
        .addEventListener('submit', async e => {
          e.preventDefault();

          const formData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value || null,
            technologies: document.getElementById('technologies').value
              ? document
                  .getElementById('technologies')
                  .value.split(',')
                  .map(t => t.trim())
                  .filter(t => t)
              : [],
            github_url: document.getElementById('githubUrl').value || null,
            live_url: document.getElementById('liveUrl').value || null,
            image_url: document.getElementById('imageUrl').value || null,
            is_featured: document.getElementById('featured').checked,
          };

          try {
            const url = currentProjectId
              ? \`/api/project/\${currentProjectId}\`
              : '/api/project/';
            const method = currentProjectId ? 'PUT' : 'POST';

            const response = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });

            if (response.ok) {
              window.location.reload();
            } else {
              const error = await response.json();
              alert('Error saving project: ' + error.error);
            }
          } catch (error) {
            alert('Error saving project: ' + error.message);
          }
        });

      // Close modal when clicking outside
      document.getElementById('projectModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) {
          window.closeModal();
        }
      });
    <\/script> </body> </html>`], ['<html lang="en" data-astro-cid-mrkad4lx> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Projects Management - CMS</title><meta name="description" content="Manage portfolio projects">', '</head> <body data-astro-cid-mrkad4lx> <nav class="nav-bg" data-astro-cid-mrkad4lx> <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;" data-astro-cid-mrkad4lx> <div style="display: flex; justify-content: space-between; height: 64px;" data-astro-cid-mrkad4lx> <div style="display: flex;" data-astro-cid-mrkad4lx> <div style="display: flex; align-items: center;" data-astro-cid-mrkad4lx> <a href="/cms" style="text-decoration: none; color: var(--rp-text); font-size: 20px; font-weight: bold;" data-astro-cid-mrkad4lx>\u{1F339} CMS</a> </div> <div style="display: flex; margin-left: 24px; gap: 32px; align-items: center;" data-astro-cid-mrkad4lx> <a href="/cms" class="nav-link" data-astro-cid-mrkad4lx>Dashboard</a> <a href="/cms/experience" class="nav-link" data-astro-cid-mrkad4lx>Experience</a> <a href="/cms/projects" class="nav-link active" data-astro-cid-mrkad4lx>Projects</a> </div> </div> <div style="display: flex; align-items: center; gap: 16px;" data-astro-cid-mrkad4lx> <span style="font-size: 14px;" class="text-subtle" data-astro-cid-mrkad4lx>', '</span> <form action="/api/auth/signout" method="post" data-astro-cid-mrkad4lx> <button type="submit" class="btn-signout" data-astro-cid-mrkad4lx>Sign out</button> </form> </div> </div> </div> </nav> <main style="max-width: 1200px; margin: 0 auto; padding: 24px 16px;" data-astro-cid-mrkad4lx> <div style="border-bottom: 1px solid var(--rp-overlay); padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;" data-astro-cid-mrkad4lx> <h1 style="font-size: 24px; font-weight: bold; margin: 0;" data-astro-cid-mrkad4lx>\nProjects Management\n</h1> <button onclick="showCreateForm()" class="btn-primary" data-astro-cid-mrkad4lx>+ Add Project</button> </div> ', " ", " ", ` </main> <!-- Modal --> <div id="projectModal" class="modal hidden" data-astro-cid-mrkad4lx> <div class="modal-content" data-astro-cid-mrkad4lx> <h2 id="modalTitle" style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;" data-astro-cid-mrkad4lx>
Add Project
</h2> <form id="projectForm" data-astro-cid-mrkad4lx> <input type="hidden" id="projectId" data-astro-cid-mrkad4lx> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Project Title</label> <input type="text" id="title" required class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Description</label> <textarea id="description" rows="4" class="form-input" data-astro-cid-mrkad4lx></textarea> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Technologies (comma-separated)</label> <input type="text" id="technologies" placeholder="React, TypeScript, Node.js" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>GitHub URL</label> <input type="url" id="githubUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Live Demo URL</label> <input type="url" id="liveUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 16px;" data-astro-cid-mrkad4lx> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-mrkad4lx>Image URL</label> <input type="url" id="imageUrl" class="form-input" data-astro-cid-mrkad4lx> </div> <div style="margin-bottom: 24px;" data-astro-cid-mrkad4lx> <label style="display: flex; align-items: center; gap: 8px;" data-astro-cid-mrkad4lx> <input type="checkbox" id="featured" style="accent-color: var(--rp-pine);" data-astro-cid-mrkad4lx> <span style="font-size: 14px; font-weight: 500;" data-astro-cid-mrkad4lx>Featured Project</span> </label> </div> <div style="display: flex; justify-content: flex-end; gap: 12px;" data-astro-cid-mrkad4lx> <button type="button" onclick="closeModal()" style="background: none; border: 1px solid var(--rp-muted); color: var(--rp-subtle); padding: 8px 16px; border-radius: 4px; cursor: pointer;" data-astro-cid-mrkad4lx>Cancel</button> <button type="submit" class="btn-primary" data-astro-cid-mrkad4lx>Save Project</button> </div> </form> </div> </div> <script>
      let currentProjectId = null;

      // Make functions globally accessible
      window.showCreateForm = function () {
        document.getElementById('modalTitle').textContent = 'Add Project';
        document.getElementById('projectForm').reset();
        document.getElementById('projectId').value = '';
        currentProjectId = null;
        document.getElementById('projectModal').classList.remove('hidden');
      };

      window.editProject = async function (id) {
        try {
          const response = await fetch(\\\`/api/project/\\\${id}\\\`);
          const project = await response.json();

          document.getElementById('modalTitle').textContent = 'Edit Project';
          document.getElementById('projectId').value = project.id;
          document.getElementById('title').value = project.title;
          document.getElementById('description').value =
            project.description || '';
          document.getElementById('technologies').value = project.technologies
            ? project.technologies.join(', ')
            : '';
          document.getElementById('githubUrl').value = project.github_url || '';
          document.getElementById('liveUrl').value = project.live_url || '';
          document.getElementById('imageUrl').value = project.image_url || '';
          document.getElementById('featured').checked =
            project.is_featured || false;

          currentProjectId = id;
          document.getElementById('projectModal').classList.remove('hidden');
        } catch (error) {
          alert('Error loading project: ' + error.message);
        }
      };

      window.deleteProject = async function (id) {
        if (!confirm('Are you sure you want to delete this project?')) {
          return;
        }

        try {
          const response = await fetch(\\\`/api/project/\\\${id}\\\`, {
            method: 'DELETE',
          });

          if (response.ok) {
            window.location.reload();
          } else {
            const error = await response.json();
            alert('Error deleting project: ' + error.error);
          }
        } catch (error) {
          alert('Error deleting project: ' + error.message);
        }
      };

      window.closeModal = function () {
        document.getElementById('projectModal').classList.add('hidden');
      };

      document
        .getElementById('projectForm')
        .addEventListener('submit', async e => {
          e.preventDefault();

          const formData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value || null,
            technologies: document.getElementById('technologies').value
              ? document
                  .getElementById('technologies')
                  .value.split(',')
                  .map(t => t.trim())
                  .filter(t => t)
              : [],
            github_url: document.getElementById('githubUrl').value || null,
            live_url: document.getElementById('liveUrl').value || null,
            image_url: document.getElementById('imageUrl').value || null,
            is_featured: document.getElementById('featured').checked,
          };

          try {
            const url = currentProjectId
              ? \\\`/api/project/\\\${currentProjectId}\\\`
              : '/api/project/';
            const method = currentProjectId ? 'PUT' : 'POST';

            const response = await fetch(url, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });

            if (response.ok) {
              window.location.reload();
            } else {
              const error = await response.json();
              alert('Error saving project: ' + error.error);
            }
          } catch (error) {
            alert('Error saving project: ' + error.message);
          }
        });

      // Close modal when clicking outside
      document.getElementById('projectModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) {
          window.closeModal();
        }
      });
    <\/script> </body> </html>`])), renderHead(), email, error && renderTemplate`<div style="background-color: rgba(235, 111, 146, 0.2); border: 1px solid var(--rp-love); color: var(--rp-love); padding: 12px; border-radius: 6px; margin-bottom: 16px;" data-astro-cid-mrkad4lx>
Error loading projects: ${error.message} </div>`, projects && projects.length === 0 && renderTemplate`<div style="text-align: center; padding: 48px 0;" data-astro-cid-mrkad4lx> <div style="font-size: 48px; margin-bottom: 16px;" data-astro-cid-mrkad4lx>🚀</div> <h3 style="margin: 8px 0; font-size: 18px;" data-astro-cid-mrkad4lx>No projects</h3> <p style="margin: 4px 0; font-size: 14px;" class="text-subtle" data-astro-cid-mrkad4lx>
Get started by adding your first project.
</p> </div>`, projects && projects.length > 0 && renderTemplate`<div class="project-grid" id="projectsGrid" data-astro-cid-mrkad4lx> ${projects.map((project) => renderTemplate`<div class="relative group h-full flex flex-col" data-astro-cid-mrkad4lx> <div class="flex-1" data-astro-cid-mrkad4lx> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.title, "description": project.description || "", "technologies": project.technologies || [], "period": project.start_date ? `${project.start_date}${project.end_date ? ` - ${project.end_date}` : ""}` : void 0, "category": project.category || void 0, "demoLink": project.live_url || void 0, "githubLink": project.github_url || void 0, "highlights": project.is_featured ? ["Featured"] : [], "data-astro-cid-mrkad4lx": true })} </div> <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2" data-astro-cid-mrkad4lx> <button${addAttribute(`editProject('${project.id}')`, "onclick")} class="btn-edit px-3 py-1 text-xs" data-astro-cid-mrkad4lx>
Edit
</button> <button${addAttribute(`deleteProject('${project.id}')`, "onclick")} class="btn-delete px-3 py-1 text-xs" data-astro-cid-mrkad4lx>
Delete
</button> </div> </div>`)} </div>`);
}, "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/projects/index.astro", void 0);

const $$file = "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/projects/index.astro";
const $$url = "/cms/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
