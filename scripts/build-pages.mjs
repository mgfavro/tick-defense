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
  const file = 'logo.png';
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

  return `    <nav class="nav">
      <a href="${home}#how">How It Works</a>
      <a href="${home}#pricing">Plans &amp; Pricing</a>
      <a href="${home}#services">Services</a>
      <a href="${b}my-story.html">My Story</a>
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
    <div class="header-actions">
      <a href="${b}index.html#pricing" class="btn btn-primary">Choose My Plan</a>
      <a href="${b}franchise-opportunities.html" class="franchise-link">Franchise Opportunities</a>
    </div>
    <button type="button" class="menu-toggle" aria-label="Open menu" aria-expanded="false">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>`;
}

function mobileMenuHtml(depth) {
  const b = base(depth);
  const home = `${b}index.html`;
  return `<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-head">
    <div class="logo">
      <div class="logo-mark"><img src="${b}assets/images/logo-footer.png" alt="" class="logo-img" width="52" height="52" /></div>
      <div class="logo-text">
        <span class="l1">NATURAL</span>
        <span class="l2">TICK DEFENSE</span>
        <span class="l3">NATURAL PROTECTION. OUTDOOR FREEDOM.</span>
      </div>
    </div>
    <button type="button" class="mobile-menu-close" aria-label="Close menu">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <nav class="mobile-menu-links">
    <a href="${home}#pricing">Plans &amp; Pricing <span class="chev">&rsaquo;</span></a>
    <a href="${home}#services">Services <span class="chev">&rsaquo;</span></a>
    <a href="${b}services/hoa-commercial.html">Commercial &amp; HOA <span class="chev">&rsaquo;</span></a>
    <a href="${home}#how">How It Works <span class="chev">&rsaquo;</span></a>
    <a href="${b}franchise-opportunities.html">Franchise Opportunities <span class="chev">&rsaquo;</span></a>
    <a href="${b}my-story.html">My Story <span class="chev">&rsaquo;</span></a>
    <a href="${b}service-areas.html">Service Areas <span class="chev">&rsaquo;</span></a>
    <a href="${home}#pricing">Contact Us <span class="chev">&rsaquo;</span></a>
  </nav>
  <div class="mobile-menu-trust">
    <strong>Protection You Can Trust</strong>
    Our natural, eco-friendly treatments are safe for your family, pets, and the environment.
  </div>
</div>`;
}

