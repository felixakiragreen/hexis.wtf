<script>
	import { stitch } from '@/ui'

	export let cls = null
	export let css = null
	export let alt = 'image description'
	export let src
	export let style = null
	export let id = null

	const ss = cls || stitch({})
</script>

<img class={ss({ css })} {alt} {src} {style} {id} />
