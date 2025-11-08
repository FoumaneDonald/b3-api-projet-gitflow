import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: ["dist/"],
  },
  {
    // Apply ESLint to all JS and TS files
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    // Enable the built-in ESLint JS plugin
    plugins: { js },
    // Use ESLint's recommended rules for JS
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  tseslint.configs.recommended,
  {
    rules: {
      // Warn on unused variables, but allow unused params starting with "_"
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      // Warn (but don't block) when using "any"
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Integrate Prettier so formatting rules are unified with ESLint
  // This ensures ESLint respects Prettier’s code style (no conflicts)
  eslintPluginPrettierRecommended,
]);
