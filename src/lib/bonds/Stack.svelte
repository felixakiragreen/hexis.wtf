<script>
	import { stitch } from '@/ui'
	import Box from '../atoms/Box.svelte'

	export let css = null
	export let space = null
	export let align = null
	export let alignV = null

	const ss = stitch({
		display: 'flex',
		flexDirection: 'column',

		variants: {
			space: {
				no: {},
				sm: {
					sy: '$2',
				},
				md: {
					sy: '$4',
				},
				lg: {
					sy: '$6',
				},
				xl: {
					sy: '$8',
				},
				'2xl': {
					sy: '$10',
				},
				'3xl': {
					sy: '$12',
				},
			},
			align: {
				leading: {
					alignItems: 'flex-start',
				},
				trailing: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			alignV: {
				top: {
					justifyContent: 'start',
				},
				bottom: {
					justifyContent: 'end',
				},
				center: {
					justifyContent: 'center',
				},
			},
		},

		defaultVariants: {
			space: 'no',
			// align: 'leading',
		},
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))
</script>

<Box cls={ss} vrt={{ space, align, alignV }} {css}>
	<slot />
</Box>
