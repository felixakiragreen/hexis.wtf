<script>
	export let tag = 'span'
</script>

{#if tag === 'span'}

	<span>
		<slot />
	</span>
{:else if tag === 'p'}
	<p>
		<slot />
	</p>
{:else}

	<slot />
{/if}
