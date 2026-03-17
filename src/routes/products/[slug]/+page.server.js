import { error } from '@sveltejs/kit';
import { db } from '$lib/db/db.js';

const slugify = (value) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export async function load({ params }) {
    try {
        const [rows] = await db.query(
            'SELECT name, description, price, image_url FROM products'
        );

        const product = rows
            .map((row) => ({ ...row, slug: slugify(row.name) }))
            .find((row) => row.slug === params.slug);

        if (!product) {
            throw error(404, 'Produkt nicht gefunden.');
        }

        return { product };
    } catch (err) {
        if (err?.status) throw err; // forward SvelteKit errors
        console.error('Database query failed', err);
        throw error(500, 'Kann keine Verbindung zur Datenbank herstellen.');
    }
}
