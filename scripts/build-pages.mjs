import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES, RESOURCES, SERVICE_AREAS } from './site-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function base(depth) {
  return depth ? '../'.repeat(depth) : '';
}

function logoBlock(depth, variant = 'header') {
  const b = base(depth);
  const file = variant === 'footer' ? 'logo-footer.png' : 'logo.png';
  const markClass = 'logo-mark';
  const size = variant === 'footer' ? 72 : 68;
  return `      <div class="${markClass}">
        <img src="${b}assets/images/${file}" alt="" class="logo-img" width="${size}" height="${size}" />
      </div>
      <div class="logo-text">
        <span class="l1">NATURAL</span>
        <span class="l2">TICK DEFENSE</span>
        <span class="l3">NATURAL PROTECTION. OUTDOOR FREEDOM.</span>
      </div>`;
}

function navHtml(depth) {
  const b = base(depth);
  const home = `${b}index.html`;
  const serviceLinks = SERVICES.map(
    (s) => `<a href="${b}services/${s.slug}.html">${s.title}</a>`
  ).join('\n          ');
  const resourceLinks = RESOURCES.map(
    (r) => `<a href="${b}resources/${r.slug}.html">${r.title}</a>`
  ).join('\n          ');

  return `    <nav class="nav">
      <div class="nav-dropdown">
        <button type="button" class="nav-dropdown-trigger" aria-haspopup="true">Services <span class="caret">▾</span></button>
        <div class="nav-dropdown-menu">
          ${serviceLinks}
        </div>
      </div>
      <a href="${home}#how">How It Works</a>
      <a href="${home}#pricing">Plans &amp; Pricing</a>
      <a href="${b}about.html">About Us</a>
      <div class="nav-dropdown">
        <button type="button" class="nav-dropdown-trigger" aria-haspopup="true">Resources <span class="caret">▾</span></button>
        <div class="nav-dropdown-menu">
          ${resourceLinks}
        </div>
      </div>
      <a href="${b}service-areas.html">Service Areas</a>
    </nav>`;
}

function headerHtml(depth) {
  const b = base(depth);
  return `<header class="site-header">
  <div class="header-inner">
    <a href="${b}index.html" class="logo">
${logoBlock(depth)}
    </a>
${navHtml(depth)}
    <a href="${b}index.html#pricing" class="btn btn-primary">Choose My Plan</a>
  </div>
</header>`;
}

