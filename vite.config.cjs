// vite.config.cjs
const pkg = require('./package.json')

/** @type {import('vite').UserConfig} */
export default {
	ssr: {
		noExternal: Object.keys(pkg.dependencies || {}),
	},
	resolve: {
		// alias: [{ find: '@', replacement: '/src' }],
		alias: {
			'@': '/src',
		},
	},
	build: {
		outDir: 'build/',
	},
	// optimizeDeps: {
	// 	include: ['svelte-hero-icons', 'lodash'],
	// },
}
