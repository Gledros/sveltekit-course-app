export const load = async () => {
	const products = await (await import('./dummy-products.json')).default;

	return products;
};
