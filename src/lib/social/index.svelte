<script>
	import { socials } from './_socials'

	import HexIcon from './HexIcon.svelte'
</script>

<style>
	.socials {
		display: grid;
		grid-template-columns: 1fr repeat(3, 64px) 1fr;
	}
	.socials a {
		height: 64px;
		width: 64px;
	}
</style>

<div class="socials">
	<div />
	{#each socials[0] as social}
		<HexIcon {social} />
	{/each}
	<div />
</div>
