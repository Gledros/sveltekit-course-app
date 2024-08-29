<button on:click class={$$props.class}>
	<slot>Button</slot>
</button>

<style>
	button {
		background-color: rebeccapurple;
		border: none;
		border-radius: 0.35rem;
		margin: 0;
		padding: 1rem;
		font-weight: bold;
		color: white;
		font-family: sans-serif;
		cursor: pointer;
	}
</style>
