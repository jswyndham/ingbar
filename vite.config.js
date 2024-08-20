import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import postcss from 'postcss';

export default defineConfig({
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11'], // Modify to include older browsers
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
		}),
	],
	css: {
		postcss,
	},
	build: {
		outDir: 'dist',
	},
});
