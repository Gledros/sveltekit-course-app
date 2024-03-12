<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
</script>

<nav
	in:slide={{ delay: 600, duration: 300, easing: circInOut }}
	out:slide={{ delay: 0, duration: 300, easing: circInOut }}
>
	<a id="home" href="/">Home</a>
	Settings:
	<a href="/settings">Main</a>
	<a href="/settings/general">General</a>
	<a href="/settings/profile">Profile</a>
</nav>

<slot />

<style>
	nav {
		font-size: small;
		background-color: rgb(59, 174, 224);
		font-weight: bold;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		border-bottom: 1px solid rgb(98, 98, 98);
	}

	a {
		text-decoration: none;

		&#home {
			margin-left: 1rem;
			margin-right: 2rem;
		}
	}
</style>
