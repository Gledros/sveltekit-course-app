<script>
	import { page } from '$app/stores';

	$: console.log($page);
</script>

<h1>Product page</h1>

<p>Product ID: {$page.params.id}</p>

<a href={`/product/3434`}>Related product</a>
