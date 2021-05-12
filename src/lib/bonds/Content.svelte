<script>
	import { stitch } from '@/ui'

	export let css = null

	const ss = stitch({
		// backgroundColor: "$background",
		// color: "$foreground",

		mx: 'auto',
		maxWidth: '$screen-lg',
		py: '$4',

		'@initial': {
			px: '$4',
		},
		'@sm': {
			px: '$8',
		},
		'@xl': {
			px: '$0',
		},
	})
</script>

<section class={ss({ css })}>
	<slot />
</section>
