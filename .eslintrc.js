const OFF = 0;
const ERROR = 2;

const blankLineRule = type => [
  { blankLine: 'always', prev: type, next: '*' },
  { blankLine: 'always', prev: '*', next: type },
];

module.exports = {
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/camelcase': OFF,
    '@typescript-eslint/no-use-before-define': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/no-unescaped-entities': OFF,
    'react/prop-types': OFF,
    'react/display-name': OFF,
    /**
     * Non-default rules we are adding
     */
    'react/no-danger': ERROR,
    'import/order': [ERROR, { alphabetize: { order: 'asc' } }],
    'import/first': ERROR,
    camelcase: ERROR,
    'no-param-reassign': ERROR,
    'prefer-arrow-functions/prefer-arrow-functions': ERROR,
    'no-restricted-imports': ['error', { patterns: ['@emotion/*'] }],
    'react/prefer-stateless-function': ERROR,
    '@typescript-eslint/no-unused-vars': OFF,
    '@typescript-eslint/consistent-type-assertions': [ERROR, { assertionStyle: 'never' }],
    '@typescript-eslint/no-explicit-any': [ERROR, { fixToUnknown: false }],
    'arrow-body-style': ERROR,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    eqeqeq: 'error',
    'react/jsx-curly-brace-presence': [ERROR, { props: 'never', children: 'never' }],
    'padding-line-between-statements': [
      ERROR,
      ...blankLineRule('multiline-block-like'),
      ...blankLineRule('multiline-expression'),
      ...blankLineRule('multiline-const'),
      ...blankLineRule('export'),
      { blankLine: 'never', prev: '*', next: 'import' },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prefer-arrow-functions', '@typescript-eslint', 'react-hooks', 'import'],
  env: { node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
};
