<script>
	import ContentView from '$lib/ContentView.svelte';
	import Menu from '$lib/Menu.svelte';
	import '$lib/solid.css';

	export let project;
	let isMenuOpen = false;
</script>

<div class="page-wrapper">
	<header>
		<a href="/" class="logo">
			<img src="/logoMed.svg" alt="SolidByte logo" />
		</a>
		<div class="menu-wrapper-context">
			<button class="menu-icon" on:click={() => (isMenuOpen = !isMenuOpen)} aria-label="Open menu">
				<i class="fa-solid fa-bars"></i>
			</button>
			{#if isMenuOpen}
				<Menu on:close={() => (isMenuOpen = false)} />
			{/if}
		</div>
	</header>

	<main>
		<ContentView directory={project} />
	</main>
</div>
