<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Img from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import hexisLogo from '@/assets/hexis-1920-no-bg.svg'

	let y

	// TODO: remove cubes at lower breakpoint
</script>

<svelte:window bind:scrollY={y} />

<Box
	css={{ position: 'fixed', surrounding: 0, overflowY: 'visible', zIndex: -1 }}
>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={{ size: '$20', position: 'absolute', top: '$96', left: '$40', blur: '2px' }}
		style="transform: translate3d(0px, {-y * 0.75}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={{ size: '$24', position: 'absolute', top: '$32', right: '$64', blur: '2px' }}
		style="transform: translate3d(0px, {-y * 0.75}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={{ size: '$80', position: 'absolute', top: '$-4', left: '$20' }}
		style="transform: translate3d(0px, {-y * 1.5}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={{ size: '$56', position: 'absolute', bottom: '$16', left: '$-12' }}
		style="transform: translate3d(0px, {-y * 1.25}px, 0px)"
	/>
	<Img
		src={hexisLogo}
		alt="Hexis Logo"
		css={{ size: '$160', position: 'absolute', bottom: '$-12', right: '$-80' }}
		style="transform: translate3d(0px, {-y * 2}px, 0px)"
	/>
</Box>
