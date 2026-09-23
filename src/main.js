// Icons come from a CDN; if it's blocked or slow the page must still work.
function drawIcons() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ============ Brand marks ============
// lucide dropped all brand icons, so these paths come from simple-icons (CC0).
// All are 24x24 single-path marks, drawn with fill: currentColor.
const BRAND_ICONS = {
  tiktok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  telegram: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  instagram: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
};

function brandSvg(name, size) {
  const d = BRAND_ICONS[name];
  if (!d) return '';
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
}

// Fill any [data-brand="x"] slot with its brand mark (the funnel cards use these).
(function drawBrandMarks() {
  document.querySelectorAll('[data-brand]').forEach((el) => {
    const svg = brandSvg(el.dataset.brand, 24);
    if (svg) el.innerHTML = svg;
  });
})();

// ============ Secondary socials ============
// The 3 numbered cards above are the funnel; everything here is secondary and
// renders as a compact icon grid so the list never gets long.
// To add one: append a row. To remove one: delete the row. A tile whose url is
// still REPLACE_WITH_... renders greyed out and is NOT clickable, so it can
// never be a dead link — fill the url in and it goes live automatically.
const SOCIALS = [
  { name: 'Facebook',   icon: 'facebook',  url: 'https://www.facebook.com/anclehaihotpot' },
  { name: 'Instagram',  icon: 'instagram', url: 'https://www.instagram.com/anclehai_hotpot/' },
  // Filled in by initSocials(): the branch's own number on /ifl etc., else MAIN_PHONE.
  { name: 'Contact us', icon: 'phone',     url: 'PHONE' },
];

// Called further down, once BRANCHES / HOME_BRANCH exist.
function initSocials() {
  const grid = document.getElementById('social-grid');
  const section = document.getElementById('social-section');
  if (!grid || !section) return;

  if (!SOCIALS.length) {
    section.hidden = true;
    return;
  }

  // The PHONE row is one tile. A tel: link can only dial one number, so when
  // the branch has 2 the tile opens a small picker instead of dialling.
  // Main page: MAIN_PHONE, dialled directly.
  const numbers = HOME_BRANCH ? phonesFor(HOME_BRANCH) : [MAIN_PHONE];

  grid.innerHTML = SOCIALS.map((s) => {
    const mark = brandSvg(s.icon, 22);
    const inner = `<span class="social-tile-mark">${mark}</span>
           <span class="social-tile-name">${s.name}</span>`;
    if (s.url === 'PHONE') {
      return numbers.length > 1
        ? `<button type="button" class="social-tile" id="call-tile" aria-expanded="false" aria-controls="call-tray">${inner}</button>`
        : `<a class="social-tile" href="${telHref(numbers[0])}" aria-label="${s.name}">${inner}</a>`;
    }
    // Unset links render as an inert span rather than an <a> to nowhere.
    return !isPlaceholder(s.url)
      ? `<a class="social-tile" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}">${inner}</a>`
      : `<span class="social-tile is-empty" aria-disabled="true" title="Add a link for ${s.name} in SOCIALS">${inner}</span>`;
  }).join('');

  const tile = document.getElementById('call-tile');
  if (!tile) return;

  // Same disclosure tray as the branch pickers, one row per number.
  const tray = document.createElement('div');
  tray.className = 'branch-tray call-tray';
  tray.id = 'call-tray';
  tray.hidden = true;
  tray.innerHTML = `<div class="branch-list">${numbers
    .map(
      (p) => `
      <a class="branch-item" href="${telHref(p)}">
        <span class="branch-item-pin"><i data-lucide="phone" style="width:15px;height:15px"></i></span>
        <span class="branch-item-text">
          <strong>${p}</strong>
          <span>Call ${HOME_BRANCH.name}</span>
        </span>
        <i data-lucide="arrow-up-right" style="width:16px;height:16px"></i>
      </a>`
    )
    .join('')}</div>`;
  grid.after(tray);

  let closeTimer = null;
  tile.addEventListener('click', () => {
    const open = tile.getAttribute('aria-expanded') === 'true';
    tile.setAttribute('aria-expanded', String(!open));
    clearTimeout(closeTimer);
    if (open) {
      tray.classList.remove('is-open');
      closeTimer = setTimeout(() => { tray.hidden = true; }, 260);
    } else {
      tray.hidden = false;
      void tray.offsetHeight;   // force layout so the transition actually runs
      tray.classList.add('is-open');
    }
  });
}

