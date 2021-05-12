import { mdsvex } from 'mdsvex'
import { mdsvexConfig } from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//
		// adapter: node({ out: 'build' }),
		adapter: netlify(),
		//
		vite: {
			resolve: {
				// alias: [{ find: '@', replacement: '/src' }],
				alias: {
					'@': '/src',
				},
			},
			build: {
				outDir: 'build/',
			},
			optimizeDeps: {
				include: ['svelte-hero-icons'],
			},
		},
	},
}

export default config
