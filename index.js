import { defineConfig } from 'oxlint'

export default defineConfig({
	jsPlugins: [
		'@stylistic/eslint-plugin',
	],
	options: {
		typeAware: true, // Requires oxlint-tsgolint, see: https://oxc.rs/docs/guide/usage/linter/type-aware.html
	},
	rules: {
		'@stylistic/arrow-spacing': 'error',
		'@stylistic/block-spacing': 'error',
		'@stylistic/brace-style': ['error', 'stroustrup'],
		'@stylistic/comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			functions: 'only-multiline',
		}],
		'@stylistic/comma-spacing': 'error',
		'@stylistic/eol-last': 'error',
		'@stylistic/function-call-spacing': 'error',
		'@stylistic/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'none',
			},
			singleline: {
				delimiter: 'comma',
			},
		}],
		'@stylistic/no-extra-semi': 'error',
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/no-multi-spaces': 'error',
		'@stylistic/no-multiple-empty-lines': ['error', {
			max: 2,
			maxBOF: 0,
			maxEOF: 1,
		}],
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/nonblock-statement-body-position': ['error', 'beside'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/key-spacing': 'error',
		'@stylistic/keyword-spacing': 'error',
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/quotes': ['error', 'single', {
			allowTemplateLiterals: 'always',
			avoidEscape: true,
		}],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/space-before-function-paren': ['error', {
			anonymous: 'never',
			catch: 'always',
			named: 'never',
		}],
		'@stylistic/space-in-parens': 'error',
		'@stylistic/type-annotation-spacing': 'error',
		'@stylistic/type-generic-spacing': 'error',
	},
})
