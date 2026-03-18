import { db } from '$lib/db/db.js';
import { env } from '$env/dynamic/private';
 
export async function GET() {
	const baseUrl = env.PUBLIC_BASE_URL || 'https://deine-domain.de';
 
	const [products] = await db.query(`
		SELECT slug, image_url
		FROM products
		WHERE slug IS NOT NULL
	`);
 
	const now = new Date().toISOString();
 
	const staticUrls = [
		{
			loc: `${baseUrl}/`,
			lastmod: now
		}
	];
 
	const productUrls = products.map((product) => ({
		loc: `${baseUrl}/products/${product.slug}`,
		lastmod: now,
		image: product.image_url || ''
	}));
 
	const allUrls = [...staticUrls, ...productUrls];
 
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls
	.map((url) => {
		const imageTag = url.image
			? `<image:image><image:loc>${url.image}</image:loc></image:image>`
			: '';

		return `<url>
	<loc>${url.loc}</loc>
	<lastmod>${url.lastmod}</lastmod>
	${imageTag}
</url>`;
	})
	.join('\n')}
</urlset>`;
 
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}