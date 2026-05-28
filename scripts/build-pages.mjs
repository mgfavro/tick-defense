import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  SERVICE_AREAS,
  SERVICES,
  RESOURCES,
  pageShell,
} from './site-layout.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function write(filePath, html) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf8');
}

function serviceBody(service) {
  return `
    <p>${service.intro}</p>
    <h2>How we protect your property</h2>
    <p>Our technicians apply a natural-based barrier treatment to key harborage areas—property edges, landscape beds, shaded zones, and zones where your family and pets spend time outdoors.</p>
    <ul>
      <li>Targeted applications based on your yard layout</li>
      <li>Recurring seasonal treatments for ongoing protection</li>
      <li>Pet- and family-conscious formulas when dry</li>
      <li>Local Northern Virginia service you can count on</li>
    </ul>
    <h2>Who it's for</h2>
    <p>Homeowners across Northern Virginia who want dependable outdoor protection without harsh, overpowering treatments. Ideal for families, pet owners, and anyone who loves spending time in the yard.</p>`;
}

function resourceBody(resource) {
  if (resource.slug === 'faqs') {
    return `
      <div class="faq-item"><h3>Are your treatments safe for pets?</h3><p>We use natural-based formulas designed with families and pets in mind. Keep pets off treated areas until dry; your technician will review specifics at service.</p></div>
      <div class="faq-item"><h3>How often should my yard be treated?</h3><p>Most residential plans include recurring seasonal treatments. Frequency depends on pest pressure, vegetation, and your chosen plan.</p></div>
      <div class="faq-item"><h3>Do you require a long-term contract?</h3><p>No. Our plans are flexible—no long-term contracts, and you can cancel anytime.</p></div>
      <div class="faq-item"><h3>What areas do you serve?</h3><p>We proudly serve Haymarket, Gainesville, Bristow, Manassas, Clifton, Leesburg, Ashburn, Middleburg, Warrenton, and surrounding Northern Virginia communities. <a href="/service-areas.html">View all service areas</a>.</p></div>`;
  }
  return `
    <p>${resource.intro}</p>
    <h2>Key takeaways</h2>
    <ul>
      <li>Reduce standing water and yard debris that harbor pests</li>
      <li>Keep grass trimmed and landscape beds maintained</li>
      <li>Check pets and family members after outdoor activity</li>
      <li>Pair prevention habits with professional barrier treatments</li>
    </ul>
    <p>Want hands-on help? Our team can assess your property and recommend a protection plan tailored to your yard.</p>`;
}

for (const service of SERVICES) {
  write(
    path.join(root, 'services', `${service.slug}.html`),
    pageShell({
      depth: 1,
      title: service.title,
      heroTitle: service.title,
      heroIntro: service.intro,
      bodyHtml: serviceBody(service),
    })
  );
}

for (const resource of RESOURCES) {
  write(
    path.join(root, 'resources', `${resource.slug}.html`),
    pageShell({
      depth: 1,
      title: resource.title,
      heroTitle: resource.title,
      heroIntro: resource.intro,
      bodyHtml: resourceBody(resource),
    })
  );
}

const areasCards = SERVICE_AREAS.map(
  (area) => `<div class="area-card">${area}</div>`
).join('');

write(
  path.join(root, 'service-areas.html'),
  pageShell({
    depth: 0,
    title: 'Service Areas',
    heroTitle: 'Service Areas',
    heroIntro: 'Proudly serving Northern Virginia homeowners, estates, and commercial properties.',
    bodyHtml: `
      <p>Natural Tick Defense provides tick, mosquito, and outdoor pest protection throughout Northern Virginia. If you don't see your town listed, contact us—we may still serve your area.</p>
      <div class="areas-grid" style="margin-top:32px">${areasCards}</div>
      <p style="margin-top:32px; text-align:center">Don't see your area? <a href="contact.html">Contact us</a> to confirm coverage.</p>`,
  })
);

const companyPages = [
  {
    file: 'about.html',
    title: 'About Us',
    intro: 'Natural protection for the outdoor spaces you love most.',
    body: `<p>Natural Tick Defense helps Northern Virginia families enjoy their yards with confidence. We specialize in natural-based tick, mosquito, and outdoor pest protection designed for residential properties, estates, and commercial outdoor spaces.</p>
      <h2>Our mission</h2>
      <p>We believe outdoor freedom shouldn't come with worry. Our team combines targeted treatments, local expertise, and responsive service so you can spend more time outside with the people and pets you love.</p>`,
  },
  {
    file: 'our-treatments.html',
    title: 'Our Treatments',
    intro: 'Natural-based barrier protection applied where pests live and travel.',
    body: `<p>Our treatments focus on the perimeter and harborage zones where ticks, mosquitoes, and other pests rest and travel—not indiscriminate spraying across your entire property.</p>
      <h2>What to expect</h2>
      <ul>
        <li>Thorough assessment of your yard and risk areas</li>
        <li>Natural-based formulas applied to targeted zones</li>
        <li>Clear guidance on re-entry timing for pets and family</li>
        <li>Recurring seasonal visits for lasting protection</li>
      </ul>`,
  },
  {
    file: 'reviews.html',
    title: 'Reviews',
    intro: 'See what Northern Virginia homeowners are saying.',
    body: `<p>We're grateful for every family who trusts us with their yard. Reviews highlight responsive scheduling, knowledgeable technicians, and noticeable improvement in outdoor comfort.</p>
      <p>Have a story to share? We'd love to hear from you after your next visit.</p>`,
  },
  {
    file: 'blog.html',
    title: 'Blog',
    intro: 'Tips, updates, and seasonal insights for outdoor living.',
    body: `<p>Visit our Resources section for prevention guides, pet safety information, and seasonal pest insights tailored to Northern Virginia.</p>
      <p><a href="resources/seasonal-guide.html">Read the Seasonal Guide →</a></p>`,
  },
  {
    file: 'contact.html',
    title: 'Contact Us',
    intro: "Questions about coverage, plans, or commercial properties? We're here to help.",
    body: `<p>Reach out to schedule service, request a quote, or ask about your property. We serve homeowners, estates, HOAs, and commercial outdoor spaces across Northern Virginia.</p>
      <p><strong>Phone:</strong> (703) 555-0123<br/><strong>Email:</strong> hello@naturaltickdefense.com</p>`,
  },
  {
    file: 'privacy.html',
    title: 'Privacy Policy',
    intro: 'How we collect and use your information.',
    body: `<p>Natural Tick Defense respects your privacy. Information submitted through our website or quote forms is used only to respond to your inquiry, provide service, and improve your customer experience.</p>
      <p>We do not sell your personal information to third parties.</p>`,
  },
  {
    file: 'terms.html',
    title: 'Terms of Service',
    intro: 'Terms governing use of our website and services.',
    body: `<p>By using this website and engaging our services, you agree to our standard service terms, scheduling policies, and payment terms provided at the time of enrollment.</p>
      <p>Service availability may vary by location and property type.</p>`,
  },
];

for (const page of companyPages) {
  write(
    path.join(root, page.file),
    pageShell({
      depth: 0,
      title: page.title,
      heroTitle: page.title,
      heroIntro: page.intro,
      bodyHtml: page.body,
    })
  );
}

console.log('Generated landing pages.');
