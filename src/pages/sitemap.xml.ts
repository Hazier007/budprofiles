import { strains } from '../data/strains';

const pages = [
  '',
  '/strains',
  '/effects',
  '/medical',
  '/terpenes',
  '/strains/type/indica',
  '/strains/type/sativa',
  '/strains/type/hybrid'
];

export async function get() {
  const strainUrls = strains.map(strain => `/strains/${strain.name.toLowerCase().replace(/\s+/g, '-')}`);
  const allUrls = [...pages, ...strainUrls];

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>https://budprofiles.com${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>${url === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}