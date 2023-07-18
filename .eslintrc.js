// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: ['@antfu'],
  rules: {
    'no-console': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      // 'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
  // rules: {
  //     "vue/component-name-in-template-casing": ["error", "PascalCase" | "kebab-case", {
  //       "registeredComponentsOnly": true,
  //       "ignores": []
  //     }]
  // },
}
