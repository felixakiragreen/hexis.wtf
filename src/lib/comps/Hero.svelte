<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	import { twitter, discord } from '@/lib/datum/socials.json'

	import hexisLogo from '@/assets/hexis-logo.svg'

	import Icon, { ChevronDoubleDown } from 'svelte-hero-icons'

	const ss = stitch({
		// backgroundColor: '$red600',
		// color: '$foreground',
		// position: 'relative',
		minHeight: 'calc(100vh - 96px)',
		minWidth: '$screen-w',
		// overflowX: 'hidden',

		'& section': {
			position: 'relative',
			height: '$full',
			// minHeight: '$screen-h',
			// minWidth: '$screen-w',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	})

	const ss1 = stitch({
		// mt: '$10',
		// bg: '$red400',
		maxWidth: '$2xl',
		textAlign: 'center',
		zIndex: 2,

		// '& h1': {
		// 	text: '$9xl',
		// },
	})

	const ss2 = stitch({
		p: '$6',
		borderRadius: '$sm',
		border: '1px solid $foreground',
	})
</script>

<Box cls={ss}>

	<Content css={{ overflowY: 'visible' }}>
		<Stack space="3xl" align="center">
			<Box cls={ss1}>
				<Image
					src={hexisLogo}
					alt="Hexis Logo"
					css_initial={{ mt: '$8', mb: '$4' }}
					css_md={{ mt: '$64' }}
				/>

				<Text as="p" size="lg">
					An experiment in shape and dimension. The generative madness of an
					algorithm with the soft guidance of an artist's hand.
					<br />
					New episode every friday at 09:00 et.
				</Text>
				<Link
					url="#about"
					css={{ fontWeight: '$bold', text: '$xl', display: 'block' }}
				>
					+ Read more
				</Link>
			</Box>

			<Box cls={ss2}>
				<Inline
					space="md"
					spaceV="sm"
					collapseBelow="md"
					css={{ textAlign: 'center' }}
				>
					<Text>join the community of hexagon 💚ers</Text>
					<Link newTab url={twitter.url}>+ Follow on Twitter</Link>
					<Link newTab url={discord.url}>+ Join the Discord</Link>
				</Inline>
			</Box>
		</Stack>

	</Content>

	<!-- <Inline
		align="center"
		css={{ position: 'absolute', bottom: '$4', left: 0, right: 0, zIndex: -1, '> *': { size: '$8' } }}
	>
		<Icon src={ChevronDoubleDown} />
	</Inline> -->

</Box>
