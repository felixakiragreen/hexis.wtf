<script lang="ts">
	import { stitch } from '@/ui'

	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	const ss = stitch({
		position: 'relative',
		zIndex: 100,
	})

	const cssTxt = {
		//
		color: '$muted',
		// text: {
		// 	'@initial': '$sm',
		// 	'@md': '$md',
		// },
		'@initial': {
			text: '$sm',
		},
		'@md': {
			text: '$md',
		},
	}

	const cssLnk = {
		'@initial': {
			'> *': { size: '$10' },
		},
		'@md': {
			'> *': { size: '$8' },
		},
	}
</script>

<header class={ss()}>
	<Content>
		<Inline
			space="lg"
			spaceV="md"
			align="trailing"
			alignV="center"
			collapseBelow="md"
			css={{ py: '$4' }}
		>
			<Text css={cssTxt}>
				new episodes
				<b>friday @ 09:00 et</b>
			</Text>
			<Inline space="lg">
				<Link url="#season01">Season 1</Link>
				<Link url="#about">About</Link>
			</Inline>
			<Socials css={cssLnk} space="no" />
		</Inline>
	</Content>
</header>
