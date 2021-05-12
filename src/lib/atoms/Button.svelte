<script>
	import { stitch } from '@/ui'

	const buttonStyles = stitch({
		backgroundColor: '$colors$felixgreen',
		borderRadius: '9999px',
		fontSize: '$3',
		lineHeight: '1',
		fontWeight: 500,
		paddingTop: '10px',
		paddingBottom: '10px',
		paddingLeft: '16px',
		paddingRight: '16px',
		border: '0',
		cursor: 'pointer',

		// Pseudo-class selector
		'&:hover': {
			transform: 'translateY(-2px)',
			boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
		},
	})
</script>

<button class={buttonStyles}>Button</button>
