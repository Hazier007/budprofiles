import { strains } from '../../data/strains';

export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  // Generate all possible strain comparison combinations
  const comparisons = [];
  for (let i = 0; i < strains.length; i++) {
    for (let j = i + 1; j < strains.length; j++) {
      const strain1 = strains[i].name.toLowerCase().replace(/\s+/g, '-');
      const strain2 = strains[j].name.toLowerCase().replace(/\s+/g, '-');
      comparisons.push(`/compare/${strain1}/vs/${strain2}`);
    }
  }

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${comparisons.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('')}
</urlset>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}