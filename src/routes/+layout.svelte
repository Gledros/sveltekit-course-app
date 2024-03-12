<script>
	import '../app.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<div>
	<slot />
</div>

<footer>All rights reserved 2024.</footer>

<style lang="scss">
	nav {
		background-color: coral;
		font-weight: bold;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		border-bottom: 1px solid rgb(98, 98, 98);
	}

	a {
		text-decoration: none;
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		gap: 1rem;
	}

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
	}
</style>
