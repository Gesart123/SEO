import { db } from "$lib/db/db.js";


export async function load() {
	const [products] = await db.query(
		"SELECT id, name, description, price, image_url, slug FROM products"
	);

	return { products };
}
