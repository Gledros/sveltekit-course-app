<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';

	$: data = $page.data;
</script>

<svelte:head>
	{#if data.title}
		<title>{data.title}</title>
	{/if}
	{#if data.description}
		<meta name="description" content={data.description} />
	{/if}
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/products">Products</a>
	{#if !data.user}
		<a href="/login">Login</a>
	{/if}
	{#if data.user}
		<button
			on:click={async () => {
				const response = await fetch('/api/logout', { method: 'POST' });

				if (response.ok) invalidateAll();
			}}
		>
			Logout
		</button>
	{/if}
</nav>

<div>
	<slot />
</div>

<style lang="scss">
	nav {
		padding: 1rem;
		background-color: rgb(173, 173, 173);
		font-weight: bold;
		border-bottom: 1px solid black;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		align-self: center;
	}

	div {
		padding: 0 2rem;
	}
</style>
