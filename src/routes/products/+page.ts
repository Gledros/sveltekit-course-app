export const load = async ({ data, depends }) => {
	depends('app:products');

	return { products: data.products, title: 'Products List' };
};
