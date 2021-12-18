<script lang="ts">
	import { format } from 'date-fns'
	import { stitch } from '@/ui'

	import Image from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	import Hexagon from '@/lib/bonds/Hexagon.svelte'

	import type { Episode } from '@/types'

	export let episode: Episode

	const ssImgHex = stitch({
		position: 'absolute',
		surrounding: 0,
		clip: 'hexagon',
		overflow: 'hidden',

		'& video': {
			size: '$full',
			transform: 'scale(2)',
		},
		'& img': {
			size: '$full',
			transform: 'scale(1.5)',
			pointerEvents: 'none',
			transition: '$1',
		},
	})

	const ssHex = stitch({
		position: 'relative',
		size: '$100%',

		'& svg': {
			display: 'block',
			height: 'auto',
		},
	})

	const cssBox = {
		position: 'absolute',
		surrounding: 0,
		transition: '$1',
		clip: 'hexagon',
		'&:hover': { opacity: 1 },
	}

	const cssHex = {
		position: 'absolute',
		surrounding: 0,
		background: 'rgba(10, 10, 9, 0.5)',
		backdropFilter: 'blur(2px)',
		clip: 'hexagon',
	}
</script>

<Box cls={ssHex}>
	<Hexagon fill={'var(--colors-grey900)'} />
	<Box cls={ssImgHex}>
		{#if episode.past && episode.gif}
			<Image src={episode.gif} alt={episode.title} />
		{/if}
	</Box>
	{#if episode.available}
		<Box css={{ ...cssBox, surrounding: '-1%', zIndex: -1 }}>
			<Box css={{ position: 'absolute', surrounding: 0, bg: '$green400' }} />
		</Box>
	{/if}
	<Box css={{ ...cssBox, opacity: episode.past ? 0 : 1 }}>
		{#if episode.past}
			<Box css={cssHex} />
		{/if}

		<Stack
			css={{
				position: 'absolute',
				surrounding: 0,
				'@initial': { text: '$xs' },
				'@sm': { text: '$sm' },
			}}
			align="center"
			alignV="center"
		>
			<Text css={{ text: '$md', fontWeight: '$bold' }}>
				{episode.title}
			</Text>
			<Text css={{ color: episode.past ? '$grey400' : '$muted' }}>
				{format(episode.date, '1yyyy·MM·dd')}
			</Text>

			<Inline space="sm" css={{ textTransform: 'initial' }}>
				{#if episode.urlOpenSea}
					<Link url={episode.urlOpenSea} newTab appearance="blockinho">
						opensea
					</Link>
				{/if}
				{#if episode.urlOpenSea && episode.urlRarible}
					<Text>·</Text>
				{/if}
				{#if episode.urlRarible}
					<Link url={episode.urlRarible} newTab appearance="blockinho">
						rarible
					</Link>
				{/if}
			</Inline>

			{#if episode.available}
				<Text>for sale</Text>
			{/if}
		</Stack>
	</Box>
</Box>
