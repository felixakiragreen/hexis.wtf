const colors = {
	felixgreen: '#adff2f',
	indigo: '#5400fc',
	black: '#000000',
	white: '#ffffff',
	white50: 'hsla(0, 0%, 100%, 0.5)',
	white75: 'hsla(0, 0%, 100%, 0.75)',
	teal: '#6a8494',
	clear: 'hsla(0, 0%, 0%, 0)',
	//
	background: '$grey800',
	foreground: '$white',
	highlight: '$felixgreen',
	lowlight: '$indigo',
	muted: '$grey500',
	faint: '$grey200',

	//
	grey900: '#0a0a09',
	grey800: '#141411',
	grey750: '#1d1e1a',
	grey700: '#2a2b26',
	grey650: '#373832',
	grey600: '#53544c',
	grey500: '#7f8076',
	grey400: '#aaaba0',
	grey300: '#d3d4c9',
	grey200: '#ebebe2',
	grey100: '#f5f5ef',
	red900: '#290607',
	red800: '#470a0d',
	red700: '#710e15',
	red600: '#a11420',
	red500: '#cb1d37',
	red400: '#ed3467',
	red300: '#fc64a1',
	red200: '#ffa3d6',
	red100: '#ffecfa',
	orange900: '#2f150d',
	orange800: '#50240f',
	orange700: '#75330f',
	orange600: '#9e490c',
	orange500: '#cb6709',
	orange400: '#f1901d',
	orange300: '#fcb760',
	orange200: '#fed7a8',
	orange100: '#fff6e9',
	yellow900: '#371f05',
	yellow800: '#5f3906',
	yellow700: '#8f5c07',
	yellow600: '#c6930b',
	yellow500: '#f8cb1b',
	yellow400: '#f7dd4b',
	yellow300: '#f5ea7e',
	yellow200: '#f3f1b0',
	yellow100: '#f2f2de',
	green900: '#052907',
	green800: '#0c4a07',
	green700: '#1e6e08',
	green600: '#3f9608',
	green500: '#6fbf10',
	green400: '#a5e22c',
	green300: '#cfed6d',
	green200: '#e4efab',
	green100: '#e8ead8',
	blue900: '#001336',
	blue800: '#002662',
	blue700: '#013f8c',
	blue600: '#0362b2',
	blue500: '#0f8fd0',
	blue400: '#38bce6',
	blue300: '#70dbef',
	blue200: '#a9eaf4',
	blue100: '#e5f6f8',
	purple900: '#120639',
	purple800: '#271163',
	purple700: '#442294',
	purple600: '#643bc0',
	purple500: '#8659e1',
	purple400: '#9f7af2',
	purple300: '#b29af8',
	purple200: '#ccbdf9',
	purple100: '#f0e6f9',
}

