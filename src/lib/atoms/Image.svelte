<script>
	import { stitch } from '@/ui'

	export let css = null
	export let css_initial = null
	export let css_sm = null
	export let css_md = null
	export let alt = 'image description'
	export let src
	export let style = null
	export let id = null

	const ss = stitch({
		// css,
		...(css_initial
			? {
					'@initial': {
						...css_initial,
						// bg: '$red400',
					},
			  }
			: {}),
		...(css_sm
			? {
					'@sm': {
						...css_sm,
						// bg: '$orange400',
					},
			  }
			: {}),
		...(css_md
			? {
					'@md': {
						...css_md,
						// bg: '$blue400',
					},
			  }
			: {}),
	})
</script>

<img class={ss({ css })} {alt} {src} {style} {id} />
