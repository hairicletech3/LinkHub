// ============ Radial Orbital Timeline ============
const MAPS_URL = 'https://maps.app.goo.gl/f6J8ktd6fenRegfA9?g_st=ic';

const orbitalData = [
  {
    id: 1,
    title: 'Directions',
    icon: 'map-pin',
    info: 'Street 183 · Vanda, Phnom Penh',
    href: MAPS_URL,
    cta: 'Open in Maps',
    relatedIds: [2, 3],
  },
  {
    id: 2,
    title: 'Hours',
    icon: 'clock',
    info: 'Open daily · 11:00 AM – 22:00 PM',
    relatedIds: [1, 5],
  },
  {
    id: 3,
    title: 'Call',
    icon: 'phone',
    info: 'Tap to call for reservations',
    href: 'tel:+855000000000',
    cta: 'Call now',
    relatedIds: [1, 4],
  },
  {
    id: 4,
    title: 'Menu',
    icon: 'utensils',
    info: 'Fresh hotpot broths · BBQ · daily specials',
    relatedIds: [2, 3],
  },
  {
    id: 5,
    title: 'Telegram',
    icon: 'send',
    info: 'Updates, promos & new menu items',
    href: 'https://t.me/Anclehai',
    cta: 'Join channel',
    relatedIds: [1, 2],
  },
];

(function initOrbital() {
  const stage = document.getElementById('orbital-stage');
  const nodesWrap = document.getElementById('orbital-nodes');
  if (!stage || !nodesWrap) return;

  let rotation = 0;
  let autoRotate = true;
  let activeId = null;
  let radius = 160;

  function computeRadius() {
    const size = stage.getBoundingClientRect().width;
    radius = Math.max(110, size * 0.41);
  }

  // Build nodes
  orbitalData.forEach((item) => {
    const node = document.createElement('div');
    node.className = 'orbital-node';
    node.dataset.id = item.id;
    node.innerHTML = `
      <div class="orbital-node-halo"></div>
      <div class="orbital-node-dot"><i data-lucide="${item.icon}" style="width:18px;height:18px"></i></div>
      <div class="orbital-node-label">${item.title}</div>
    `;
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNode(item.id);
    });
    nodesWrap.appendChild(node);
  });

  lucide.createIcons();

  function positionNodes() {
    const total = orbitalData.length;
    orbitalData.forEach((item, i) => {
      const angle = ((i / total) * 360 + rotation) % 360;
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;
      const z = Math.round(100 + 50 * Math.cos(rad));
      const opacity = Math.max(0.5, 0.5 + 0.5 * ((1 + Math.sin(rad)) / 2));
      const el = nodesWrap.querySelector(`.orbital-node[data-id="${item.id}"]`);
      if (!el) return;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.zIndex = el.classList.contains('is-active') ? 400 : z;
      if (!el.classList.contains('is-active')) el.style.opacity = opacity;
    });
  }

  function centerOnNode(id) {
    const idx = orbitalData.findIndex((i) => i.id === id);
    const total = orbitalData.length;
    const target = (idx / total) * 360;
    rotation = 270 - target;
  }

  function renderCard(id) {
    // Remove any existing card
    nodesWrap.querySelectorAll('.orbital-card').forEach((c) => c.remove());
    if (!id) return;
    const item = orbitalData.find((i) => i.id === id);
    const node = nodesWrap.querySelector(`.orbital-node[data-id="${id}"]`);
    if (!item || !node) return;
    const card = document.createElement('div');
    card.className = 'orbital-card';
    card.innerHTML = `
      <div class="orbital-card-title">${item.title}</div>
      <div class="orbital-card-body">${item.info}</div>
      ${item.href ? `<a class="orbital-card-cta" href="${item.href}" target="_blank" rel="noopener">${item.cta} <i data-lucide="arrow-right" style="width:14px;height:14px"></i></a>` : ''}
    `;
    card.addEventListener('click', (e) => e.stopPropagation());
    node.appendChild(card);
    lucide.createIcons();
  }

  function updateClasses() {
    const active = activeId ? orbitalData.find((i) => i.id === activeId) : null;
    const related = active ? active.relatedIds : [];
    nodesWrap.classList.toggle('has-active', !!activeId);
    nodesWrap.querySelectorAll('.orbital-node').forEach((el) => {
      const id = Number(el.dataset.id);
      el.classList.toggle('is-active', id === activeId);
      el.classList.toggle('is-related', related.includes(id));
      if (id === activeId) el.style.opacity = 1;
    });
  }

  function toggleNode(id) {
    if (activeId === id) {
      activeId = null;
      autoRotate = true;
    } else {
      activeId = id;
      autoRotate = false;
      centerOnNode(id);
    }
    updateClasses();
    renderCard(activeId);
    positionNodes();
  }

  stage.addEventListener('click', () => {
    if (activeId !== null) {
      activeId = null;
      autoRotate = true;
      updateClasses();
      renderCard(null);
    }
  });

  window.addEventListener('resize', () => {
    computeRadius();
    positionNodes();
  });

  computeRadius();
  positionNodes();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    setInterval(() => {
      if (!autoRotate) return;
      rotation = (rotation + 0.3) % 360;
      positionNodes();
    }, 50);
  }
})();

// ============ Peek stack: tap to expand ============
(function initStackCards() {
  const stack = document.getElementById('stack-cards');
  if (!stack) return;

  function expand() { stack.classList.remove('is-collapsed'); }
  function collapse() { stack.classList.add('is-collapsed'); }

  // Intercept clicks: first click on any card while collapsed expands the stack
  stack.addEventListener('click', (e) => {
    if (stack.classList.contains('is-collapsed')) {
      e.preventDefault();
      e.stopPropagation();
      expand();
    }
  }, true);

  // Click outside collapses again
  document.addEventListener('click', (e) => {
    if (!stack.contains(e.target) && !stack.classList.contains('is-collapsed')) {
      collapse();
    }
  });

  // On desktop, collapse when the mouse leaves (matches hover behavior)
  stack.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) collapse();
  });
})();

lucide.createIcons();

function markStepDone(step) {
  const circle = document.getElementById(`step-${step}`);
  if (!circle) return;
  circle.classList.add('bg-accent-2', 'text-[#f2f3f5]');
  circle.classList.remove('bg-bg', 'text-accent-2');
}

document.querySelectorAll('[data-step]').forEach((link) => {
  const step = link.getAttribute('data-step');
  if (localStorage.getItem(`anclehai-step-${step}`) === 'done') {
    markStepDone(step);
  }
  link.addEventListener('click', () => {
    localStorage.setItem(`anclehai-step-${step}`, 'done');
    markStepDone(step);
  });
});
