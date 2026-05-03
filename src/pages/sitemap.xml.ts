import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = import.meta.env.SITE || 'https://ia-tools-web.pages.dev';

  const posts = await getCollection('blog');
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/aviso-legal', priority: '0.3', changefreq: 'yearly' },
    { url: '/politica-privacidad', priority: '0.3', changefreq: 'yearly' },
    { url: '/politica-cookies', priority: '0.3', changefreq: 'yearly' },
    { url: '/terminos-uso', priority: '0.3', changefreq: 'yearly' },
  ];

  const blogPages = posts.map((post) => ({
    url: '/blog/' + post.slug,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: post.data.updatedDate || post.data.pubDate
  }));

  const allPages = [...staticPages, ...blogPages];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  
  for (const page of allPages) {
    sitemap += '\n  <url>';
    sitemap += '\n    <loc>' + siteUrl + page.url + '</loc>';
    sitemap += '\n    <changefreq>' + page.changefreq + '</changefreq>';
    sitemap += '\n    <priority>' + page.priority + '</priority>';
    if (page.lastmod) {
      const lastmod = page.lastmod.toISOString().split('T')[0];
      sitemap += '\n    <lastmod>' + lastmod + '</lastmod>';
    }
    sitemap += '\n  </url>';
  }
  
  sitemap += '\n</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}