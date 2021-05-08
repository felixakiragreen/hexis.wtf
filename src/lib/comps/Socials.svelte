<script lang="ts">
	import { stitch } from '@/ui'
	import { socials } from '@/lib/datum/socials'

	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'
	import Box from '../atoms/Box.svelte'

	import { map } from 'lodash'
	import type { SocialLink } from '@/types'

	let listSocials: SocialLink[] = map(socials, (value: SocialLink, key, collection) => value)

	// console.log({ listSocials })

	// const ss = stitch({
	// 	display: 'grid',
	// 	gridTemplateColumns: 'repeat(auto-fill, $16)',
	// 	w: '$96',

	// 	'& a': {
	// 		// size: '$16',
	// 	},
	// })
</script>

<!-- <Box cls={ss}>
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
</Box> -->

<Inline css={{ '> *': { size: '$16' } }} space="sm">
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
</Inline>

<!-- <style>
	.socials {
		display: grid;
		grid-template-columns: 1fr repeat(3, 64px) 1fr;
	}
	.socials a {
		height: 64px;
		width: 64px;
	}
</style> -->
