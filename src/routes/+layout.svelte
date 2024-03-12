<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<slot />

<footer class:admin={$page.url.pathname.startsWith('/settings')}>All rights reserved 2024.</footer>

<style lang="scss">
	footer {
		padding: 1rem;
		width: 100%;
		text-align: center;
		font-weight: bold;
		background-color: coral;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid rgb(98, 98, 98);
		transition: all 0.3s ease-out;

		&.admin {
			background-color: rgb(59, 174, 224);
			padding: 0.5rem;
		}
	}
</style>
