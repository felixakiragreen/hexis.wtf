<script lang="ts">
	import { stitch } from '@/ui'

	export let cls = null
	export let css = null
	export let style = null
	export let id = null
	export let vrt = {}

	export let h = 1

	const ss = cls || stitch({})
</script>

{#if h === 6}
	<h6 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h6>
{:else if h === 5}
	<h5 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h5>
{:else if h === 4}
	<h4 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h4>
{:else if h === 3}
	<h3 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h3>
{:else if h === 2}
	<h2 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h2>
{:else}
	<h1 class={ss({ ...vrt, css })} {style} {id}>
		<slot />
	</h1>
{/if}
