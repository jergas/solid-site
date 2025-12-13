<script>
	import Menu from '$lib/Menu.svelte';
	import ContentView from '$lib/ContentView.svelte';
	export let data;
	let isMenuOpen = false;
</script>

<svelte:head>
	<title>SolidByte</title>
</svelte:head>

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
		<div class="grid">
			{#each data.landing as item}
				<a href={item.href} class="grid-item">
					{#if item.img.endsWith('.mp4')}
						<video src={item.img} autoplay muted loop playsinline aria-label={item.title.en}
						></video>
					{:else}
						<img src={item.img} alt={item.title.en} />
					{/if}
					<div class="title">{item.title.en}</div>
				</a>
			{/each}
		</div>

		<!-- Infinite Scroll Sections -->
		<div class="sections-container">
			{#each data.sections as section}
				<section id={section.id}>
					<ContentView directory={section} />
				</section>
				<div class="separator"></div>
			{/each}
		</div>
	</main>
</div>

<style>
	.page-wrapper {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1.25vw;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25vw 0;
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 10;
	}

	.logo img {
		height: 5vw;
	}

	.menu-wrapper-context {
		position: relative;
	}

	.menu-icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 5vw;
		color: #333;
	}

	main {
		padding: 1.25vw 0;
	}

	.grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6vw;
	}

	.grid-item {
		display: block;
		width: 90%;
		aspect-ratio: 1355 / 364;
		max-width: 1300px;
		overflow: hidden;
		box-shadow: 1.5vw 1.5vw 0.078vw rgba(0, 0, 0, 0.25);
		border-radius: 1.5625vw;
		position: relative;
		z-index: 1;
	}

	.grid-item:hover {
		z-index: 2;
	}

	.grid-item video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition:
			filter 0.3s ease,
			transform 0.3s ease;
	}

	.grid-item:hover video {
		filter: brightness(1.8) saturate(0.1);
		transform: scale(1.05);
	}

	.grid-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 30%; /* default — change this to adjust focus */
		display: block;
		transition:
			filter 0.3s ease,
			transform 0.3s ease;
	}

	.grid-item:hover img {
		filter: brightness(1.8) saturate(0.1);
		transform: scale(1.05);
	}

	.title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding: 0.9375vw;
		box-sizing: border-box;
		color: black;
		font-family: 'Blender Medium', sans-serif;
		font-size: 3vw;
		font-weight: normal;
		text-transform: uppercase;
		background-color: rgba(255, 255, 255, 0.5);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.grid-item:hover .title {
		opacity: 1;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.sections-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6vw;
	}

	.sections-container section {
		width: 90%;
		max-width: 1300px;
	}

	.separator {
		height: 4vw;
	}
</style>
