<script>
	import { stitch } from '@/ui'

	export let color
	export let css

	const ss = stitch({
		p: '$4',
		variants: {
			color: {
				light: {
					backgroundColor: '$foreground',
					color: '$background',
				},
				dark: {
					backgroundColor: '$background',
					color: '$foreground',
				},
			},
		},
		defaultVariants: {
			color: 'light',
		},
		css,
	})

	// ss({ css })

	console.log({ css }, ss({ color, css }))
</script>

<div class={ss({ color, css })}>
	<slot />
</div>
