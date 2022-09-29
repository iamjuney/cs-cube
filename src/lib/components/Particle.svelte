<script lang="ts">
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	let particlesConfig = {
		particles: {
			color: {
				value: '#fff'
			},
			links: {
				enable: true,
				color: '#fff',
				distance: 50,
				frequency: 1,
				triangles: {
					enable: true,
					color: '#fff',
					frequency: 1
				}
			},
			move: {
				enable: true,
				speed: 1
			},
			shape: {
				type: 'circle'
			},
			size: {
				value: 1
			}
		},
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: 'push'
				},
				onHover: {
					enable: true,
					mode: 'grab',
					parallax: {
						enable: true,
						force: 80,
						smooth: 10
					}
				},
				resize: true
			},
			modes: {
				bubble: {
					distance: 100,
					duration: 2,
					opacity: 0.8,
					size: 40
				},
				push: {
					quantity: 4
				},
				repulse: {
					distance: 200,
					duration: 0.4
				}
			}
		}
	};

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine: any) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};
</script>

<Particles
	id="tsparticles"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/>
