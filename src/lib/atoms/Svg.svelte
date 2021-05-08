<script>
	export let viewBox
</script>

<svg
	{viewBox}
	x="0%"
	y="0%"
	width="100%"
	height="100%"
	fill-rule="evenodd"
	clip-rule="evenodd"
	stroke-line-join="round"
	stroke-miter-limit={2}
>
	<slot />
</svg>
