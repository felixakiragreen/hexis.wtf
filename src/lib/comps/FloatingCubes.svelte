<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Img from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import hexisLogo from '@/assets/hexis-1920-no-bg.svg'
</script>

<Box css={{ position: 'absolute', surrounding: 0, overflowY: 'visible' }}>
	<Box css={{ position: 'relative', overflowX: 'hidden' }}>
		<Content css={{ position: 'relative', h: '120vh', w: '$screen-w' }}>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$80', position: 'absolute', top: '$0', left: '$-16' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$24', position: 'absolute', top: '$36', right: '$56', blur: '2px' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$56', position: 'absolute', bottom: '$72', left: '$-32' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$160', position: 'absolute', bottom: '$24', right: '$-128' }}
			/>
			<Img
				src={hexisLogo}
				alt="Hexis Logo"
				css={{ size: '$20', position: 'absolute', bottom: '$24', left: '$12', blur: '2px' }}
			/>
		</Content>
	</Box>
</Box>
