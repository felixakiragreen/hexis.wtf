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
</script>

<header class={ss()}>
	<Content>
		<Inline align="trailing" alignV="center" collapseBelow="lg" space="xl" css={{ py: '$4' }}>
			<Text css={{ color: '$muted' }}>
				new episodes
				<b>friday @ 09:00 et</b>
			</Text>
			<Link url="#season01">Season 1</Link>
			<Link url="#about">About</Link>
			<Socials size="sm" space="no" />
		</Inline>
	</Content>
</header>
