import { randomUUID as uuid } from 'crypto';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const products = await (await import('../../products/dummy-products.json')).default;

	return json(products);
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (!product.title) throw error(400, 'Product title is required!');

	return json({ id: uuid(), ...product });
};
