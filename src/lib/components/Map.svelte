<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	let mapEl: HTMLDivElement;

	onMount(async () => {
		const leaflet = await import('leaflet');
	});
</script>
