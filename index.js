module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['jsdoc', 'disable', 'jest'],
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  rules: {
    'jest/valid-expect': 'off',
    'jsdoc/require-returns-description': 'off',
    'max-len': ['error', 150, 2, {
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'arrow-body-style': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['_id', '_link', '_hash', '_updated', '_touched'],
    }],
  },
};
