module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "airbnb",
    "airbnb-base",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
