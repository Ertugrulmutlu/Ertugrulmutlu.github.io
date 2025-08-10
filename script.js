// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('primary-menu');
if(toggle && menu){
  toggle.addEventListener('click', ()=>{
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Close after selecting a link
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
  // Reset on resize
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
}
// Parallax bg (subtle)
const bg = document.querySelector('.bg');
let px = 0, py = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', (e)=>{ tx = e.clientX; ty = e.clientY; });
(function loop(){ px += (tx-px)*0.08; py += (ty-py)*0.08; if(bg){ bg.style.backgroundPosition = `${px/10}px ${py/10}px, ${-px/12}px ${-py/12}px, 0 0`; } requestAnimationFrame(loop); })();

// ===== Projects: modal handling =====
const openButtons = document.querySelectorAll('[data-open-modal]');
const modals = document.querySelectorAll('.modal');

openButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-open-modal');
    const m = document.getElementById(id);
    if(!m) return;
    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
  });
});

// Close handlers
modals.forEach(m=>{
  m.addEventListener('click', (e)=>{ if(e.target === m) closeModal(m); });
  m.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click', ()=>closeModal(m)));
});

function closeModal(m){ m.classList.remove('open'); m.setAttribute('aria-hidden','true'); }

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') modals.forEach(m=>closeModal(m));
});

// ==== Projects: "Show more" per group ====
(function initProjectsShowMore() {
  const DEFAULT_VISIBLE = 4; // ilk gösterilecek kart sayısı

  document.querySelectorAll('#projects .group').forEach(group => {
    const grid = group.querySelector('.projects-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.p-card'));
    if (cards.length === 0) return;

    // Grup üzerinde data-visible ile eşiği değiştirebilirsin (örn. data-visible="3")
    const visible = parseInt(group.getAttribute('data-visible') || DEFAULT_VISIBLE, 10);

    if (cards.length <= visible) return; // butona gerek yok

    // Fazla kartları gizle
    cards.slice(visible).forEach(c => c.hidden = true);

    // Buton oluştur
    const wrap = document.createElement('div');
    wrap.className = 'more-wrap';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn sm';
    btn.setAttribute('data-open', '0');
    btn.innerHTML = '<i class="fa-solid fa-plus"></i> Show more';

    btn.addEventListener('click', () => {
      const open = btn.getAttribute('data-open') === '1';
      if (!open) {
        cards.slice(visible).forEach(c => c.hidden = false);
        btn.setAttribute('data-open', '1');
        btn.innerHTML = '<i class="fa-solid fa-minus"></i> Show less';
      } else {
        cards.slice(visible).forEach(c => c.hidden = true);
        btn.setAttribute('data-open', '0');
        btn.innerHTML = '<i class="fa-solid fa-plus"></i> Show more';
        group.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    wrap.appendChild(btn);
    grid.after(wrap);
  });
})();

// ==== Skills Matrix: "Show more" ====
(function initSkillsShowMore(){
  const sec  = document.getElementById('skills');
  if (!sec) return;

  const grid  = sec.querySelector('.skills-matrix');
  const cards = grid ? Array.from(grid.querySelectorAll('.s-card')) : [];
  if (!grid || cards.length === 0) return;

  const DEFAULT_VISIBLE = 3; // section'a data-visible yazmışsın, yoksa 3
  const visible = parseInt(sec.getAttribute('data-visible') || DEFAULT_VISIBLE, 10);

  if (cards.length <= visible) return; // butona gerek yok

  // Fazla kartları gizle
  cards.slice(visible).forEach(c => c.hidden = true);

  // Buton
  const wrap = document.createElement('div');
  wrap.className = 'more-wrap';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn sm';
  btn.setAttribute('data-open', '0');
  btn.innerHTML = '<i class="fa-solid fa-plus"></i> Show more';

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('data-open') === '1';
    if (!open) {
      cards.slice(visible).forEach(c => c.hidden = false);
      btn.setAttribute('data-open', '1');
      btn.innerHTML = '<i class="fa-solid fa-minus"></i> Show less';
    } else {
      cards.slice(visible).forEach(c => c.hidden = true);
      btn.setAttribute('data-open', '0');
      btn.innerHTML = '<i class="fa-solid fa-plus"></i> Show more';
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  wrap.appendChild(btn);
  grid.after(wrap);
})();
