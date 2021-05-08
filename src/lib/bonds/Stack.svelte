<script>
	import { stitch } from '@/ui'
	import Box from '../atoms/Box.svelte'

	export let css = null
	export let space = null
	export let align = null

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
			},
			// alignV: {
			// 	top: {
			// 		alignItems: 'flex-start',
			// 	},
			// 	bottom: {
			// 		alignItems: 'flex-end',
			// 	},
			// 	center: {
			// 		alignItems: 'center',
			// 	},
			// },
		},

		defaultVariants: {
			space: 'no',
			// align: 'leading',
		},
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))
</script>

<Box cls={ss} vrt={{ space, align }} {css}>
	<slot />
</Box>
