<script>
	import { invalidateAll } from '$app/navigation';

	let username = '',
		password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});

		const result = await response.json();

		if (response.ok) {
			invalidateAll();
		} else alert(result.message);
	};
</script>

<form on:submit|preventDefault={login}>
	<label for="username">
		<p>Username</p>
		<input type="text" id="username" bind:value={username} placeholder="Username" />
	</label>

	<label for="password">
		<p>Password</p>
		<input type="password" id="password" bind:value={password} placeholder="Password" />
	</label>

	<button type="submit">Login</button>
</form>

<style>
	form {
		margin: 4rem auto;
		width: 20rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border: solid 1px black;
		border-radius: 0.25rem;
		align-items: center;
	}

	label {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	p {
		align-content: center;
	}

	input {
		padding: 0.5rem;
	}

	button {
		width: 50%;
		margin-top: 1rem;
		padding: 0.5rem;
	}
</style>
