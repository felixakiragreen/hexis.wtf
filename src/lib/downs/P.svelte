<script lang="ts">
	import Text from '../bonds/Text.svelte'
</script>

<Text as="p" mdx="p" css={{ text: '$md' }}>
	<slot />
</Text>
