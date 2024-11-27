import { strains } from '../../data/strains';

export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  // Get all unique terpenes
  const terpenes = new Set(strains.map(strain => strain.most_common_terpene));

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...terpenes].map(terpene => `
    <url>
      <loc>${baseUrl}/terpenes/${terpene.toLowerCase()}</loc>
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