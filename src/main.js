// Icons come from a CDN; if it's blocked or slow the page must still work.
function drawIcons() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

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

  // id -> element, so the render loop never touches the DOM to find a node
  const nodeEls = new Map();

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
    nodeEls.set(item.id, node);
  });

  drawIcons();

  function positionNodes() {
    const total = orbitalData.length;
    orbitalData.forEach((item, i) => {
      const el = nodeEls.get(item.id);
      if (!el) return;
      const angle = ((i / total) * 360 + rotation) % 360;
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;
      const isActive = el.classList.contains('is-active');

      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;

      // Only write z-index / opacity when the value actually changes — a
      // no-op style write still invalidates style for that element.
      const z = String(isActive ? 400 : Math.round(100 + 50 * Math.cos(rad)));
      if (el.style.zIndex !== z) el.style.zIndex = z;
      if (!isActive) {
        const o = Math.max(0.5, 0.5 + 0.5 * ((1 + Math.sin(rad)) / 2)).toFixed(2);
        if (el.style.opacity !== o) el.style.opacity = o;
      }
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
    const node = nodeEls.get(id);
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
    drawIcons();
  }

  function updateClasses() {
    const active = activeId ? orbitalData.find((i) => i.id === activeId) : null;
    const related = active ? active.relatedIds : [];
    nodesWrap.classList.toggle('has-active', !!activeId);
    nodeEls.forEach((el, id) => {
      el.classList.toggle('is-active', id === activeId);
      el.classList.toggle('is-related', related.includes(id));
      if (id === activeId) el.style.opacity = 1;
    });
  }

  // Enable the .7s transform easing only for the duration of a snap.
  let snapTimer = null;
  function snap() {
    nodesWrap.classList.add('is-snapping');
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => nodesWrap.classList.remove('is-snapping'), 750);
  }

  function toggleNode(id) {
    if (activeId === id) {
      activeId = null;
      autoRotate = true;
    } else {
      activeId = id;
      autoRotate = false;
      centerOnNode(id);
      snap();
    }
    updateClasses();
    renderCard(activeId);
    positionNodes();
    syncLoop();
  }

  stage.addEventListener('click', () => {
    if (activeId !== null) {
      activeId = null;
      autoRotate = true;
      updateClasses();
      renderCard(null);
      syncLoop();
    }
  });

  window.addEventListener('resize', () => {
    computeRadius();
    positionNodes();
  });

  // ---- Rotation loop: rAF, time-based, and only while it can be seen ----
  const DEG_PER_MS = 6 / 1000;   // 6°/s — same speed as the old 0.3° per 50ms
  let rafId = null;
  let lastT = 0;
  let live = false;              // flipped on after first paint
  let inView = true;

  function frame(t) {
    if (lastT) {
      // clamp dt so returning from a background tab doesn't jump the orbit
      rotation = (rotation + Math.min(t - lastT, 100) * DEG_PER_MS) % 360;
      positionNodes();
    }
    lastT = t;
    rafId = requestAnimationFrame(frame);
  }

  function syncLoop() {
    const shouldRun = live && inView && autoRotate;
    if (shouldRun && rafId === null) {
      lastT = 0;
      rafId = requestAnimationFrame(frame);
    } else if (!shouldRun && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // Paint the orbit in its final layout immediately — no motion competing
  // with first paint — then start rotating once the page is idle.
  computeRadius();
  positionNodes();

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const go = () => { live = true; syncLoop(); };
    const kick = () => {
      if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 1200 });
      else setTimeout(go, 300);
    };
    if (document.readyState === 'complete') kick();
    else window.addEventListener('load', kick, { once: true });

    // The orbit sits below the fold; don't burn frames while it's off screen.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        syncLoop();
      }, { rootMargin: '100px' }).observe(stage);
    }
  }
})();

// ============ Background glow parallax ============
// Nudges the whole aurora layer as you scroll so it reads as depth, not wallpaper.
(function initGlowParallax() {
  const glow = document.querySelector('.bg-glow');
  if (!glow) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  function update() {
    glow.style.setProperty('--glow-shift', `${window.scrollY * -0.08}px`);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
})();

// ============ Touch press state for link cards ============
// :hover never fires on touch and :active is unreliable in mobile Safari,
// so drive the highlight from pointer events instead.
(function initCardPress() {
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const press = () => card.classList.add('is-pressed');
    // hold the state briefly so the animation is visible before navigation
    const release = () => setTimeout(() => card.classList.remove('is-pressed'), 180);

    card.addEventListener('pointerdown', press, { passive: true });
    card.addEventListener('pointerup', release, { passive: true });
    card.addEventListener('pointercancel', release, { passive: true });
    card.addEventListener('pointerleave', release, { passive: true });
  });

  // scrolling over a card shouldn't leave it stuck highlighted
  window.addEventListener('scroll', () => {
    cards.forEach((card) => card.classList.remove('is-pressed'));
  }, { passive: true });
})();

drawIcons();

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
