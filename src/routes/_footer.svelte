<script lang="ts">
	import { stitch } from '@/ui'
	import Content from '@/lib/bonds/Content.svelte'
	import Box from '@/lib/atoms/Box.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'
	import Socials from '@/lib/comps/Socials.svelte'

	const ss = stitch({
		backgroundColor: '$background',
		color: '$foreground',
		textAlign: 'center',
		text: '$lg',
	})
</script>

<!-- prettier-ignore -->

<footer class={ss()}>
	<Content>
		<Socials align="center" size="lg" />
	</Content>
</footer>
