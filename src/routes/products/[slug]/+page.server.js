import { db } from "$lib/db/db.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const [rows] = await db.query(
		"SELECT id, name, description, price, image_url, slug FROM products WHERE slug = ?",
		[params.slug]
	);

	if (!rows.length) {
		throw error(404, "Product not found");
	}

	return {
		product: rows[0]
	};
}