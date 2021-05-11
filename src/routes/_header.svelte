<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	const ss = stitch({
		// backgroundColor: '$background',
		color: '$foreground',
		position: 'relative',
		zIndex: 100,

		'& p': {
			color: '$muted',
			textAlign: 'center',
		},
		'& div': {
			// display: 'flex',
			// flexDirection: 'row',
			// alignItems: 'center',
			// justifyContent: 'space-between',
		},
	})

	// console.log(ss())
</script>

<header class={ss()}>
	<Content css={{ position: 'relative' }}>

		<!-- <Box css={{ position: 'absolute', top: '$4', right: '$0' }}> -->
		<!-- </Box> -->
		<Inline align="center" alignV="center" collapseBelow="lg" space="sm">
			<Text>
				new episode every
				<b>friday — 09:00 et</b>
			</Text>
			<Box>
				<Link url="#season01">Season 1</Link>
				<Link url="#about">About</Link>
			</Box>
			<Socials size="sm" />
		</Inline>
	</Content>
</header>
