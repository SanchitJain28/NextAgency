import { getAllPosts } from '@/lib/blog/posts';

export async function GET() {
  try {
    const posts = await getAllPosts();
    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.scalefront.io';

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ScaleFront Blog - Shopify Growth &amp; E-commerce Insights</title>
    <link>${siteUrl}/blog</link>
    <description>Expert insights on Shopify optimization, e-commerce growth, and online store success</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title || ''}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description || ''}]]></description>
      <pubDate>${post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <category>${post.category || 'E-commerce'}</category>
      ${(post.tags || []).map(tag => `<category>${tag}</category>`).join('\n      ')}
      ${post.image ? `<enclosure url="${post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`}" type="image/jpeg"/>` : ''}
      <author>${post.author || 'ScaleFront Team'}</author>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
