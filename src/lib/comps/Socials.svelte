<script lang="ts">
	import { stitch } from '@/ui'
	import { socials } from '@/lib/datum/socials'

	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'
	import Box from '../atoms/Box.svelte'

	import { map } from 'lodash'
	import type { SocialLink } from '@/types'

	let listSocials: SocialLink[] = map(
		socials,
		(value: SocialLink, key, collection) => value
	)

	// console.log({ listSocials })

	// const ss = stitch({
	// 	display: 'grid',
	// 	gridTemplateColumns: 'repeat(auto-fill, $16)',
	// 	w: '$96',

	// 	'& a': {
	// 		// size: '$16',
	// 	},
	// })

	export let space = 'sm'
	export let align = null
	export let size = 'md'

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size
</script>

<!-- <Box cls={ss}>
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
</Box> -->

<Inline css={{ '> *': { size: iconSize } }} {space} {align}>
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
