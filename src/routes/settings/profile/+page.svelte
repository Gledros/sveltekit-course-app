<script>
	import { slide } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
</script>

<div transition:slide={{ duration: 300, easing: circInOut }}>
	<h1>Profile settings</h1>
</div>
