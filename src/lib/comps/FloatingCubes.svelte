<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Img from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import hexisLogo from '@/assets/hexis-1920-no-bg.svg'

	let y

	// TODO: remove cubes at lower breakpoint

	const cssHex1 = {
		//
		size: '$20',
		position: 'absolute',
		top: '$96',
		left: 'calc(50% - 520px)',
		blur: '2px',
	}

	const cssHex2 = {
		//
		size: '$24',
		position: 'absolute',
		top: '$32',
		right: 'calc(50% - 424px)',
		blur: '2px',
		// display: 'none',
	}

	const cssHex3 = {
		//
		size: '$80',
		position: 'absolute',
		top: '$-4',
		left: 'calc(50% - 600px)',
		// display: 'none',
	}

	const cssHex4 = {
		//
		size: '$56',
		position: 'absolute',
		top: '$128',
		left: 'calc(50% - 724px)',
		// display: 'none',
	}

	const cssHex5 = {
		//
		size: '$160',
		position: 'absolute',
		top: '$48',
		right: 'calc(50% - 1000px)',
	}
</script>

<svelte:window bind:scrollY={y} />

<Box
	css={{ position: 'fixed', surrounding: 0, overflowY: 'visible', zIndex: -1 }}
>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={cssHex1}
		style="transform: translate3d(0px, {-y * 0.75}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={cssHex2}
		style="transform: translate3d(0px, {-y * 0.75}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={cssHex3}
		style="transform: translate3d(0px, {-y * 1.5}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={cssHex4}
		style="transform: translate3d(0px, {-y * 1.25}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={cssHex5}
		style="transform: translate3d(0px, {-y * 2}px, 0px)"
	/>
</Box>
