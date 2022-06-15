module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['jsdoc', 'disable'],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'jsdoc/require-returns-description': 'off',
    'max-len': ['error', 150, 2, {
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
  },
};
