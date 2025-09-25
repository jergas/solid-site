<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<!-- No longer needs the outer wrapper for positioning -->
<div class="menu-container" transition:fade>
	<nav>
			<ul>
				<li><a href="/proyecto">PROYECTO</a></li>
				<li><a href="/servicio">SERVICIO</a></li>
				<li><a href="/contacto">CONTACTO</a></li>
			</ul>
		</nav>
		<div class="social-icons">
			<a href="https://tiktok.com" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
			<a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
		</div>
	</div>

<style>
	.menu-container {
		position: absolute;
		/* Positioned perfectly relative to the parent wrapper */
		top: 100%; /* Place it right below the icon */
		right: 63px; /* Align its right edge with the icon's right edge */
		transform: translateY(-25px); /* move it up to the centre of the icon */
		background: white;
		padding: 2rem;
		width: 220px;
		text-align: center;
		border: 2px solid black;
		z-index: 20; /* Ensure it appears above other content */
	}

	/* The white, inner part of the triangle */
	.menu-container::before {
		content: '';
		position: absolute;
		/* Positioned at the top-right corner */
		top: 0px; /* Aligned with the inside of the top border */
		right: -20px;
		border-width: 10px;
		border-style: solid;
		border-color: white transparent transparent white;
		z-index: 2;
	}

	/* The black, outer border of the triangle */
	.menu-container::after {
		content: '';
		position: absolute;
		/* Positioned at the top-right corner */
		top: -2px; /* Aligned with the outside of the top border */
		right: -24px;
		border-width: 11px;
		border-style: solid;
		border-color: black transparent transparent black;
		z-index: 1;
	}

	nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	nav li {
		margin-bottom: 2rem;
	}

	nav a {
		color: black;
		text-decoration: none;
		font-size: 2rem;
		font-weight: bold;
		letter-spacing: 2px;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.social-icons {
		margin-top: 3rem;
	}

	.social-icons a {
		color: black;
		font-size: 2.5rem;
		margin: 0 1.5rem;
	}
</style>
