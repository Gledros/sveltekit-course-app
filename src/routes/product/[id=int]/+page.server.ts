import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const response = await fetch('/api/products');

	let data;

	if (response.ok) data = await response.json();

	if (!data) throw error(response.status, response.statusText);

	const product = data.products.products.find(
		(element: { id: number }) => element.id === +params.id
	);

	const comments = fetch('https://dummyjson.com/comments').then((response) => response.json());

	return { product, comments };
};
