<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
</script>

<nav
	in:slide={{ delay: 600, duration: 300, easing: circInOut }}
	out:slide={{ delay: 0, duration: 300, easing: circInOut }}
>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<div>
	<slot />
</div>

<style>
	nav {
		background-color: coral;
		font-weight: bold;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		border-bottom: 1px solid rgb(98, 98, 98);
	}

	a {
		text-decoration: none;
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		gap: 1rem;
	}
</style>
