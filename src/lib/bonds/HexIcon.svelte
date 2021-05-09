<script lang="ts">
	import { stitch } from '@/ui'
	import Hexagon from './Hexagon.svelte'
	import Box from '../atoms/Box.svelte'
	import Link from '../atoms/Link.svelte'

	export let url
	export let hex
	export let color
	export let path
	export let transform

	const ss = stitch({
		'--hex-bg': 'var(--base-hex-bg)',
		'--fill': 'var(--base-fill)',
		'&:hover': {
			'--hex-bg': 'var(--hover-hex-bg)',
			'--fill': 'var(--hover-fill)',
		},
		color: 'var(--hex-bg)',
		transition: '$1',
	})
</script>

<!-- prettier-ignore -->

<Link
	{url}
	newTab
	cls={ss}
	style="
		--base-hex-bg: var(--colors-{color}400);
		--base-fill: var(--colors-grey700);
		--hover-hex-bg: var(--colors-{color}700);
		--hover-fill: var(--colors-grey200);
	">
	<Hexagon fill="currentcolor">
		<g
			transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
		>
			<path d={path} id="foreground" fill="var(--fill)" />
		</g>
	</Hexagon>
</Link>
