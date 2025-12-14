<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let media = [];
	export let projectTitle = '';

	let emblaApi;
	let selectedIndex = 0;
	let canScrollPrev = false;
	let canScrollNext = false;

	function onInit(event) {
		emblaApi = event.detail;
		updateButtons();
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', updateButtons);
	}

	function onSelect() {
		selectedIndex = emblaApi.selectedScrollSnap();
		updateButtons();
	}

	function updateButtons() {
		if (!emblaApi) return;
		canScrollPrev = emblaApi.canScrollPrev();
		canScrollNext = emblaApi.canScrollNext();
	}

	function scrollPrev() {
		if (emblaApi) emblaApi.scrollPrev();
	}

	function scrollNext() {
		if (emblaApi) emblaApi.scrollNext();
	}

	function scrollTo(index) {
		if (emblaApi) emblaApi.scrollTo(index);
	}

	const options = { loop: true, align: 'center' };
</script>

<div class="carousel-wrapper">
	<div class="embla" use:emblaCarouselSvelte={{ options }} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each media as item, index}
				<div class="embla__slide">
					{#if item.path.endsWith('.mp4')}
						<video
							src={item.path}
							autoplay
							muted
							loop
							playsinline
							controls
							aria-label={item.title || projectTitle}
						/>
					{:else}
						<img src={item.path} alt={item.title || projectTitle} loading="lazy" />
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Pagination dots (bottom-left overlay) -->
	{#if media.length > 1}
		<div class="carousel-dots">
			{#each media as _, index}
				<button
					class="carousel-dot"
					class:active={selectedIndex === index}
					on:click={() => scrollTo(index)}
					aria-label="Go to slide {index + 1}"
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel-wrapper {
		position: relative;
		width: 100%;
	}

	.embla {
		overflow: hidden;
		border-radius: 1rem;
	}

	.embla__container {
		display: flex;
		gap: 1rem;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.embla__slide img,
	.embla__slide video {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 1rem;
		object-fit: cover;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
	}

	/* Pagination dots - positioned at top-center overlay */
	.carousel-dots {
		position: absolute;
		top: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
		z-index: 2;
	}

	.carousel-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: none;
		background: #000;
		cursor: pointer;
		transition: all 0.2s ease;
		padding: 0;
	}

	.carousel-dot:hover {
		opacity: 0.7;
	}

	.carousel-dot.active {
		background: #fff;
	}
</style>
