<script>
	import { stitch } from '@/ui'
	import Box from '../atoms/Box.svelte'

	export let css = null
	export let space = null
	export let align = null
	export let alignV = null
	export let collapseBelow = null

	const ss = stitch({
		display: 'flex',
		// flexDirection: 'row',
		// flexWrap: 'wrap',

		variants: {
			space: {
				no: {},
				sm: {
					sx: '$2',
				},
				md: {
					sx: '$4',
				},
				lg: {
					sx: '$6',
				},
				xl: {
					sx: '$8',
				},
				'2xl': {
					sx: '$10',
				},
				'3xl': {
					sx: '$12',
				},
			},
			align: {
				leading: {
					justifyContent: 'flex-start',
				},
				trailing: {
					justifyContent: 'flex-end',
				},
				center: {
					justifyContent: 'center',
				},
			},
			alignV: {
				top: {
					alignItems: 'start',
				},
				bottom: {
					alignItems: 'end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			collapseBelow: {
				sm: {
					'@initial': {
						flexDirection: 'column',
					},
					'@sm': {
						flexDirection: 'row',
					},
				},
				md: {
					'@initial': {
						flexDirection: 'column',
					},
					'@md': {
						flexDirection: 'row',
					},
				},
				lg: {
					'@initial': {
						flexDirection: 'column',
					},
					'@lg': {
						flexDirection: 'row',
					},
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

<Box cls={ss} vrt={{ space, align, alignV, collapseBelow }} {css}>
	<slot />
</Box>
