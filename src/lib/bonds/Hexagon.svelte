<script lang="ts">
	import Svg from '../atoms/Svg.svelte'

	export let viewBox = '0 0 36 36'
	export let fill = '#ebebeb'
</script>

<Svg {viewBox}>
	<path fill="none" d="M0 0H36V36H0z" />

	<path d="M18 0l15.588 9v18L18 36 2.412 27V9L18 0z" {fill} />

	<slot />

</Svg>
