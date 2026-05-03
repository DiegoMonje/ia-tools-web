export function GET() {
  const site = import.meta.env.SITE || 'https://ia-tools-web.pages.dev';

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}