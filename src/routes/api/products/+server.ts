import { randomUUID as uuid } from 'crypto';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/products');

	let data;

	if (response.ok) data = await response.json();

	if (!data) throw error(response.status, response.statusText);

	return json({ products: data });
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (!product.title) throw error(400, 'Product title is required!');

	return json({ id: uuid(), ...product });
};
