import { error } from '@sveltejs/kit';
import { db } from '$lib/db/db.js';

export async function load() {
    try {
        const [products] = await db.query(
            'SELECT name, description, price, image_url FROM products'
        );

        return { products };
    } catch (err) {
        console.error('Database query failed', err);
        // Surface a friendly 500 instead of crashing the page
        throw error(500, 'Kann keine Verbindung zur Datenbank herstellen.');
    }
}
