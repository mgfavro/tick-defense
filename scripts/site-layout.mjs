export const SERVICE_AREAS = [
  'Haymarket',
  'Gainesville',
  'Bristow',
  'Manassas',
  'Clifton',
  'Leesburg',
  'Ashburn',
  'Middleburg',
  'Warrenton',
  'Centreville',
  'Fairfax',
  'Vienna',
  'McLean',
  'Great Falls',
  'Purcellville',
  'Round Hill',
  'Aldie',
  'South Riding',
  'Nokesville',
  'Dumfries',
];

export const SERVICES = [
  { title: 'Tick Control', slug: 'tick-control', intro: 'Reduce tick populations around your home and reclaim your yard with natural-based barrier treatments.' },
  { title: 'Mosquito Control', slug: 'mosquito-control', intro: 'Enjoy patios, play areas, and outdoor gatherings with fewer mosquito bites all season long.' },
  { title: 'Flea Control', slug: 'flea-control', intro: 'Target fleas in yard harborage areas to help keep pets and family more comfortable outdoors.' },
  { title: 'Ant Treatment', slug: 'ant-treatment', intro: 'Eliminate ant activity along foundations, walkways, and landscape beds around your property.' },
  { title: 'Deer Repellent', slug: 'deer-repellent', intro: 'Protect ornamental plantings and landscaping from deer browsing with professional applications.' },
  { title: 'Estate Protection', slug: 'estate-protection', intro: 'Comprehensive protection programs designed for larger properties, wooded acreage, and estate living.' },
  { title: 'HOA & Commercial', slug: 'hoa-commercial', intro: 'Custom tick and mosquito programs for HOAs, restaurants, wineries, resorts, and commercial outdoor spaces.' },
];

export const RESOURCES = [
  { title: 'Tick Prevention Tips', slug: 'tick-prevention-tips', intro: 'Practical steps to reduce tick exposure for your family, pets, and yard.' },
  { title: 'Mosquito Prevention Tips', slug: 'mosquito-prevention-tips', intro: 'Simple habits and yard practices that help limit mosquito breeding and resting sites.' },
  { title: 'Pet Safety', slug: 'pet-safety', intro: 'What pet owners should know before, during, and after outdoor pest treatments.' },
  { title: 'Seasonal Guide', slug: 'seasonal-guide', intro: 'A month-by-month look at pest pressure and protection across Northern Virginia.' },
  { title: 'FAQs', slug: 'faqs', intro: 'Answers to common questions about our treatments, scheduling, and service areas.' },
];

export function prefix(depth) {
  return depth ? '../'.repeat(depth) : '/';
}

export function headerHtml(depth) {
  const p = prefix(depth);
  const home = depth ? `${p}index.html` : '/';
  const serviceLinks = SERVICES.map(
    (s) => `<a href="${p}services/${s.slug}.html">${s.title}</a>`
  ).join('');
  const resourceLinks = RESOURCES.map(
    (r) => `<a href="${p}resources/${r.slug}.html">${r.title}</a>`
  ).join('');

  return `<header class="site-header">
  <div class="header-inner">
    <a href="${home}" class="logo">
      <div class="logo-mark">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f3a26" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="12" cy="13" rx="5" ry="6"/>
          <path d="M12 7V4M9 5L7 3M15 5l2-2M7 11l-3-1M17 11l3-1M7 15l-3 1M17 15l3 1M9 19l-1 2M15 19l1 2"/>
        </svg>
      </div>
      <div class="logo-text">
        <span class="l1">NATURAL</span>
        <span class="l2">TICK DEFENSE</span>
        <span class="l3">NATURAL PROTECTION. OUTDOOR FREEDOM.</span>
      </div>
    </a>
    <button type="button" class="menu-toggle" aria-label="Open menu">Menu</button>
    <nav class="nav">
      <div class="nav-dropdown">
        <button type="button" class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">Services <span class="caret">▾</span></button>
        <div class="nav-dropdown-menu">${serviceLinks}</div>
      </div>
      <a href="${home}#how">How It Works</a>
      <a href="${home}#pricing">Plans &amp; Pricing</a>
      <a href="${p}about.html">About Us</a>
      <div class="nav-dropdown">
        <button type="button" class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">Resources <span class="caret">▾</span></button>
        <div class="nav-dropdown-menu">${resourceLinks}</div>
      </div>
      <a href="${p}service-areas.html">Service Areas</a>
    </nav>
    <a href="${home}#pricing" class="btn btn-primary">Choose My Plan</a>
  </div>
</header>`;
}

