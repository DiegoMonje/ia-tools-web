import { getCollection } from 'astro:content';

// ⚠️ IMPORTANTE: Cambia este dominio por el real antes de desplegar
const siteUrl = 'https://www.tu-dominio-real.com';

export async function GET() {
  const posts = await getCollection('blog');
  
  const sortedPosts = posts.sort((a, b) => 
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const rssItems = sortedPosts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IA Tools - Herramientas de Inteligencia Artificial</title>
    <link>${siteUrl}</link>
    <description>Análisis honestos y comparativas prácticas de las mejores herramientas de IA para texto, imagen, video, audio, código y productividad.</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=3600'
    }
  });
}