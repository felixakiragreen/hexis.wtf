<script lang="ts">
	import Content from '@/lib/bonds/Content.svelte'
	import Socials from '@/lib/comps/Socials.svelte'
</script>

<footer>
	<Content css={{ color: '$foreground', my: '$16' }}>
		<Socials align="center" size="lg" />
	</Content>
</footer>
