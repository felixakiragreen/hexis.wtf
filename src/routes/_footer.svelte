<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bbonds/Content.svelte'
	import Box from '@/lib/aatoms/Box.svelte'
	import Stack from '@/lib/bbonds/Stack.svelte'

	const ss = stitch({
		backgroundColor: '$background',
		color: '$foreground',

		textAlign: 'center',
		text: '$lg',

		// '& p': {
		// },
	})
</script>

<!-- prettier-ignore -->

<footer class={ss()}>
	<Content>
		<Stack css={{ maxWidth: '$2xl', mx: 'auto' }}>
			<Box css={{ py: '$8' }}>
				<p>
					Within each <i>Hexis</i> the interplay of three flat shapes
					invents the new overall shape of a hexagon, and movement
					of the shapes conjures the new form of a cube. Each <i>Hexis</i>
					is born of the same creative approach — artist and
					algorithm set into motion invent a new outward shape, form, and
					dimension greater than the sum of its parts.
				</p>
			</Box>
			<Box css={{ py: '$8' }}>
				<p>
					<b>”<i>Hexis</i></b> means in one sense an activity ... <b>when one
						things makes and another is made, there is between
						them an act of making.“
					</b>
				</p>
				<p>~ Artistotle, Metaphysics 5.1022b</p>
			</Box>
		</Stack>
	</Content>
</footer>
