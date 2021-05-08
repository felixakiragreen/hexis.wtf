<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bbonds/Content.svelte'
	import Socials from '@/lib/ssocial/index.svelte'
	import Box from '@/lib/aatoms/Box.svelte'

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
		<div>
			<p>
				new episode every
				<b>friday — 09:00 et</b>
			</p>

		</div>
		<Box css={{ position: 'absolute', top: '$4', right: '$0' }}>
			<Socials />
		</Box>
	</Content>
</header>
