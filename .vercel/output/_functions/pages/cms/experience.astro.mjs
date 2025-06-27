/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, d as renderHead } from '../../chunks/astro/server_Do_YPnBi.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../../chunks/supabase_DZJUbGNb.mjs';
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
  const { data: experiences, error } = await supabase.from("experiences").select("*").order("start_date", { ascending: false });
  const email = session.data.user?.email;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-njkmenpp> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Experience Management - CMS</title><meta name="description" content="Manage work experience entries">', '</head> <body class="min-h-screen" data-astro-cid-njkmenpp> <nav class="nav-bg shadow-lg" data-astro-cid-njkmenpp> <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;" data-astro-cid-njkmenpp> <div style="display: flex; justify-content: space-between; height: 64px;" data-astro-cid-njkmenpp> <div style="display: flex;" data-astro-cid-njkmenpp> <div style="display: flex; align-items: center;" data-astro-cid-njkmenpp> <a href="/cms" style="text-decoration: none; color: var(--rp-text); font-size: 20px; font-weight: bold;" data-astro-cid-njkmenpp>\u{1F339} CMS</a> </div> <div style="display: flex; margin-left: 24px; gap: 32px; align-items: center;" data-astro-cid-njkmenpp> <a href="/cms" class="nav-link" data-astro-cid-njkmenpp>Dashboard</a> <a href="/cms/experience" class="nav-link active" data-astro-cid-njkmenpp>Experience</a> <a href="/cms/projects" class="nav-link" data-astro-cid-njkmenpp>Projects</a> <a href="/cms/about" class="nav-link" data-astro-cid-njkmenpp>About</a> <a href="/cms/home" class="nav-link" data-astro-cid-njkmenpp>Home</a> </div> </div> <div style="display: flex; align-items: center; gap: 16px;" data-astro-cid-njkmenpp> <span style="font-size: 14px;" class="text-subtle" data-astro-cid-njkmenpp>', '</span> <form action="/api/auth/signout" method="post" data-astro-cid-njkmenpp> <button type="submit" class="btn-signout" data-astro-cid-njkmenpp>Sign out</button> </form> </div> </div> </div> </nav> <main style="max-width: 1200px; margin: 0 auto; padding: 24px 16px;" data-astro-cid-njkmenpp> <div style="border-bottom: 1px solid var(--rp-overlay); padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;" data-astro-cid-njkmenpp> <h1 style="font-size: 24px; font-weight: bold; margin: 0;" data-astro-cid-njkmenpp>\nExperience Management\n</h1> <button onclick="showCreateForm()" class="btn-primary" data-astro-cid-njkmenpp>+ Add Experience</button> </div> ', " ", " ", ` </main> <div id="experienceModal" class="modal hidden" data-astro-cid-njkmenpp> <div class="modal-content" data-astro-cid-njkmenpp> <h2 id="modalTitle" style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;" data-astro-cid-njkmenpp>