function footerHtml(depth) {
  const b = base(depth);
  const home = `${b}index.html`;
  return `<footer class="footer">
  <div class="footer-inner">
    <div>
      <a href="${home}" class="logo">
${logoBlock(depth, 'footer')}
      </a>
    </div>
    <div>
      <h6>Services</h6>
      <ul>
        ${SERVICES.map((s) => `<li><a href="${b}services/${s.slug}.html">${s.title}</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div>
      <h6>Company</h6>
      <ul>
        <li><a href="${b}about.html">About Us</a></li>
        <li><a href="${home}#services">Our Treatments</a></li>
        <li><a href="${home}">Reviews</a></li>
        <li><a href="${b}service-areas.html">Service Areas</a></li>
        <li><a href="${home}">Blog</a></li>
        <li><a href="${home}#pricing">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h6>Resources</h6>
      <ul>
        ${RESOURCES.map((r) => `<li><a href="${b}resources/${r.slug}.html">${r.title}</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div class="footer-areas">
      <h6>Service Areas</h6>
      <p style="font-size:12px; color:rgba(255,255,255,0.7); margin-bottom:10px;">Proudly serving Northern Virginia</p>
      <a href="${b}service-areas.html" class="areas-cta">View All Areas →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Natural Tick Defense. All rights reserved.</span>
  </div>
</footer>`;
}

const NAV_SCRIPT = `<script>
(function () {
  var delay = 300;
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var trigger = dd.querySelector('.nav-dropdown-trigger');
    var menu = dd.querySelector('.nav-dropdown-menu');
    var timer;
    function open() { clearTimeout(timer); dd.classList.add('open'); }
    function close() { timer = setTimeout(function () { dd.classList.remove('open'); }, delay); }
    dd.addEventListener('mouseenter', open);
    dd.addEventListener('mouseleave', close);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', close);
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      dd.classList.toggle('open');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
    }
  });
})();
</script>`;

const PAGE_STYLES = `
  :root {
    --green-dark: #1f3a26;
    --green-darker: #15291a;
    --cream-light: #faf7f0;
    --text-dark: #1a2e1f;
    --text-muted: #5a6b5e;
    --border: #d9d2c2;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--text-dark);
    background: var(--cream-light);
    line-height: 1.5;
  }
  a { color: inherit; text-decoration: none; }
  .site-header {
    background: var(--cream-light);
    border-bottom: 1px solid rgba(0,0,0,0.04);
    position: sticky; top: 0; z-index: 200;
  }
  .header-inner {
    max-width: 1280px; margin: 0 auto;
    padding: 18px 32px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px;
  }
  .logo { display: flex; align-items: center; gap: 12px; }
  .logo-mark {
    width: 68px; height: 68px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: transparent; border: none;
  }
  .logo-mark .logo-img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .logo-text .l1, .logo-text .l2 {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700; color: var(--green-dark);
  }
  .logo-text .l2 { display: block; margin-top: 2px; }
  .logo-text .l3 {
    font-size: 8px; font-weight: 600; color: var(--text-muted);
    letter-spacing: 1.5px; display: block; margin-top: 4px;
  }
  .nav { display: flex; align-items: center; gap: 32px; }
  .nav > a, .nav-dropdown-trigger {
    font-size: 14px; font-weight: 500; color: var(--text-dark);
    display: inline-flex; align-items: center; gap: 4px;
    background: none; border: none; cursor: pointer; font-family: inherit; padding: 0;
  }
  .nav > a:hover, .nav-dropdown-trigger:hover { color: var(--green-dark); }
  .caret { font-size: 14px; line-height: 1; margin-left: 2px; }
  .nav-dropdown { position: relative; }
  .nav-dropdown-menu {
    position: absolute; top: calc(100% + 4px); left: 0;
    min-width: 240px; background: #fff; border: 1px solid var(--border);
    border-radius: 8px; box-shadow: 0 12px 32px rgba(0,0,0,0.12);
    padding: 8px 0; opacity: 0; visibility: hidden;
    transform: translateY(6px); transition: opacity .2s, visibility .2s, transform .2s;
    z-index: 250; pointer-events: none;
  }
  .nav-dropdown-menu::before {
    content: ''; position: absolute; left: 0; right: 0; top: -14px; height: 14px;
  }
  .nav-dropdown.open .nav-dropdown-menu {
    opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto;
  }
  .nav-dropdown-menu a {
    display: block; padding: 10px 18px; font-size: 13px; font-weight: 500;
  }
  .nav-dropdown-menu a:hover { background: #f5f1e8; color: var(--green-dark); }
  .btn {
    display: inline-block; padding: 14px 28px; border-radius: 4px;
    font-size: 13px; font-weight: 600; letter-spacing: 1px;
    text-transform: uppercase; text-align: center;
  }
  .btn-primary { background: var(--green-dark); color: #fff; }
  .btn-primary:hover { background: var(--green-darker); }
  .btn-outline {
    background: transparent; color: var(--green-dark);
    border: 1.5px solid var(--green-dark);
  }
  .page-hero {
    background: var(--green-darker); color: #fff;
    padding: 72px 32px 64px; text-align: center;
  }
  .page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 48px; font-weight: 600; margin-bottom: 16px;
  }
  .page-hero p {
    font-size: 17px; color: rgba(255,255,255,0.85);
    max-width: 640px; margin: 0 auto; line-height: 1.6;
  }
  .page-content { padding: 64px 32px 80px; }
  .page-content-inner { max-width: 800px; margin: 0 auto; }
  .page-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px; color: var(--green-darker); margin: 32px 0 14px;
  }
  .page-content p, .page-content li {
    font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 14px;
  }
  .page-content ul { margin: 0 0 20px 20px; }
  .page-cta { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
  .areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 14px;
    margin-top: 28px;
  }
  .area-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 18px 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--green-darker);
    text-align: center;
  }
  .footer {
    background: var(--green-darker); color: rgba(255,255,255,0.8);
    padding: 50px 32px 28px;
  }
  .footer-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr 1.2fr; gap: 36px;
  }
  .areas-cta {
    display: inline-block; border: 1px solid rgba(255,255,255,0.4);
    color: #fff; padding: 8px 14px; font-size: 10px;
    letter-spacing: 1.2px; margin-top: 14px; border-radius: 3px;
    text-transform: uppercase; font-weight: 600;
  }
  .footer .logo-text .l1, .footer .logo-text .l2 { color: #fff; }
  .footer .logo-text .l3 { color: rgba(255,255,255,0.6); }
  .footer h6 {
    font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
    color: #fff; margin-bottom: 18px; text-transform: uppercase;
  }
  .footer ul { list-style: none; }
  .footer li { margin-bottom: 8px; }
  .footer li a {
    font-size: 12px; color: rgba(255,255,255,0.7);
    display: inline-block;
  }
  .footer li a:hover { color: #fff; }
  .footer-bottom {
    max-width: 1280px; margin: 36px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,0.08);
    font-size: 11px; color: rgba(255,255,255,0.5);
  }
  @media (max-width: 1024px) { .nav { display: none; } }
`;

function pageHtml({ depth, title, heroTitle, heroIntro, body }) {
  const b = base(depth);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — Natural Tick Defense</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${PAGE_STYLES}</style>
</head>
<body>
${headerHtml(depth)}
<section class="page-hero">
  <h1>${heroTitle}</h1>
  <p>${heroIntro}</p>
</section>
<section class="page-content">
  <div class="page-content-inner">
    ${body}
    <div class="page-cta">
      <a href="${b}index.html#pricing" class="btn btn-primary">Choose My Plan</a>
      <a href="${b}index.html#pricing" class="btn btn-outline">View Pricing</a>
    </div>
  </div>
</section>
${footerHtml(depth)}
${NAV_SCRIPT}
</body>
</html>`;
}

function serviceBody(s) {
  return `<p>${s.intro}</p>
    <h2>How we protect your property</h2>
    <p>Our technicians apply a natural-based barrier treatment to key harborage areas—property edges, landscape beds, shaded zones, and areas where your family and pets spend time outdoors.</p>
    <ul>
      <li>Targeted applications based on your yard layout</li>
      <li>Recurring seasonal treatments for ongoing protection</li>
      <li>Pet- and family-conscious formulas when dry</li>
      <li>Local Northern Virginia service you can count on</li>
    </ul>`;
}

function resourceBody(r) {
  if (r.slug === 'faqs') {
    return `<p>${r.intro}</p>
      <h2>Common questions</h2>
      <p><strong>Are your treatments safe for pets?</strong><br/>We use natural-based formulas designed with families and pets in mind. Keep pets off treated areas until dry.</p>
      <p><strong>How often should my yard be treated?</strong><br/>Most residential plans include recurring seasonal treatments based on pest pressure and your chosen plan.</p>
      <p><strong>Do you require a long-term contract?</strong><br/>No long-term contracts—cancel anytime.</p>`;
  }
  return `<p>${r.intro}</p>
    <h2>Key takeaways</h2>
    <ul>
      <li>Reduce standing water and yard debris that harbor pests</li>
      <li>Keep grass trimmed and landscape beds maintained</li>
      <li>Check pets and family after outdoor activity</li>
      <li>Pair prevention habits with professional barrier treatments</li>
    </ul>`;
}

function write(filePath, html) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf8');
}

for (const s of SERVICES) {
  write(
    path.join(root, 'services', `${s.slug}.html`),
    pageHtml({ depth: 1, title: s.title, heroTitle: s.title, heroIntro: s.intro, body: serviceBody(s) })
  );
}

for (const r of RESOURCES) {
  write(
    path.join(root, 'resources', `${r.slug}.html`),
    pageHtml({ depth: 1, title: r.title, heroTitle: r.title, heroIntro: r.intro, body: resourceBody(r) })
  );
}

const areasCards = SERVICE_AREAS.map((area) => `<div class="area-card">${area}</div>`).join('\n      ');

write(
  path.join(root, 'service-areas.html'),
  pageHtml({
    depth: 0,
    title: 'Service Areas',
    heroTitle: 'Service Areas',
    heroIntro: 'Proudly serving Northern Virginia homeowners, estates, and commercial properties.',
    body: `<p>Natural Tick Defense provides tick, mosquito, and outdoor pest protection throughout Northern Virginia. If you don't see your town listed, contact us—we may still serve your area.</p>
      <div class="areas-grid">${areasCards}</div>
      <p style="margin-top:28px">Don't see your area? Call us to confirm coverage for your property.</p>`,
  })
);

write(
  path.join(root, 'about.html'),
  pageHtml({
    depth: 0,
    title: 'About Us',
    heroTitle: 'About Us',
    heroIntro: 'Natural protection for the outdoor spaces you love most.',
    body: `<p>Natural Tick Defense helps Northern Virginia families enjoy their yards with confidence. We specialize in natural-based tick, mosquito, and outdoor pest protection for residential properties, estates, and commercial outdoor spaces.</p>
      <h2>Our mission</h2>
      <p>We believe outdoor freedom shouldn't come with worry. Our team combines targeted treatments, local expertise, and responsive service so you can spend more time outside with the people and pets you love.</p>
      <h2>What sets us apart</h2>
      <ul>
        <li>Natural-based barrier treatments applied to key harborage areas</li>
        <li>Plans designed for families, pets, and the environment</li>
        <li>No long-term contracts—cancel anytime</li>
        <li>Local Northern Virginia service you can count on</li>
      </ul>`,
  })
);

console.log('Built', SERVICES.length + RESOURCES.length + 2, 'landing pages.');
