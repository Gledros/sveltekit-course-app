import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const response = await fetch('/api/products');

	let data;

	if (response.ok) data = await response.json();

	if (!data) throw error(response.status, response.statusText);

	return data.products;
};
