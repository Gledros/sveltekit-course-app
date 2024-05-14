export const load = async ({ data }) => {
	return { products: data.products, title: 'Products List' };
};
