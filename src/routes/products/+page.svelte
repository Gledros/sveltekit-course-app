<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.products);
</script>

<h1>Products</h1>

<pre>
	{JSON.stringify(data, null, 4)}
</pre>