function mobileBarHtml(depth) {
  const b = base(depth);
  const home = `${b}index.html`;
  return `<nav class="mobile-bar" aria-label="Quick actions">
  <a href="tel:+17036222450">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/></svg>
    Call
  </a>
  <a href="sms:+17036222450">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    Text
  </a>
  <a href="${home}#pricing">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
    Get Quote
  </a>
  <a href="${home}#pricing">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
    Plans
  </a>
</nav>`;
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
        <li><a href="${b}franchise-opportunities.html">Franchise Opportunities</a></li>
      </ul>
    </div>
    <div>
      <h6>My Story</h6>
      <ul>
        <li><a href="${b}my-story.html">From the Founder</a></li>
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

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobileMenu');
  var closeBtn = menu ? menu.querySelector('.mobile-menu-close') : null;
  function openMenu() { if (!menu) return; menu.classList.add('open'); document.body.style.overflow = 'hidden'; if (toggle) toggle.setAttribute('aria-expanded', 'true'); }
  function closeMenu() { if (!menu) return; menu.classList.remove('open'); document.body.style.overflow = ''; if (toggle) toggle.setAttribute('aria-expanded', 'false'); }
  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) menu.querySelectorAll('.mobile-menu-links a').forEach(function (a) { a.addEventListener('click', closeMenu); });
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
    line-height: 1; margin: 0; vertical-align: middle;
    display: inline-flex; align-items: center; gap: 4px;
    background: none; border: none; cursor: pointer; font-family: inherit; padding: 0;
  }
  .nav > a:hover, .nav-dropdown-trigger:hover { color: var(--green-dark); }
  .caret { font-size: 14px; line-height: 1; margin-left: 2px; }
  .header-actions { display: flex; align-items: center; gap: 20px; flex-shrink: 0; }
  .franchise-link {
    font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
    color: var(--green-dark); white-space: nowrap;
    border-left: 1px solid var(--border); padding-left: 20px;
  }
  .franchise-link:hover { color: var(--green-darker); text-decoration: underline; }
  .nav-dropdown { position: relative; display: inline-flex; align-items: center; }
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
  .btn-primary {
    position: relative;
    overflow: hidden;
    background: var(--green-dark);
    color: #fff;
    z-index: 0;
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--green-darker);
    transform: translateX(-101%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }
  .btn-primary:hover::before { transform: translateX(0); }
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
  .page-back {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
    color: var(--green-dark); margin-bottom: 24px;
    text-transform: uppercase;
  }
  .page-back span { font-size: 18px; line-height: 1; }
  .page-back:hover { color: var(--green-darker); text-decoration: underline; }
  .page-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px; color: var(--green-darker); margin: 32px 0 14px;
  }
  .page-content p, .page-content li {
    font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 14px;
  }
  .page-content ul { margin: 0 0 20px 20px; }
  .page-cta { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
  .story-closing {
    font-family: 'Playfair Display', serif;
    font-size: 32px; font-weight: 600;
    color: var(--green-darker);
    margin: 40px 0 12px;
    text-align: center;
  }
  .story-signature {
    font-size: 15px; color: var(--text-muted);
    text-align: center; line-height: 1.7;
    margin-bottom: 0;
  }
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
  .link-cards { display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 8px; }
  .link-card {
    display: grid; grid-template-columns: 1fr auto; align-items: center;
    column-gap: 16px; row-gap: 6px;
    background: #fff; border: 1px solid var(--border); border-radius: 8px;
    padding: 20px 22px; transition: box-shadow .2s, transform .2s, border-color .2s;
  }
  .link-card:hover { border-color: var(--green-dark); box-shadow: 0 8px 22px rgba(0,0,0,0.06); transform: translateY(-2px); }
  .link-card-title {
    grid-column: 1; font-weight: 700; font-size: 14px; letter-spacing: 1px;
    color: var(--green-darker); text-transform: uppercase;
  }
  .link-card-desc { grid-column: 1; font-size: 13px; color: var(--text-muted); line-height: 1.6; margin: 0; }
  .link-card-chev { grid-column: 2; grid-row: 1 / span 2; align-self: center; font-size: 26px; color: var(--green-dark); }
  .footer {
    background: #fff; color: var(--text-dark);
    padding: 50px 32px 28px; border-top: 1px solid var(--border);
  }
  .footer-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr 1.2fr; gap: 36px;
  }
  .areas-cta {
    display: inline-block; border: 1px solid var(--green-dark);
    color: var(--green-dark); padding: 8px 14px; font-size: 10px;
    letter-spacing: 1.2px; margin-top: 14px; border-radius: 3px;
    text-transform: uppercase; font-weight: 600;
  }
  .footer .logo-text .l1, .footer .logo-text .l2 { color: var(--green-dark); }
  .footer .logo-text .l3 { color: var(--text-muted); }
  .footer h6 {
    font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
    color: var(--green-dark); margin-bottom: 18px; text-transform: uppercase;
  }
  .footer ul { list-style: none; }
  .footer li { margin-bottom: 8px; }
  .footer li a {
    font-size: 12px; color: var(--text-dark);
    display: inline-block;
  }
  .footer li a:hover { color: var(--green-dark); }
  .footer-areas p { color: var(--text-muted) !important; }
  .footer-bottom {
    max-width: 1280px; margin: 36px auto 0; padding-top: 22px;
    border-top: 1px solid var(--border);
    font-size: 11px; color: var(--text-muted);
  }
  /* ============ MOBILE NAV + ACTION BAR ============ */
  .menu-toggle { display: none; background: none; border: none; cursor: pointer; padding: 6px; color: var(--green-darker); }
  .mobile-menu {
    display: none; position: fixed; inset: 0; background: var(--green-darker);
    z-index: 400; flex-direction: column; padding: 20px 24px 32px;
    transform: translateX(100%); transition: transform .3s ease; overflow-y: auto;
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .mobile-menu-head .logo-mark { width: 52px; height: 52px; }
  .mobile-menu-head .logo-text .l1, .mobile-menu-head .logo-text .l2 { color: #fff; font-size: 17px; }
  .mobile-menu-head .logo-text .l3 { color: rgba(255,255,255,0.6); font-size: 8px; }
  .mobile-menu-close { background: none; border: none; color: #fff; cursor: pointer; padding: 6px; line-height: 0; }
  .mobile-menu-links { display: flex; flex-direction: column; }
  .mobile-menu-links a {
    display: flex; align-items: center; justify-content: space-between; padding: 16px 2px;
    color: #fff; font-size: 16px; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  .mobile-menu-links a .chev { opacity: 0.5; font-size: 20px; }
  .mobile-menu-trust { margin-top: auto; padding-top: 24px; color: rgba(255,255,255,0.7); font-size: 12px; line-height: 1.6; }
  .mobile-menu-trust strong {
    display: block; color: #fff; font-family: 'Playfair Display', serif;
    font-size: 14px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px;
  }
  .mobile-bar {
    display: none; position: fixed; left: 0; right: 0; bottom: 0; background: var(--green-darker);
    z-index: 300; grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.14); padding-bottom: env(safe-area-inset-bottom);
  }
  .mobile-bar a {
    display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 10px 4px;
    color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
  }
  .mobile-bar a svg { width: 20px; height: 20px; }
  .mobile-bar a + a { border-left: 1px solid rgba(255,255,255,0.14); }

  @media (max-width: 1024px) {
    .nav { display: none; }
    .menu-toggle { display: inline-flex; }
    .header-actions { display: none; }
    .mobile-menu { display: flex; }
    .mobile-bar { display: grid; }
    body { padding-bottom: 60px; }
  }
`;

const FRANCHISE_STYLES = `
  .page-hero-ctas {
    margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;
    justify-content: center;
  }
  .page-hero .btn-outline {
    color: #fff; border-color: #fff;
  }
  .page-hero .btn-outline:hover {
    background: rgba(255,255,255,0.15); color: #fff;
  }
  .franchise-section {
    padding: 64px 32px;
    background: var(--cream-light);
  }
  .franchise-section.alt { background: #fff; }
  .franchise-section-inner {
    max-width: 960px; margin: 0 auto;
  }
  .franchise-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 600; color: var(--green-darker);
    margin-bottom: 16px; text-align: center;
  }
  .franchise-section .lead {
    font-size: 16px; color: var(--text-muted); line-height: 1.7;
    text-align: center; max-width: 720px; margin: 0 auto;
  }
  .franchise-steps {
    display: grid; grid-template-columns: 1fr; gap: 20px;
    margin-top: 40px;
  }
  .franchise-step {
    display: grid; grid-template-columns: 56px 1fr; gap: 20px;
    align-items: start; background: #fff;
    border: 1px solid var(--border); border-radius: 8px;
    padding: 24px 28px;
  }
  .franchise-section.alt .franchise-step { background: var(--cream-light); }
  .franchise-step-num {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--green-dark); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 600; flex-shrink: 0;
  }
  .franchise-step h3 {
    font-size: 14px; font-weight: 700; letter-spacing: 1.2px;
    text-transform: uppercase; color: var(--green-darker);
    margin-bottom: 8px;
  }
  .franchise-step p {
    font-size: 15px; color: var(--text-muted); line-height: 1.7; margin: 0;
  }
  .franchise-form-section {
    padding: 64px 32px 80px;
    background: var(--green-darker); color: #fff;
  }
  .franchise-form-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 600; margin-bottom: 12px; text-align: center;
  }
  .franchise-form-section .lead {
    font-size: 15px; color: rgba(255,255,255,0.85);
    text-align: center; max-width: 560px; margin: 0 auto 32px; line-height: 1.6;
  }
  .franchise-form {
    max-width: 520px; margin: 0 auto;
    display: flex; flex-direction: column; gap: 16px;
  }
  .franchise-form label {
    display: flex; flex-direction: column; gap: 6px;
    font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
    text-transform: uppercase; color: rgba(255,255,255,0.9);
  }
  .franchise-form input {
    padding: 12px 14px; border: 1px solid rgba(255,255,255,0.25);
    border-radius: 4px; background: rgba(255,255,255,0.08);
    color: #fff; font-family: inherit; font-size: 15px;
  }
  .franchise-form input::placeholder { color: rgba(255,255,255,0.45); }
  .franchise-form input:focus {
    outline: 2px solid rgba(255,255,255,0.5); outline-offset: 2px;
  }
  .franchise-form .btn { width: 100%; margin-top: 8px; cursor: pointer; border: none; }
  .franchise-contact {
    padding: 56px 32px; background: #fff;
    border-top: 1px solid var(--border); text-align: center;
  }
  .franchise-contact h2 {
    font-family: 'Playfair Display', serif;
    font-size: 24px; font-weight: 600; color: var(--green-darker);
    margin-bottom: 20px;
  }
  .franchise-contact-links {
    display: flex; flex-wrap: wrap; gap: 24px; justify-content: center;
    align-items: center;
  }
  .franchise-contact-links a {
    font-size: 14px; font-weight: 600; color: var(--green-dark);
    letter-spacing: 0.5px;
  }
  .franchise-contact-links a:hover { text-decoration: underline; }
  .franchise-contact-phone {
    font-size: 16px; font-weight: 600; color: var(--text-dark);
  }
  @media (max-width: 600px) {
    .page-hero h1 { font-size: 36px; }
    .franchise-step { grid-template-columns: 1fr; text-align: center; }
    .franchise-step-num { margin: 0 auto; }
  }
`;

function franchisePageHtml(depth) {
  const b = base(depth);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Franchise Opportunities — Natural Tick Defense</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${PAGE_STYLES}${FRANCHISE_STYLES}</style>
</head>
<body>
<!--
  INTERNAL NOTE (not rendered): Owner to supply final investment figures, real
  territory info, photos, and video before launch. Do NOT publish invented
  dollar amounts, ROI claims, or earnings figures.
-->
${headerHtml(depth)}
${mobileMenuHtml(depth)}

<!-- PLACEHOLDER FRANCHISE COPY — replace once owner provides final details -->

<section class="page-hero">
  <h1>Own a Natural Tick Defense Franchise</h1>
  <p>Build a business protecting families, pets, and the outdoors with eco-conscious tick and mosquito control.</p>
  <div class="page-hero-ctas">
    <a href="#guide" class="btn btn-primary">Download the Guide</a>
    <a href="#" class="btn btn-outline">Schedule a Call</a>
  </div>
</section>

<section class="franchise-section">
  <div class="franchise-section-inner">
    <h2>How to Start a Natural Tick Defense Franchise</h2>
    <p class="lead">Your path to ownership starts with a straightforward, no-pressure evaluation process designed to give you everything you need to make a confident decision. We'll walk alongside you at every stage.</p>
  </div>
</section>

<section class="franchise-section alt">
  <div class="franchise-section-inner">
    <h2>Steps to Ownership</h2>
    <div class="franchise-steps">
      <article class="franchise-step">
        <div class="franchise-step-num" aria-hidden="true">1</div>
        <div>
          <h3>Download the Franchise Guide</h3>
          <p>Get the full picture: business overview, investment details, market demand, the training and support we provide, and who makes an ideal owner.</p>
        </div>
      </article>
      <article class="franchise-step">
        <div class="franchise-step-num" aria-hidden="true">2</div>
        <div>
          <h3>Talk With Our Team</h3>
          <p>After you reach out, a franchise representative will connect with you to answer questions, review territory availability in your area, and explore whether this is the right fit.</p>
        </div>
      </article>
      <article class="franchise-step">
        <div class="franchise-step-num" aria-hidden="true">3</div>
        <div>
          <h3>Do Your Research</h3>
          <p>Dig deeper with a territory analysis and the chance to speak with current owners. This is a big decision and we want you to make it with full confidence.</p>
        </div>
      </article>
      <article class="franchise-step">
        <div class="franchise-step-num" aria-hidden="true">4</div>
        <div>
          <h3>Meet the Team</h3>
          <p>Qualified candidates are invited to spend time with our leadership to see the business model up close — operations, technology, marketing, and territory planning.</p>
        </div>
      </article>
      <article class="franchise-step">
        <div class="franchise-step-num" aria-hidden="true">5</div>
        <div>
          <h3>Training &amp; Launch</h3>
          <p>Once you're on board, you'll complete our onboarding and training program and build a local marketing plan, with dedicated support through your first year.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="franchise-form-section" id="guide">
  <div class="franchise-section-inner">
    <h2>Start Your Journey</h2>
    <p class="lead">Complete the form to download the Franchise Guide. A member of our team will be in touch.</p>
    <!-- TODO: wire to GHL/Jobber webhook -->
    <form class="franchise-form" action="#" method="post" aria-label="Franchise guide request" onsubmit="event.preventDefault();">
      <label>
        Name
        <input type="text" name="name" autocomplete="name" placeholder="Your full name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" autocomplete="email" placeholder="you@example.com" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" autocomplete="tel" placeholder="(555) 555-5555" />
      </label>
      <label>
        Location
        <input type="text" name="location" autocomplete="address-level2" placeholder="City, State" />
      </label>
      <button type="submit" class="btn btn-primary">Download the Guide</button>
    </form>
  </div>
</section>

<section class="franchise-contact">
  <h2>We're Here to Help</h2>
  <div class="franchise-contact-links">
    <span class="franchise-contact-phone">Customer Support: <a href="tel:+15406809693">(540) 680-9693</a></span>
    <a href="#">Contact Us</a>
    <a href="#">Schedule a Call</a>
  </div>
</section>

<!-- END PLACEHOLDER FRANCHISE COPY -->

${footerHtml(depth)}
${mobileBarHtml(depth)}
${NAV_SCRIPT}
</body>
</html>`;
}

