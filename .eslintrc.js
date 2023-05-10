module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-console": 1,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["property"],
        "format": ["camelCase", "UPPER_CASE"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": ["class"],
        "format": ["PascalCase"]
      },
      {
        "selector": ["enum", "enumMember"],
        "format": ["PascalCase"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    '@typescript-eslint/explicit-function-return-type': "error",
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/indent": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "overrides": {
          "constructors": "off",
          "properties": "off",
          "parameterProperties": "explicit"
        }
      }
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {"vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_"}
    ],
    "import/no-relative-parent-imports": "error",
    "indent": "off",
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "no-return-await": "error",
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-cond-assign": ["error", "always"],
    "no-var": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", {"max": 1, "maxEOF": 1}],
    "eol-last": "error",
    "no-alert": "error",
    "no-eval": "error",
    "no-restricted-globals": ["error", "fdescribe", "fit"],
    "no-trailing-spaces": "error",
    "no-unsafe-finally": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "sort-vars": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["class"], next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "never", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
    ],
    "lines-between-class-members": "off",
    "comma-dangle": [
      "warn",
      {
        "arrays": "only-multiline",
        "exports": "only-multiline",
        "functions": "only-multiline",
        "imports": "only-multiline",
        "objects": "only-multiline"
      }
    ],
    quotes: ["error", "single", { "avoidEscape": true }],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true
      }
    ],
    "import/order": [
      1,
      {
        "groups":
            [
              "external",
              "builtin",
              "internal",
              "sibling",
              "parent",
              "index"
            ],
        "pathGroups": [
          {
            "pattern": "components",
            "group": "internal"
          },
          {
            "pattern": "common",
            "group": "internal"
          },
          {
            "pattern": "routes/**",
            "group": "internal"
          },
          {
            "pattern": "assets/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@root/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@config/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@database/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@utils/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@infrastructure/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@domain/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["internal"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },

};
