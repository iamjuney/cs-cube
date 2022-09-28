<script type="ts">
	export let officer: any;
	export let position = 'left';
</script>

<div class="relative h-full w-full text-white">
	<div class="grid grid-cols-3 gap-4">
		{#if position === 'right'} <div /> {/if}

		<div class="flex items-center justify-center">
			<div class="h-60 w-60 border border-yellow-300 bg-transparent" />
		</div>

		<div class="flex flex-col items-start">
			<h2 class="font-bold uppercase text-white lg:text-5xl">
				{officer.first_name} <br />
				{officer.last_name}
			</h2>
			<div class="mt-8 grid grid-cols-3">
				<div class="flex items-end justify-start">
					<h4 class="font-base text-white lg:text-xl">{officer.position}</h4>
				</div>
				<div class="col-span-2 pl-4">
					<p>
						{officer.bio}
					</p>
				</div>
			</div>
		</div>
		{#if position === 'left'} <div /> {/if}
	</div>
</div>
