<script>
	import { onMount } from 'svelte'
	import Socials from '$lib/Social/index.svelte'
	import Metadata from '$lib/Metadata.svelte'
	import Button from '$lib/Button.svelte'
	
	import { css } from '@/ui'

	import hexisLogo from '@/assets/hexis-1920-no-bg.svg'

	// let mounted = false

  // onMount(async () => {
  //   // This is to prevent flashing
  //   mounted = true
  // })

	const mainCss = css({
		backgroundColor: "$background",
		color: "$foreground"
	})

</script>

<header>

</header>

<main class={mainCss}>
	<h1 class="desktop">season 01 begins</h1>
	<h1 class="mobile">s01 begins</h1>
	<p>
		<span class="nb">created by <a href="https://twitter.com/felixakiragreen" target="_blank">Felix Green</a></span>
		<span class="nb">and <a href="https://twitter.com/Macbeth_wtf" target="_blank">Macbeth</a></span>
	</p>
	<a href="https://app.rarible.com/hexis_wtf?tab=collectibles" target="_blank">
		<img src={hexisLogo} width="100%" height="100%" alt="Hexis Logo" />
	</a>

	<p>
		<span style="color: var(--grey-400);">follow us</span>
		<span style="color: var(--grey-100);">@hexis_wtf</span>
	</p>
	
	<div>
		<Button />
	</div>

	<!-- <Metadata /> -->

	<!-- {#if mounted} -->
		<footer>
			<Socials />
		</footer>
	<!-- {/if} -->
</main>


<style>
	main {
		text-align: center;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center; 
		justify-content: center;
		min-height: 100vh;
		min-width: 100vw;
	}

	footer {
		height: 120px;
		width: 100%;
	}

	.nb {
		white-space: nowrap;
	}

	img {
		max-width: 320px;
	}

	a {
		color: var(--green-400);
		text-decoration: none;
	}

	a:hover {
		color: var(--green-300);
		text-decoration: none;
	}

	.desktop {
		display: initial;
	}
	.mobile {
		display: none;
	}
	
	@media (max-width: 600px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: initial;
		}
	}

</style>