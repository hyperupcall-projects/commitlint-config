/** @type {import('@commitlint/types').UserConfig} */
export default {
	rules: {
		// https://commitlint.js.org/reference/rules.html#body-case
		'body-case': [0, 'always', ['lower-case']],

		// https://commitlint.js.org/reference/rules.html#body-empty
		'body-empty': [0, 'never'],

		// https://commitlint.js.org/reference/rules.html#body-full-stop
		'body-full-stop': [2, 'never', '.'],

		// https://commitlint.js.org/reference/rules.html#body-leading-blank
		'body-leading-blank': [0, 'always'],

		// https://commitlint.js.org/reference/rules.html#body-max-length
		'body-max-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#body-max-line-length
		'body-max-line-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#body-min-length
		'body-min-length': [2, 'always', 0],

		// https://commitlint.js.org/reference/rules.html#breaking-change-exclamation-mark
		'breaking-change-exclamation-mark': [2, 'always'],

		// https://commitlint.js.org/reference/rules.html#footer-empty
		'footer-empty': [0, 'always'],

		// https://commitlint.js.org/reference/rules.html#footer-leading-blank
		'footer-leading-blank': [2, 'always'],

		// https://commitlint.js.org/reference/rules.html#footer-max-length
		'footer-max-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#footer-max-line-length
		'footer-max-line-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#footer-min-length
		'footer-min-length': [2, 'always', 0],

		// https://commitlint.js.org/reference/rules.html#header-breaking-change
		// TODO: This was in docs but seemingly not implemented (threw error).
		// 'header-breaking-change': [2, 'never'],

		// https://commitlint.js.org/reference/rules.html#header-case
		'header-case': [2, 'never', []],

		// https://commitlint.js.org/reference/rules.html#header-full-stop
		'header-full-stop': [2, 'never', '.'],

		// https://commitlint.js.org/reference/rules.html#header-max-length
		'header-max-length': [2, 'always', 72],

		// https://commitlint.js.org/reference/rules.html#header-min-length
		'header-min-length': [2, 'always', 0],

		// https://commitlint.js.org/reference/rules.html#header-trim
		'header-trim': [2, 'always'],

		// https://commitlint.js.org/reference/rules.html#references-empty
		'references-empty': [2, 'always'],

		// https://commitlint.js.org/reference/rules.html#scope-case
		'scope-case': [2, 'always', 'lower-case'],

		// https://commitlint.js.org/reference/rules.html#scope-delimiter-style
		'scope-delimiter-style': [2, 'always', ['/', '\\', ',']],

		// https://commitlint.js.org/reference/rules.html#scope-empty
		'scope-empty': [0, 'never'],

		// https://commitlint.js.org/reference/rules.html#scope-enum
		'scope-enum': [2, 'always', []],

		// https://commitlint.js.org/reference/rules.html#scope-max-length
		'scope-max-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#scope-min-length
		'scope-min-length': [2, 'always', 0],

		// https://commitlint.js.org/reference/rules.html#signed-off-by
		'signed-off-by': [0, 'always', ['Signed-off-by:']],

		// https://commitlint.js.org/reference/rules.html#subject-case
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],

		// https://commitlint.js.org/reference/rules.html#subject-empty
		'subject-empty': [2, 'always'],

		// https://commitlint.js.org/reference/rules.html#subject-exclamation-mark
		'subject-exclamation-mark': [2, 'never'],

		// https://commitlint.js.org/reference/rules.html#subject-full-stop
		'subject-full-stop': [2, 'never', '.'],

		// https://commitlint.js.org/reference/rules.html#subject-max-length
		'subject-max-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#subject-min-length
		'subject-min-length': [2, 'always', 0],

		// https://commitlint.js.org/reference/rules.html#trailer-exists
		'trailer-exists': [0, 'always', 'Signed-off-by:'],

		// https://commitlint.js.org/reference/rules.html#type-case
		'type-case': [2, 'always', 'lower-case'],

		// https://commitlint.js.org/reference/rules.html#type-empty
		'type-empty': [0, 'never'],

		// https://commitlint.js.org/reference/rules.html#type-enum
		'type-enum': [
			0,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],

		// https://commitlint.js.org/reference/rules.html#type-max-length
		'type-max-length': [2, 'always', Infinity],

		// https://commitlint.js.org/reference/rules.html#type-min-length
		'type-min-length': [2, 'always', 0],
	},
}
