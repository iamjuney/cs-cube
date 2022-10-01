<script>
	import LeadershipCard from '$lib/components/LeadershipCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let vision = 'The premier university of science and technology in the Visayas.';
	let mission =
		'Provide excellent instruction, conduct relevant research and foster community engagement that produce highly competent graduates necessary for the development of the country.';
</script>

<section class="custom-scrollbar relative box-border h-full w-screen overflow-scroll">
	<div class="absolute mt-40 flex flex-col space-y-36 bg-black px-28 pb-60">
		<div class="relative font-akrobat_black text-yellow-300 lg:text-7xl">
			<h2>VSU - BS in</h2>
			<h1 class="lg:text-8xl">COMPUTER SCIENCE</h1>
			<h2 class="text-stroke">STUDENTS’ SOCIETY</h2>
		</div>

		<div class="relative h-full pt-40 text-white">
			<div class="grid grid-cols-5 gap-4">
				<div>
					<h2 class="font-bold text-yellow-300 lg:text-3xl">ABOUT</h2>
				</div>
				<div>
					<h2 class="font-base text-yellow-300 lg:text-3xl">preamble</h2>
				</div>
				<div class="col-span-3 text-lg">
					We, the student constituting the Computer Science Students’ Society of the Visayas State
					University, citizens of the Philippines, imploring the aid of the Divine Provident in
					order to establish an organization that shall unite us as one solid group, promote our
					general welfare and direct our physical, moral and intellectual efforts towards the
					fulfillment of our goals, do ordain and promulgate this constitution
				</div>
			</div>
		</div>

		<div class="relative h-full pt-40 text-white">
			<div class="grid grid-cols-5 gap-4">
				<div>
					<h2 class="font-bold text-yellow-300 lg:text-3xl">VISION</h2>
				</div>
				<div>
					<span class="relative inline-block h-[2px] w-36 bg-yellow-300" />
				</div>
				<div class="col-span-3 text-lg">
					{vision}
				</div>
			</div>
		</div>

		<div class="relative h-full pt-40 text-white">
			<div class="grid grid-cols-5 gap-4">
				<div>
					<h2 class="font-bold text-yellow-300 lg:text-3xl">MISSION</h2>
				</div>
				<div>
					<span class="relative inline-block h-[2px] w-36 bg-yellow-300" />
				</div>
				<div class="col-span-3 text-lg">
					{mission}
				</div>
			</div>
		</div>

		<div class="relative h-full pt-40">
			<h2 class="font-bold text-yellow-300 lg:text-3xl">LEADERSHIP</h2>
		</div>

		{#each data.officers as officer (officer.id)}
			<LeadershipCard {officer} position={officer.id % 2 == 0 ? 'right' : 'left'} />
		{/each}

		<div class="relative h-full pt-40 text-white">
			<div class="grid grid-cols-5">
				<div class="flex flex-col items-end">
					<span>ALL RIGHTS RESERVED</span>
					<span>CS<sup>3</sup></span>
				</div>
				<div class="col-span-3">
					<div class="flex flex-col px-8 pt-4">
						<span class="relative inline-block h-[2px] w-full bg-yellow-300" />
						<span>2022<sup class="text-yellow-300">©</sup></span>
					</div>
				</div>
				<div class="flex flex-col items-start">
					<span>DESIGN & DEVELOP BY</span>
					<span>ALJON LERIOS</span>
				</div>
			</div>
		</div>
	</div>
</section>
