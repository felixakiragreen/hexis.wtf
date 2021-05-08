<script lang="ts">
	export let url
	export let newTab = false
</script>

<a href={url} target={newTab ? '_blank' : '_self'}>
	<slot />
</a>
