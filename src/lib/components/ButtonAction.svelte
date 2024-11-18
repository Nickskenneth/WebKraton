<script>
	export let label = 'Button';
	export let color = '#ffc107'; // Default color
	export let onClick = () => {}; // Function untuk event handler
	export let href = null; // Tambahkan properti href dengan nilai default null
</script>

{#if href}
	<a class="action-button" href={href} style="background-color: {color};">
		{label}
	</a>
{:else}
	<button class="action-button" on:click={onClick} style="background-color: {color};">
		{label}
	</button>
{/if}

<style>
	.action-button {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s ease;
		text-decoration: none; /* Agar <a> tampil seperti button */
		display: inline-block; /* Agar <a> tampil seperti button */
	}

	.action-button:hover {
		opacity: 0.9;
	}
</style>
