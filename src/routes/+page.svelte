<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
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

<div transition:slide={{ duration: 300, easing: circInOut }}>
	<h1>Welcome to SvelteKit</h1>

	<div class="content">
		<p>
			Visit <a target="_blank" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
		</p>

		<Button />
	</div>
</div>

<style lang="scss">
	div.content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 1px solid black;
		border-radius: 0.25rem;
		padding: 0.5rem;
	}
</style>
