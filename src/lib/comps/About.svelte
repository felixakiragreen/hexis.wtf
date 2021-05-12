<script lang="ts">
	import { slide } from 'svelte/transition'
	import { quintInOut } from 'svelte/easing'

	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import ArtistStatement from '@/lib/datum/ArtistStatement.md'

	const ss = stitch({
		backgroundColor: '$background',
		color: '$foreground',
		textAlign: 'center',
		text: '$lg',
	})

	let readingMore = false

	function toggleReading() {
		readingMore = !readingMore
	}
</script>

<!-- prettier-ignore -->

<Box cls={ss} id="about">
	<Content>
		<Stack css={{ maxWidth: '$2xl', mx: 'auto' }}>
			<Box css={{ py: '$24' }}>
				<Text as="p">
					Within each <i>Hexis</i> the interplay of three flat shapes
					invents the new overall shape of a hexagon, and movement
					of the shapes conjures the new form of a cube. Each <i>Hexis</i>
					is born of the same creative approach — artist and
					algorithm set into motion invent a new outward shape, form, and
					dimension greater than the sum of its parts.
				</Text>
				<div on:click={toggleReading}>
					<Link>+ {readingMore ? "Close" : "Read"} artist statement</Link>
				</div>
				{#if readingMore}
					<div transition:slide={{duration: 500, easing: quintInOut}}>
						<Box css={{ textAlign: "left", maxWidth: "$xl", mx: "auto" }}>
							<ArtistStatement />
						</Box>
						<div on:click={toggleReading}>
							<Link>+ Close</Link>
						</div>
					</div>
				{/if}
			</Box>
			<Box css={{ py: '$24', text: "$2xl" }}>
				<Text css={{ color: "$felixgreen" }}>⬡</Text>
				<Text as="p">
					<b>“<i>Hexis</i></b> means in one sense an activity ... <b>when one
						things makes and another is made, there is between
						them an act of making.”
					</b>
				</Text>
				<Text>~ Artistotle, Metaphysics 5.1022b</Text>
				<br />
				<br />
				<Text css={{ color: "$felixgreen" }}>⬡</Text>
			</Box>
		</Stack>
	</Content>
</Box>
