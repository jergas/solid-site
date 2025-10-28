<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<!-- No longer needs the outer wrapper for positioning -->
<div class="menu-container" transition:fade>
	<nav>
			<ul>
				<li><a href="/nosotros/">NOSOTROS</a></li>
				<li><a href="/proyectos/">PROYECTOS</a></li>
				<li><a href="/servicios/">SERVICIOS</a></li>
				<li><a href="/contacto/">CONTACTO</a></li>
			</ul>
		</nav>
		<div class="social-icons">
			<a href="https://tiktok.com/" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
			<a href="https://instagram.com/solidbyte.io/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
		</div>
	</div>

<style>
	.menu-container {
		position: absolute;
		/* Positioned perfectly relative to the parent wrapper */
		top: 75%; /* Place it right below the icon */
		right: 5vw; /* Was 63px */
		transform: translateY(-0.9765vw); /* Was -25px */
			/* background: white; */
		padding: 1.25vw; /* Was 2rem */
		width: 8.59375vw; /* Was 220px */
		text-align: center;
			/* border: 0.0781vw solid black; /* Was 2px */
		z-index: 20; /* Ensure it appears above other content */

		/* New SVG Background */
		background-image: url('/menu-background.svg');
		background-size: 100% 100%; /* Stretch the SVG to fit the container */
		background-repeat: no-repeat;
	}

	nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	nav li {
		margin-bottom: 1.25vw; /* Was 2rem */
	}

	nav a {
		color: black;
		text-decoration: none;
		font-size: 1.25vw; /* Was 2rem */
		font-weight: bold;
		letter-spacing: 0.0781vw; /* Was 2px */
	}

	nav a:hover {
		text-decoration: underline;
	}

	.social-icons {
		margin-top: 1.875vw; /* Was 3rem */
	}

	.social-icons a {
		color: black;
		font-size: 1.5625vw; /* Was 2.5rem */
		margin: 0 0.9375vw; /* Was 1.5rem */
	}
</style>
