import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.app.json",
        ecmaVersion: 2020, // Use the latest ECMAScript version
        sourceType: "module", // Use ES Modules (import/export)
        ecmaFeatures: {
          jsx: true, // Enable JSX for React
        },
      },
      globals: globals.browser,
    },
    plugins: {
      js: pluginJs,
      ts: tseslint,
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable the rule
    },
    ignores: ["node_modules/", "dist/", "build/", "public/"],
  },
];