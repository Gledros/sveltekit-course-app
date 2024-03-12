<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
</script>

<nav
	in:slide={{ delay: 600, duration: 300, easing: circInOut }}
	out:slide={{ delay: 0, duration: 300, easing: circInOut }}
>
	Settings:
	<a href="/settings">Main</a>
	<a href="/settings/general">General</a>
	<a href="/settings/profile">Profile</a>
</nav>

<slot />

<style>
	nav {
		font-size: small;
		background-color: coral;
		font-weight: bold;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		border-radius: 0 0 0.75rem 0.75rem;
	}

	a {
		text-decoration: none;
	}
</style>
