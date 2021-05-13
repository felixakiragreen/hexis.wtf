<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'

	const cssLnk = {
		'@initial': {
			'> *': { size: '$10' },
		},
		'@md': {
			'> *': { size: '$16' },
		},
	}
</script>

<footer>
	<Content css={{ color: '$foreground', my: '$16' }}>
		<Socials align="center" css={cssLnk} />
	</Content>
</footer>
