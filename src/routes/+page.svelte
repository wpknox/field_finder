<script lang="ts">
	let radius: number = 5;
	let fieldType: string;
</script>

<h1 class="text-6xl font-bold text-success underline text-center">Welcome to Field Finder</h1>

<div class="p-4 w-full content-center">
	<div class="flex flex-col space-y-4">
		<div class="form-control w-full max-w-sm">
			<label for="fieldSelect" class="label">
				<span class="label-text font-semibold">Fields</span>
			</label>
			<select
				name="fieldSelect"
				id="fieldSelect"
				class="select select-bordered"
				bind:value={fieldType}
			>
				<option disabled selected>Select a Field</option>
				<option>Wheat</option>
				<option>Sorgum</option>
				<option>Sunflower</option>
				<option>Corn</option>
			</select>
		</div>
		<div class="form-control w-full max-w-sm my-auto">
			<label for="radius" class="label">
				<span class="label-text font-semibold">Search Radius</span>
			</label>
			<input
				name="radius"
				type="range"
				min="0"
				max="25"
				bind:value={radius}
				class="range range-accent"
			/>
			<label class="label" for="radius">
				<span class="label-text-alt">{radius} miles</span>
			</label>
		</div>
	</div>
</div>
