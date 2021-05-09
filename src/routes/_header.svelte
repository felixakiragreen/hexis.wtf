<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'

	const ss = stitch({
		backgroundColor: '$background',

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
		<!-- <div>
			<p>
				new episode every
				<b>friday — 09:00 et</b>
			</p>

		</div> -->
		<!-- <Box css={{ position: 'absolute', top: '$4', right: '$0' }}> -->
		<!-- </Box> -->
		<Inline align="center">
			<Socials />
		</Inline>
	</Content>
</header>
