/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier"],
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "prettier/prettier": [1, { semi: false, trailingComma: "none", printWidth: 160 }]
  }
}
