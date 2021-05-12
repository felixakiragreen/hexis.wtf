<script lang="ts">
	import { stitch } from '@/ui'

	export let url
	export let newTab = false
	let target = newTab ? '_blank' : '_self'

	export let cls = null
	export let css = null
	export let style = null
	export let vrt = {}
	const ss = cls || stitch({})
</script>

<a href={url} {target} class={ss({ ...vrt, css })} {style}>
	<slot />
</a>
