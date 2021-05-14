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

	const ssTop = stitch({
		minHeight: 'calc(100vh - 96px)',
		minWidth: '$screen-w',

		'& section': {
			position: 'relative',
			height: '$full',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	})

	const ssLogo = stitch({
		maxWidth: '$2xl',
		textAlign: 'center',
		zIndex: 2,
	})

	const ssCta = stitch({
		p: '$6',
		borderRadius: '$sm',
		border: '1px solid $foreground',
	})

	const ssImg = stitch({
		mb: '$4',
		'@initial': {
			mt: '$8',
		},
		'@sm': {
			mt: '$24',
		},
		'@md': {
			mt: '$48',
		},
	})
</script>

<Box cls={ssTop}>

	<Content css={{ overflowY: 'visible' }}>
		<Stack space="3xl" align="center">
			<Box cls={ssLogo}>
				<Image src={hexisLogo} alt="Hexis Logo" cls={ssImg} />

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

			<Box cls={ssCta}>
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