export function footerHtml(depth) {
  const p = prefix(depth);
  const home = depth ? `${p}index.html` : '/';
  const serviceItems = SERVICES.map(
    (s) => `<li><a href="${p}services/${s.slug}.html">${s.title}</a></li>`
  ).join('');
  const resourceItems = RESOURCES.map(
    (r) => `<li><a href="${p}resources/${r.slug}.html">${r.title}</a></li>`
  ).join('');
  const areaPreview = SERVICE_AREAS.slice(0, 8).join(' • ');

  return `<footer class="footer">
  <div class="footer-inner">
    <div>
      <a href="${home}" class="logo">
        <div class="logo-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6">
            <ellipse cx="12" cy="13" rx="5" ry="6"/>
            <path d="M12 7V4M9 5L7 3M15 5l2-2M7 11l-3-1M17 11l3-1M7 15l-3 1M17 15l3 1M9 19l-1 2M15 19l1 2"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="l1">NATURAL</span>
          <span class="l2">TICK DEFENSE</span>
          <span class="l3">NATURAL PROTECTION. OUTDOOR FREEDOM.</span>
        </div>
      </a>
      <div class="socials">
        <a class="social" href="#">f</a>
        <a class="social" href="#">◎</a>
        <a class="social" href="#">G</a>
      </div>
    </div>
    <div>
      <h6>Services</h6>
      <ul>${serviceItems}</ul>
    </div>
    <div>
      <h6>Company</h6>
      <ul>
        <li><a href="${p}about.html">About Us</a></li>
        <li><a href="${p}our-treatments.html">Our Treatments</a></li>
        <li><a href="${p}reviews.html">Reviews</a></li>
        <li><a href="${p}service-areas.html">Service Areas</a></li>
        <li><a href="${p}blog.html">Blog</a></li>
        <li><a href="${p}contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h6>Resources</h6>
      <ul>${resourceItems}</ul>
    </div>
    <div class="footer-areas">
      <h6>Service Areas</h6>
      <p style="font-size:12px; color:rgba(255,255,255,0.7); margin-bottom:10px;">Proudly serving Northern Virginia</p>
      <p style="font-size:12px; color:rgba(255,255,255,0.7); line-height:1.6;">${areaPreview} and surrounding areas</p>
      <a href="${p}service-areas.html" class="areas-cta">View All Areas →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Natural Tick Defense. All rights reserved.</span>
    <div class="links">
      <a href="${p}privacy.html">Privacy Policy</a>
      <span>|</span>
      <a href="${p}terms.html">Terms of Service</a>
    </div>
  </div>
</footer>`;
}

export function pageShell({ depth, title, heroTitle, heroIntro, bodyHtml }) {
  const p = prefix(depth);
  const css = depth ? `${p}css/main.css` : '/css/main.css';
  const js = depth ? `${p}js/main.js` : '/js/main.js';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — Natural Tick Defense</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${css}" />
</head>
<body>
${headerHtml(depth)}
<section class="page-hero">
  <h1>${heroTitle}</h1>
  <p>${heroIntro}</p>
</section>
<section class="page-content">
  <div class="page-content-inner">
    ${bodyHtml}
    <div class="page-cta">
      <a href="${depth ? `${p}index.html` : '/'}#pricing" class="btn btn-primary">Choose My Plan</a>
      <a href="${p}contact.html" class="btn btn-outline">Contact Us</a>
    </div>
  </div>
</section>
${footerHtml(depth)}
<script src="${js}"></script>
</body>
</html>`;
}
