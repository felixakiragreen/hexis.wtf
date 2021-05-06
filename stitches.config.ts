import { createCss } from '@stitches/core'

import { tokens, darkTokens, indigoTokens, utils } from './src/theme'

export const { css, global: cssGlobal, keyframes, getCssString, theme } = createCss({
	prefix: '',
	theme: {
		...tokens,
	},
	media: {
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)',
	},
	utils,
})
