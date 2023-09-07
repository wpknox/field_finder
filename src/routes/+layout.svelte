<script>
	import '../app.postcss';
</script>

<svelte:head>
	<title>Field Finder</title>
</svelte:head>

<div class="min-h-full px-4">
	<nav class="navbar bg-base-100 text-primary-content border-b">
		<div class="flex-1 gap-2">
			<a href="/" class="btn btn-outline btn-primary normal-case text-xl">Field Finder</a>
			<a href="/about" class="link link-hover link-info normal-case ml-2 ms-auto mr-4">About</a>
		</div>
	</nav>

	<div class="py-4">
		<div class="mx-auto max-w-full sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
