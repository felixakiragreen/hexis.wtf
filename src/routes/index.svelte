<script lang="ts">
	import { stitch } from '@/ui'

	import Hero from '@/lib/comps/Hero.svelte'
	import Season1 from '@/lib/comps/Season1.svelte'
	import About from '@/lib/comps/About.svelte'
	import FloatingCubes from '@/lib/comps/FloatingCubes.svelte'

	const ss = stitch({
		color: '$foreground',
	})
</script>

<main class={ss()}>

	<FloatingCubes />

	<Hero />

	<Season1 />

	<About />

</main>
