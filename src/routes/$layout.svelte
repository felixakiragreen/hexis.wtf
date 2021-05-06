<script>
	import '../global.css'

	import Header from './_header.svelte'
</script>

<svelte:head>
	<title>hexis.wtf</title>
	<script src="https://cdn.usefathom.com/script.js" data-site="ARWXVRAM" data-excluded-domains="localhost" defer></script>
</svelte:head>

<Header />

<slot />
