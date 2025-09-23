<script>
	export let data;
</script>

<svelte:head>
	<title>SolidByte</title>
</svelte:head>

<header>
	<a href="/" class="logo">
		<img src="/logo-large.png" alt="SolidByte logo" />
	</a>
	<a href="/menu" class="menu-icon">
		<img src="/menu-icon.jpg" alt="Menu" />
	</a>
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
		border: 2px dashed #ccc; /* A light grey dotted border */
		margin: 0 1%; /* Add horizontal margin to match content */
	}

	.logo img {
		width: 200px;
	}

	.menu-icon img {
		width: 50px; /* Adjust size as needed */
		height: auto;
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
		border: 1px solid black; /* Adds a thin black border */
	}

	.grid-item {
		display: block; /* Good practice for link wrappers */
		width: 90%;
		max-width: 1300px; /* Prevents it from becoming too wide on large screens */
		overflow: hidden; /* Keeps the hover effect clean */
		box-shadow: 17px 17px 2px rgba(0, 0, 0, 0.3); /* A sharper, less diffuse shadow */
		border-radius: 40px; /* Adds rounded corners */
		border: 1px solid black; /* Adds a thin black border */
		transition: transform 0.2s; /* Apply transition to the container */
	}

	.grid-item:hover {
		transform: scale(1.05); /* Scale the container on hover */
	}

	.grid-item img {
		width: 100%;
		height: auto; /* Allows the image to scale proportionally */
		display: block; /* Removes any extra space below the image */
	}

	.title {
		display: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
