import mysql from 'mysql2/promise';
export { db } from '$lib/db/db.js';
import { env } from '$env/dynamic/private';
 
export const db = mysql.createPool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
});