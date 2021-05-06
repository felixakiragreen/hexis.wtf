<script>

	import { css } from '@/ui'
  import Content from '$lib/Content.svelte'
	import Socials from '$lib/Social/index.svelte'
	
	const ss = css({
		backgroundColor: "$background",
    
    "& p": {
      color: "$muted",
    },
    "& div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }
	})

</script>


<header class={ss}>
  <Content>
    <div>
      <p>
        new episode every <b>friday — 09:00 et</b>
      </p>

      <Socials />
    </div>
  </Content>
</header>