<script lang="ts">
	import { onMount } from 'svelte'

	import { map, take, takeRight } from 'lodash'
	import { addWeeks, isBefore } from 'date-fns'

	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Text from '@/lib/bonds/Text.svelte'

	import HexagonDetail from '@/lib/comps/HexagonDetail.svelte'

	import { fetchOpenSeaAssets } from '@/lib/datum/fetch'

	import type { Episode } from '@/types'

	const startOfYear = new Date(2021, 0, 1)

	const items: Episode[] = map(new Array(53), (value, index) => {
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

	const ssFirst50 = stitch({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		'@initial': {
			'& > div': {
				width: '50%' /* = 100 / 3 */,
				mb: '-6.2%',
			},
			'& > div:nth-child(3n+3)': {
				/* first hexagon of even rows */
				ml: '25%' /* = width of .hex / 2  to indent even rows */,
				mr: '25%' /* = width of .hex / 2  to indent even rows */,
			},
		},
		'@sm': {
			'& > div': {
				width: '33.33%' /* = 100 / 3 */,
				mb: '-4.2%',
			},
			'& > div:nth-child(3n+3)': {
				// clear
				ml: 0,
				mr: 0,
			},
			'& > div:nth-child(5n+4)': {
				/* first hexagon of even rows */
				ml: '16.67%' /* = width of .hex / 2  to indent even rows */,
			},
			'& > div:nth-child(5n+5)': {
				/* last hexagon of even rows */
				mr: '16.67%' /* = width of .hex / 2  to indent even rows */,
			},
		},
		'@md': {
			'& > div': {
				width: '20%' /* = 100 / 5 */,
				mb: '-2.4%',
			},
			'& > div:nth-child(5n+4)': {
				// clear
				ml: 0,
			},
			'& > div:nth-child(5n+5)': {
				// clear
				mr: 0,
			},
			'& > div:nth-child(9n+6)': {
				/* first hexagon of even rows */
				ml: '10%' /* = width of .hex / 2  to indent even rows */,
			},
			'& > div:nth-child(9n+9)': {
				/* last hexagon of even rows */
				mr: '10%' /* = width of .hex / 2  to indent even rows */,
			},
		},
	})

	const ssLast3 = stitch({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		'@initial': {
			'& > div': {
				width: '50%' /* = 100 / 3 */,
				mb: '-6.2%',
			},
			'& > div:nth-child(1)': {
				/* first hexagon of even rows */
				ml: '25%' /* = width of .hex / 2  to indent even rows */,
				mr: '25%' /* = width of .hex / 2  to indent even rows */,
			},
		},
		'@sm': {
			'& > div': {
				width: '33.33%' /* = 100 / 3 */,
				mb: '-4.2%',
			},
			'& > div:nth-child(1)': {
				// clear
				ml: 0,
				mr: 0,
			},
		},
		'@md': {
			'& > div': {
				width: '20%' /* = 100 / 5 */,
				mb: '-2.4%',
			},
			'& > div:nth-child(1)': {
				/* first hexagon of even rows */
				ml: '25%' /* = width of .hex / 2  to indent even rows */,
			},
			'& > div:nth-child(2)': {
				/* last hexagon of even rows */
				mr: '25%' /* = width of .hex / 2  to indent even rows */,
			},
		},
	})

	let first50: Episode[]
	let last3: Episode[]
	$: first50 = take(items, 50)
	$: last3 = takeRight(items, 3)

	onMount(async () => {
		fetchShit()
	})

	const parseResult = (result) => {
		const itemIndex = items.findIndex(
			(episode) => episode.title === result.name && result.gif !== ''
		)
		if (itemIndex >= 0) {
			if (result.url && result.url !== '') {
				items[itemIndex].url = result.url
			}
			if (result.gif && result.gif !== '') {
				items[itemIndex].gif = result.gif
			}
			if (result.urlOpenSea && result.urlOpenSea !== '') {
				items[itemIndex].urlOpenSea = result.urlOpenSea
			}
			if (result.urlRarible && result.urlRarible !== '') {
				items[itemIndex].urlRarible = result.urlRarible
			}
			if (typeof result.available !== 'undefined') {
				items[itemIndex].available = result.available
			}
		}
	}

	const fetchShit = async () => {
		await fetchOpenSeaAssets().then((results) => {
			// console.log({ results })
			results.forEach(parseResult)
		})
		await fetchOpenSeaAssets(undefined, 50).then((results) => {
			// console.log({ results })
			results.forEach(parseResult)
		})
		// console.log('items', { items, first50, last3 })
	}

	// $: {
	// 	console.log({ items })
	// }
</script>

<Content>
	<Box css={{ textAlign: 'center', py: '$8' }} id="season01">
		<Text as="h2" size="4xl" css={{ mb: '$-3' }}>season 01</Text>
		<Text as="p" size="lg">a cube finds its way</Text>
	</Box>

	<Box cls={ssFirst50}>
		{#each first50 as episode}
			<HexagonDetail {episode} />
		{/each}
	</Box>
	<Box cls={ssLast3}>
		{#each last3 as episode}
			<HexagonDetail {episode} />
		{/each}
	</Box>
</Content>
