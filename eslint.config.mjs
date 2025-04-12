import eslintJs from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import-x";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import filename from "eslint-plugin-validate-filename";
import globals from "globals";
import eslintTs from "typescript-eslint";

/**
 * @rules common
 * from 'react', 'eslint-plugin-react-hooks'...
 */
const commonRules = () => ({
  ...reactHooksPlugin.configs.recommended.rules,
  "no-console": 1,
  "prefer-template": 2,
  "func-names": 1,
  "no-bitwise": 2,
  "no-unused-vars": 0,
  "object-shorthand": 1,
  "no-useless-rename": 1,
  "default-case-last": 2,
  "consistent-return": 0,
  "no-constant-condition": 1,
  "default-case": [2, { commentPattern: "^no default$" }],
  "lines-around-directive": [2, { before: "always", after: "always" }],
  "arrow-body-style": [
    2,
    "as-needed",
    { requireReturnForObjectLiteral: false },
  ],
  // react
  "react/jsx-key": 2,
  "react/prop-types": 0,
  "react/display-name": 0,
  "react/no-children-prop": 0,
  "react/jsx-boolean-value": 2,
  "react/self-closing-comp": 2,
  "react/react-in-jsx-scope": 0,
  "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
  "react/jsx-curly-brace-presence": [2, { props: "never", children: "never" }],
  // typescript
  "@typescript-eslint/no-shadow": 0,
  "@typescript-eslint/no-explicit-any": 1,
  "@typescript-eslint/no-empty-object-type": 0,
  "@typescript-eslint/consistent-type-imports": 1,
  "@typescript-eslint/no-unused-vars": [1, { args: "none" }],
  "@typescript-eslint/ban-ts-comment": 1,
});

/**
 * @rules import
 * from 'eslint-plugin-import'.
 */
const importRules = () => ({
  ...importPlugin.configs.recommended.rules,
  "import-x/named": 0,
  "import-x/export": 0,
  "import-x/default": 0,
  "import-x/namespace": 0,
  "import-x/no-default-export": 2,
  "import-x/no-named-as-default": 0,
  "import-x/newline-after-import": 2,
  "import-x/no-named-as-default-member": 0,
  "import-x/no-cycle": [
    0, // disabled if slow
    {
      maxDepth: "∞",
      ignoreExternal: false,
      allowUnsafeDynamicCyclicDependency: false,
    },
  ],
});

/**
 * @rules unused imports
 * from 'eslint-plugin-unused-imports'.
 */
const unusedImportsRules = () => ({
  "unused-imports/no-unused-imports": 2,
  "unused-imports/no-unused-vars": [
    2,
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
    },
  ],
});

const filenameRules = () => ({
  "validate-filename/naming-rules": [
    "error",
    {
      rules: [
        {
          case: "kebab",
          target: "**/**",
        },
      ],
    },
  ],
});

/**
 * Custom ESLint configuration.
 */
export const customConfig = {
  plugins: {
    "react-hooks": reactHooksPlugin,
    "unused-imports": unusedImportsPlugin,
    perfectionist: perfectionistPlugin,
    "import-x": importPlugin,
    "validate-filename": filename,
  },
  settings: {
    "import-x/resolver-next": [
      createTypeScriptImportResolver({
        alwaysTryTypes: true,
        project: "tsconfig.json",
      }),
    ],
  },
  rules: {
    ...commonRules(),
    ...importRules(),
    ...unusedImportsRules(),
    ...filenameRules(),
  },
};

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["*.config.*", "dist/**", "node_modules/**", ".*"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: "detect" } },
  },
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  customConfig,
];
