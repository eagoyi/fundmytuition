module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-var': 2,
    'prefer-arrow-callback': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
  },
};