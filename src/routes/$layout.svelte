<script>
	import '../global.css'
	import { globalCss } from '@/ui'

	const globalStyles = globalCss({
		'#svelte': {
			visibility: 'visible !important',
		},
	})

	globalStyles()

	import Header from './_header.svelte'
	import Footer from './_footer.svelte'
</script>

<svelte:head>
	<title>hexis.wtf</title>
	<script
		src="https://cdn.usefathom.com/script.js"
		data-site="ARWXVRAM"
		data-excluded-domains="localhost"
		defer>

	</script>
</svelte:head>

<Header />

<slot />

<Footer />
