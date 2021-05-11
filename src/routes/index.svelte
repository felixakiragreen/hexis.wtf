<script lang="ts">
	import { stitch } from '@/ui'

	import Hero from '@/lib/comps/Hero.svelte'
	import Season1 from '@/lib/comps/Season1.svelte'
	import About from '@/lib/comps/About.svelte'
	import FloatingCubes from '@/lib/comps/FloatingCubes.svelte'

	const ss = stitch({
		// backgroundColor: '$background',
		color: '$foreground',
		// position: 'relative',
		// overflowX: 'hidden',
		// maxWidth: '$screen-w',
	})
</script>

<main class={ss()}>

	<FloatingCubes />

	<Hero />

	<Season1 />

	<About />

	<!-- <h1 class="desktop">season 01 begins</h1>
	<h1 class="mobile">s01 begins</h1>
	<p>
		<span class="nb">
			created by
			<a href="https://twitter.com/felixakiragreen" target="_blank">Felix Green</a>
		</span>
		<span class="nb">
			and
			<a href="https://twitter.com/Macbeth_wtf" target="_blank">Macbeth</a>
		</span>
	</p>
	<a href="https://app.rarible.com/hexis_wtf?tab=collectibles" target="_blank">
		<img src={hexisLogo} width="100%" height="100%" alt="Hexis Logo" />
	</a>

	<p>
		<span style="color: var(--grey-400);">follow us</span>
		<span style="color: var(--grey-100);">@hexis_wtf</span>
	</p>

	<Stack color="light" css={{ p: '$8', backgroundColor: '$blue300' }}>
		<Button />
	</Stack> -->

	<!-- <Metadata /> -->

	<!-- {#if mounted} -->
	<!-- <footer>
		<Socials />
	</footer> -->
	<!-- {/if} -->
</main>
