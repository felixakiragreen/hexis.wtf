<script>
	import { stitch } from '@/ui'

	export let cls = null
	export let css = null
	export let style = null
	export let id = null
	export let vrt = {}

	const ss = cls || stitch({})
</script>

<button class={ss({ ...vrt, css })} {style} {id}>
	<slot />
</button>
