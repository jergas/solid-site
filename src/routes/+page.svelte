<script>
	import Menu from '$lib/Menu.svelte';
	export let data;

	let isMenuOpen = false;
</script>



<svelte:head>
	<title>SolidByte</title>
</svelte:head>

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
				<img src={item.img} alt={item.title.en} />
				<div class="title">{item.title.en}</div>
			</a>
		{/each}
	</div>
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		margin: 0 1%; /* Add horizontal margin to match content */

		/* Sticky Header styles */
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 10; /* Ensures header stays above the content */
	}

	.logo img {
		width: 200px;
	}

	.menu-wrapper-context {
		position: relative; /* This is the new positioning context */
	}

	.menu-icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 2rem; /* Adjust icon size */
		color: #333; /* A soft black for the icon */
	}

	main {
		padding: 2rem;
	}

	.grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem; /* Increased gap for vertical spacing */
	}

	.grid-item {
		display: block; /* Good practice for link wrappers */
		width: 90%;
		max-width: 1300px; /* Prevents it from becoming too wide on large screens */
		overflow: hidden; /* Keeps the hover effect clean */
		box-shadow: 17px 17px 2px rgba(0, 0, 0, 0.3); /* A sharper, less diffuse shadow */
		border-radius: 40px; /* Adds rounded corners */
		/* border: 3px solid lightgray; /* Adds a thin border, set, for now, to lightGrey */
		position: relative; /* Crucial for z-index */
		z-index: 1; /* Default stacking order */
	}

	/* Lift the container on hover to prevent overlap issues */
	.grid-item:hover {
		z-index: 2;
	}

	.grid-item img {
		width: 100%;
		height: auto; /* Allows the image to scale proportionally */
		display: block; /* Removes any extra space below the image */
		transition:
			filter 0.3s ease,
			transform 0.3s ease; /* Animate both filter and transform */
	}

	/* Apply image effects on hover */
	.grid-item:hover img {
		filter: brightness(1.8) saturate(0.1); /* Seriously brighten and desaturate */
		transform: scale(1.05); /* Scale the image, not the container */
	}

	.title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end; /* Positions text at the bottom */
		justify-content: flex-end; /* Positions text to the right */
		padding: 1.5rem; /* Adds some space from the corner */
		box-sizing: border-box; /* Ensures padding is included in the element's box */
		color: black;
		font-family: 'Blender Medium', sans-serif; /* Apply the custom font */
		font-size: 2rem;
		font-weight: normal; /* Use the font's own weight */
		text-transform: uppercase; /* Makes text all caps */
		background-color: rgba(255, 255, 255, 0.5); /* Changed to semi-transparent white */
		opacity: 0; /* Hidden by default */
		transition: opacity 0.3s ease;
	}

	.grid-item:hover .title {
		opacity: 1; /* Show title on hover */
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
