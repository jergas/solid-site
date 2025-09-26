<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: white;
		color: black;
	}
	@font-face {
		font-family: 'Blender Medium';
		src: url('/fonts/Blender-Medium.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
	}
</style>
