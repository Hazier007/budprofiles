import { strains } from '../../data/strains';

export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  // Get all unique effects
  const effects = new Set();
  strains.forEach(strain => {
    Object.keys(strain.effects.positive).forEach(effect => effects.add(effect));
  });

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...effects].map(effect => `
    <url>
      <loc>${baseUrl}/effects/${effect}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('')}
</urlset>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}