const space = {
	0: '0px', // 0px
	px: '1px', // 1px
	'0.5': '0.125rem', // 2px
	1: '0.25rem', // 4px
	'1.5': '0.375rem', // 6px
	2: '0.5rem', // 8px
	'2.5': '0.625rem', // 10px
	3: '0.75rem', // 12px
	'3.5': '0.875rem', // 14px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	7: '1.75rem', // 28px
	8: '2rem', // 32px
	9: '2.25rem', // 36px
	10: '2.5rem', // 40px
	11: '2.75rem', // 44px
	12: '3rem', // 48px
	14: '3.5rem', // 56px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	28: '7rem', // 112px
	32: '8rem', // 128px
	36: '9rem', // 144px
	40: '10rem', // 160px
	44: '11rem', // 176px
	48: '12rem', // 192px
	52: '13rem', // 208px
	56: '14rem', // 224px
	60: '15rem', // 240px
	64: '16rem', // 256px
	72: '18rem', // 288px
	80: '20rem', // 320px
	96: '24rem', // 384px
	112: '28rem', // 448px
	128: '32rem', // 512px
	144: '36rem', // 576px
	160: '40rem', // 640px
	'-px': '-1px', // 1px
	'-0.5': '-0.125rem', // 2px
	'-1': '-0.25rem', // 4px
	'-1.5': '-0.375rem', // 6px
	'-2': '-0.5rem', // 8px
	'-2.5': '-0.625rem', // 10px
	'-3': '-0.75rem', // 12px
	'-3.5': '-0.875rem', // 14px
	'-4': '-1rem', // 16px
	'-5': '-1.25rem', // 20px
	'-6': '-1.5rem', // 24px
	'-7': '-1.75rem', // 28px
	'-8': '-2rem', // 32px
	'-9': '-2.25rem', // 36px
	'-10': '-2.5rem', // 40px
	'-11': '-2.75rem', // 44px
	'-12': '-3rem', // 48px
	'-14': '-3.5rem', // 56px
	'-16': '-4rem', // 64px
	'-20': '-5rem', // 80px
	'-24': '-6rem', // 96px
	'-28': '-7rem', // 112px
	'-32': '-8rem', // 128px
	'-36': '-9rem', // 144px
	'-40': '-10rem', // 160px
	'-44': '-11rem', // 176px
	'-48': '-12rem', // 192px
	'-52': '-13rem', // 208px
	'-56': '-14rem', // 224px
	'-60': '-15rem', // 240px
	'-64': '-16rem', // 256px
	'-72': '-18rem', // 288px
	'-80': '-20rem', // 320px
	'-96': '-24rem', // 384px
	'-112': '-28rem', // 448px
	'-128': '-32rem', // 512px
	'-144': '-36rem', // 576px
	'-160': '-40rem', // 640px
}

const max = {
	'0': '0rem',
	none: 'none',
	xs: '20rem',
	sm: '24rem',
	md: '28rem',
	lg: '32rem',
	xl: '36rem',
	'2xl': '42rem',
	'3xl': '48rem',
	'4xl': '56rem',
	'5xl': '64rem',
	'6xl': '72rem',
	'7xl': '80rem',
	full: '100%',
	min: 'min-content',
	max: 'max-content',
	prose: '65ch',
	'screen-w': '100vw',
	'screen-h': '100vh',
	'screen-sm': '640px',
	'screen-md': '768px',
	'screen-lg': '1024px',
	'screen-xl': '1280px',
	'screen-2xl': '1536px',
}

// max-w-0	max-width: 0rem;
// max-w-none	max-width: none;
// max-w-xs	max-width: 20rem;
// max-w-sm	max-width: 24rem;
// max-w-md	max-width: 28rem;
// max-w-lg	max-width: 32rem;
// max-w-xl	max-width: 36rem;
// max-w-2xl	max-width: 42rem;
// max-w-3xl	max-width: 48rem;
// max-w-4xl	max-width: 56rem;
// max-w-5xl	max-width: 64rem;
// max-w-6xl	max-width: 72rem;
// max-w-7xl	max-width: 80rem;
// max-w-full	max-width: 100%;
// max-w-min	max-width: min-content;
// max-w-max	max-width: max-content;
// max-w-prose	max-width: 65ch;
// max-w-screen-sm	max-width: 640px;
// max-w-screen-md	max-width: 768px;
// max-w-screen-lg	max-width: 1024px;
// max-w-screen-xl	max-width: 1280px;
// max-w-screen-2xl	max-width: 1536px;

export const darkTokens = {
	colors: {
		foreground: '$grey100',
		background: '$grey700',
		highlight: '$felixgreen',
		lowlight: '$indigo',
	},
}

export const indigoTokens = {
	colors: {
		foreground: '$white',
		background: '$indigo',
		highlight: '$felixgreen',
		lowlight: '$indigo',
	},
}

