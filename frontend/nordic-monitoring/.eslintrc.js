module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "default-param-last": "off",
        "react/function-component-definition": "off",
      },
    },
  ],
};
