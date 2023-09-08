<script lang="ts">
	import { FieldSummary, Map } from '$lib/components';
	import { SELECTED_FIELDS, type LatLong } from '$lib/utils';

	const radiusMax: number = 25;
	let radius: number = 5;
	let fieldTypes = ['Wheat', 'Sorgum', 'Sunflowers', 'Corn'];
	let selectedFields: string[] = [];
	let latitude: LatLong = {
		value: 39.8283,
		direciton: 'N'
	};
	let longitude: LatLong = {
		value: 20,
		direciton: 'W'
	};
</script>

<h1 class="text-6xl font-bold text-primary underline text-center">Search for Fields</h1>

<div class="flex flex-row p-4 w-full h-full mt-2">
	<form method="POST" class="flex flex-col max-w-sm p-4 divide-y space-y-4">
		<div class="form-control">
			<span class="font-bold">Fields to Find</span>
			{#each fieldTypes as field, i}
				<label class="label cursor-pointer">
					<span class="label-text">{field}</span>
					<input
						name={SELECTED_FIELDS}
						type="checkbox"
						value={field}
						class="checkbox checkbox-primary"
						bind:group={selectedFields}
					/>
				</label>
			{/each}
		</div>
		<div class="form-control my-auto">
			<label for="radius" class="label">
				<span class="label-text font-semibold">Search Radius</span>
			</label>
			<input
				name="radius"
				type="range"
				min="0"
				max={radiusMax}
				bind:value={radius}
				class="range range-accent"
			/>
			<label class="label" for="radius">
				<span class="label-text-alt">{radius} miles</span>
			</label>
		</div>
		<div class="form-control my-auto flex flex-col">
			<span class="font-bold my-2">Current Location</span>
			<div class="flex flex-row">
				<label for="latitude" class="label label-text font-bold">Latitude</label>
				<input
					type="number"
					class="input input-ghost ms-auto text-right"
					name="latitude"
					value={latitude.value}
					readonly
				/>
			</div>
			<div class="flex flex-row">
				<label for="longitude" class="label label-text font-bold">Longitude</label>
				<input
					type="number"
					class="input input-ghost ms-auto text-right"
					name="longitude"
					value={longitude.value}
					readonly
				/>
			</div>
		</div>
		<div class="flex flex-row pt-2">
			<button type="submit" class="btn btn-primary w-full text-lg">Search</button>
			<!-- <button type="button" class="btn bg-base-300 ms-auto me-1">Reset</button> -->
		</div>
	</form>
	<div class="mx-2 w-full min-h-max shadow-md">
		<Map zoom={12} {latitude} {longitude} />
	</div>
	<div class="flex flex-col divide-y max-w-sm w-1/4 p-4">
		{#each { length: 5 } as _}
			<FieldSummary />
		{/each}
	</div>
</div>