// ============ Branches ============
// TODO: fill in the 3 remaining branches.
//   review: Google Business Profile -> pick the location -> "Ask for reviews".
//           It gives a https://g.page/r/<id>/review link that opens the star
//           dialog directly (far better than dropping people on a map pin).
//   maps:   share the location from Google Maps -> https://maps.app.goo.gl/...
// Until a review link is filled in, that branch falls back to its maps link,
// so nothing on the page is ever a dead link.
//   coords: optional but STRONGLY recommended for the map preview — without it
//           the map falls back to a text search, which can land on the wrong
//           pin. In Google Maps, right-click your pin -> click the numbers at
//           the top to copy them, then paste as 'lat,lng' e.g. '11.5449,104.9160'.
//   area:    short label for the dropdown rows — keep it to a few words.
//   address: the full address shown under the shopfront photo.
//   photo:   shopfront image in src/assets/. If the file isn't there yet the
//            frame shows a tidy placeholder instead of a broken image.
//   phones:  up to 2 numbers, written the way you'd dial locally, e.g.
//            '070 991 186'. Leave as '' if the branch has no number — the
//            Call card then falls back to MAIN_PHONE.
//   id:      ALSO the URL slug — /ifl, /vanda, /tk, /smc each land on this same
//            page with that branch preselected. Print one QR per branch pointing
//            at its URL and every table lands on the right branch. Rename an id
//            only if you're ready to reprint that branch's QR.
const BRANCHES = [
  {
    id: 'ifl',
    name: 'IFL',
    area: '152 Street 257, Phnom Penh',
    address: '',
    photo: '/assets/branch1.jpg',
    coords: '',
    phones: ['078 991 186', '070 991 186'],
    maps: 'https://maps.app.goo.gl/riBSHewq1RBAsgXK9',
    review: 'REPLACE_WITH_REVIEW_LINK',
  },
  {
    id: 'vanda',
    name: 'Vanda',
    area: 'St 183 · Phnom Penh',
    address: 'Near Vanda, St 183, Institute corner St 475, Phnom Penh 120108',
    photo: '/assets/branch2.jpg',
    coords: '',
    phones: ['078 711 866', '087 711 866'],
    maps: 'https://maps.app.goo.gl/f6J8ktd6fenRegfA9?g_st=ic',
    review: 'REPLACE_WITH_REVIEW_LINK',
  },
  { id: 'tk',
    name: 'TK',
    area: 'St 528 · Phnom Penh',
    address: 'St 528 · Phnom Penh',
    photo: '/assets/branch3.jpg',
    coords: '',
    phones: ['070 288 586', '061 288 586'],
    maps: 'https://maps.app.goo.gl/SuDTVFxzgnV1C2MS8',
    review: 'REPLACE_WITH_REVIEW_LINK',
  },
  { id: 'smc',
    name: 'SMC',
    area: 'Address line',
    address: 'Samdech Monireth Blvd (217), Phnom Penh 535557',
    photo: '/assets/branch4.jpg',
    coords: '',
    phones: ['070 575 586', '078 575 586'],
    maps: 'https://maps.app.goo.gl/LWbSH9gmY1xtzSjx9',
    review: 'REPLACE_WITH_REVIEW_LINK'
  },
];

const BUSINESS_NAME = 'Ancle Hai Hotpot';

// Used by the Call card when the current branch has no number of its own.
const MAIN_PHONE = '070 991 186';

