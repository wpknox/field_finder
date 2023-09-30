<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	let mapEl: HTMLDivElement;

	onMount(async () => {
		const leaflet = await import('leaflet');
	});
</script>

<div bind:this={mapEl} class="map" />

<style>
	.map {
		position: absolute;
		inset: 0;
		z-index: 10;
	}
</style>
