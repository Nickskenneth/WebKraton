<script lang="ts">
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="bg-blue-900 text-white p-4 relative">
	<div class="flex justify-between items-center">
		<!-- Logo -->
		<img src="/logoKraton.png" alt="logoKraton" class="h-16 w-auto" />

		<!-- Hamburger Menu Button (Visible on Mobile) -->
		<div class="md:hidden" on:click={toggleNavbar}>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<!-- Navigation Links (Hidden on Mobile) -->
		<div class="hidden md:block">
			<a href="/loginKraton" class="hover:text-yellow-400">Masuk</a>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if showMenu}
	<div class="absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col space-y-4 p-4 md:hidden z-50 shadow-lg">
		<a href="/loginKraton" class="text-xl hover:text-yellow-400">Masuk</a>
	</div>
	{/if}
</nav>
