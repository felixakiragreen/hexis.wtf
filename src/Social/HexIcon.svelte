<script>
  import HexBackground from './HexBackground.svelte'

  export let social

  const { url, color, path, offset } = social

  let OFFSET = offset ? offset : 9
</script>

<style>
  a {
    --hex-bg: var(--base-hex-bg);
    --fill: var(--base-fill);
  }
  a:hover {
    --hex-bg: var(--hover-hex-bg);
    --fill: var(--hover-fill);
  }
</style>

<a href={url} target="_blank" 
style="--base-hex-bg: var(--{color}-400);
  --base-fill: var(--grey-700);
  --hover-hex-bg: var(--{color}-700);
  --hover-fill: var(--grey-200);">
  <HexBackground fill="var(--hex-bg)">
    <g transform={`translate(${OFFSET},${OFFSET}) scale(0.75)`}>
      <path d={path} fill="var(--fill)"  />
    </g>
  </HexBackground>
</a>
