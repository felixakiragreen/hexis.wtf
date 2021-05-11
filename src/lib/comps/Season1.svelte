<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'

	import Hexagon from '@/lib/bonds/Hexagon.svelte'

	import { map, take, takeRight } from 'lodash'
	import { addWeeks, isBefore } from 'date-fns'

	// let items = new Array(53)
	const startOfYear = new Date(2021, 0, 1)

	const items = map(new Array(53), (value, index) => {
		const episode = index + 1
		const ep = `00${episode}`.slice(-2)
		const date = addWeeks(startOfYear, index)
		return {
			id: index,
			episode,
			title: `s01e${ep}`,
			date,
			past: isBefore(date, new Date()),
		}
	})

	console.log({ items })

	const ss1 = stitch({
		backgroundColor: '$red600',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		// display: 'grid',
		// gridTemplateRows: 'repeat(auto-fill, 1fr)',
		// gridTemplateColumns: 'repeat(5, 1fr)',
		// color: '$foreground',
		// position: 'relative',
		// minHeight: '$screen-h',
		// minWidth: '$screen-w',

		// '& section': {
		// 	position: 'relative',
		// 	height: '$full',
		// 	// minHeight: '$screen-h',
		// 	// minWidth: '$screen-w',
		// 	display: 'flex',
		// 	alignItems: 'center',
		// 	justifyContent: 'center',
		// },

		// 	#hexGrid{
		// pb: '4.4%',
		// }
		'& div': {
			width: '20%' /* = 100 / 5 */,
			mb: '-3.2%',
		},
		'& div:nth-child(9n+6)': {
			/* first hexagon of even rows */
			ml: '10%' /* = width of .hex / 2  to indent even rows */,
		},
		'& div:nth-child(9n+9)': {
			/* last hexagon of even rows */
			mr: '10%' /* = width of .hex / 2  to indent even rows */,
		},
		// '& div:nth-child(5n + 1)': {
		// 	ml: '$24',
		// },
	})

	const ss2 = stitch({
		backgroundColor: '$orange600',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		// 	#hexGrid{
		pb: '4.4%',
		// }
		'& div': {
			width: '20%' /* = 100 / 5 */,
			mb: '-3.2%',
		},
		'& div:nth-child(1)': {
			/* first hexagon of even rows */
			ml: '25%' /* = width of .hex / 2  to indent even rows */,
		},
		'& div:nth-child(2)': {
			/* last hexagon of even rows */
			mr: '25%' /* = width of .hex / 2  to indent even rows */,
		},
		// '& div:nth-child(5n + 1)': {
		// 	ml: '$24',
		// },
	})

	const first50 = take(items, 50)
	const last3 = takeRight(items, 3)
</script>

<!-- <div> -->

<Content>

	<Box css={{ textAlign: 'center', py: '$8' }} id="season01">
		<Text as="h2" size="4xl">season 01</Text>
		<Text as="p" size="lg">a cube finds its way</Text>
	</Box>

	<Box cls={ss1}>

		{#each first50 as episode}
			<Box css={{ size: '$100%' }}>

				<Hexagon fill={episode.past ? '#00ff00' : ''} />
			</Box>
		{/each}

	</Box>
	<Box cls={ss2}>

		{#each last3 as episode}
			<Box css={{ size: '$100%' }}>
				<Hexagon />
			</Box>
		{/each}

	</Box>

</Content>

<!-- </div> -->
