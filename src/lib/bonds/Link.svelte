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
					// transition: '$1',

					'& span': {
						display: 'inline-block',
						transition: '$1',
						py: '$1',
						my: '$-1',
					},

					'&:hover': {
						// backgroundColor: '$felixgreen',
						// color: '$indigo',
						color: '$background',
						cursor: 'pointer',

						'& span': {
							backgroundColor: '$highlight',
							px: '$2',
							mx: '$-2',
						},
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
	<span>
		<slot />
	</span>
</Anchor>
