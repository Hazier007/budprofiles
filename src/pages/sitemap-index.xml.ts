import { strains } from '../data/strains';

export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  // Generate all possible strain comparison combinations
  const comparisons = [];
  for (let i = 0; i < strains.length; i++) {
    for (let j = i + 1; j < strains.length; j++) {
      comparisons.push(`${strains[i].name}-vs-${strains[j].name}`);
    }
  }

  const sitemaps = [
    'main',
    'strains',
    'effects',
    'medical',
    'terpenes',
    'comparisons'
  ];

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(type => `
    <sitemap>
      <loc>${baseUrl}/sitemaps/${type}.xml</loc>
      <lastmod>${today}</lastmod>
    </sitemap>
  `).join('')}
</sitemapindex>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}