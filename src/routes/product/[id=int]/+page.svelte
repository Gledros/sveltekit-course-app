<script lang="ts">
	export let data;
</script>

<h1>{data.title}</h1>

<div>
	<span>{data.brand}</span>
	<p>{data.description}</p>
	<p>Rating {data.rating} / 5</p>
	<p>Category {data.category}</p>
</div>

{#if data.images}
	<div class="images">
		{#each data.images as image}
			<img src={image} alt="" />
		{/each}
	</div>
{/if}

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
</style>
