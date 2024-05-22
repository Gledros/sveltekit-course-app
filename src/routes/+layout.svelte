<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	{#if $page.data.title}
		<title>{$page.data.title}</title>
	{/if}
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/products">Products</a>
	<a href="/login">Login</a>
</nav>

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
</style>
