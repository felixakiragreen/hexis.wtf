<script>
	import { stitch } from '@/ui'
	import Box from '../atoms/Box.svelte'

	export let css = null
	export let space = null
	export let spaceV = null
	export let align = null
	export let alignV = null
	export let collapseBelow = null

	const ss = stitch({
		display: 'flex',
		// flexDirection: 'row',
		// flexWrap: 'wrap',

		variants: {
			space: {
				no: {
					sx: '$0',
				},
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
			spaceV: {
				no: {
					sy: '$0',
				},
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
						// sx: '$0',
					},
					'@sm': {
						flexDirection: 'row',
						// sy: '$0',
					},
				},
				md: {
					'@initial': {
						flexDirection: 'column',
						// sx: '$0',
					},
					'@md': {
						flexDirection: 'row',
						sy: '$0',
					},
				},
				lg: {
					'@initial': {
						flexDirection: 'column',
						// sx: '$0',
					},
					'@lg': {
						flexDirection: 'row',
						// sy: '$0',
					},
				},
			},
		},

		defaultVariants: {
			space: 'no',
			// align: 'leading',
		},

		// TODO: Need to figure out a better way to do this
		// compoundVariants: [
		// 	{
		// 		collapseBelow: 'lg',
		// 		space: 'xl',
		// 		css: {
		// 			'@initial': {
		// 				sy: '$8',
		// 				bg: '$red400',
		// 			},
		// 			'@lg': {
		// 				sy: '$0',
		// 				bg: '$orange400',
		// 			},
		// 		},
		// 	},
		// ],
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))

	// space & spaceV
	// if collapse below,
</script>

<Box cls={ss} vrt={{ space, spaceV, align, alignV, collapseBelow }} {css}>
	<slot />
</Box>
