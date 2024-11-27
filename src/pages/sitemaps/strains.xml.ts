import { strains } from '../../data/strains';

export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  const strainUrls = strains.map(strain => {
    const urlName = strain.name.toLowerCase().replace(/\s+/g, '-');
    return [
      `/strains/${urlName}`,
      `/strains/${urlName}/effects`,
      `/strains/${urlName}/thc`,
      `/strains/${urlName}/reviews`,
      `/strains/${urlName}/seeds`,
      `/strains/${urlName}/flowering-time`
    ];
  }).flat();

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${strainUrls.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}