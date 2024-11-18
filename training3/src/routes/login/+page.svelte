<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center justify-center h-screen">
	<h1 class="text-red-600">please login to confirm your attendance!</h1>

	<br />

	<div class="p-2 border rounded shadow-lg">
		<form
			action="?/login"
			method="post"
			use:enhance={() => {
				return async ({ result, update }) => {
					await update({ reset: false });
					alert(result.data.message);
				};
			}}
		>
			<div>
				<label for="username">username</label>
				<input type="text" name="username" id="username" />
			</div>

			<div>
				<label for="password">password</label>
				<input type="password" name="password" id="password" />
			</div>

			<button type="submit">Login</button>
		</form>
	</div>
</div>

<style lang="postcss">
	@tailwind components;
	@layer components {
		label {
			@apply block text-sm font-semibold;
		}

		input {
			@apply p-1 rounded border;
		}

		button {
			@apply bg-teal-500 text-white p-1 rounded w-full my-1;
		}
	}
</style>
