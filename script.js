// Minimal JS for interactivity and content hydration
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Back to top
document.getElementById('backToTop')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});

// Load dynamic content
async function loadJSON(url){ const r = await fetch(url); return await r.json(); }

Promise.all([
  loadJSON('data/highlights.json'),
  loadJSON('data/publications.json'),
  loadJSON('data/teaching.json'),
  loadJSON('data/projects.json')
]).then(([highlights, pubs, teaching, projects]) => {
  // Highlights
  const highlightsEl = document.getElementById('highlights');
  highlights.forEach(h => {
    const div = document.createElement('article');
    div.className = 'card';
    div.innerHTML = `<h3>${h.title}</h3><p class="muted">${h.when} • ${h.venue ?? ''}</p><p>${h.summary}</p>`;
    highlightsEl.appendChild(div);
  });

  // Publications with filter
  const pubList = document.getElementById('pubList');
  const pubFilter = document.getElementById('pubFilter');
  function renderPubs(kind='all'){
    pubList.innerHTML = '';
    pubs.filter(p => kind==='all' || p.kind===kind).forEach(p => {
      const li = document.createElement('li');
      li.className = 'pub-item';
      li.innerHTML = `
        <span><strong>${p.title}</strong></span><br>
        <span>${p.authors.join(', ')}</span>
        <span class="pub-venue"> — ${p.venue} (${p.year})</span>
        ${p.tags?.map(t=>`<span class="tag">${t}</span>`).join('') ?? ''}
        ${p.links?.pdf?` · <a href="${p.links.pdf}">pdf</a>`:''}
        ${p.links?.doi?` · <a href="${p.links.doi}">doi</a>`:''}
        ${p.links?.code?` · <a href="${p.links.code}">code</a>`:''}
      `;
      pubList.appendChild(li);
    });
  }
  pubFilter?.addEventListener('change', e => renderPubs(e.target.value));
  renderPubs();

  // Teaching
  const teachingList = document.getElementById('teachingList');
  teaching.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${t.course}</strong> — ${t.role} <span class="muted">(${t.term})</span>`;
    teachingList.appendChild(li);
  });

  // Projects
  const projectsGrid = document.getElementById('projectsGrid');
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="muted">${p.when}</p>
      <p>${p.description}</p>
      <p>${p.links?.paper?`<a href="${p.links.paper}">paper</a>`:''}
         ${p.links?.code?` · <a href="${p.links.code}">code</a>`:''}
         ${p.links?.demo?` · <a href="${p.links.demo}">demo</a>`:''}</p>
    `;
    projectsGrid.appendChild(card);
  });
});

