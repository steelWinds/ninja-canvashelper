
/// <reference types="vitest" />

import type {UserConfigExport} from 'vite';
import type {InlineConfig} from 'vitest';
import {defineConfig} from 'vite';
import path from 'path';

const {resolve} = path;

const config: UserConfigExport & InlineConfig = defineConfig({
	build: {
		lib: {
			entry: resolve('src/index.ts'),
			name: 'CanvasHelper',
		},
	},

	resolve: {
		alias: {
			'@modules': resolve('./src/modules'),
		},
	},
});

export default config;
