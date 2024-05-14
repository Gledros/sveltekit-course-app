import { error } from '@sveltejs/kit';

export const load = async ({ data }) => {
	if (!data.product) throw error(404, 'Product not found!');

	return data;
};
