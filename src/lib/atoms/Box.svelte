<script>
	import { stitch } from '@/ui'

	// export let color
	export let cls = null
	export let css = null
	export let style = null
	export let vrt = {}

	const ss = cls || stitch({})
</script>

<div class={ss({ ...vrt, css })} {style}>
	<slot />
</div>
