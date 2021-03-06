<script lang="ts">
	import { onMount } from 'svelte'

	import { map, take, takeRight } from 'lodash'
	import { addWeeks, isBefore, format } from 'date-fns'

	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Image from '@/lib/atoms/Image.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Text from '@/lib/bonds/Text.svelte'
	import Inline from '@/lib/bonds/Inline.svelte'
	import Link from '@/lib/bonds/Link.svelte'

	import Hexagon from '@/lib/bonds/Hexagon.svelte'

	import { fetchOpenSeaAssets } from '@/lib/datum/fetch'

	const startOfYear = new Date(2021, 0, 1)

	type Episode = {
		id: string
		episode: string
		title: string
		date: Date
		past: boolean
		gif?: string
		url?: string
		urlOpenSea?: string
		urlRarible?: string
		available?: boolean
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

	const fetchShit = async () => {
		fetchOpenSeaAssets().then((results) => {
			// console.log({ results })
			results.forEach((result) => {
				const itemIndex = items.findIndex(
					(episode) => episode.title === result.name
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
			})
			// console.log('items', { items, first50, last3 })
		})
	}

	const ssImgHex = stitch({
		position: 'absolute',
		surrounding: 0,
		clip: 'hexagon',
		overflow: 'hidden',

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
	})

	const ssHex = stitch({
		position: 'relative',
		size: '$100%',

		'& svg': {
			display: 'block',
			height: 'auto',
		},
	})

	const cssBox = {
		position: 'absolute',
		surrounding: 0,
		transition: '$1',
		clip: 'hexagon',
		'&:hover': { opacity: 1 },
	}

	const cssHex = {
		position: 'absolute',
		surrounding: 0,
		background: 'rgba(10, 10, 9, 0.5)',
		backdropFilter: 'blur(2px)',
		clip: 'hexagon',
	}
</script>

<Content>

	<Box css={{ textAlign: 'center', py: '$8' }} id="season01">
		<Text as="h2" size="4xl" css={{ mb: '$-3' }}>season 01</Text>
		<Text as="p" size="lg">a cube finds its way</Text>
	</Box>

	<Box cls={ssFirst50}>

		{#each first50 as episode}
			<Box cls={ssHex}>
				<Hexagon fill={'var(--colors-grey900)'} />
				<Box cls={ssImgHex}>
					{#if episode.past && episode.gif}
						<Image src={episode.gif} alt={episode.title} />
					{/if}
				</Box>
				{#if episode.available}
					<Box css={{ ...cssBox, surrounding: '-1%', zIndex: -1 }}>
						<Box
							css={{ position: 'absolute', surrounding: 0, bg: '$green400' }}
						/>
					</Box>
				{/if}
				<Box css={{ ...cssBox, opacity: episode.past ? 0 : 1 }}>
					{#if episode.past}
						<Box css={cssHex} />
					{/if}

					<Stack
						css={{ position: 'absolute', surrounding: 0, '@initial': { text: '$xs' }, '@sm': { text: '$sm' } }}
						align="center"
						alignV="center"
					>

						<Text css={{ text: '$md', fontWeight: '$bold' }}>
							{episode.title}
						</Text>
						<Text css={{ color: episode.past ? '$grey400' : '$muted' }}>
							{format(episode.date, '1yyyy·MM·dd')}
						</Text>

						<Inline space="sm" css={{ textTransform: 'initial' }}>
							{#if episode.urlOpenSea}
								<Link url={episode.urlOpenSea} newTab appearance="blockinho">
									opensea
								</Link>
							{/if}
							{#if episode.urlOpenSea && episode.urlRarible}
								<Text>·</Text>
							{/if}
							{#if episode.urlRarible}
								<Link url={episode.urlRarible} newTab appearance="blockinho">
									rarible
								</Link>
							{/if}

						</Inline>

						{#if episode.available}
							<Text>for sale</Text>
						{/if}

					</Stack>
				</Box>

			</Box>
		{/each}

	</Box>
	<Box cls={ssLast3}>

		{#each last3 as episode}
			<Box cls={ssHex}>
				<Hexagon fill={'var(--colors-grey900)'} />
				<Stack
					css={{ position: 'absolute', surrounding: 0 }}
					align="center"
					alignV="center"
				>
					<Text>{episode.title}</Text>
					<Text css={{ text: '$sm', color: '$muted' }}>
						{format(episode.date, '1yyyy·MM·dd')}
					</Text>
				</Stack>
			</Box>
		{/each}

	</Box>

</Content>
