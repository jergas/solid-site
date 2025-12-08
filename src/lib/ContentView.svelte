<script>
	export let project;

	$: projectMedia = project.media
		? project.media.map((m) => ({
				...m,
				path: `/${project.path}/${m.filename}`
			}))
		: [];
</script>

<div class="project-container">
	<div class="media-column">
		{#each projectMedia as media}
			{#if media.path.endsWith('.mp4')}
				<video
					src={media.path}
					autoplay
					muted
					loop
					playsinline
					controls
					aria-label={project.title.en}
				/>
			{:else}
				<img src={media.path} alt={media.title || project.title.en} />
			{/if}
		{/each}
	</div>

	<div class="text-column">
		<h1>{project.title.en}</h1>
		<div class="text-content">
			{@html project.text || ''}
		</div>
	</div>
</div>

<style>
	.project-container {
		display: flex;
		gap: 2rem;
		color: black;
		background-color: white;
		padding: 1rem;
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
