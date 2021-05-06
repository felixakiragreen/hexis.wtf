<script>

	import { css } from '@/ui'

	
	const ss = css({
		// backgroundColor: "$background",
    // color: "$foreground",

    mx: 'auto',
    maxWidth: '$screen-lg',
    py: '$4',

    '@initial': {
      px: '$4',
    },
    '@sm': {
      px: '$8',
    },
    '@xl': {
      px: '$0',
    },
    
	})

</script>


<section class={ss}>
  <slot />
</section>