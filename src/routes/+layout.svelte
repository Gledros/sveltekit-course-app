<script>
	import '../app.css';
	export let data;
</script>

<nav>
	<a href="/">Home</a>
	<a href="/products">Products</a>
</nav>

{#if data.user}
	<p>Logged in as: {data.user.name}</p>
{/if}

<div>
	<slot />
</div>

<style lang="scss">
	nav {
		padding: 1rem;
		background-color: rgb(173, 173, 173);
		color: white;
		font-weight: bold;
		border-bottom: 1px solid black;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
	}

	div {
		padding: 0 2rem;
	}

	p {
		margin-top: 0.5rem;
		padding: 0.5rem;
	}
</style>
