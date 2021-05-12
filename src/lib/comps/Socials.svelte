<script lang="ts">
	import { socials, ambition } from '@/lib/datum/socials'

	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'
	import Box from '../atoms/Box.svelte'
	import Anchor from '../atoms/Anchor.svelte'
	import Image from '../atoms/Image.svelte'

	import ambitionLogo from '@/assets/ambition_sharp_flat_border.svg'
	import ambitionLogoHover from '@/assets/ambition_sharp_gradient_border.svg'

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

	const cssBox = {
		position: 'relative',
		'#amb-hex-log-hov': {
			opacity: 0,
			transition: '$1',
		},
		'&:hover': {
			'#amb-hex-log-hov': {
				opacity: 1,
			},
		},
	}

	const cssImg = {
		position: 'absolute',
		surrounding: 0,
	}
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
	<Anchor url={ambition.url} newTab>
		<Box css={cssBox}>
			<Image src={ambitionLogo} alt="Ambition Hexagonal Logo" css={cssImg} />
			<Image
				src={ambitionLogoHover}
				alt="Ambition Hexagonal Logo"
				css={cssImg}
				id="amb-hex-log-hov"
			/>
		</Box>
	</Anchor>
</Inline>
