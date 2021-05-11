<script lang="ts">
	import { onMount } from 'svelte'

	import { map, take, takeRight, forEach, find, set } from 'lodash'
	import { addWeeks, isBefore, format } from 'date-fns'

	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'

	import Hexagon from '@/lib/bonds/Hexagon.svelte'

	import { fetchOpenSeaAssets } from '@/lib/datum/fetch'

	const startOfYear = new Date(2021, 0, 1)

	type Episode = {
		id: string
		episode: string
		title: string
		date: Date
		past: boolean
		url?: string
		gif?: string
	}

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

	const ss1 = stitch({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		'& > div': {
			width: '20%' /* = 100 / 5 */,
			mb: '-3.2%',
		},
		'& > div:nth-child(9n+6)': {
			/* first hexagon of even rows */
			ml: '10%' /* = width of .hex / 2  to indent even rows */,
		},
		'& > div:nth-child(9n+9)': {
			/* last hexagon of even rows */
			mr: '10%' /* = width of .hex / 2  to indent even rows */,
		},
	})

	const ss2 = stitch({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',

		pb: '4.4%',

		'& > div': {
			width: '20%' /* = 100 / 5 */,
			mb: '-3.2%',
		},
		'& > div:nth-child(1)': {
			/* first hexagon of even rows */
			ml: '25%' /* = width of .hex / 2  to indent even rows */,
		},
		'& > div:nth-child(2)': {
			/* last hexagon of even rows */
			mr: '25%' /* = width of .hex / 2  to indent even rows */,
		},
	})

	let first50: Episode[]
	let last3: Episode[]
	$: first50 = take(items, 50)
	$: last3 = takeRight(items, 3)

	// $: assets =

	onMount(async () => {
		fetchOpenSeaAssets().then((results) => {
			console.log({ results })

			forEach(results, (result) => {
				const itemIndex = items.findIndex((episode) => episode.title === result.name)

				if (itemIndex >= 0) {
					if (result.url && result.url !== '') {
						items[itemIndex].url = result.url
					}
					if (result.gif && result.gif !== '') {
						items[itemIndex].gif = result.gif
					}
				}

				// 	'url',
				// 	result.name
				// )
				// set(

				// )
			})
			console.log('items', { items, first50, last3 })
		})

		// document.querySelector('video').addEventListener(
		// 	'ended',
		// 	function (e) {
		// 		e.target.currentTime = 0
		// 		e.target.play()
		// 	},
		// 	false
		// )
	})

	function loop(e) {
		e.target.currentTime = 0
		e.target.play()
	}

	const ss3 = stitch({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		// bottom: '3.2%',
		bottom: 0,
		clipPath: 'polygon(50% 0, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',

		'& video': {
			size: '$full',
			transform: 'scale(2)',
		},
		'& img': {
			size: '$full',
			transform: 'scale(1.5)',
			pointerEvents: 'none',
			transition: '$1',
		},

		'&:hover > img': {
			opacity: 0.2,
		},
	})
</script>

<Content>

	<Box css={{ textAlign: 'center', py: '$8' }} id="season01">
		<Text as="h2" size="4xl">season 01</Text>
		<Text as="p" size="lg">a cube finds its way</Text>
	</Box>

	<Box cls={ss1}>

		{#each first50 as episode}
			<Box
				css={{ position: 'relative', size: '$100%', '& svg': { display: 'block', height: 'auto' } }}
			>

				<Hexagon fill={'var(--colors-grey900)'} />
				<Stack css={{ position: 'absolute', surrounding: 0 }} align="center" alignV="center">
					<Text>{episode.title}</Text>
					<Text css={{ text: '$sm', color: '$muted' }}>{format(episode.date, '1yyyy·MM·dd')}</Text>
				</Stack>
				<Box cls={ss3}>
					{#if episode.past && episode.gif}
						<Image src={episode.gif} alt={episode.title} />
					{/if}
				</Box>
			</Box>
		{/each}

	</Box>
	<Box cls={ss2}>

		{#each last3 as episode}
			<Box css={{ position: 'relative', size: '$100%' }}>
				<Hexagon fill={'var(--colors-grey900)'} />
				<Stack css={{ position: 'absolute', surrounding: 0 }} align="center" alignV="center">
					<Text>{episode.title}</Text>
					<Text css={{ text: '$sm', color: '$muted' }}>{format(episode.date, '1yyyy·MM·dd')}</Text>
				</Stack>
			</Box>
		{/each}

	</Box>

</Content>
