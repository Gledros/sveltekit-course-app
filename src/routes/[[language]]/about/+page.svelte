<script>
	import { goto } from '$app/navigation';
	import { Button } from '$components';
	import { page } from '$app/stores';

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

{JSON.stringify($page.params)}

<style>
	h1 {
		color: green;
	}
</style>
