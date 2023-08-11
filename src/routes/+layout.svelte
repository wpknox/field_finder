<script>
	import '../app.postcss';
</script>

<div class="min-h-full px-4">
	<nav class="navbar bg-base-100 text-primary-content border-b">
		<div class="flex-1 gap-2">
			<a href="/" class="btn btn-ghost normal-case text-xl">Field Finder</a>
			<a href="/about" class="link link-hover normal-case ml-2">About</a>
		</div>
	</nav>

	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
