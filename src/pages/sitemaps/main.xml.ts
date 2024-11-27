export async function get() {
  const baseUrl = 'https://budprofiles.com';
  const today = new Date().toISOString().split('T')[0];

  const mainPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/strains',
    '/effects',
    '/medical',
    '/terpenes'
  ];

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${mainPages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}