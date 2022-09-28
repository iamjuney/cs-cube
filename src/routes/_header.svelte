<script>
	import logo from '$lib/assets/logo.webp';
	import Close from '$lib/assets/svg/Close.svelte';
	import Menu from '$lib/assets/svg/Menu.svelte';

	const headerlinks = [
		{ name: 'ABOUT', path: '/about', id: '01' },
		{ name: 'ARTICLES', path: '/articles', id: '02' },
		{ name: 'GALLERY', path: '/gallery', id: '03' },
		{ name: 'HOME', path: '/', id: '04' }
	];

	let isOpen = false;
	let toggle = () => (isOpen = !isOpen);
	let close = () => (isOpen = false);
</script>

<header class="relative bg-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- lg+ -->
		<nav class="flex items-center justify-between lg:h-24">
			<div class="flex-shrink-0">
				<a href="/" title="Home" class="flex">
					<img class="h-8 w-auto lg:h-10" src={logo} alt="" />
				</a>
			</div>

			<button
				title="Menu"
				on:click={toggle}
				type="button"
				class="inline-flex rounded-md p-2 text-white transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black"
			>
				<Menu />
			</button>
		</nav>
	</div>

	<div
		class="absolute inset-0 z-10 min-h-screen w-screen bg-black text-center {isOpen
			? ''
			: 'hidden'}"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<nav class="flex items-center justify-between lg:h-24">
				<div class="flex-shrink-0">
					<a href="/" title="Home" class="flex">
						<img class="h-8 w-auto lg:h-10" src={logo} alt="" />
					</a>
				</div>

				<button
					title="Close"
					on:click={toggle}
					type="button"
					class="inline-flex rounded-md p-2 text-white transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black"
				>
					<Close />
				</button>
			</nav>
		</div>

		<nav class="mt-20 flex flex-col items-end space-y-12 pr-28">
			{#each headerlinks as link}
				<a
					on:click={close}
					href={link.path}
					title={link.name}
					class="font-medium tracking-tight text-white decoration-yellow-300 hover:underline lg:text-4xl"
				>
					{link.name}
				</a>
			{/each}
		</nav>
	</div>
</header>
