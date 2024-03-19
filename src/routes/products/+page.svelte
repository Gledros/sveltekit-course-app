<script lang="ts">
	export let data;

	$: products = data.products;
</script>

<h1>Products</h1>

{#if products && products.length > 0}
	<ul>
		{#each products as product, index}
			<a href="/product/{product.id}">
				<li id={'product_' + index}>
					<img src={product.thumbnail} alt={product.title} />
					<div>
						<h3>{product.title}</h3>
						<span>{product.brand}</span>
						<p>{product.description}</p>
						<p>Rating {product.rating} / 5</p>
						<p>Category {product.category}</p>
					</div>
				</li>
			</a>
		{/each}
	</ul>
{/if}

<style lang="scss">
	img {
		object-fit: scale-down;
		width: 100%;
		max-width: 25rem;
		height: 15rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	li {
		padding: 0.5rem;
		display: flex;
		height: 100%;
		gap: 1rem;
		border: 1px solid black;
		border-radius: 0.5rem;
		align-items: center;
	}

	span {
		color: gray;
		font-weight: bold;
		margin-top: -1.5rem;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		height: 100%;
	}

	p:not(:first-of-type) {
		border-top: 1px solid black;
		padding-top: 0.5rem;
	}

	a {
		text-decoration: none;
		width: calc(33vw - 2.5rem);
	}
</style>
