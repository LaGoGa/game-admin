// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "react", "react-hooks", "prettier", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-bind": [
      "warn",
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "prefer-const": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-var": "warn",
    "no-unused-vars": "off",
    "no-duplicate-imports": "warn",
    "no-duplicate-case": "warn",
    "react/display-name": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-extra-boolean-cast": "off",
    "explicit-module-boundary-types": "off",
    "no-mixed-spaces-and-tabs": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        arrowParens: "avoid",
      },
    ],
    "no-trailing-spaces": [
      2,
      {
        skipBlankLines: true,
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },

  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // React
              ["^react", "^@?\\w"],
              // Components
              ["^(@|components)(/.*|$)"],
              // Side effect
              ["^\\u0000"],
              // Parent imports
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Relative imports
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
};