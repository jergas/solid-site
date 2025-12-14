<script>
	export let directory;
	import ContactForm from './ContactForm.svelte';
	import MediaCarousel from './MediaCarousel.svelte';

	$: directoryMedia = directory.media
		? directory.media.map((m) => ({
				...m,
				path: `/${directory.path}/${m.filename}`
			}))
		: [];
</script>

<div class="content-wrapper">
	<h1 class="content-title">{directory.title.en}</h1>
	<div class="content-container" class:no-media={directoryMedia.length === 0}>
		<div class="media-column">
			{#if directoryMedia.length > 1}
				<MediaCarousel media={directoryMedia} projectTitle={directory.title.en} />
			{:else if directoryMedia.length === 1}
				{@const media = directoryMedia[0]}
				{#if media.path.endsWith('.mp4')}
					<video
						src={media.path}
						autoplay
						muted
						loop
						playsinline
						controls
						aria-label={directory.title.en}
					/>
				{:else}
					<img src={media.path} alt={media.title || directory.title.en} />
				{/if}
			{/if}
		</div>

		<div class="text-column">
			<!-- Title moved up -->
			<!-- Use a helper to replace email text with mailto links if needed, or rely on specific formatting -->
			<!-- Since user said "as it is displayed", but "add a mailto link", we can regex replace emails in the text block -->
			{@html (directory.text || '').replace(
				/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
				'<a href="mailto:$1">$1</a>'
			)}
			{#if directory.path.includes('contacto')}
				<ContactForm recipientEmail={directory.recipientEmail} />
			{/if}
		</div>
	</div>
</div>

<style>
	/* When no media, the text column should take full width */
	.content-container.no-media .text-column {
		flex: 1;
		width: 100%;
	}

	.content-container.no-media .media-column {
		display: none;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: white;
		padding: 1rem;
	}

	.content-title {
		margin: 0;
		font-size: 3rem; /* Bigger title */
		line-height: 1.2;
		padding-left: 0; /* Align with content? The layout seems flush. */
	}

	.content-container {
		display: flex;
		gap: 2rem;
		color: black;
		/* padding moved to wrapper */
	}

	.media-column {
		flex: 2.5; /* Media column is 2.5x wider than text column */
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.text-column {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0; /* Remove top padding/margin if any */
	}

	.text-content {
		white-space: pre-wrap; /* Preserves formatting from text files */
	}

	img,
	video {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
