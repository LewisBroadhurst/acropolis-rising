import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['dist', 'coverage', 'test-output', 'vite.config.*.timestamp*'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx,js,jsx,mjs}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		settings: { react: { version: 'detect' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			...react.configs.flat.recommended.rules,
			...react.configs.flat['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
		},
	},
	prettier,
);