function pageHtml({ depth, title, heroTitle, heroIntro, body, backHref, backLabel }) {
  const b = base(depth);
  const backLink = backHref
    ? `<a href="${backHref}" class="page-back"><span aria-hidden="true">&lsaquo;</span> ${backLabel}</a>\n    `
    : '';
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
${mobileMenuHtml(depth)}
<section class="page-hero">
  <h1>${heroTitle}</h1>
  <p>${heroIntro}</p>
</section>
<section class="page-content">
  <div class="page-content-inner">
    ${backLink}${body}
    <div class="page-cta">
      <a href="${b}index.html#pricing" class="btn btn-primary">Choose My Plan</a>
      <a href="${b}index.html#pricing" class="btn btn-outline">View Pricing</a>
    </div>
  </div>
</section>
${footerHtml(depth)}
${mobileBarHtml(depth)}
${NAV_SCRIPT}
</body>
</html>`;
}

function myStoryBody() {
  return `<p>It was just another evening in my backyard in Haymarket, Virginia. My son, my dog, and I were outside enjoying the fresh air. My son was playing, my dog was running through the yard, and it felt like the perfect way to end the day. None of us noticed the tiny tick hidden in the grass. I never felt it bite me, and I had no idea that one tiny insect was about to change everything.</p>
    <p>A few days later, I found the tick attached to my skin and removed it, thinking little of it. But over the following weeks, I began feeling exhausted. Headaches became more frequent, my muscles and joints ached, and I simply didn't feel like myself. I brushed it off as stress and long days, but the symptoms only became worse.</p>
    <p>Concerned, I went to the hospital. Doctors examined me, asked about the tick bite, and ordered blood work. They explained that many tick-borne illnesses don't always show up immediately on tests, so I was sent home and told to closely monitor my symptoms.</p>
    <p>Unfortunately, things continued to decline.</p>
    <p>Over the next several weeks, I made multiple trips back to the hospital and my doctor's office. More blood was drawn. More tests were ordered. More questions were asked. Doctors evaluated me for several tick-borne illnesses while I waited anxiously for answers. Every visit brought uncertainty, and every new symptom reminded me that something so small could have such a major impact on my life.</p>
    <p>Thankfully, with continued medical care, treatment, and follow-up, I began to recover. But the experience changed the way I look at my own backyard forever.</p>
    <p>The hardest part wasn't just wondering what was happening to me—it was realizing that the same yard where my son played and my dog ran every day could expose the people I love most to the very same danger.</p>
    <p>That experience became the inspiration behind Natural Tick Defense. I never wanted another family to go through the fear, uncertainty, and countless medical visits that can follow a single tick bite. My mission is simple: help families reclaim their backyards with a safer, natural approach to tick and mosquito control.</p>
    <p>A tick doesn't care if you're mowing the lawn, playing catch with your child, or watching your dog chase a ball. It only takes one bite.</p>
    <p class="story-closing">Defend Your Yard.</p>
    <p class="story-signature">— Reese Gardner<br/>Founder, Natural Tick Defense</p>`;
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
    pageHtml({
      depth: 1,
      title: s.title,
      heroTitle: s.title,
      heroIntro: s.intro,
      body: serviceBody(s),
      backHref: `${base(1)}index.html#services`,
      backLabel: 'Back to Services',
    })
  );
}

