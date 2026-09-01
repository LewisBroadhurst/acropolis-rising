import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves project sites under /<repo-name>/, so production builds
// need /acropolis-rising/ as the base path; dev and preview stay at root ('/').
// Override with VITE_BASE_PATH (e.g. '/' when hosting on a custom domain).
export default defineConfig(({ command }) => ({
	base: command === 'build' ? (process.env.VITE_BASE_PATH ?? '/acropolis-rising/') : '/',
	server: {
		port: 4200,
		host: 'localhost',
	},
	preview: {
		port: 4200,
		host: 'localhost',
	},
	plugins: [react()],
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		reportCompressedSize: true,
	},
	test: {
		name: 'acropolis-rising',
		watch: false,
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/test-setup.ts'],
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		reporters: ['default'],
		coverage: {
			reportsDirectory: './test-output/vitest/coverage',
			provider: 'v8' as const,
		},
	},
}));