Add Experience
</h2> <form id="experienceForm" data-astro-cid-njkmenpp> <input type="hidden" id="experienceId" data-astro-cid-njkmenpp> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Job Title</label> <input type="text" id="title" required class="form-input" data-astro-cid-njkmenpp> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Company</label> <input type="text" id="company" required class="form-input" data-astro-cid-njkmenpp> </div> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;" data-astro-cid-njkmenpp> <div data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Start Date</label> <input type="date" id="startDate" required class="form-input" data-astro-cid-njkmenpp> </div> <div data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>End Date</label> <input type="date" id="endDate" class="form-input" data-astro-cid-njkmenpp> </div> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Location</label> <input type="text" id="location" class="form-input" data-astro-cid-njkmenpp> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Description</label> <textarea id="description" rows="4" class="form-input" data-astro-cid-njkmenpp></textarea> </div> <div style="margin-bottom: 24px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Technologies (comma-separated)</label> <input type="text" id="technologies" placeholder="React, TypeScript, Node.js" class="form-input" data-astro-cid-njkmenpp> </div> <div style="display: flex; justify-content: flex-end; gap: 12px;" data-astro-cid-njkmenpp> <button type="button" onclick="closeModal()" style="background: none; border: 1px solid var(--rp-muted); color: var(--rp-subtle); padding: 8px 16px; border-radius: 4px; cursor: pointer;" data-astro-cid-njkmenpp>Cancel</button> <button type="submit" class="btn-primary" data-astro-cid-njkmenpp>Save Experience</button> </div> </form> </div> </div> <script>
      let currentExperienceId = null;

      function showCreateForm() {
        const modalTitle = document.getElementById('modalTitle');
        const experienceForm = document.getElementById('experienceForm');
        const experienceId = document.getElementById('experienceId');
        const experienceModal = document.getElementById('experienceModal');

        if (modalTitle) modalTitle.textContent = 'Add Experience';
        if (experienceForm) experienceForm.reset();
        if (experienceId) experienceId.value = '';
        currentExperienceId = null;
        if (experienceModal) experienceModal.classList.remove('hidden');
      }

      async function editExperience(id) {
        try {
          const response = await fetch(\`/api/experience/\${id}\`);
          const experience = await response.json();

          const modalTitle = document.getElementById('modalTitle');
          const experienceId = document.getElementById('experienceId');
          const title = document.getElementById('title');
          const company = document.getElementById('company');
          const startDate = document.getElementById('startDate');
          const endDate = document.getElementById('endDate');
          const location = document.getElementById('location');
          const description = document.getElementById('description');
          const technologies = document.getElementById('technologies');
          const experienceModal = document.getElementById('experienceModal');

          modalTitle.textContent = 'Edit Experience';
          experienceId.value = experience.id;
          title.value = experience.title;
          company.value = experience.company;
          startDate.value = experience.start_date;
          endDate.value = experience.end_date || '';
          location.value = experience.location || '';
          description.value = experience.description || '';
          technologies.value = experience.technologies
            ? experience.technologies.join(', ')
            : '';

          currentExperienceId = id;
          experienceModal.classList.remove('hidden');
        } catch (error) {
          alert(
            'Error loading experience: ' + (error?.message || 'Unknown error')
          );
        }
      }

      async function deleteExperience(id) {
        if (!confirm('Are you sure you want to delete this experience?')) {
          return;
        }

        try {
          const response = await fetch(\`/api/experience/\${id}\`, {
            method: 'DELETE',
          });

          if (response.ok) {
            window.location.reload();
          } else {
            const error = await response.json();
            alert('Error deleting experience: ' + error.error);
          }
        } catch (error) {
          alert(
            'Error deleting experience: ' + (error?.message || 'Unknown error')
          );
        }
      }

      function closeModal() {
        const experienceModal = document.getElementById('experienceModal');
        if (experienceModal) experienceModal.classList.add('hidden');
      }

      const experienceForm = document.getElementById('experienceForm');
      if (experienceForm) {
        experienceForm.addEventListener('submit', async e => {
          e.preventDefault();

          const title = document.getElementById('title');
          const company = document.getElementById('company');
          const startDate = document.getElementById('startDate');
          const endDate = document.getElementById('endDate');
          const location = document.getElementById('location');
          const description = document.getElementById('description');
          const technologies = document.getElementById('technologies');

          const formData = {
            title: title.value,
            company: company.value,
            start_date: startDate.value,
            end_date: endDate.value || null,
            location: location.value || null,
            description: description.value || null,
            technologies: technologies.value
              ? technologies.value
                  .split(',')
                  .map(t => t.trim())
                  .filter(t => t)
              : [],
          };

          try {
            const url = currentExperienceId
              ? \`/api/experience/\${currentExperienceId}\`
              : '/api/experience/';
            const method = currentExperienceId ? 'PUT' : 'POST';

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
              alert('Error saving experience: ' + error.error);
            }
          } catch (error) {
            alert(
              'Error saving experience: ' + (error?.message || 'Unknown error')
            );
          }
        });
      }

      const experienceModal = document.getElementById('experienceModal');
      if (experienceModal) {
        experienceModal.addEventListener('click', e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        });
      }
    <\/script> </body> </html>`], ['<html lang="en" data-astro-cid-njkmenpp> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Experience Management - CMS</title><meta name="description" content="Manage work experience entries">', '</head> <body class="min-h-screen" data-astro-cid-njkmenpp> <nav class="nav-bg shadow-lg" data-astro-cid-njkmenpp> <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;" data-astro-cid-njkmenpp> <div style="display: flex; justify-content: space-between; height: 64px;" data-astro-cid-njkmenpp> <div style="display: flex;" data-astro-cid-njkmenpp> <div style="display: flex; align-items: center;" data-astro-cid-njkmenpp> <a href="/cms" style="text-decoration: none; color: var(--rp-text); font-size: 20px; font-weight: bold;" data-astro-cid-njkmenpp>\u{1F339} CMS</a> </div> <div style="display: flex; margin-left: 24px; gap: 32px; align-items: center;" data-astro-cid-njkmenpp> <a href="/cms" class="nav-link" data-astro-cid-njkmenpp>Dashboard</a> <a href="/cms/experience" class="nav-link active" data-astro-cid-njkmenpp>Experience</a> <a href="/cms/projects" class="nav-link" data-astro-cid-njkmenpp>Projects</a> <a href="/cms/about" class="nav-link" data-astro-cid-njkmenpp>About</a> <a href="/cms/home" class="nav-link" data-astro-cid-njkmenpp>Home</a> </div> </div> <div style="display: flex; align-items: center; gap: 16px;" data-astro-cid-njkmenpp> <span style="font-size: 14px;" class="text-subtle" data-astro-cid-njkmenpp>', '</span> <form action="/api/auth/signout" method="post" data-astro-cid-njkmenpp> <button type="submit" class="btn-signout" data-astro-cid-njkmenpp>Sign out</button> </form> </div> </div> </div> </nav> <main style="max-width: 1200px; margin: 0 auto; padding: 24px 16px;" data-astro-cid-njkmenpp> <div style="border-bottom: 1px solid var(--rp-overlay); padding-bottom: 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;" data-astro-cid-njkmenpp> <h1 style="font-size: 24px; font-weight: bold; margin: 0;" data-astro-cid-njkmenpp>\nExperience Management\n</h1> <button onclick="showCreateForm()" class="btn-primary" data-astro-cid-njkmenpp>+ Add Experience</button> </div> ', " ", " ", ` </main> <div id="experienceModal" class="modal hidden" data-astro-cid-njkmenpp> <div class="modal-content" data-astro-cid-njkmenpp> <h2 id="modalTitle" style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;" data-astro-cid-njkmenpp>
Add Experience
</h2> <form id="experienceForm" data-astro-cid-njkmenpp> <input type="hidden" id="experienceId" data-astro-cid-njkmenpp> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Job Title</label> <input type="text" id="title" required class="form-input" data-astro-cid-njkmenpp> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Company</label> <input type="text" id="company" required class="form-input" data-astro-cid-njkmenpp> </div> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;" data-astro-cid-njkmenpp> <div data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Start Date</label> <input type="date" id="startDate" required class="form-input" data-astro-cid-njkmenpp> </div> <div data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>End Date</label> <input type="date" id="endDate" class="form-input" data-astro-cid-njkmenpp> </div> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Location</label> <input type="text" id="location" class="form-input" data-astro-cid-njkmenpp> </div> <div style="margin-bottom: 16px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Description</label> <textarea id="description" rows="4" class="form-input" data-astro-cid-njkmenpp></textarea> </div> <div style="margin-bottom: 24px;" data-astro-cid-njkmenpp> <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 4px;" data-astro-cid-njkmenpp>Technologies (comma-separated)</label> <input type="text" id="technologies" placeholder="React, TypeScript, Node.js" class="form-input" data-astro-cid-njkmenpp> </div> <div style="display: flex; justify-content: flex-end; gap: 12px;" data-astro-cid-njkmenpp> <button type="button" onclick="closeModal()" style="background: none; border: 1px solid var(--rp-muted); color: var(--rp-subtle); padding: 8px 16px; border-radius: 4px; cursor: pointer;" data-astro-cid-njkmenpp>Cancel</button> <button type="submit" class="btn-primary" data-astro-cid-njkmenpp>Save Experience</button> </div> </form> </div> </div> <script>
      let currentExperienceId = null;

      function showCreateForm() {
        const modalTitle = document.getElementById('modalTitle');
        const experienceForm = document.getElementById('experienceForm');
        const experienceId = document.getElementById('experienceId');
        const experienceModal = document.getElementById('experienceModal');

        if (modalTitle) modalTitle.textContent = 'Add Experience';
        if (experienceForm) experienceForm.reset();
        if (experienceId) experienceId.value = '';
        currentExperienceId = null;
        if (experienceModal) experienceModal.classList.remove('hidden');
      }

      async function editExperience(id) {
        try {
          const response = await fetch(\\\`/api/experience/\\\${id}\\\`);
          const experience = await response.json();

          const modalTitle = document.getElementById('modalTitle');
          const experienceId = document.getElementById('experienceId');
          const title = document.getElementById('title');
          const company = document.getElementById('company');
          const startDate = document.getElementById('startDate');
          const endDate = document.getElementById('endDate');
          const location = document.getElementById('location');
          const description = document.getElementById('description');
          const technologies = document.getElementById('technologies');
          const experienceModal = document.getElementById('experienceModal');

          modalTitle.textContent = 'Edit Experience';
          experienceId.value = experience.id;
          title.value = experience.title;
          company.value = experience.company;
          startDate.value = experience.start_date;
          endDate.value = experience.end_date || '';
          location.value = experience.location || '';
          description.value = experience.description || '';
          technologies.value = experience.technologies
            ? experience.technologies.join(', ')
            : '';

          currentExperienceId = id;
          experienceModal.classList.remove('hidden');
        } catch (error) {
          alert(
            'Error loading experience: ' + (error?.message || 'Unknown error')
          );
        }
      }

      async function deleteExperience(id) {
        if (!confirm('Are you sure you want to delete this experience?')) {
          return;
        }

        try {
          const response = await fetch(\\\`/api/experience/\\\${id}\\\`, {
            method: 'DELETE',
          });

          if (response.ok) {
            window.location.reload();
          } else {
            const error = await response.json();
            alert('Error deleting experience: ' + error.error);
          }
        } catch (error) {
          alert(
            'Error deleting experience: ' + (error?.message || 'Unknown error')
          );
        }
      }

      function closeModal() {
        const experienceModal = document.getElementById('experienceModal');
        if (experienceModal) experienceModal.classList.add('hidden');
      }

      const experienceForm = document.getElementById('experienceForm');
      if (experienceForm) {
        experienceForm.addEventListener('submit', async e => {
          e.preventDefault();

          const title = document.getElementById('title');
          const company = document.getElementById('company');
          const startDate = document.getElementById('startDate');
          const endDate = document.getElementById('endDate');
          const location = document.getElementById('location');
          const description = document.getElementById('description');
          const technologies = document.getElementById('technologies');

          const formData = {
            title: title.value,
            company: company.value,
            start_date: startDate.value,
            end_date: endDate.value || null,
            location: location.value || null,
            description: description.value || null,
            technologies: technologies.value
              ? technologies.value
                  .split(',')
                  .map(t => t.trim())
                  .filter(t => t)
              : [],
          };

          try {
            const url = currentExperienceId
              ? \\\`/api/experience/\\\${currentExperienceId}\\\`
              : '/api/experience/';
            const method = currentExperienceId ? 'PUT' : 'POST';

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
              alert('Error saving experience: ' + error.error);
            }
          } catch (error) {
            alert(
              'Error saving experience: ' + (error?.message || 'Unknown error')
            );
          }
        });
      }

      const experienceModal = document.getElementById('experienceModal');
      if (experienceModal) {
        experienceModal.addEventListener('click', e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        });
      }
    <\/script> </body> </html>`])), renderHead(), email, error && renderTemplate`<div style="background-color: rgba(235, 111, 146, 0.2); border: 1px solid var(--rp-love); color: var(--rp-love); padding: 12px; border-radius: 6px; margin-bottom: 16px;" data-astro-cid-njkmenpp>
Error loading experiences: ${error.message} </div>`, experiences && experiences.length === 0 && renderTemplate`<div style="text-align: center; padding: 48px 0;" data-astro-cid-njkmenpp> <div style="font-size: 48px; margin-bottom: 16px;" data-astro-cid-njkmenpp>💼</div> <h3 style="margin: 8px 0; font-size: 18px;" data-astro-cid-njkmenpp>No experiences</h3> <p style="margin: 4px 0; font-size: 14px;" class="text-subtle" data-astro-cid-njkmenpp>
Get started by adding your first work experience.
</p> </div>`, experiences && experiences.length > 0 && renderTemplate`<div class="card-bg mb-4" style="border-radius: 8px; overflow: hidden;" data-astro-cid-njkmenpp> ${experiences.map((experience, index) => renderTemplate`<div${addAttribute(`padding: 20px; ${index !== experiences.length - 1 ? "border-bottom: 1px solid var(--rp-overlay);" : ""}`, "style")} data-astro-cid-njkmenpp> <div style="display: flex; justify-content: space-between; align-items: flex-start;" data-astro-cid-njkmenpp> <div style="flex: 1;" data-astro-cid-njkmenpp> <h3 style="font-size: 18px; font-weight: 600; margin: 0 0 8px 0;" data-astro-cid-njkmenpp> ${experience.title} </h3> <p style="font-size: 14px; margin: 0 0 4px 0;" class="text-subtle" data-astro-cid-njkmenpp> ${experience.company} • ${experience.start_date} -${" "} ${experience.end_date || "Present"} </p> ${experience.location && renderTemplate`<p style="font-size: 14px; margin: 0 0 8px 0;" class="text-muted" data-astro-cid-njkmenpp>
📍 ${experience.location} </p>`} <p style="font-size: 14px; margin: 8px 0;" class="text-subtle" data-astro-cid-njkmenpp> ${experience.description} </p> ${experience.technologies && experience.technologies.length > 0 && renderTemplate`<div style="margin-top: 12px;" data-astro-cid-njkmenpp> ${experience.technologies.map((tech) => renderTemplate`<span class="tech-tag" data-astro-cid-njkmenpp>${tech}</span>`)} </div>`} </div> <div style="display: flex; gap: 8px; margin-left: 16px;" data-astro-cid-njkmenpp> <button${addAttribute(`editExperience('${experience.id}')`, "onclick")} class="btn-edit" data-astro-cid-njkmenpp>
Edit
</button> <button${addAttribute(`deleteExperience('${experience.id}')`, "onclick")} class="btn-delete" data-astro-cid-njkmenpp>
Delete
</button> </div> </div> </div>`)} </div>`);
}, "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/experience/index.astro", void 0);

const $$file = "C:/Users/msdqn/Development/personal/personal-website/src/pages/cms/experience/index.astro";
const $$url = "/cms/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