// '070 991 186' -> 'tel:+85570991186'. The local leading 0 must be dropped
// once the +855 country code is in front, or some phones won't dial it.
function telHref(num) {
  const digits = num.replace(/\D/g, '');
  return digits.startsWith('855') ? `tel:+${digits}` : `tel:+855${digits.replace(/^0/, '')}`;
}

// The branch's filled-in numbers, or the main number if it has none.
function phonesFor(branch) {
  const list = (branch.phones || []).filter((p) => p && p.trim());
  return list.length ? list : [MAIN_PHONE];
}

// Function declaration, not const: it is hoisted, so code earlier in the file
// (the socials grid) can call it too.
function isPlaceholder(url) {
  return !url || url.startsWith('REPLACE_WITH');
}

// Best available review target: the direct review dialog, else the map pin.
function reviewUrl(branch) {
  return isPlaceholder(branch.review) ? branch.maps : branch.review;
}

// Never emit a placeholder as a real href. The fallback is the first branch
// that actually has a link — NOT BRANCHES[0], which may itself be unset.
function fallbackMaps() {
  const b = BRANCHES.find((x) => !isPlaceholder(x.maps));
  return b ? b.maps : '';
}
function mapsUrl(branch) {
  return isPlaceholder(branch.maps) ? fallbackMaps() : branch.maps;
}

// What a branch row actually points at: review dialog if set, else its map pin,
// else the main branch's pin. Guaranteed never to be a placeholder string.
function linkFor(branch) {
  const url = reviewUrl(branch);
  return isPlaceholder(url) ? mapsUrl(branch) : url;
}

// Which branch this visitor landed on. Print a different QR per branch and the
// customer never has to choose.
//   /tk          <- preferred: one path segment, matching a branch id
//   /?b=tk       <- still honoured, so QRs printed before the switch keep working
// An unknown slug returns undefined and the page falls back to the main view, so
// a typo'd or stale QR is never a dead end.
function branchFromUrl() {
  const slug = location.pathname.split('/')[1] || '';
  const id = slug || new URLSearchParams(location.search).get('b') || '';
  return id ? BRANCHES.find((b) => b.id === id.toLowerCase()) : undefined;
}

// ============ Branch label under the logo ============
(function initBranchLabel() {
  const el = document.getElementById('branch-label');
  const branch = branchFromUrl();
  if (!el || !branch) return;   // main URL: stays hidden
  el.textContent = `${branch.name} Branch`;
  el.hidden = false;
})();

// ============ Radial Orbital Timeline ============
// On a branch URL the nodes follow that branch; on the main page they cover all.
const HOME_BRANCH = branchFromUrl();

initSocials();

