const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const { defineConfig } = require("eslint/config");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

export default defineConfig([
  {
    ignores: ["dist/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",      // changé de "warn" à "error" pour bloquer le commit
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error", // bloquera si on utilise "any"
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  eslintPluginPrettierRecommended,
]);
