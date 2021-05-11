<script lang="ts">
	import { stitch } from '@/ui'
	import Anchor from '../atoms/Anchor.svelte'

	export let url
	export let newTab = false

	export let css = null
	export let appearance = 'base'

	const ss = stitch({
		textTransform: 'uppercase',

		variants: {
			appearance: {
				base: {
					// text: '$lg',
					// fontWeight: '$bold',
					color: '$highlight',
					textDecoration: 'none',
					display: 'inline-block',
					transition: '$1',
					'&:hover': {
						// backgroundColor: '$felixgreen',
						// color: '$indigo',
						backgroundColor: '$highlight',
						color: '$background',
						cursor: 'pointer',
						px: '$1',
						mx: '$-1',
					},
				},
			},
		},

		defaultVariants: {
			appearance: 'base',
		},
	})
</script>

<Anchor cls={ss} vrt={{ appearance }} {css} {url} {newTab}>
	<slot />
</Anchor>
