<script lang="ts">
	export let data;
</script>

<h1>{data.product.title}</h1>

<div>
	<span>{data.product.brand}</span>
	<p>{data.product.description}</p>
	<p>Rating {data.product.rating} / 5</p>
	<p>Category {data.product.category}</p>
</div>

{#if data.product.images}
	<div class="images">
		{#each data.product.images as image}
			<img src={image} alt="" />
		{/each}
	</div>
{/if}

{#await data.comments}
	<p>Loading comments...</p>
{:then data}
	{#each data.comments as comment}
		<p class="comment">
			{comment.body}
		</p>
	{/each}
{/await}

<style>
	h1 {
		margin-bottom: 0.5rem;
	}

	img {
		height: 25rem;
		width: auto;
	}

	span {
		color: gray;
		font-weight: bold;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0 1rem;
	}

	.images {
		margin-top: 1rem;
		padding: 0;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
	}

	p.comment {
		background-color: #f8f8f8;
		margin-top: 0.5rem;
		border-left: solid 2px black;
		padding: 1rem;
	}

	p.comment:first-of-type {
		margin-top: 2rem;
	}

	p.comment:last-of-type {
		margin-bottom: 2rem;
	}
</style>
