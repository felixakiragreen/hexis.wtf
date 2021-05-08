<script lang="ts">
	import Hexagon from './Hexagon.svelte'
	import Link from '../atoms/Link.svelte'

	export let url
	export let hex
	export let color
	export let path
	export let transform
</script>

<!-- prettier-ignore -->

<div
	style="
    --base-hex-bg: var(--colors-{color}400);
    --base-fill: var(--colors-grey700);
	  --hover-hex-bg: var(--colors-{color}700);
    --hover-fill: var(--colors-grey200);
  ">
	<Link {url} newTab>
		<Hexagon fill={hex}>
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}>
				<path d={path} id="foreground" />
			</g>
		</Hexagon>
	</Link>
</div>
