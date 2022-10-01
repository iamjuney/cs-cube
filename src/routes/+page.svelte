<script>
	import { goto } from '$app/navigation';
	import RightArrowAlt from '$lib/assets/svg/RightArrowAlt.svelte';
	import Particle from '$lib/components/Particle.svelte';

	let madeby = () => goto('https://github.com/iamjuney');

	let vision = 'The premier university of science and technology in the Visayas.';
	let mission =
		'Provide excellent instruction, conduct relevant research and foster community engagement that produce highly competent graduates necessary for the development of the country.';

	let role =
		'THE ORGANIZATION WAS ESTABLISHED TO HELP STUDENTS DEVELOP THEIR SKILLS, GAIN CONFIDENCE AND PRACTICAL EXPERIENCE IN A SAFE ENVIRONMENT.';
</script>

<section class="relative h-full w-screen">
	<Particle />

	<div class="absolute lg:left-28 lg:top-28">
		<div class="relative h-52">
			<h1 class="font-akrobat_black text-yellow-300 sm:text-6xl lg:text-9xl">
				CS<span class="text-stroke"><sup>3</sup></span>
			</h1>
		</div>

		<div class="relative h-full">
			<div class="flex flex-col font-akrobat_semibold tracking-tight text-white lg:text-base">
				<span>VSU - BS in COMPUTER SCIENCE</span>
				<span>
					STUDENTS' SOCIETY <span class="relative -top-1 mx-2 inline-block h-[1px] w-24 bg-white" />
					2022-2023<sup class="text-yellow-300">©</sup>
				</span>
			</div>
		</div>

		<div class="relative left-36 mt-12 h-full">
			<div class="flex flex-row items-center">
				<button
					title="RightArrow"
					on:click={madeby}
					class="absolute h-10 w-10 rounded-full border-2 border-white text-white transition duration-300 ease-in-out hover:border-yellow-300 hover:bg-yellow-300 hover:text-black hover:ring-4 hover:ring-yellow-300 hover:ring-offset-0"
					><RightArrowAlt /></button
				>
				<div class="relative left-20 font-akrobat_semibold">
					<div class="flex flex-col tracking-tight text-white lg:text-base">
						<span>MADE BY <span class="text-yellow-300">*</span></span>
						<span>ALJON LERIOS</span>
					</div>
				</div>
			</div>
		</div>

		<div class="relative mt-12 h-full w-80">
			<div class="font-akrobat_semibold tracking-tight text-white lg:text-base">
				<span class="relative -top-1 mr-2 inline-block h-[2px] w-20 bg-yellow-300" />
				<span>{role}</span>
			</div>
		</div>
	</div>

	<div class="absolute lg:right-28 lg:top-28">
		<div class="relative h-full w-80">
			<div
				class="flex flex-col items-end space-y-2 text-right tracking-tight text-white lg:text-lg"
			>
				<div class="font-akrobat_bold lg:text-xl">MISSION</div>
				<div class="relative inline-block h-[2px] w-44 bg-yellow-300" />
				<div class="font-akrobat_semibold leading-tight">{mission}</div>
			</div>
		</div>
		<div class="relative mt-48 h-full w-80">
			<div
				class="flex flex-col items-end space-y-2 text-right tracking-tight text-white lg:text-lg"
			>
				<div class="font-akrobat_bold lg:text-xl">VISION</div>
				<div class="relative inline-block h-[2px] w-44 bg-yellow-300" />
				<div class="font-akrobat_semibold leading-tight">{vision}</div>
			</div>
		</div>
	</div>
</section>