const orbitalData = [
  {
    id: 1,
    title: 'Directions',
    icon: 'map-pin',
    ...(HOME_BRANCH
      ? { info: `${HOME_BRANCH.name} · ${HOME_BRANCH.area}`, href: mapsUrl(HOME_BRANCH), cta: 'Open in Maps' }
      : { info: `${BRANCHES.length} branches in Phnom Penh · ${BRANCHES.map((b) => b.name).join(' · ')}` }),
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
    // Branch page: both of its numbers. Main page: one number per branch.
    ...(HOME_BRANCH
      ? {
          info: `Tap to call ${HOME_BRANCH.name} for reservations`,
          links: phonesFor(HOME_BRANCH).map((p) => ({ href: telHref(p), cta: `Call ${p}` })),
        }
      : {
          info: 'Tap to call a branch for reservations',
          links: BRANCHES.map((b) => {
            const p = phonesFor(b)[0];
            return { href: telHref(p), cta: `${b.name} · ${p}` };
          }),
        }),
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
    // A node has either a single href/cta or a list of links (e.g. 2 phone numbers).
    const links = item.links || (item.href ? [{ href: item.href, cta: item.cta }] : []);
    card.innerHTML = `
      <div class="orbital-card-title">${item.title}</div>
      <div class="orbital-card-body">${item.info}</div>
      ${links.map((l) => `<a class="orbital-card-cta" href="${l.href}" target="_blank" rel="noopener">${l.cta} <i data-lucide="arrow-right" style="width:14px;height:14px"></i></a>`).join(' ')}
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
  const cards = document.querySelectorAll('.card, .social-tile:not(.is-empty)');
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

(function initBranchPicker() {
  const card = document.getElementById('rate-card');
  const tray = document.getElementById('rate-tray');
  const list = document.getElementById('rate-branches');
  const sub = document.getElementById('rate-sub');
  const arrow = document.getElementById('rate-arrow');
  if (!card || !tray || !list || !sub || !arrow) return;

  // Every branch is listed, including ones whose links aren't filled in yet.
  // linkFor() keeps those pointing at the main branch, so no row is ever dead —
  // but the placeholder NAMES and ADDRESSES below are visible to visitors until
  // BRANCHES is filled in.
  const usable = BRANCHES.slice();

  const asked = branchFromUrl();
  const picked = asked && usable.includes(asked) ? asked : undefined;

  // Only one branch configured -> nothing to choose, stay a plain link.
  if (usable.length < 2) {
    if (usable[0]) card.href = linkFor(usable[0]);
    return;
  }

  // Deep-linked -> no need to ask, stay a plain one-tap link.
  if (picked) {
    card.href = linkFor(picked);
    sub.textContent = `Leave a review · ${picked.name}`;
    return;
  }

  // --- Dropdown: the card discloses the branch list underneath it. ---
  list.innerHTML = usable
    .map(
      (b) => `
      <a class="branch-item" href="${linkFor(b)}" target="_blank" rel="noopener" data-step="3">
        <span class="branch-item-pin"><i data-lucide="map-pin" style="width:15px;height:15px"></i></span>
        <span class="branch-item-text">
          <strong>${b.name}</strong>
          <span>${b.area}</span>
        </span>
        <i data-lucide="arrow-up-right" style="width:16px;height:16px"></i>
      </a>`
    )
    .join('');

  // The card becomes the disclosure trigger, not a link.
  card.removeAttribute('href');
  card.removeAttribute('target');
  card.removeAttribute('rel');
  card.removeAttribute('data-step');   // the rows inside carry the step instead
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-expanded', 'false');
  card.setAttribute('aria-controls', 'rate-branches');
  sub.textContent = 'Which one did you visit?';
  arrow.innerHTML = '<i data-lucide="chevron-down" class="w-[18px] h-[18px]"></i>';

  let closeTimer = null;
  function toggle() {
    const open = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', String(!open));
    card.classList.toggle('is-open', !open);
    arrow.classList.toggle('is-open', !open);
    clearTimeout(closeTimer);
    if (open) {
      tray.classList.remove('is-open');
      closeTimer = setTimeout(() => { tray.hidden = true; }, 260);
    } else {
      tray.hidden = false;
      void tray.offsetHeight;   // force layout so the transition actually runs
      tray.classList.add('is-open');
    }
  }

  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
       toggle();
    } else if (e.key === 'Escape' && card.getAttribute('aria-expanded') === 'true') {
      toggle();
    }
  });

  drawIcons();
})();

// ============ Directions: branch tabs over a map preview ============
(function initDirections() {
  const card = document.getElementById('dir-card');
  const tray = document.getElementById('dir-tray');
  const tabs = document.getElementById('dir-tabs');
  const frame = document.getElementById('dir-frame');
  const photo = document.getElementById('dir-photo');
  const hint = document.getElementById('dir-hint');
  const addressEl = document.getElementById('dir-address');
  const open = document.getElementById('dir-open');
  const arrow = document.getElementById('dir-arrow');
  if (!card || !tray || !tabs || !frame || !photo || !addressEl || !open || !arrow) return;

  // A missing or unset photo shows the placeholder rather than a broken image.
  photo.addEventListener('error', () => frame.classList.add('is-missing'));

  // Branch URL (/ifl …): only that branch, no tabs to choose from.
  // Main page: a tab per branch.
  const shown = HOME_BRANCH ? [HOME_BRANCH] : BRANCHES;
  tabs.hidden = shown.length < 2;
  tabs.innerHTML = shown.map(
    (b, i) =>
      `<button type="button" class="map-tab" role="tab" data-id="${b.id}" aria-selected="${i === 0}">${b.name}</button>`
  ).join('');

  let current = shown[0];
  let loaded = false;

  function showPhoto(b) {
    addressEl.textContent = b.address || b.area;
    if (hint) hint.textContent = `Add a photo for ${b.name}`;
    if (b.photo) {
      frame.classList.remove('is-missing');
      photo.alt = `${BUSINESS_NAME} — ${b.name} shopfront`;
      photo.src = b.photo;          // an error here flips it back to is-missing
    } else {
      frame.classList.add('is-missing');
      photo.removeAttribute('src');
      photo.alt = '';
    }
  }

  function select(b) {
    current = b;
    // subtitle stays fixed ("Rate and view us"); the branch is shown by the
    // selected tab and by the address over the photo.
    open.href = mapsUrl(b);
    tabs.querySelectorAll('.map-tab').forEach((t) => {
      t.setAttribute('aria-selected', String(t.dataset.id === b.id));
    });
    // only fetch the image once the tray has actually been opened
    if (loaded) showPhoto(b);
  }

  tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.map-tab');
    if (!tab) return;
    const b = BRANCHES.find((x) => x.id === tab.dataset.id);
    if (b) select(b);
  });

  let closeTimer = null;
  function toggle() {
    const isOpen = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', String(!isOpen));
    card.classList.toggle('is-open', !isOpen);
    arrow.classList.toggle('is-open', !isOpen);
    clearTimeout(closeTimer);
    if (isOpen) {
      tray.classList.remove('is-open');
      closeTimer = setTimeout(() => { tray.hidden = true; }, 260);
    } else {
      tray.hidden = false;
      // first open: this is when the photo is finally fetched
      if (!loaded) {
        loaded = true;
        showPhoto(current);
      }
      // Force layout between display:none -> grid and the class change.
      // Without this the browser batches both into one frame and skips the
      // transition entirely, so the tray just pops open.
      void tray.offsetHeight;
      tray.classList.add('is-open');
    }
  }

  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    } else if (e.key === 'Escape' && card.getAttribute('aria-expanded') === 'true') {
      toggle();
    }
  });

  select(current);
  drawIcons();
})();

drawIcons();

// ============ Marquee ============
// Runs after drawIcons() so the flame SVGs exist and the measured width is real.
// Clones the group until the strip is at least twice the bar's width, which is
// what makes the -50% loop seamless on any screen — two hardcoded copies gap on
// wide displays. Duration is derived from the width so speed stays constant.
(function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track || !track.firstElementChild) return;

  const PIXELS_PER_SECOND = 55;
  const proto = track.firstElementChild.cloneNode(true);

  function build() {
    track.replaceChildren(proto.cloneNode(true));
    const groupWidth = track.firstElementChild.offsetWidth;
    const barWidth = track.parentElement.offsetWidth;
    if (!groupWidth || !barWidth) return;

    // enough copies to cover the bar once...
    const copies = Math.max(1, Math.ceil(barWidth / groupWidth));
    for (let i = 1; i < copies; i++) track.appendChild(proto.cloneNode(true));
    // ...then mirror the whole run, so translateX(-50%) lands on an identical frame
    [...track.children].forEach((el) => track.appendChild(el.cloneNode(true)));

    track.style.animationDuration = `${(groupWidth * copies) / PIXELS_PER_SECOND}s`;
  }

  build();

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  }, { passive: true });
})();

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