export const tokens = {
	colors,
	space,
	sizes: {
		...space,
		...max,
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem',
	},
	fonts: {
		main: 'Montserrat, georgia, apple-system, sans-serif',
		mono: 'SF Mono, georgia, Söhne Mono, menlo, monospace',
		sans: 'Inter, georgia, apple-system, sans-serif',
	},
	fontWeights: {
		thin: '100',
		light: '300',
		base: '400',
		semi: '500',
		bold: '700',
		black: '900',
	},
	lineHeights: {
		xs: '1rem',
		sm: '1.25rem',
		md: '1.5rem',
		lg: '1.75rem',
		xl: '1.75rem',
		'2xl': '2rem',
		'3xl': '2.25rem;',
		'4xl': '2.5rem',
		'5xl': '1',
		'6xl': '1',
		'7xl': '1',
		'8xl': '1',
		'9xl': '1',
	},
	//
	// letterSpacings: {},
	// sizes: {},
	// borderWidths: {},
	// borderStyles: {},
	radii: {
		none: '0px',
		sm: '0.125rem',
		base: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
	shadows: {
		popup: '0 0 6px 0 rgba(0, 0, 0, 0.67)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: 'none',
	},
	// zIndices: {},
	transitions: {
		1: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
		2: 'opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms',
	},
}

export const utils = {
	m: (config) => (value) => ({
		marginTop: value,
		marginBottom: value,
		marginLeft: value,
		marginRight: value,
	}),
	mt: (config) => (value) => ({
		marginTop: value,
	}),
	mr: (config) => (value) => ({
		marginRight: value,
	}),
	mb: (config) => (value) => ({
		marginBottom: value,
	}),
	ml: (config) => (value) => ({
		marginLeft: value,
	}),
	mx: (config) => (value) => ({
		marginLeft: value,
		marginRight: value,
	}),
	my: (config) => (value) => ({
		marginTop: value,
		marginBottom: value,
	}),
	p: (config) => (value) => ({
		paddingTop: value,
		paddingBottom: value,
		paddingLeft: value,
		paddingRight: value,
	}),
	pt: (config) => (value) => ({
		paddingTop: value,
	}),
	pr: (config) => (value) => ({
		paddingRight: value,
	}),
	pb: (config) => (value) => ({
		paddingBottom: value,
	}),
	pl: (config) => (value) => ({
		paddingLeft: value,
	}),
	px: (config) => (value) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	py: (config) => (value) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	text: (config) => (value) => ({
		fontSize: value,
		lineHeight: value,
	}),
	w: (config) => (value) => ({
		width: value,
	}),
	h: (config) => (value) => ({
		height: value,
	}),
	size: (config) => (value) => ({
		w: value,
		h: value,
	}),
	surrounding: (config) => (value) => ({
		top: value,
		right: value,
		bottom: value,
		left: value,
	}),
	frame: (config) => (value: number) => ({
		size: `${value * 34}px`,
		'& img': {
			size: `${value * 24}px`,
		},
	}),
	sx: (config) => (value) => ({
		// Unfortunately gap doesn't work on mobile Safari
		// gap: value,
		'& > * + *': {
			ml: value,
		},
	}),
	sy: (config) => (value) => ({
		// Unfortunately gap doesn't work on mobile Safari
		// gap: value,
		'& > * + *': {
			mt: value,
		},
	}),
	backdropFilter: (config) => (value) => ({
		backdropFilter: value,
		'-webkit-backdrop-filter': value,
	}),
	linearGradient: (config) => (value) => ({
		backgroundImage: `linear-gradient(${value})`,
	}),
	blur: (config) => (value) => ({
		filter: `blur(${value})`,
	}),
	bg: (config) => (value) => ({
		backgroundColor: value,
	}),
	clip: (config) => (value) => {
		const values = {
			hexagon: 'polygon(50% 0, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
		}

		return {
			clipPath: values[value] || value,
		}
	},
}

// --tw-space-y-reverse: 0;
// margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
// margin-bottom: calc(0px * var(--tw-space-y-reverse));
