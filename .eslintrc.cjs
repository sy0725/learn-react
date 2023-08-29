module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "dist",
    "pocketbase",
    // 'src/learn',
    "src/views",
    ".eslintrc.cjs",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "error",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
  },
};