for (const r of RESOURCES) {
  write(
    path.join(root, 'resources', `${r.slug}.html`),
    pageHtml({
      depth: 1,
      title: r.title,
      heroTitle: r.title,
      heroIntro: r.intro,
      body: resourceBody(r),
      backHref: `${base(1)}my-story.html`,
      backLabel: 'Back to My Story',
    })
  );
}

write(
  path.join(root, 'my-story.html'),
  pageHtml({
    depth: 0,
    title: 'My Story',
    heroTitle: 'From the Founder, Reese Gardner',
    heroIntro: 'One Tick. One Bite. A Summer Changed.',
    body: myStoryBody(),
  })
);

const areasCards = SERVICE_AREAS.map((area) => `<div class="area-card">${area}</div>`).join('\n      ');

write(
  path.join(root, 'service-areas.html'),
  pageHtml({
    depth: 0,
    title: 'Service Areas',
    heroTitle: 'Service Areas',
    heroIntro: 'Proudly serving Northern Virginia homeowners, estates, and commercial properties.',
    body: `<p>Natural Tick Defense provides tick, mosquito, and outdoor pest protection throughout Northern Virginia. If you don't see your county listed, contact us—we may still serve your area.</p>
      <div class="areas-grid">${areasCards}</div>
      <p style="margin-top:28px">Don't see your area and interested in coverage? Please email us at <a href="mailto:info@naturaltickdefense.com">info@naturaltickdefense.com</a></p>`,
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

write(path.join(root, 'franchise-opportunities.html'), franchisePageHtml(0));

console.log('Built', SERVICES.length + RESOURCES.length + 4, 'landing pages.');
