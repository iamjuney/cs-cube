<script>
	import '../app.css';

	import Header from './_header.svelte';
</script>

<svelte:head>
	<title>CS3 - Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="icon" type="image/ico" href="../favicon.ico" />
</svelte:head>

<main class="fixed inset-0 h-screen overflow-hidden bg-black">
	<Header />
	<slot />
</main>
