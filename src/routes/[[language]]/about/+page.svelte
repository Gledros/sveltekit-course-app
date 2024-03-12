<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import { Button } from '$components';
	import { page } from '$app/stores';

	let name = 'Glenn';
</script>

<div transition:slide={{ duration: 300, easing: circInOut }}>
	<h1>About {name}</h1>

	<Button
		on:click={() => {
			goto('/');
		}}
	>
		Go to Home
	</Button>

	{JSON.stringify($page.params)}
</div>

<style>
	h1 {
		color: green;
	}
</style>
