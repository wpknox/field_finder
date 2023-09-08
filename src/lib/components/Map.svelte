<script lang="ts">
	import { toMapValue, type LatLong } from '$lib/utils';
	import { MapLibre } from 'svelte-maplibre';
	export let latitude: LatLong | number = { value: 39.8283, direciton: 'N' };
	export let longitude: LatLong | number = { value: 98.5795, direciton: 'W' };
	export let zoom: number = 10;
</script>

<MapLibre
	style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
	class="relative w-full aspect-[9/16] max-h-[80vh] sm:max-h-full sm:aspect-video"
	standardControls
	center={[toMapValue(longitude), toMapValue(latitude)]}
	{zoom}
/>
