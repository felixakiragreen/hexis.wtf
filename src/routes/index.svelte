<script lang="ts">
	import Hero from '@/lib/Hero.svelte'
	import Season1Collection from '@/lib/Season1Collection.svelte'

	import { stitch } from '@/ui'

	const ss = stitch({
		backgroundColor: '$background',
		color: '$foreground',
	})
</script>

<main class={ss()}>

	<Hero />

	<Season1Collection />

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
