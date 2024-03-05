<script>
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	let name = 'Glenn';
</script>

<h1>About {name}</h1>

<Button
	on:click={() => {
		goto('/');
	}}
>
	Go to Home
</Button>

<style>
	h1 {
		color: green;
	}
</style>
