<script lang="ts">
	import { ambition } from '@/lib/datum/socials'

	import Box from '../atoms/Box.svelte'
	import Anchor from '../atoms/Anchor.svelte'
	import Image from '../atoms/Image.svelte'

	import ambitionLogo from '@/assets/ambition_sharp_flat_border.svg'
	import ambitionLogoHover from '@/assets/ambition_sharp_gradient_border.svg'

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
