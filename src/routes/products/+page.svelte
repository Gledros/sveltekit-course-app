<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { Button } from '../../lib/components';

	export let data;

	$: products = data.products;
</script>

<h1>Products</h1>

<div class="parent">
	<Button class="button" on:click={() => invalidate('app:products')}>Re-run load function</Button>
</div>

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

<style>
	img {
		object-fit: contain;
		width: 100%;
		max-width: 18rem;
		height: 15rem;
		border-radius: 0.5rem;
	}

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-flow: row;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	li {
		display: flex;
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
		width: 100%;
		padding: 1rem;
	}

	p:not(:first-of-type) {
		border-top: 1px solid black;
		padding-top: 0.5rem;
	}

	a {
		text-decoration: none;
		width: 95vw;
	}

	.parent {
		width: 50%;
		margin: auto;
	}

	.parent :global(.button) {
		margin: 1rem 0;
	}

	@media (min-width: 425px) and (max-width: 768px) {
		a {
			width: 60vw;
		}
	}

	@media (min-width: 769px) {
		a {
			width: auto;
		}
	}

	@media (max-width: 768px) {
		ul {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		img {
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 1024px) {
		ul {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}

	@media (max-width: 1440px) {
		li {
			height: 100%;
			flex-direction: column;
		}
	}
</style>
