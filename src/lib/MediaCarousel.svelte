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

	<!-- Navigation arrows -->
	<button
		class="carousel-btn carousel-btn--prev"
		on:click={scrollPrev}
		disabled={!canScrollPrev}
		aria-label="Previous slide"
	>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	<button
		class="carousel-btn carousel-btn--next"
		on:click={scrollNext}
		disabled={!canScrollNext}
		aria-label="Next slide"
	>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>

	<!-- Pagination dots -->
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

	/* Navigation buttons */
	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(8px);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 2;
	}

	.carousel-btn:hover:not(:disabled) {
		background: white;
		transform: translateY(-50%) scale(1.1);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	.carousel-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.carousel-btn svg {
		width: 24px;
		height: 24px;
		color: #333;
	}

	.carousel-btn--prev {
		left: 1rem;
	}

	.carousel-btn--next {
		right: 1rem;
	}

	/* Pagination dots */
	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.carousel-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		background: rgba(0, 0, 0, 0.2);
		cursor: pointer;
		transition: all 0.2s ease;
		padding: 0;
	}

	.carousel-dot:hover {
		background: rgba(0, 0, 0, 0.4);
	}

	.carousel-dot.active {
		background: #333;
		transform: scale(1.2);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.carousel-btn {
			width: 40px;
			height: 40px;
		}

		.carousel-btn svg {
			width: 20px;
			height: 20px;
		}

		.carousel-btn--prev {
			left: 0.5rem;
		}

		.carousel-btn--next {
			right: 0.5rem;
		}
	}
</style>
