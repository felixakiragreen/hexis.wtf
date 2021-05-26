<script lang="ts">
	import { socials } from '@/lib/datum/socials'

	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'

	import Ambition from './Ambition.svelte'

	import { map } from 'lodash'
	import type { SocialLink } from '@/types'

	let listSocials: SocialLink[] = map(
		socials,
		(value: SocialLink, key, collection) => value
	)

	// console.log({ listSocials })

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size

	$: cssInl = css || { '> *': { size: iconSize } }
</script>

<!-- <Box cls={ss}>
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
</Box> -->

<Inline css={cssInl} {space} {align}>
	{#each listSocials as social}
		<HexIcon {...social} />
	{/each}
	<Ambition />
</Inline>
