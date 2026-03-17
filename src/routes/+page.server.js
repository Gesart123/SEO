import { db } from "$lib/server/db";

export async function load() {
	const [products] = await db.query(
		"SELECT id, name, description, price, image_url, slug FROM products"
	);

	return { products };
}