<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Img from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	import { twitter } from '@/lib/datum/socials.json'

	import Icon, { ChevronDoubleDown } from 'svelte-hero-icons'

	import hexisLogo from '@/assets/hexis-1920-no-bg.svg'

	const ss = stitch({
		// backgroundColor: '$red600',
		// color: '$foreground',
		position: 'relative',
		minHeight: 'calc(100vh - 96px)',
		minWidth: '$screen-w',

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
		mt: '$10',
		// bg: '$red400',
		maxWidth: '$2xl',
		textAlign: 'center',
		zIndex: 2,

		'& h1': {
			text: '$9xl',
		},
	})

	const ss2 = stitch({
		p: '$4',
		borderRadius: '$sm',
		// bg: '$red200',
		// textAlign: 'center',
		border: '1px solid $foreground',

		// '& h1': {
		// 	text: '$9xl',
		// },

		// '& p': {
		// 	text: '$lg',
		// 	maxWidth: '$2xl',
		// },
	})
</script>

<Box cls={ss}>

	<Content css={{ position: 'relative' }}>
		<Box css={{ zIndex: 1 }}>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$96', position: 'absolute', top: '$-16', left: '$-16' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$32', position: 'absolute', top: '$16', right: '$16', blur: '2px' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$56', position: 'absolute', bottom: '$12', left: '$-32' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$160', position: 'absolute', bottom: '$-32', right: '$-128' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$20', position: 'absolute', bottom: '$-24', left: '$12', blur: '2px' }}
			/>
		</Box>

		<Stack space="md">
			<Box cls={ss1}>
				<Text as="h1" size="9xl">hexis</Text>

				<Text as="p" size="lg">
					An experiment in shape and dimension. The generative madness of an algorithm with the soft
					guidance of the artist's hand.
					<br />
					Catch a new episode each friday at 09:00 et.
				</Text>
				<Link url="#about">+Read more</Link>
			</Box>

			<Box cls={ss2}>
				<p>join the community of hexagon 💚ers</p>
				<Link newTab url={twitter.url}>+Follow on Twitter</Link>
			</Box>
		</Stack>

	</Content>

	<Inline
		align="center"
		css={{ position: 'absolute', bottom: '$8', left: 0, right: 0, zIndex: -1, '> *': { size: '$12' } }}
	>
		<Icon src={ChevronDoubleDown} />
	</Inline>

</Box>
