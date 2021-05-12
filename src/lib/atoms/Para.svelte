<script lang="ts">
	import { stitch } from '@/ui'

	export let cls = null
	export let css = null
	export let style = null
	export let vrt = {}

	const ss = cls || stitch({})
</script>

<p class={ss({ ...vrt, css })} {style}>
	<slot />
</p>
