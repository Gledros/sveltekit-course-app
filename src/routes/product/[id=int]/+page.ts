import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const products = await (await import('../../products/dummy-products.json')).default;
	const product = products.products.find((element) => element.id === +params.id);

	if (!product) throw error(404, 'Product not found!');

	return product;
};
