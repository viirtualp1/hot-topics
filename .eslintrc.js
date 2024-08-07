module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/no-v-html': ['off'],
    'vue/multi-word-component-names': ['off'],
    'import/no-duplicates': ['off'],
  },
}
