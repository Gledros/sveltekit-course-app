<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { Button } from '$components';
	import { navigating } from '$app/stores';

	beforeNavigate((navigation) => {
		console.log('beforeNavigate', navigation);
	});

	$: console.log($navigating);

	afterNavigate((navigation) => {
		console.log('afterNavigate', navigation);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">About</a>

<Button />
